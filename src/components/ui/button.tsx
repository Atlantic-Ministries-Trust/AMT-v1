import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// Button component using standard Tailwind classes

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        // Base styles
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-black uppercase tracking-tight ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:translate-y-[2px]";

        // Variants with 2D depth effect
        const variants = {
            primary: "bg-royal-blue text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none",
            secondary: "bg-golden-yellow text-royal-blue shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none",
            outline: "border-2 border-royal-blue bg-transparent text-royal-blue shadow-[4px_4px_0px_0px_#1a237e] hover:shadow-[2px_2px_0px_0px_#1a237e] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none",
            ghost: "hover:bg-royal-blue/10 text-royal-blue",
        };

        // Sizes
        const sizes = {
            default: "h-12 px-6 py-3 text-base",
            sm: "h-10 rounded-md px-4 text-sm",
            lg: "h-14 rounded-xl px-10 text-lg md:text-xl",
            icon: "h-12 w-12",
        };

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
