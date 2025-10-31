import { FaLaptopCode } from "react-icons/fa";
import { useState } from "react";
import styles from "./ProjectButton.module.css";
import ContactModal from "./ContactModal";

type ProjectButtonProps = {
  className?: string;
};

export default function ProjectButton({ className = '' }: ProjectButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) * 100) / btn.offsetWidth;
    const y = ((e.clientY - rect.top) * 100) / btn.offsetHeight;
    btn.style.setProperty('--mouse-x', `${x}%`);
    btn.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className={`${styles.projectButton} ${className}`}
        onMouseMove={handleMouseMove}
        aria-label="Tem um projeto?"
      >
        <span className={styles.buttonText}>Tem um projeto?</span>
        <FaLaptopCode className={styles.buttonIcon} size={20} aria-hidden="true" />
        <div className={styles.buttonGlow}></div>
      </button>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}