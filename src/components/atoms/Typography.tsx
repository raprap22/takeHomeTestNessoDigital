import { ElementType, HTMLAttributes } from "react";
import clsx from "clsx";

export type TypographySize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

interface TypographyProps<T extends ElementType = "p">
  extends HTMLAttributes<HTMLElement> {
  as?: T;
  size?: TypographySize;
  className?: string;
  children: React.ReactNode;
}

const sizeStyles: Record<TypographySize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

const baseStyles = {
  h1: "font-semibold tracking-tight",
  h2: "font-semibold tracking-tight",
  h3: "font-semibold",
  h4: "font-medium",
  h5: "font-medium",
  h6: "font-medium",
  p: "leading-relaxed text-slate-600",
  span: "",
  small: "text-slate-500",
};

export function Typography<T extends ElementType = "p">({
  as,
  size = "base",
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Component = as || "p";

  return (
    <Component
      className={clsx(
        "text-slate-900",
        sizeStyles[size],
        baseStyles[Component as keyof typeof baseStyles],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
