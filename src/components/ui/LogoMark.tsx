type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = 'w-10 h-10' }: LogoMarkProps) {
  return (
    <div
      className={`${className} bg-accent-500 flex items-center justify-center text-white transition-colors`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 40"
        className="h-[72%] w-[72%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9" cy="30" r="2.6" fill="currentColor" />
        <path
          d="M9 30L18 21L24 27L31 10"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M24.5 10H31V16.5"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
}
