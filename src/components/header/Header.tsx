import { PropsWithChildren } from "react"

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className="header">
        {children}
    </div>
  )
}
