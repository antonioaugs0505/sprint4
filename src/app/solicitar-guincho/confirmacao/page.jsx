import styles from "../../../styles/Membros.module.css"
import Link from "next/link";

export default function ExibirNome() {

  return (

    <main className={styles.enviado}>
        <div>
            <h3>Muito obrigado pela solicitação!</h3>
            <h4>Seus dados foram coletados e foram encaminhados para nossa Central! Em breve, você receberá um contato referente à sua solicitação</h4>
        </div>

        <Link href="/" className={styles.voltar}>VOLTAR PARA HOME</Link>

    </main>


  );
};

