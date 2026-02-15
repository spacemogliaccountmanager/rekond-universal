import { Button, type ButtonProps } from "@/components/ui/Button";
import siteConfig from "@/site-config";

interface BookingButtonProps extends Omit<ButtonProps, "onClick"> {
  label?: string;
}

export default function BookingButton({
  label,
  variant = "accent",
  size = "lg",
  ...props
}: BookingButtonProps) {
  const handleClick = () => {
    // TODO: Integrera popup-widget här
    // Användaren skickar widget-koden senare
    console.log("Booking button clicked – widget integration pending");
  };

  return (
    <Button variant={variant} size={size} onClick={handleClick} {...props}>
      {label || siteConfig.hero.ctaText}
    </Button>
  );
}
