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
        <path
          d="M10 30L30 10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M22 10H30V18"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
}
