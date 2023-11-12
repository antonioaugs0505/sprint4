import Link from "next/link";
import Image from "next/image";
import styles from'../../styles/Components.module.css'

export default function Cabecalho() {
  return (
    <nav className={styles.menu}>

        <Link href="/"><Image className={styles.logoMenu} src="/images/logo-porto.png" alt="Logo" width={360} height={120}></Image></Link>

        <Link href="/" className={styles.menuItem}>MEMBROS</Link>
    </nav>

  );
}