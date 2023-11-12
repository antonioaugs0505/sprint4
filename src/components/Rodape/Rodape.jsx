import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from '../../styles/Components.module.css'

export default function Rodape() {
    return (
      <footer className={styles.rodape}>
        <div className={styles.redesociais}>
          <a className='item' href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
          <a className='item' href="https://www.instagram.com/"><FaInstagram></FaInstagram></a>
          <a className='item' href="https://web.whatsapp.com/"><FaWhatsapp></FaWhatsapp></a>
        </div>

        <h3>Todos os direitos reservados @2023 | Políticas de Privacidade</h3>

      </footer>
    )
  }