import clsx from "clsx";

interface DividerProps {
  width?: string;
  height?: string;
  bgColor?: string;
  top?: string;
  right?: string;
  className?: string;
}

export function Divider({
  width = "w-42.25",
  height = "h-1.5",
  bgColor = "bg-[#0B5ED7]",
  top = "top-0",
  right = "right-0",
  className,
}: DividerProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "relative",
        width,
        height,
        bgColor,
        top,
        right,
        className
      )}
    />
  );
}
