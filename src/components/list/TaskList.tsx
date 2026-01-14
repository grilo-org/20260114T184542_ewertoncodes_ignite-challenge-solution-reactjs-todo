import styles from "./TaskList.module.css";
import { Trash } from "@phosphor-icons/react"; // Ícone de lixeira

type Task = {
  id: number;
  task: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
};

export function TaskList({ tasks, onDelete, onToggleComplete }: TaskListProps) {
  return (
    <div className={styles.list}>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={styles.listItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className={styles.checkbox}
            />
            <span className={task.completed ? styles.completed : ""}>{task.task}</span>
            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
              <Trash size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
