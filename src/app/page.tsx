import Image from "next/image";
import logo from "./../../public/Agência Lapa Negócios - 1.svg"
export default function Home() {
  return (
    <div>
      <Image src={logo} alt="logo" width={200}></Image>
    </div>
  );
}