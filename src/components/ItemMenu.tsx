import Link from "next/link"

interface IItemMenu {
  url: string;
  link: string;
  className?: string;
  icone: React.ReactNode;
}

export const ItemMenu = ({ url, link, className, icone }: IItemMenu) => {
  return (
    <Link href={url} >
      <p className="flex space-x-1 items-center">{icone}
        <span className={`${className || ''} underline`}>{link}</span>
      </p>
    </Link>
  )
}
