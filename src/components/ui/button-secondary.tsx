
interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SecondaryButton = ({
  children,
  className = "",
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      className={`
        w-full
        h-10
        bg-card
        border
        border-border
        py-2.5
        text-sm
        font-medium
        text-foreground
        transition
        hover:bg-secondary
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

export default SecondaryButton;