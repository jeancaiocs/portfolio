import { useMemo } from "react";

export const ParticlesBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 15}s`,
      animationDuration: `${15 + Math.random() * 10}s`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <>
      <div className="animated-bg" />
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>
    </>
  );
};
