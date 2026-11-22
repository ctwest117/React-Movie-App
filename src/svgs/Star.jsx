export function Star({
  stroke = "currentColor",
  fill = "none",
  size = 24,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.76 5.82 21 7 14.14 2 9.27l6.91-1.01Z" />
    </svg>
  );
}
