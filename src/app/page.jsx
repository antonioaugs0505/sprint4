import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"



export default function Home() {
  return (
   
    <main>
      <section className={styles.apresentacao}>
        <div className={styles.apresentacaoTexto}>
          <h3>ModalSure</h3>
          <p className="text-white font-normal text-2xl mb-12">O novo método em solicitação de guinchos. Com a nossa tecnologia integrada, automatização e eficiência, o guincho ideal para sua demanda chegará no menor tempo!</p>
          <Link className={styles.linkApresentacao}  href='/solicitar-guincho'>SOLICITAR GUINCHO</Link>
        </div>

        <figure className={styles.imagemApresentacao}>
          <Image className={styles.img} src='/images/guincho.png' width={600} height={450} alt="Guincho"></Image>
        </figure>
      </section> 
      
      <section className={styles.contato}>
      
      <form className={styles.formEmail} action="">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />

      <button className={styles.btnEnviar}>ENVIAR</button>

      </form>

      <h3 className="text-5xl text-white font-extrabold w-[576px] text-center">Caso queria mais informações entre em contato!</h3>

    </section>

    </main>

   

  )
}
