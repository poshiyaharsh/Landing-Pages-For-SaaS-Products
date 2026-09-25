import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { CoffeeItem, CartItem, OrderTicket } from '../types/coffee';
import confetti from 'canvas-confetti';

interface ToastMessage {
  id: string;
  message: string;
  icon?: string;
}

interface CoffeeContextType {
  cart: CartItem[];
  favorites: Set<string>;
  toasts: ToastMessage[];
  isAmbientPlaying: boolean;
  isCartOpen: boolean;
  isFavOpen: boolean;
  isSearchOpen: boolean;
  isCustomizing: boolean;
  selectedItemForCustomizing: CoffeeItem | null;
  checkoutTicket: OrderTicket | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (uniqueId: string) => void;
  updateCartQuantity: (uniqueId: string, delta: number) => void;
  clearCart: () => void;
  toggleFavorite: (id: string) => void;
  showToast: (msg: string, icon?: string) => void;
  toggleAmbientAudio: () => void;
  openCustomizer: (item: CoffeeItem) => void;
  closeCustomizer: () => void;
  setIsCartOpen: (open: boolean) => void;
  setIsFavOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  setCheckoutTicket: (ticket: OrderTicket | null) => void;
  triggerConfetti: () => void;
}

const CoffeeContext = createContext<CoffeeContextType | undefined>(undefined);

export const CoffeeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Cart State
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aurelia_react_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Favorites State
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('aurelia_react_favs');
      return saved ? new Set(JSON.parse(saved)) : new Set(['sig-latte', 'cold-brew']);
    } catch {
      return new Set(['sig-latte', 'cold-brew']);
    }
  });

  // UI Panels
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [selectedItemForCustomizing, setSelectedItemForCustomizing] = useState<CoffeeItem | null>(null);
  const [checkoutTicket, setCheckoutTicket] = useState<OrderTicket | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Ambient Audio
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('aurelia_react_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Sync favorites to local storage
  useEffect(() => {
    try {
      localStorage.setItem('aurelia_react_favs', JSON.stringify(Array.from(favorites)));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const showToast = (message: string, icon?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, icon }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const addToCart = (newItem: CartItem) => {
    setCart((prev) => [...prev, newItem]);
    showToast(`Added ${newItem.quantity}x ${newItem.name} to order bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (uniqueId: string) => {
    setCart((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
  };

  const updateCartQuantity = (uniqueId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.uniqueId === uniqueId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast('Removed from saved rituals');
      } else {
        next.add(id);
        showToast('Added to saved rituals ❤️');
      }
      return next;
    });
  };

  const openCustomizer = (item: CoffeeItem) => {
    setSelectedItemForCustomizing(item);
    setIsCustomizing(true);
  };

  const closeCustomizer = () => {
    setIsCustomizing(false);
    setSelectedItemForCustomizing(null);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#A35C2E', '#C5A059', '#16100C', '#FAF6F0']
    });
  };

  const toggleAmbientAudio = () => {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;

    if (isAmbientPlaying) {
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
        setTimeout(() => {
          if (noiseSourceRef.current) {
            try {
              noiseSourceRef.current.stop();
            } catch {}
          }
          setIsAmbientPlaying(false);
          showToast('Café ambiance muted');
        }, 500);
      }
    } else {
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555;
        b1 = 0.99332 * b1 + white * 0.0750;
        b2 = 0.96900 * b2 + white * 0.1538;
        let pink = b0 + b1 + b2 + white * 0.05;
        if (Math.random() < 0.0012) {
          pink += (Math.random() - 0.5) * 1.5;
        }
        output[i] = pink * 0.07;
      }

      const source = ctx.createBufferSource();
      source.buffer = noiseBuffer;
      source.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 800;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 1.0);

      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      source.start();

      noiseSourceRef.current = source;
      gainNodeRef.current = gain;
      setIsAmbientPlaying(true);
      showToast('Cozy Café Soundscape playing ☕');
    }
  };

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        favorites,
        toasts,
        isAmbientPlaying,
        isCartOpen,
        isFavOpen,
        isSearchOpen,
        isCustomizing,
        selectedItemForCustomizing,
        checkoutTicket,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleFavorite,
        showToast,
        toggleAmbientAudio,
        openCustomizer,
        closeCustomizer,
        setIsCartOpen,
        setIsFavOpen,
        setIsSearchOpen,
        setCheckoutTicket,
        triggerConfetti
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffee = () => {
  const context = useContext(CoffeeContext);
  if (!context) {
    throw new Error('useCoffee must be used within a CoffeeProvider');
  }
  return context;
};
