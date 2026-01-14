import { PlusCircle } from "@phosphor-icons/react";
import styles from './Button.module.css';

type ButtonProps = {
  onClick: () => void
}

export function Button({onClick}:ButtonProps) {
  return(
    <button 
      className={styles.container}
      onClick={onClick}>
      Criar
      <PlusCircle size={20} />
    </button>
  )
}
