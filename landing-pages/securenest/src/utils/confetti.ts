import confetti from 'canvas-confetti';

export const triggerSecurityCelebration = () => {
  // Emerald and cyan cyber particle burst
  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#10B981', '#06B6D4', '#34D399', '#38BDF8', '#FFFFFF'],
    shapes: ['square', 'circle'],
    ticks: 200,
    scalar: 0.9,
    disableForReducedMotion: true
  });
};
