interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        w-full
        h-10
        bg-primary
        py-2.5
        text-sm
        font-medium
        text-primary-foreground
        transition
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;