import Image, { StaticImageData } from "next/image";

interface ILogotipo {
  alt: string;
  logo: StaticImageData;
}

export const Logotipo = ({ alt, logo }: ILogotipo) => {
  return (
    <div className="w-64 relative">
      <Image src={logo} alt={alt} fill></Image>
    </div>
  )
}
