import { ItemMenu } from "./ItemMenu"
export const Menu = () => {
  return (
    <nav className="bg-red-200 flex items-center text-sm space-x-4">
      <ItemMenu url="/" link="Início" />
      <ItemMenu url="/" link="Projetos" />
      <ItemMenu url="/" link="Soluções" />
      <ItemMenu url="/" link="Depoimentos" />
      <ItemMenu url="/" link="Contato" />
    </nav>
  )
}