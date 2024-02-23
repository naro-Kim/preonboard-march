import { L } from "@/design-system";
import { useSelector } from "react-redux";
import { TaskProps } from "./Task.types";
import TaskItem from "./TaskItem";
import { RootState } from "@/store/store";


const Task = () => {
  const list = useSelector((state: RootState) => state.tasks).tasks; 
  return (
    <L.FlexCol>
      <form>
        <input type="submit" />
        <div className="addTask">
          {list.map((task: TaskProps) => (
            <TaskItem key={task.id} {...task} />
          ))}
        </div>
      </form>
    </L.FlexCol >
  );
}

export default Task;