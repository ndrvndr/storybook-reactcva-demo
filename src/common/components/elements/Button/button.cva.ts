// button.cva.ts

import { cva } from "class-variance-authority";

const button = cva(
  ["font-medium", "transition-colors", "duration-75", "rounded-md"],
  {
    variants: {
      theme: {
        primary: [
          "bg-blue-500",
          "text-white",
          "border-transparent",
          "hover:bg-blue-700",
        ],
        secondary: [
          "bg-gray-500",
          "text-white",
          "border-transparent",
          "hover:bg-gray-700",
        ],
        danger: [
          "bg-red-500",
          "text-white",
          "border-transparent",
          "hover:bg-red-700",
        ],
        warning: [
          "bg-yellow-500",
          "text-black",
          "border-transparent",
          "hover:bg-yellow-300",
        ],
        outline: [
          "bg-transparent",
          "text-gray-800",
          "border border-gray-400",
          "hover:bg-gray-100",
        ],
        ghost: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100",
        ],
      },
      size: {
        large: ["text-base", "px-[14px]", "min-h-[2.75rem]"],
        medium: ["text-base", "px-3", "min-h-[2.25rem]"],
        small: ["text-sm", "px-2", "min-h-[1.75rem]"],
      },
    },
    defaultVariants: { theme: "primary", size: "large" },
  }
);

export default button;
