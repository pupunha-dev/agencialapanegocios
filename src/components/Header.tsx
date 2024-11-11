import { MousePointerClick, Pointer } from "lucide-react";
import logoImg from "./../../public/Logo.svg";
import { ItemMenu } from "./ItemMenu";
import { Logotipo } from "./Logotipo"
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <header className="h-screen flex flex-col items-center justify-center w-full">
      <div className="flex h-[100px] w-[400px]">
        <Logotipo logo={logoImg} alt="Agência Lapa Negócios - Logotipo" />
      </div>

      <p className="text-3xl font-bold">Preciso muito de...</p>

      <div className="flex w-3/5 justify-center gap-10 p-4">
        <Menu className="flex flex-col gap-2">
          <ItemMenu url="#sites" link="Um Site para meu negócio" icone={<Pointer color="#d2502d" />}
            className="bg-gradient-to-r from-orange-700 to-orange-600 text-transparent bg-clip-text
            text-2xl font-bold" />
          <ItemMenu url="/" link="Uma Loja Virtual" icone={<MousePointerClick color="#d2502d" />}
            className="bg-gradient-to-r from-orange-700 to-orange-600 text-transparent bg-clip-text
           text-2xl font-bold" />
          <ItemMenu url="/" link="Uma Landing Page" icone={<MousePointerClick color="#d2502d" />}
            className="bg-gradient-to-r from-orange-700 to-orange-600 text-transparent bg-clip-text
            text-2xl font-bold" />
        </Menu>
        <Menu className="flex flex-col gap-2">
          <ItemMenu url="#sites" link="Aplicativo Mobile" icone={<MousePointerClick color="#d2502d" />}
            className="bg-gradient-to-r from-orange-700 to-orange-600 text-transparent bg-clip-text
            text-2xl font-bold" />
          <ItemMenu url="#sites" link="Anunciar no Google" icone={<MousePointerClick color="#d2502d" />}
            className="bg-gradient-to-r from-orange-700 to-orange-600 text-transparent bg-clip-text
            text-2xl font-bold" />
          <ItemMenu url="#sites" link="Fale Conosco" icone={<MousePointerClick color="#d2502d" />}
            className="bg-gradient-to-r from-orange-700 to-orange-600 text-transparent bg-clip-text
            text-2xl font-bold" />
        </Menu>
      </div>
    </header>
  )
}