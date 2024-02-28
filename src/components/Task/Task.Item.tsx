import {TaskProps} from "./Task.types";
import {L} from "@/design-system";
import {DeleteButton} from "./Task.DeleteButton";

const TaskItem = ({id, text = "김장"}: TaskProps) => {
  return (
    <L.GridCols gridTemplateColumns='4fr 1fr'>
      <div>{text}</div>
      <DeleteButton id={id} />
    </L.GridCols>
  );
};

export default TaskItem;
