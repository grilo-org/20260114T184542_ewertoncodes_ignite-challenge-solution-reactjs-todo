import styles from './EmptyList.module.css'
import { ClipboardText } from "@phosphor-icons/react"

export function EmptyList() {
  return (
    <div className={styles.emptyState}>
      <div className={styles.iconContainer}>
        <ClipboardText size={50} />
      </div>
      <div className={styles.textContainer}>
        <p>Você ainda não tem tarefas cadastradas.</p>
        <p>Crie tarefas e organize seus itens a fazer.</p>
      </div>
    </div>
  );
}
