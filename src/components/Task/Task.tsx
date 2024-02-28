import { L } from "@/design-system";
import {useSelector} from "react-redux";
import {TaskProps} from "./Task.types";
import TaskItem from "./Task.Item";
import {RootState} from "@/store/store";
import {TaskForm} from "./Task.Form";

const Task = () => {
  const list = useSelector((state: RootState) => state.tasks).tasks;

  return (
    <L.FlexCol>
      <TaskForm />
      {list.map((task: TaskProps) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </L.FlexCol>
  );
};

export default Task;