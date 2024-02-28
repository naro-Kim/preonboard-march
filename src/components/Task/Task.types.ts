export type ListProps = {
  tasks: TaskProps[];
}

export type TaskProps = {
  id: string;
  text: string;
  state: 'TASK_INBOX' | 'TASK_ARCHIVED';
}
