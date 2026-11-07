const petals = [
  { left: "4%", delay: "-3s", duration: "18s", size: 13, sway: "5.2s", color: "#7f9a74" },
  { left: "14%", delay: "-11s", duration: "22s", size: 10, sway: "6.4s", color: "#9bb48a" },
  { left: "24%", delay: "-7s", duration: "20s", size: 15, sway: "4.8s", color: "#6d8b66" },
  { left: "36%", delay: "-16s", duration: "24s", size: 11, sway: "5.8s", color: "#8aa67c" },
  { left: "47%", delay: "-2s", duration: "19s", size: 12, sway: "6.1s", color: "#74956c" },
  { left: "58%", delay: "-13s", duration: "23s", size: 16, sway: "5s", color: "#a3b996" },
  { left: "68%", delay: "-8s", duration: "21s", size: 10, sway: "6.6s", color: "#688562" },
  { left: "76%", delay: "-18s", duration: "26s", size: 14, sway: "5.4s", color: "#8eae80" },
  { left: "86%", delay: "-5s", duration: "17s", size: 11, sway: "4.6s", color: "#78966e" },
  { left: "93%", delay: "-14s", duration: "25s", size: 13, sway: "6s", color: "#93b084" },
  { left: "31%", delay: "-21s", duration: "27s", size: 9, sway: "5.6s", color: "#6a8664" },
  { left: "62%", delay: "-9s", duration: "20s", size: 12, sway: "4.9s", color: "#84a378" },
] as const;

export function Petals() {
  return (
    <div aria-hidden="true" className="petal-field">
      {petals.map((petal) => (
        <span
          key={`${petal.left}-${petal.delay}`}
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            color: petal.color,
          }}
        >
          <span
            className="petal-sway"
            style={{ animationDuration: petal.sway }}
          >
            <svg
              viewBox="0 0 24 34"
              width={petal.size}
              height={petal.size * 1.4}
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M12 1.5c4.8 5.2 8.2 11.4 7.2 18.2-.8 5.4-4.2 10.2-7.2 13-3-2.8-6.4-7.6-7.2-13C3.8 12.9 7.2 6.7 12 1.5Z"
              />
              <path
                d="M12 6.5v18"
                fill="none"
                stroke="rgba(12,13,11,0.28)"
                strokeWidth="0.7"
              />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
