import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-y-4 bg-dark-blue py-6">
      <div className="mx-auto flex w-full flex-wrap justify-center gap-x-10 gap-y-4">
        <a
          className="text-sm font-semibold text-violet-200 duration-[200ms] hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          AGORA NA HBO MAX
        </a>
        <a
          className="text-sm font-semibold text-violet-200 duration-[200ms] hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          EM BREVE
        </a>
        <a
          className="text-sm font-semibold text-violet-200 duration-[200ms] hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          FILME EM DESTAQUE
        </a>
        <a
          className="text-sm font-semibold text-violet-200 duration-[200ms] hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          SÉRIE
        </a>
        <a
          className="text-sm font-semibold text-violet-200 duration-[200ms] hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          AJUDA
        </a>
      </div>
      <div className="mx-auto flex w-full flex-wrap justify-center gap-x-12 gap-y-4">
        <a
          className="text-sm font-light text-violet-200 duration-[200ms] hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacidade
        </a>
        <a
          className="text-sm font-light text-violet-200 duration-[200ms] hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Termo de uso
        </a>
        <a
          className="text-sm font-light text-violet-200 duration-[200ms] hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comunicados de impresa
        </a>
        <a
          className="text-sm font-light text-violet-200 duration-[200ms] hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contatos de imprensa
        </a>
        <a
          className="text-sm font-light text-violet-200 duration-[200ms] hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gerenciar preferências
        </a>
      </div>
      <div className="mx-auto flex w-full justify-center">
        <p className="text-center text-sm font-light text-violet-200">
          © 2023 WarnerMedia Direct Latin America, LLC. Todos os direitos
          reservados. HBO Max é usado sob licença.
        </p>
      </div>
      <div className="mx-auto flex w-full justify-center gap-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={20} className="text-violet-200" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} className="text-violet-200" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="text-violet-200" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={30} className="text-violet-200" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
