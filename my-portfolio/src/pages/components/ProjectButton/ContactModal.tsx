import { FaLinkedin, FaTimes, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./ContactModal.module.css";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">
          <FaTimes />
        </button>

        <h2 className={styles.title}>Vamos conversar sobre seu projeto!</h2>

        <div className={styles.grid}>
          {/* Coluna 1 - Informações de contato */}
          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <span>jucelino.henrique2002@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <FaGithub className={styles.icon} />
              <a
                href="https://github.com/JucelinoHenrique"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/JucelinoHenrique
              </a>
            </div>
            <div className={styles.infoItem}>
              <FaLinkedin className={styles.icon} />
              <a
                href="https://www.linkedin.com/in/jucelino-oliveira-4109a9229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/jucelino-oliveira
              </a>
            </div>
          </div>

          {/* Coluna 2 - Botões de ação */}
          <div className={styles.socialButtons}>
            <a
              href="https://www.linkedin.com/in/jucelino-oliveira-4109a9229/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinButton}
            >
              <FaLinkedin size={24} />
              <span>Conectar no LinkedIn</span>
            </a>

            <a
              href="https://wa.me/5594992979826"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <FaWhatsapp size={24} />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
