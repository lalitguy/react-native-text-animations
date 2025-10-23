import type { BounceType } from '../types/animations';

export const getSpringConfig = (bounceFactor: number) => {
  // Clamp bounceFactor to avoid unrealistic behavior
  const b = Math.max(0, Math.min(bounceFactor, 1.5));

  // Use easing-like scaling for smoother feel
  const stiffness = 120 + Math.pow(b, 1.4) * 280; // 120–400
  const damping = 22 - Math.pow(b, 0.9) * 10; // 22–12
  const mass = 1;
  const velocity = 0;

  return { stiffness, damping, mass, velocity };
};

export const resolveBounce = (bounce?: BounceType) => {
  // Default neutral bounce
  const defaultBounce = 1;

  // Case 1: user passed a single number → use for both axes
  if (typeof bounce === 'number') {
    return { x: bounce, y: bounce };
  }

  // Case 2: user passed an object → merge defaults
  return {
    x: bounce?.x ?? defaultBounce,
    y: bounce?.y ?? defaultBounce,
  };
};
