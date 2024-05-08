import { ComponentProps } from "react";

interface TableDataProps extends ComponentProps<'td'> {}

export function TableData({...props}: TableDataProps) {
  return (
    <td {...props} className="px-3 py-3 text-left" />
  )
}