import { L } from './design-system'
import Task from '@/components/Task/Task' 

function App() { 

  return (
    <>
      <L.GridRows>
        <Task task={{ id: 0, title: 'dd', state: 'TASK_INBOX' }}></Task>
        <Task task={{ id: 1, title: 'dd', state: 'TASK_INBOX' }}></Task>
      </L.GridRows>
    </>
  )
}

export default App
