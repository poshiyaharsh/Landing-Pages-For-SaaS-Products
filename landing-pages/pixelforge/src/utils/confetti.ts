import confetti from 'canvas-confetti';

export const triggerCreativeBurst = () => {
  // Electric violet, neon cyan, hot pink burst
  confetti({
    particleCount: 55,
    spread: 65,
    origin: { y: 0.6 },
    colors: ['#8B5CF6', '#06B6D4', '#F43F5E', '#A78BFA', '#22D3EE', '#FFFFFF'],
    shapes: ['square', 'circle'],
    ticks: 200,
    scalar: 0.95,
    disableForReducedMotion: true
  });
};
