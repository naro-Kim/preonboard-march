import { ListProps } from '@/components/Task/Task.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ListProps = {
  tasks: [],
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    taskAdded: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = action.payload;
      state.tasks.push({ id, text, state: 'TASK_INBOX' });
    },
    taskDeleted: (state, action: PayloadAction<string>) => { 
      state.tasks
        = state.tasks.filter(tasks => tasks.id !== action.payload)
    }
  }
})

export const { taskAdded, taskDeleted } = taskSlice.actions;
export default taskSlice.reducer;