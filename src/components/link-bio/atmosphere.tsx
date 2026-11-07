const motes = [
  { x: "9%", y: "7%", size: 2, delay: "-2s", duration: "22s", drift: "a", tone: "ivory" },
  { x: "82%", y: "12%", size: 1.5, delay: "-9s", duration: "26s", drift: "b", tone: "green" },
  { x: "24%", y: "22%", size: 2, delay: "-14s", duration: "24s", drift: "a", tone: "ivory" },
  { x: "91%", y: "34%", size: 1.5, delay: "-5s", duration: "28s", drift: "b", tone: "green" },
  { x: "12%", y: "46%", size: 2, delay: "-11s", duration: "21s", drift: "a", tone: "ivory" },
  { x: "68%", y: "55%", size: 1.5, delay: "-7s", duration: "30s", drift: "b", tone: "green" },
  { x: "36%", y: "68%", size: 2, delay: "-16s", duration: "25s", drift: "a", tone: "ivory" },
  { x: "88%", y: "78%", size: 1.5, delay: "-3s", duration: "23s", drift: "b", tone: "green" },
  { x: "18%", y: "90%", size: 2, delay: "-12s", duration: "27s", drift: "a", tone: "ivory" },
] as const;

export function Atmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      {motes.map((mote) => (
        <span
          key={`${mote.x}-${mote.y}`}
          className={`mote mote-${mote.drift} mote-${mote.tone}`}
          style={{
            left: mote.x,
            top: mote.y,
            width: mote.size,
            height: mote.size,
            animationDelay: mote.delay,
            animationDuration: mote.duration,
          }}
        />
      ))}
    </div>
  );
}
