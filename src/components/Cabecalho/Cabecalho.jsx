import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <nav className="w-full bg-azul-principal flex items-center justify-around p-4">

        <Link href="/"><Image className="w-[16vw]" src="/images/logo-porto.png" alt="Logo" width={360} height={120}></Image></Link>

        <Link href="/" className="text-white no-underline font-semibold text-base md:text-lg lg:text-xl hover:text-blue-700">MEMBROS</Link>
    </nav>

  );
}