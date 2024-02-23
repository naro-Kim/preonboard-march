export type ListProps = {
  tasks: TaskProps[];
}

export type TaskProps = {
  id: number;
  text: string;
  state: 'TASK_INBOX' | 'TASK_ARCHIVED';
}
