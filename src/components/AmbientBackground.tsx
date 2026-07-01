import { useMemo } from 'react'

export default function AmbientBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 3,
        duration: 12 + Math.random() * 14,
        delay: -Math.random() * 20,
      })),
    [],
  )

  return (
    <>
      <div className="bg-fx" />
      <div className="particles">
        {particles.map((p) => (
          <span
            key={p.id}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
