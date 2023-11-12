import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Rodape() {
    return (
      <footer className="bg-azul-principal flex flex-col items-center p-5 text-white md:text-center">
        <div className='w-[20vw] flex justify-around mb-4'>
          <a className='text-3xl text-white hover:text-blue-700' href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
          <a className='text-3xl text-white hover:text-blue-700' href="https://www.instagram.com/"><FaInstagram></FaInstagram></a>
          <a className='text-3xl text-white hover:text-blue-700' href="https://web.whatsapp.com/"><FaWhatsapp></FaWhatsapp></a>
        </div>

        <h4>Todos os direitos reservados @2023 | Políticas de Privacidade</h4>

      </footer>
    )
  }