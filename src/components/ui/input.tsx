import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rightElement?: ReactNode;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      rightElement,
      error,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {(label || rightElement) && (
          <div className="flex justify-between items-center text-sm">
            {label && (
              <label
                htmlFor={id}
                className="font-medium text-foreground select-none"
              >
                {label}
              </label>
            )}

            {rightElement}
          </div>
        )}

        <input
          ref={ref}
          id={id}
          className={`
            w-full
            h-11
            rounded-lg
            border
            bg-card
            px-3.5
            text-sm
            text-foreground
            placeholder:text-muted-foreground
            outline-none
            transition
            duration-200

            focus:border-primary
            focus:ring-2
            focus:ring-primary/20

            disabled:cursor-not-allowed
            disabled:opacity-50

            ${error ? "border-red-500 focus:border-red-500" : ""}
            ${className}
          `}
          {...props}
        />

        {error && (
          <span className="text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;