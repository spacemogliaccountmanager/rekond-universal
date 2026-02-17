import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Button variant={variant} size={size} onClick={() => setOpen(true)} {...props}>
        {label || siteConfig.hero.ctaText}
      </Button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm md:p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full h-full md:w-auto md:h-auto md:max-w-2xl md:mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Stäng-knapp: inuti på mobil, ovanför på desktop */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 text-gray-600 hover:text-black text-sm font-medium transition-colors md:text-white/80 md:hover:text-white md:-top-10 md:right-0"
            >
              Stäng ✕
            </button>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {(() => {
              const iframeProps: any = {
                src: "https://www.bookd.se/book/motionab?embed=1",
                className: "w-full h-full md:h-[750px] md:max-h-[80vh] md:w-[120%] md:mx-auto md:rounded-[14px]",
                style: { display: "block", border: "1px solid #e5e7eb", overflow: "hidden" },
                loading: "eager",
                fetchPriority: "high",
                allow: "fullscreen",
                title: "Boka tid",
              };
              return <iframe {...iframeProps} />;
            })()}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
