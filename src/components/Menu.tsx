interface IMenu {
  children: React.ReactNode;
  className?: string;
}

export const Menu = ({ children, className }: IMenu) => {
  return (
    <nav className={`${className || ''}`}>
      {children}
    </nav>
  )
}