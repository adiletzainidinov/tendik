import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

const VARIANT: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[var(--shadow-soft)] hover:bg-primary-dark active:scale-[0.98]",
  secondary:
    "bg-surface-soft text-primary-dark hover:bg-primary-soft active:scale-[0.98] border border-border",
  outline:
    "bg-transparent text-primary-dark border border-primary/40 hover:bg-primary-soft active:scale-[0.98]",
  ghost:
    "bg-transparent text-primary-dark hover:bg-primary-soft active:scale-[0.98]",
};

const SIZE: Record<ButtonSize, string> = {
  md: "h-11 px-4 text-[15px]",
  lg: "h-12 px-5 text-[15px]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      type = "button",
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-2xl font-medium tracking-[-0.005em] transition-all duration-150 ease-out",
          "disabled:opacity-60 disabled:pointer-events-none",
          "min-h-11",
          VARIANT[variant],
          SIZE[size],
          fullWidth && "w-full",
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
