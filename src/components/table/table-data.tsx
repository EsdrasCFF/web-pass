import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'

interface TableDataProps extends ComponentProps<'td'> {}

export function TableData({...props}: TableDataProps) {
  return (
    <td {...props} className={twMerge("px-3 py-3 text-left text-white/50", props.className)} />
  )
}