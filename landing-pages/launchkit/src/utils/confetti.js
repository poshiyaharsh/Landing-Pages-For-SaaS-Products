import confetti from 'canvas-confetti';

export function fireLaunchCelebration() {
  try {
    const count = 180;
    const defaults = {
      origin: { y: 0.65 },
      disableForReducedMotion: true
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        colors: ['#8B5CF6', '#EC4899', '#3B82F6', '#F97316', '#06B6D4', '#FACC15']
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  } catch (e) {
    // Graceful fallback
  }
}

export function fireMiniBurst(x = 0.5, y = 0.5) {
  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#EC4899', '#F97316', '#8B5CF6'],
      disableForReducedMotion: true
    });
  } catch (e) {
    // Graceful fallback
  }
}
