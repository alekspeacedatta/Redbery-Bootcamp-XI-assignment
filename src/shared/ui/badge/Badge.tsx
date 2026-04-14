import type { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
}
export const Badge = ({ children, className = ''} : Props) => {
  return (
    <div  className={` ${className} flex items-center gap-2.5 bg-white rounded-xl`}>
      {children}
    </div>
  )
}