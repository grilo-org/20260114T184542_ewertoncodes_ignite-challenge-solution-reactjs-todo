import styles from './HeaderList.module.css';

interface HeaderListProps {
  totalTasks: number;
  completedTasks: number;
}

export function HeaderList({ totalTasks, completedTasks }: HeaderListProps) {
  return (
    <div className={styles.todoList}>
      <header>
        <aside>
          <p className={styles.createdTasks}>Tarefas criadas</p> <span>{totalTasks}</span>
        </aside>
        <aside>
          <p className={styles.completedTasks}>Concluídas</p> <span>{completedTasks} de {totalTasks}</span>
        </aside>
      </header>
    </div>
  );
}
