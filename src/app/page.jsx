import Image from "next/image"
import Link from "next/link"
import './globals.css'



export default function Home() {
  return (
   
    <main className="bg-azul-sec">
      <section className="w-full px-20 flex items-center justify-between">
        <div className="w-2/4">
          <h3 className="text-white font-bold text-8xl mb-4">ModalSure</h3>
          <p className="text-white font-normal text-2xl mb-12">O novo método em solicitação de guinchos. Com a nossa tecnologia integrada, automatização e eficiência, o guincho ideal para sua demanda chegará no menor tempo!</p>
          <Link className="text-white no-underline border-4 border-white px-14 py-2 rounded-full bg-azul-principal text-2xl hover:text-blue-500 hover:border-blue-500 hover:bg-white" href='/'>SOLICITAR GUINCHO</Link>
        </div>

        <figure className="w-2/5">
          <Image className="w-full" src='/images/guincho.png' width={600} height={450} alt="Guincho"></Image>
        </figure>
      </section> 
      
      <section className="w-full bg-azul-sec p-2 md:p-4 flex flex-no-wrap items-center justify-around">
      
      <form className="w-35 bg-white rounded-3xl p-16 flex flex-col gap-6 mb-10" action="">
        <input className="bg-gray-300 border-none text-gray-500 text-2xl font-extrabold px-5 py-2 rounded-full" type="text" placeholder="Nome" />
        <input className="bg-gray-300 border-none text-gray-500 text-2xl font-extrabold px-5 py-2 rounded-full" type="text" placeholder="Email" />

      <button className="self-end text-white bg-azul-principal border-2 border-text-white rounded-2xl border-4 text-xl mt-8 px-4 py-1 hover:text-blue-500 hover:bg-white hover:border-blue-500">ENVIAR</button>

      </form>

      <h3 className="text-5xl text-white font-extrabold w-[576px] text-center">Caso queria mais informações entre em contato!</h3>

    </section>

    </main>

   

  )
}
