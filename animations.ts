// Custom easing functions for physics-based animations
export const easingFunctions = {
  // Bounce easing - simulates gravity with bounce
  easeOutBounce: (t: number): number => {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
  },

  // Spring easing for natural motion
  easeOutElastic: (t: number): number => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  },

  // Smooth cubic bezier for section transitions
  easeInOutCubic: (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  },

  // Physics-based dropping motion
  easeOutBack: (t: number): number => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  }
};

// Animation variants for Framer Motion
export const animationVariants = {
  // Dropping text animation
  droppingText: {
    hidden: {
      y: -100,
      opacity: 0,
      rotateX: -90,
      scale: 0.5
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }
  },

  // Card hover animations
  cardHover: {
    rest: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0
    },
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      z: 20,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  },

  // Button physics animations
  buttonPhysics: {
    rest: {
      scale: 1,
      rotateZ: 0
    },
    hover: {
      scale: 1.05,
      rotateZ: [0, -1, 1, 0],
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  },

  // Section reveal animations
  sectionReveal: {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Floating elements
  floating: {
    animate: {
      y: [0, -20, 0],
      rotateZ: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },

  // Skill tag animations
  skillTag: {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 8
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3
      }
    }
  }
};

// Physics simulation parameters
export const physicsConfig = {
  gravity: 980, // pixels/second²
  bounce: 0.7,
  friction: 0.98,
  airResistance: 0.99
};

// Scroll animation helpers
export const scrollAnimations = {
  parallax: (scrollY: number, speed: number = 0.5): number => {
    return scrollY * speed;
  },

  fadeOnScroll: (scrollY: number, threshold: number = 100): number => {
    return Math.max(0, 1 - scrollY / threshold);
  },

  scaleOnScroll: (scrollY: number, threshold: number = 200): number => {
    return Math.max(0.5, 1 - scrollY / threshold * 0.5);
  }
};
