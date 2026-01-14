import styles from '../components/Input.module.css';

type InputProps = {
  value: string
  onChange: (value: string) => void
}

export function Input({value, onChange}:InputProps) {
  return (
    <input 
      className={styles.container} 
      type="text"
      value={value}
      placeholder="Adicione uma nova tarefa" 
      onChange={(e)=>onChange(e.target.value)}
    />
  )
}
