import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  transparent?: boolean;
}

export function IconButton({children,transparent, ...props}:IconButtonProps) {
  return (
    <button {...props} className={transparent ? 'bg-black border border-white/10 p-1.5 rounded-md' : 'bg-white/10 border border-white/10 p-1.5 rounded-md'} >
      {children}
    </button>
  )
}