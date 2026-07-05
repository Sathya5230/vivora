export default function Button({
  children,
  variant = "primary",
  as: Component = "button",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.04] hover:shadow-lg active:scale-[0.96]";
  const variants = {
    primary: "bg-plum-700 text-cream hover:bg-plum-800",
    secondary:
      "bg-transparent border border-plum-700 text-plum-700 hover:bg-plum-700 hover:text-cream",
    gold: "bg-gold-400 text-plum-900 hover:bg-gold-500",
  };

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
