import {L} from "@/design-system";
import {TaskProps} from "./Task.types";
import TaskItem from "./Task.Item";
import {RootState} from "@/store/store";
import {TaskForm} from "./Task.Form";
import {useRootState} from "@/hooks/useRootState";
import styled from "styled-components";
import {theme} from "@/styles/theme";
import {LayoutBase} from "@/design-system/layout";

const Task = () => {
  const list = useRootState((state: RootState) => state.taskReducer.tasks);

  return (
    <L.FlexCol mt={64}>
      <TaskWrapper>
        <TaskForm />
        {list.map((task: TaskProps) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </TaskWrapper>
    </L.FlexCol>
  );
};

export default Task;

const TaskWrapper = styled(LayoutBase)`
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${theme.color.gray100};
  min-height: 16rem;
  border-radius: 1rem;
`;
