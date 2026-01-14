import { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { EmptyList } from "./components/list/EmptyList";
import { TaskList } from "./components/list/TaskList";
import { Button } from "./components/Button";
import styles from "./App.module.css";
import { HeaderList } from "./components/list/HeaderList";

type Task = {
  id: number;
  task: string;
  completed: boolean;
};

export function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleButtonClick = () => {
    if (task.trim() === "") return;

    const newTask: Task = {
      id: Date.now(), // Gera um ID único baseado no timestamp
      task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask(""); // Limpa o input
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Input value={task} onChange={setTask} />
          <Button onClick={handleButtonClick} />
        </div>
        <HeaderList totalTasks={totalTasks} completedTasks={completedTasks} />
        {tasks.length === 0 ? (
          <EmptyList />
        ) : (
          <TaskList 
            tasks={tasks} 
            onToggleComplete={handleToggleComplete} 
            onDelete={handleDeleteTask} 
          />
        )}
      </div>
    </>
  );
}
