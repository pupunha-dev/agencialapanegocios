import logo from "./../../public/Agência Lapa Negócios - 1.svg"
import { Logotipo } from "./Logotipo"
import { Menu } from "./Menu"

export const Header = () => {
  return (
    <header className="flex h-[70px] border-b w-full justify-between">
      <Logotipo logo={logo} alt="Agência Lapa Negócios" />
      <Menu />
      Botao
    </header>
  )
}