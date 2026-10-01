import confetti from 'canvas-confetti';

export function fireConfetti(originX = 0.5, originY = 0.5) {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x: originX, y: originY },
      colors: ['#6366F1', '#EC4899', '#38BDF8', '#10B981', '#F59E0B'],
      disableForReducedMotion: true
    });
  } catch (e) {
    // fallback gracefully
  }
}

export function fireFormlyCelebration() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    disableForReducedMotion: true
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors: ['#6366F1', '#8B5CF6', '#EC4899', '#06B6D4', '#10B981', '#FBBF24']
    });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}
