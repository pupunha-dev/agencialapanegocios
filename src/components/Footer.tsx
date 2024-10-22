import { IconHeartFilled } from "@tabler/icons-react"

export const Footer = () => {
  return (
    <footer className="flex h-[60px] w-full bg-azul items-center justify-center">
      <div className="flex space-x-1 items-center">
        <p className="text-white text-xs">Desenvolvido com</p>
        <IconHeartFilled className="text-red-300" width={16} />
        <p className="text-white text-xs">por Agência Lapa Negócios.</p>
      </div>
    </footer>
  )
}