import Link from "next/link"

interface IItemMenu {
  url: string;
  link: string;
}

export const ItemMenu = ({ url, link }: IItemMenu) => {
  return (
    <Link href={url}>{link}</Link>
  )
}