import { L } from './design-system'
import Task from '@/components/Task/Task' 
import store from '@/store/store';
function App() { 

  return (
    <>
      <Provider store={store}>
      <L.GridRows>
        <Task task={{ id: 0, title: 'dd', state: 'TASK_INBOX' }}></Task>
        <Task task={{ id: 1, title: 'dd', state: 'TASK_INBOX' }}></Task>
      </L.GridRows>
      </Provider>
    </>
  )
}

export default App
