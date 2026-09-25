/**
 * AURELIA COFFEE — INTERACTIVE ENGINE
 * Tagline: "Slow Mornings. Rich Moments."
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. MENU DATABASE
  // --------------------------------------------------------------------------
  const MENU_DATABASE = [
    // Featured / Milk Coffee
    {
      id: 'sig-latte',
      name: 'Signature Latte',
      category: 'milk',
      price: 6.50,
      badge: 'Signature',
      temp: 'hot',
      image: 'assets/images/signature-latte.jpg',
      desc: 'Velvety microfoam over freshly pulled single-origin espresso with delicate floral and caramel undertones.',
      ingredients: 'Double shot espresso, organic steamed milk, light microfoam',
      dietary: ['Signature', 'Organic'],
      roast: 'Medium-Light (Ethiopia Aramo)'
    },
    {
      id: 'caramel-macchiato',
      name: 'Caramel Macchiato',
      category: 'milk',
      price: 7.00,
      badge: 'Popular',
      temp: 'iced',
      image: 'assets/images/caramel-macchiato.jpg',
      desc: 'Layers of chilled whole milk, Madagascar vanilla, float of espresso and house-crafted salted amber caramel.',
      ingredients: 'Espresso, whole milk, Madagascar bourbon vanilla, artisanal caramel drizzle',
      dietary: ['House Favorite'],
      roast: 'Medium Roast'
    },
    {
      id: 'spanish-latte',
      name: 'Spanish Latte',
      category: 'milk',
      price: 6.75,
      badge: 'House Special',
      temp: 'hot',
      image: 'assets/images/spanish-latte.jpg',
      desc: 'Bold espresso folded with velvety textured milk over sweet condensed milk, finished with Ceylon cinnamon dust.',
      ingredients: 'Espresso, sweetened condensed milk, textured milk, cinnamon bark',
      dietary: ['Vegetarian'],
      roast: 'Dark Roast (Colombia)'
    },
    {
      id: 'cold-brew',
      name: 'Single-Origin Cold Brew',
      category: 'cold',
      price: 6.00,
      badge: '18h Steep',
      temp: 'iced',
      image: 'assets/images/cold-brew.jpg',
      desc: 'Slow-steeped for 18 hours in cold filtered water. Ultra-smooth with notes of ripe stone fruit and dark chocolate.',
      ingredients: 'Ethiopian Yirgacheffe, crystal clear sphere ice',
      dietary: ['Vegan', 'Gluten-Free', 'Zero Sugar'],
      roast: 'Light Roast'
    },
    {
      id: 'cappuccino',
      name: 'Classic Cappuccino',
      category: 'milk',
      price: 5.75,
      badge: 'Traditional',
      temp: 'hot',
      image: 'assets/images/cappuccino.jpg',
      desc: 'The timeless classic. Equal thirds of intense espresso, silky steamed milk, and a cloud of glossy foam dusted with Valrhona cocoa.',
      ingredients: 'Double espresso, thick microfoam, Valrhona 70% cocoa',
      dietary: ['Organic'],
      roast: 'Medium Dark'
    },
    {
      id: 'matcha-latte',
      name: 'Ceremonial Matcha Latte',
      category: 'tea',
      price: 7.25,
      badge: 'Uji First-Harvest',
      temp: 'hot',
      image: 'assets/images/matcha-latte.jpg',
      desc: 'Single-estate ceremonial green tea stone-ground in Kyoto, whisked by hand and paired with creamy oat milk.',
      ingredients: 'Organic Uji Matcha, Oatly Barista oat milk, blossom agave',
      dietary: ['Vegan', 'Antioxidant-Rich'],
      roast: 'Grade A Ceremonial'
    },

    // Additional Espresso Drinks
    {
      id: 'cortado',
      name: 'Aurelia Cortado',
      category: 'espresso',
      price: 5.25,
      badge: '1:1 Ratio',
      temp: 'hot',
      image: 'assets/images/gallery-espresso.jpg',
      desc: 'Double shot of our seasonal espresso cut with an equal volume of silky steamed milk in a Spanish duralex glass.',
      ingredients: 'Equal parts espresso and warm microfoam',
      dietary: ['Minimalist'],
      roast: 'Ethiopian Aramo'
    },
    {
      id: 'double-espresso',
      name: 'Reserve Double Espresso',
      category: 'espresso',
      price: 4.50,
      badge: 'Single Origin',
      temp: 'hot',
      image: 'assets/images/gallery-espresso.jpg',
      desc: 'Extracted with 9-bar precision. Thick golden crema with bright bergamot aroma and long cocoa finish.',
      ingredients: 'Pure 18g dose single-origin espresso',
      dietary: ['Vegan', 'Zero Calorie'],
      roast: 'Guatemala Huehuetenango'
    },
    {
      id: 'affogato',
      name: 'Bourbon Vanilla Affogato',
      category: 'dessert',
      price: 6.95,
      badge: 'Signature',
      temp: 'both',
      image: 'assets/images/moment-evening.jpg',
      desc: 'Two scoops of handcrafted Madagascar vanilla bean gelato drenched with a hot freshly pulled espresso double shot.',
      ingredients: 'Vanilla bean gelato, double espresso, chocolate crisp',
      dietary: ['Vegetarian'],
      roast: 'Dark Roast'
    },

    // Cold Category
    {
      id: 'espresso-tonic',
      name: 'Yuzu Espresso Tonic',
      category: 'cold',
      price: 6.85,
      badge: 'Refreshing',
      temp: 'iced',
      image: 'assets/images/cold-brew.jpg',
      desc: 'Fever-Tree Mediterranean tonic poured over clear ice, crowned with espresso float and freshly pressed Japanese yuzu peel.',
      ingredients: 'Botanical tonic, chilled espresso, yuzu essence, fresh rosemary',
      dietary: ['Vegan', 'Low Calorie'],
      roast: 'Light Roast'
    },
    {
      id: 'iced-flat-white',
      name: 'Iced Velvet Flat White',
      category: 'cold',
      price: 6.25,
      badge: 'Smooth',
      temp: 'iced',
      image: 'assets/images/signature-latte.jpg',
      desc: 'Ristretto espresso poured slowly over cold organic whole milk and compact ice, keeping body remarkably dense and sweet.',
      ingredients: 'Double ristretto shot, cold textured milk',
      dietary: ['Organic'],
      roast: 'Medium Roast'
    },

    // Tea & Botanicals
    {
      id: 'hojicha-latte',
      name: 'Kyoto Hojicha Latte',
      category: 'tea',
      price: 7.00,
      badge: 'Low Caffeine',
      temp: 'hot',
      image: 'assets/images/matcha-latte.jpg',
      desc: 'Roasted Japanese green tea with comforting nutty, smoky wood notes and natural sweet caramel nuance.',
      ingredients: 'Roasted green tea powder, oat milk, touch of raw demerara',
      dietary: ['Vegan', 'Low Caffeine'],
      roast: 'Kyoto Roasted'
    },
    {
      id: 'earl-grey-lavender',
      name: 'Lavender London Fog',
      category: 'tea',
      price: 6.50,
      badge: 'Floral',
      temp: 'hot',
      image: 'assets/images/matcha-latte.jpg',
      desc: 'Bergamot-scented organic black tea steeped in steamed vanilla oat milk with subtle Provençal lavender blossom aroma.',
      ingredients: 'Earl Grey tea, French lavender, vanilla syrup, oat foam',
      dietary: ['Vegan', 'Aromatic'],
      roast: 'Nilgiri Single Estate'
    },

    // Bakery
    {
      id: 'almond-croissant',
      name: 'Artisan Almond Croissant',
      category: 'bakery',
      price: 5.50,
      badge: 'Fresh Daily',
      temp: 'hot',
      image: 'assets/images/moment-morning.jpg',
      desc: 'Twice-baked butter croissant filled with fragrant frangipane almond cream and crowned with toasted flaked almonds.',
      ingredients: 'Normandy butter, French flour, frangipane cream, sliced almonds',
      dietary: ['Vegetarian'],
      roast: 'Baked at 7:00 AM'
    },
    {
      id: 'cardamom-bun',
      name: 'Nordic Cardamom Bun',
      category: 'bakery',
      price: 5.25,
      badge: 'House Baked',
      temp: 'hot',
      image: 'assets/images/moment-morning.jpg',
      desc: 'Traditional Scandinavian braided brioche enriched with crushed cardamom seeds and pearl sugar crunch.',
      ingredients: 'Organic unbleached flour, crushed cardamom, butter, pearl sugar',
      dietary: ['Vegetarian'],
      roast: 'Fresh Batch'
    },
    {
      id: 'pain-au-chocolat',
      name: 'Valrhona Pain au Chocolat',
      category: 'bakery',
      price: 5.40,
      badge: 'French Butter',
      temp: 'hot',
      image: 'assets/images/moment-morning.jpg',
      desc: 'Flaky 72-layer laminated pastry wrapped around two batons of intense 64% Valrhona dark chocolate.',
      ingredients: 'Laminated dough, pure butter, Valrhona dark chocolate',
      dietary: ['Vegetarian'],
      roast: 'Baked Daily'
    },

    // Desserts
    {
      id: 'espresso-tiramisu',
      name: 'Aurelia Classic Tiramisu',
      category: 'dessert',
      price: 8.50,
      badge: 'House Favorite',
      temp: 'iced',
      image: 'assets/images/moment-evening.jpg',
      desc: 'Handmade ladyfingers soaked in our Ethiopian Aramo espresso, layered with whipped Italian mascarpone and dark cocoa.',
      ingredients: 'Mascarpone, savoiardi ladyfingers, espresso, Marsala, cocoa',
      dietary: ['Vegetarian'],
      roast: 'Espresso Soaked'
    },
    {
      id: 'burnt-cheesecake',
      name: 'San Sebastián Basque Cheesecake',
      category: 'dessert',
      price: 7.75,
      badge: 'Creamy Center',
      temp: 'iced',
      image: 'assets/images/moment-evening.jpg',
      desc: 'Caramelized deeply on the exterior while remaining lush, molten and silky at the center. Served with flaky Maldon salt.',
      ingredients: 'Philadelphia cream cheese, heavy cream, organic vanilla, sea salt',
      dietary: ['Gluten-Free', 'Vegetarian'],
      roast: 'House Recipe'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. STATE INITIALIZATION (CART & FAVORITES)
  // --------------------------------------------------------------------------
  let cart = [];
  try {
    const savedCart = localStorage.getItem('aurelia_cart');
    if (savedCart) cart = JSON.parse(savedCart);
  } catch (e) {
    cart = [];
  }

  let favorites = new Set();
  try {
    const savedFavs = localStorage.getItem('aurelia_favorites');
    if (savedFavs) favorites = new Set(JSON.parse(savedFavs));
  } catch (e) {
    favorites = new Set(['sig-latte', 'cold-brew']);
  }

  // Active customizer state
  let currentCustomizingItem = null;
  let customizerFormState = {
    size: 'Regular (12 oz)',
    sizeExtra: 0.50,
    temp: 'hot',
    milk: 'Whole Organic Milk',
    milkExtra: 0.00,
    syrup: 'None',
    syrupExtra: 0.00,
    extraShot: false,
    notes: '',
    quantity: 1
  };

  // --------------------------------------------------------------------------
  // 3. UI ELEMENT REFERENCES
  // --------------------------------------------------------------------------
  const preloader = document.getElementById('preloader');
  const siteHeader = document.getElementById('siteHeader');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastContainer = document.getElementById('toastContainer');

  // Nav badges
  const navCartCount = document.getElementById('navCartCount');
  const navFavCount = document.getElementById('navFavCount');

  // Modals & Panels
  const customizeModal = document.getElementById('customizeModal');
  const closeCustomizeBtn = document.getElementById('closeCustomizeBtn');
  const cartPanelBackdrop = document.getElementById('cartPanelBackdrop');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const openCartBtn = document.getElementById('openCartBtn');
  const favoritesModal = document.getElementById('favoritesModal');
  const closeFavBtn = document.getElementById('closeFavBtn');
  const openFavBtn = document.getElementById('openFavBtn');
  const searchModal = document.getElementById('searchModal');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const openSearchBtn = document.getElementById('openSearchBtn');
  const checkoutConfirmationModal = document.getElementById('checkoutConfirmationModal');
  const closeCheckoutConfirmBtn = document.getElementById('closeCheckoutConfirmBtn');

  // Ambient Sound Toggle
  const ambientAudioToggle = document.getElementById('ambientAudioToggle');
  let audioContext = null;
  let isAmbientPlaying = false;
  let ambientNoiseNode = null;
  let ambientGainNode = null;

  // --------------------------------------------------------------------------
  // 4. PRELOADER & SCROLL EVENTS
  // --------------------------------------------------------------------------
  setTimeout(() => {
    if (preloader) {
      preloader.classList.add('fade-out');
    }
  }, 650);

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header sticky blur effect
    if (scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Scrollspy for nav links
    const sections = document.querySelectorAll('section[id]');
    let currentActive = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentActive = sec.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentActive}`) {
        link.classList.add('active');
      }
    });
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu toggle
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    mobileNavDrawer.classList.toggle('open');
    document.body.style.overflow = mobileNavDrawer.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('open');
      mobileNavDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // --------------------------------------------------------------------------
  // 5. TOAST NOTIFICATION GENERATOR
  // --------------------------------------------------------------------------
  function showToast(message, iconSvg = null) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    const defaultIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`;
    toast.innerHTML = `<span>${iconSvg || defaultIcon}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // 6. SYNTHETIC AMBIENT SOUND (COZY COFFEE HOUSE SOUNDSCAPE)
  // --------------------------------------------------------------------------
  function toggleAmbientSound() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioCtx();
    }

    if (isAmbientPlaying) {
      // Fade out
      if (ambientGainNode) {
        ambientGainNode.gain.linearRampToValueAtTime(0.001, audioContext.currentTime + 0.6);
        setTimeout(() => {
          if (ambientNoiseNode) ambientNoiseNode.stop();
          isAmbientPlaying = false;
          ambientAudioToggle.classList.remove('active');
          showToast('Café ambiance muted');
        }, 600);
      }
    } else {
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      // Generate relaxing warm vinyl/coffee shop crackle & low murmur
      const bufferSize = audioContext.sampleRate * 2;
      const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Warm pink filter
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        let pink = b0 + b1 + b2 + white * 0.05;
        // Add occasional vinyl coffee dust tick
        if (Math.random() < 0.0012) {
          pink += (Math.random() - 0.5) * 1.5;
        }
        output[i] = pink * 0.08;
      }

      ambientNoiseNode = audioContext.createBufferSource();
      ambientNoiseNode.buffer = noiseBuffer;
      ambientNoiseNode.loop = true;

      // Low pass filter for soothing warm room acoustic
      const filter = audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 850;

      ambientGainNode = audioContext.createGain();
      ambientGainNode.gain.setValueAtTime(0.001, audioContext.currentTime);
      ambientGainNode.gain.linearRampToValueAtTime(0.18, audioContext.currentTime + 1.2);

      ambientNoiseNode.connect(filter);
      filter.connect(ambientGainNode);
      ambientGainNode.connect(audioContext.destination);

      ambientNoiseNode.start();
      isAmbientPlaying = true;
      ambientAudioToggle.classList.add('active');
      showToast('Cozy Café Soundscape active ☕', `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`);
    }
  }

  ambientAudioToggle.addEventListener('click', toggleAmbientSound);

  // --------------------------------------------------------------------------
  // 7. MENU RENDERING & CATEGORY SWITCHING
  // --------------------------------------------------------------------------
  const menuItemsContainer = document.getElementById('menuItemsContainer');
  const menuTabs = document.querySelectorAll('.menu-tab-btn');

  function renderMenu(category = 'espresso') {
    if (!menuItemsContainer) return;

    const filtered = MENU_DATABASE.filter(item => item.category === category);
    menuItemsContainer.innerHTML = '';

    filtered.forEach(item => {
      const isFav = favorites.has(item.id);
      const row = document.createElement('div');
      row.className = 'menu-item-row';
      row.innerHTML = `
        <div class="menu-item-details">
          <div class="menu-item-head">
            <h4 class="menu-item-name">${item.name}</h4>
            ${item.badge ? `<span class="menu-diet-badge ${item.badge.toLowerCase().includes('signature') ? 'signature' : ''}">${item.badge}</span>` : ''}
          </div>
          <p class="menu-item-ingredients">${item.ingredients}</p>
        </div>
        <div class="menu-item-right">
          <span class="menu-item-price">$${item.price.toFixed(2)}</span>
          <button class="btn-menu-add" data-id="${item.id}" title="Customize & Add">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      `;
      menuItemsContainer.appendChild(row);
    });

    // Reattach listeners to menu add buttons
    menuItemsContainer.querySelectorAll('.btn-menu-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openCustomizer(id);
      });
    });
  }

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');
      renderMenu(cat);
    });
  });

  // Default initial category
  renderMenu('espresso');

  // --------------------------------------------------------------------------
  // 8. FAVORITES MANAGEMENT
  // --------------------------------------------------------------------------
  function updateFavoritesUI() {
    if (navFavCount) {
      navFavCount.textContent = favorites.size;
      navFavCount.classList.remove('badge-bump');
      void navFavCount.offsetWidth;
      navFavCount.classList.add('badge-bump');
    }

    // Update heart icons on cards
    document.querySelectorAll('.card-favorite-btn').forEach(btn => {
      const id = btn.getAttribute('data-id');
      if (favorites.has(id)) {
        btn.classList.add('favorited');
      } else {
        btn.classList.remove('favorited');
      }
    });

    try {
      localStorage.setItem('aurelia_favorites', JSON.stringify(Array.from(favorites)));
    } catch (e) {}

    renderFavoritesList();
  }

  function toggleFavorite(id) {
    const item = MENU_DATABASE.find(i => i.id === id);
    if (!item) return;

    if (favorites.has(id)) {
      favorites.delete(id);
      showToast(`Removed ${item.name} from favorites`);
    } else {
      favorites.add(id);
      showToast(`Added ${item.name} to favorites ❤️`, `<svg width="18" height="18" viewBox="0 0 24 24" fill="#b8623b" stroke="#b8623b" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`);
    }
    updateFavoritesUI();
  }

  // Hook product card favorite buttons
  document.querySelectorAll('.card-favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      toggleFavorite(id);
    });
  });

  // Hook product card "Add" buttons
  document.querySelectorAll('.product-card .btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      openCustomizer(id);
    });
  });

  // --------------------------------------------------------------------------
  // 9. ORDER CUSTOMIZER (MODAL / BOTTOM SHEET)
  // --------------------------------------------------------------------------
  function openCustomizer(itemId) {
    const item = MENU_DATABASE.find(i => i.id === itemId);
    if (!item) return;

    currentCustomizingItem = item;
    customizerFormState = {
      size: 'Regular (12 oz)',
      sizeExtra: 0.50,
      temp: item.temp === 'both' ? 'hot' : item.temp,
      milk: 'Whole Organic Milk',
      milkExtra: 0.00,
      syrup: 'None',
      syrupExtra: 0.00,
      extraShot: false,
      notes: '',
      quantity: 1
    };

    // Populate modal elements
    document.getElementById('modalItemImg').src = item.image;
    document.getElementById('modalItemImg').alt = item.name;
    document.getElementById('modalItemTitle').textContent = item.name;
    document.getElementById('modalItemDesc').textContent = item.desc;
    document.getElementById('modalQtyVal').textContent = '1';
    document.getElementById('modalItemNotes').value = '';

    // Temperature pills toggle
    const tempPillHot = document.getElementById('tempPillHot');
    const tempPillIced = document.getElementById('tempPillIced');
    if (tempPillHot && tempPillIced) {
      tempPillHot.classList.toggle('active', customizerFormState.temp === 'hot');
      tempPillIced.classList.toggle('active', customizerFormState.temp === 'iced');
    }

    // Reset pills
    resetModalPills();
    calculateModalPrice();

    customizeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function resetModalPills() {
    // Size pills
    document.querySelectorAll('.pill-size').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-size') === customizerFormState.size);
    });

    // Milk pills
    document.querySelectorAll('.pill-milk').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-milk') === customizerFormState.milk);
    });

    // Syrup pills
    document.querySelectorAll('.pill-syrup').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-syrup') === customizerFormState.syrup);
    });

    // Extra shot pill
    const extraShotBtn = document.getElementById('pillExtraShot');
    if (extraShotBtn) {
      extraShotBtn.classList.toggle('active', customizerFormState.extraShot);
    }
  }

  function calculateModalPrice() {
    if (!currentCustomizingItem) return 0;
    const base = currentCustomizingItem.price;
    const unitPrice = base + customizerFormState.sizeExtra + customizerFormState.milkExtra + customizerFormState.syrupExtra + (customizerFormState.extraShot ? 1.25 : 0);
    const totalPrice = unitPrice * customizerFormState.quantity;

    const priceEl = document.getElementById('modalItemPrice');
    const orderBtnText = document.getElementById('modalSubmitBtnText');
    if (priceEl) priceEl.textContent = `$${unitPrice.toFixed(2)}`;
    if (orderBtnText) orderBtnText.textContent = `Add to Order • $${totalPrice.toFixed(2)}`;

    return totalPrice;
  }

  function closeCustomizer() {
    customizeModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeCustomizeBtn) closeCustomizeBtn.addEventListener('click', closeCustomizer);
  customizeModal.addEventListener('click', (e) => {
    if (e.target === customizeModal) closeCustomizer();
  });

  // Temperature selection
  const tempPillHot = document.getElementById('tempPillHot');
  const tempPillIced = document.getElementById('tempPillIced');
  if (tempPillHot) {
    tempPillHot.addEventListener('click', () => {
      customizerFormState.temp = 'hot';
      tempPillHot.classList.add('active');
      tempPillIced.classList.remove('active');
    });
  }
  if (tempPillIced) {
    tempPillIced.addEventListener('click', () => {
      customizerFormState.temp = 'iced';
      tempPillIced.classList.add('active');
      tempPillHot.classList.remove('active');
    });
  }

  // Size pills
  document.querySelectorAll('.pill-size').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-size').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      customizerFormState.size = btn.getAttribute('data-size');
      customizerFormState.sizeExtra = parseFloat(btn.getAttribute('data-extra') || 0);
      calculateModalPrice();
    });
  });

  // Milk pills
  document.querySelectorAll('.pill-milk').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-milk').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      customizerFormState.milk = btn.getAttribute('data-milk');
      customizerFormState.milkExtra = parseFloat(btn.getAttribute('data-extra') || 0);
      calculateModalPrice();
    });
  });

  // Syrup pills
  document.querySelectorAll('.pill-syrup').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-syrup').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      customizerFormState.syrup = btn.getAttribute('data-syrup');
      customizerFormState.syrupExtra = parseFloat(btn.getAttribute('data-extra') || 0);
      calculateModalPrice();
    });
  });

  // Extra shot
  const extraShotBtn = document.getElementById('pillExtraShot');
  if (extraShotBtn) {
    extraShotBtn.addEventListener('click', () => {
      customizerFormState.extraShot = !customizerFormState.extraShot;
      extraShotBtn.classList.toggle('active', customizerFormState.extraShot);
      calculateModalPrice();
    });
  }

  // Stepper
  const qtyMinusBtn = document.getElementById('modalQtyMinus');
  const qtyPlusBtn = document.getElementById('modalQtyPlus');
  const qtyVal = document.getElementById('modalQtyVal');

  if (qtyMinusBtn) {
    qtyMinusBtn.addEventListener('click', () => {
      if (customizerFormState.quantity > 1) {
        customizerFormState.quantity--;
        qtyVal.textContent = customizerFormState.quantity;
        calculateModalPrice();
      }
    });
  }

  if (qtyPlusBtn) {
    qtyPlusBtn.addEventListener('click', () => {
      if (customizerFormState.quantity < 20) {
        customizerFormState.quantity++;
        qtyVal.textContent = customizerFormState.quantity;
        calculateModalPrice();
      }
    });
  }

  // Add to order submit
  const modalSubmitBtn = document.getElementById('modalSubmitBtn');
  if (modalSubmitBtn) {
    modalSubmitBtn.addEventListener('click', () => {
      if (!currentCustomizingItem) return;

      const unitPrice = currentCustomizingItem.price + customizerFormState.sizeExtra + customizerFormState.milkExtra + customizerFormState.syrupExtra + (customizerFormState.extraShot ? 1.25 : 0);
      const notes = document.getElementById('modalItemNotes').value.trim();

      const orderItem = {
        uniqueId: Date.now() + Math.random().toString(36).substring(2, 7),
        id: currentCustomizingItem.id,
        name: currentCustomizingItem.name,
        image: currentCustomizingItem.image,
        unitPrice: unitPrice,
        size: customizerFormState.size,
        temp: customizerFormState.temp,
        milk: customizerFormState.milk,
        syrup: customizerFormState.syrup,
        extraShot: customizerFormState.extraShot,
        notes: notes,
        quantity: customizerFormState.quantity
      };

      cart.push(orderItem);
      saveCartAndRefresh();
      closeCustomizer();

      showToast(`Added ${orderItem.quantity}x ${orderItem.name} to Cart`, `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`);

      // Open cart drawer smoothly to show item added
      openCartDrawer();
    });
  }

  // --------------------------------------------------------------------------
  // 10. CART SLIDE-OVER DRAWER & CHECKOUT
  // --------------------------------------------------------------------------
  function saveCartAndRefresh() {
    try {
      localStorage.setItem('aurelia_cart', JSON.stringify(cart));
    } catch (e) {}

    updateCartUI();
  }

  function updateCartUI() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (navCartCount) {
      navCartCount.textContent = totalCount;
      navCartCount.classList.remove('badge-bump');
      void navCartCount.offsetWidth;
      navCartCount.classList.add('badge-bump');
    }

    const cartDrawerCount = document.getElementById('cartDrawerCount');
    if (cartDrawerCount) cartDrawerCount.textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'items'}`;

    renderCartItems();
  }

  function renderCartItems() {
    const cartList = document.getElementById('cartItemsList');
    const cartFooter = document.getElementById('cartFooter');
    if (!cartList) return;

    if (cart.length === 0) {
      cartList.innerHTML = `
        <div class="cart-empty-view">
          <div class="cart-empty-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </div>
          <h4 class="cart-empty-title">Your ritual awaits</h4>
          <p class="cart-empty-desc">Your order bag is currently empty. Explore our coffee menu to craft your first brew.</p>
          <button class="btn-primary" id="btnEmptyExplore" style="padding: 0.75rem 1.6rem; font-size: 0.8rem;">Explore Menu</button>
        </div>
      `;
      if (cartFooter) cartFooter.style.display = 'none';

      const exploreBtn = document.getElementById('btnEmptyExplore');
      if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
          closeCartDrawer();
          document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        });
      }
      return;
    }

    if (cartFooter) cartFooter.style.display = 'block';
    cartList.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
      const itemTotal = item.unitPrice * item.quantity;
      subtotal += itemTotal;

      const customsDetails = [
        item.temp ? item.temp.toUpperCase() : '',
        item.size,
        item.milk !== 'Whole Organic Milk' ? item.milk : '',
        item.syrup !== 'None' ? item.syrup : '',
        item.extraShot ? '+ Extra Shot' : ''
      ].filter(Boolean).join(' • ');

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h5 class="cart-item-name">${item.name}</h5>
          <p class="cart-item-customs">${customsDetails}</p>
          <div class="cart-item-bottom">
            <span class="cart-item-price">$${itemTotal.toFixed(2)}</span>
            <div class="cart-item-qty">
              <button class="cart-qty-btn cart-dec-btn" data-uid="${item.uniqueId}">−</button>
              <span style="font-family: var(--font-mono); font-size: 0.82rem; min-width: 18px; text-align: center;">${item.quantity}</span>
              <button class="cart-qty-btn cart-inc-btn" data-uid="${item.uniqueId}">+</button>
            </div>
          </div>
        </div>
      `;
      cartList.appendChild(row);
    });

    const tax = subtotal * 0.0825;
    const finalTotal = subtotal + tax;

    const subtotalEl = document.getElementById('cartSubtotalVal');
    const taxEl = document.getElementById('cartTaxVal');
    const totalEl = document.getElementById('cartFinalTotalVal');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;

    // Quantity modifiers
    cartList.querySelectorAll('.cart-dec-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = btn.getAttribute('data-uid');
        const idx = cart.findIndex(i => i.uniqueId === uid);
        if (idx !== -1) {
          if (cart[idx].quantity > 1) {
            cart[idx].quantity--;
          } else {
            cart.splice(idx, 1);
          }
          saveCartAndRefresh();
        }
      });
    });

    cartList.querySelectorAll('.cart-inc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = btn.getAttribute('data-uid');
        const found = cart.find(i => i.uniqueId === uid);
        if (found) {
          found.quantity++;
          saveCartAndRefresh();
        }
      });
    });
  }

  function openCartDrawer() {
    cartPanelBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartPanelBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  cartPanelBackdrop.addEventListener('click', (e) => {
    if (e.target === cartPanelBackdrop) closeCartDrawer();
  });

  // Quick order CTA in Nav
  const navOrderBtn = document.getElementById('navOrderBtn');
  if (navOrderBtn) {
    navOrderBtn.addEventListener('click', () => {
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Checkout process simulation
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
  if (proceedCheckoutBtn) {
    proceedCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;

      closeCartDrawer();

      // Generate order number
      const orderNum = 'AUR-' + Math.floor(1000 + Math.random() * 9000);
      document.getElementById('ticketOrderNum').textContent = orderNum;
      document.getElementById('ticketItemCount').textContent = `${cart.length} distinct item(s)`;
      const totalAmount = cart.reduce((acc, i) => acc + (i.unitPrice * i.quantity), 0) * 1.0825;
      document.getElementById('ticketTotalVal').textContent = `$${totalAmount.toFixed(2)}`;

      checkoutConfirmationModal.classList.add('open');
      document.body.style.overflow = 'hidden';

      // Clear cart
      cart = [];
      saveCartAndRefresh();
    });
  }

  if (closeCheckoutConfirmBtn) {
    closeCheckoutConfirmBtn.addEventListener('click', () => {
      checkoutConfirmationModal.classList.remove('open');
      document.body.style.overflow = '';
      showToast('Thank you! Your order is being freshly prepared.');
    });
  }

  // --------------------------------------------------------------------------
  // 11. FAVORITES DRAWER RENDERING
  // --------------------------------------------------------------------------
  function renderFavoritesList() {
    const favList = document.getElementById('favItemsList');
    if (!favList) return;

    if (favorites.size === 0) {
      favList.innerHTML = `
        <div class="cart-empty-view">
          <div class="cart-empty-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <h4 class="cart-empty-title">No saved rituals yet</h4>
          <p class="cart-empty-desc">Click the heart icon on any coffee or delicacy to save it to your ritual journal.</p>
        </div>
      `;
      return;
    }

    favList.innerHTML = '';
    favorites.forEach(id => {
      const item = MENU_DATABASE.find(i => i.id === id);
      if (!item) return;

      const card = document.createElement('div');
      card.className = 'cart-item';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h5 class="cart-item-name">${item.name}</h5>
          <p class="cart-item-customs">${item.desc}</p>
          <div class="cart-item-bottom">
            <span class="cart-item-price">$${item.price.toFixed(2)}</span>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn-primary btn-quick-order-fav" data-id="${item.id}" style="padding: 0.4rem 0.9rem; font-size: 0.72rem;">Order</button>
              <button class="cart-remove-btn btn-remove-fav" data-id="${item.id}" title="Remove">Remove</button>
            </div>
          </div>
        </div>
      `;
      favList.appendChild(card);
    });

    favList.querySelectorAll('.btn-quick-order-fav').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        closeFavoritesDrawer();
        openCustomizer(id);
      });
    });

    favList.querySelectorAll('.btn-remove-fav').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        toggleFavorite(id);
      });
    });
  }

  function openFavoritesDrawer() {
    favoritesModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderFavoritesList();
  }

  function closeFavoritesDrawer() {
    favoritesModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openFavBtn) openFavBtn.addEventListener('click', openFavoritesDrawer);
  if (closeFavBtn) closeFavBtn.addEventListener('click', closeFavoritesDrawer);
  favoritesModal.addEventListener('click', (e) => {
    if (e.target === favoritesModal) closeFavoritesDrawer();
  });

  // --------------------------------------------------------------------------
  // 12. SEARCH SYSTEM
  // --------------------------------------------------------------------------
  const searchInput = document.getElementById('searchBarInput');
  const searchResultsList = document.getElementById('searchResultsList');

  function openSearchDialog() {
    searchModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.value = '';
      setTimeout(() => searchInput.focus(), 150);
      performSearch('');
    }
  }

  function closeSearchDialog() {
    searchModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function performSearch(query) {
    if (!searchResultsList) return;
    const q = query.trim().toLowerCase();

    let matches = MENU_DATABASE;
    if (q) {
      matches = MENU_DATABASE.filter(item => {
        return item.name.toLowerCase().includes(q) ||
               item.desc.toLowerCase().includes(q) ||
               item.ingredients.toLowerCase().includes(q) ||
               item.category.toLowerCase().includes(q) ||
               (item.badge && item.badge.toLowerCase().includes(q));
      });
    }

    if (matches.length === 0) {
      searchResultsList.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--c-text-muted); font-size: 0.88rem;">No drinks or roasts matching "${query}".</div>`;
      return;
    }

    searchResultsList.innerHTML = '';
    matches.forEach(item => {
      const el = document.createElement('div');
      el.className = 'search-res-item';
      el.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="search-res-img">
        <div style="flex-grow: 1;">
          <div class="search-res-name">${item.name}</div>
          <div style="font-size: 0.74rem; color: var(--c-text-muted);">${item.ingredients}</div>
        </div>
        <span class="search-res-price">$${item.price.toFixed(2)}</span>
      `;
      el.addEventListener('click', () => {
        closeSearchDialog();
        openCustomizer(item.id);
      });
      searchResultsList.appendChild(el);
    });
  }

  if (openSearchBtn) openSearchBtn.addEventListener('click', openSearchDialog);
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearchDialog);
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearchDialog();
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }

  // Quick tag chips in search
  document.querySelectorAll('.search-tag-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.getAttribute('data-tag');
      if (searchInput) {
        searchInput.value = tag;
        performSearch(tag);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 13. NEWSLETTER & DIRECTIONS
  // --------------------------------------------------------------------------
  const newsletterBtn = document.getElementById('newsletterSubmitBtn');
  const newsletterInput = document.getElementById('newsletterEmailInput');
  if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = newsletterInput.value.trim();
      if (email && email.includes('@')) {
        showToast('Welcome to the Aurelia Coffee Gazette! ☕');
        newsletterInput.value = '';
      } else {
        showToast('Please enter a valid email address.');
      }
    });
  }

  const btnGetDirections = document.getElementById('btnGetDirections');
  if (btnGetDirections) {
    btnGetDirections.addEventListener('click', () => {
      window.open('https://maps.google.com/?q=Ahmedabad+Specialty+Coffee', '_blank');
    });
  }

  // Initialize UI counts
  updateCartUI();
  updateFavoritesUI();
});
