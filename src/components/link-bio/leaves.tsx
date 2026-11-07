export function Leaves() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 220 320"
        className="leaf-1 absolute -top-6 -left-16 w-52 text-[#1c2a22] opacity-90"
      >
        <path
          fill="currentColor"
          d="M168 28c-46 18-92 74-104 132-8 38 6 78 28 96 8-34 6-78 22-112 18-38 48-70 54-116Z"
        />
        <path
          fill="#24352b"
          d="M150 46c-28 28-48 72-46 118 16-28 28-70 46-118Z"
        />
      </svg>
      <svg
        viewBox="0 0 220 320"
        className="leaf-2 absolute top-24 -right-20 w-56 text-[#1a2821]"
      >
        <path
          fill="currentColor"
          d="M48 36c52 8 104 58 122 118 12 42-8 86-36 108-4-40 2-86-18-122C98 98 66 62 48 36Z"
        />
        <path
          fill="#223129"
          d="M70 58c34 22 62 64 70 112-22-30-42-74-70-112Z"
        />
      </svg>
      <svg
        viewBox="0 0 180 240"
        className="leaf-3 absolute top-[22rem] -left-14 w-40 text-[#18241e] opacity-80"
      >
        <path
          fill="currentColor"
          d="M150 20c-40 24-78 78-86 132-4 28 8 52 24 66 6-30 8-68 24-98 16-32 38-58 38-100Z"
        />
      </svg>
    </div>
  );
}
