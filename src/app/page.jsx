import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
   
    <main>
      <section>
        <div>
          <h3>ModalSure</h3>
          <p>O novo método em solicitação de guinchos. Com a nossa tecnologia integrada, automatização e eficiência, o guincho ideal para sua demanda chegará no menor tempo!</p>
          <Link href='/'>SOLICITAR GUINCHO</Link>
        </div>

        <figure>
          <Image src='/images/guincho.png' width={600} height={450} alt="Guincho"></Image>
        </figure>
      </section>
    </main>


  )
}
