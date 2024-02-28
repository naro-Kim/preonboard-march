import {L} from "@/design-system";
import {taskAdded} from "@/store/slices";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {TaskButton} from "./Task.AddButton";
import styled from "styled-components";
import {theme} from "@/styles/theme";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const form = e.target as HTMLFormElement;
      const id = new Date().toISOString();
      const text = form.text.value;

      dispatch(taskAdded({id, text}));
      form.reset();
    },
    [dispatch]
  );

  return (
    <form onSubmit={handleSubmit}>
      <L.FlexRow gap={8} alignItems='center'>
        <Input id='text' name='text' placeholder='write your to-do task' />
        <TaskButton />
      </L.FlexRow>
    </form>
  );
};

const Input = styled.input`
  border-radius: 0.4rem;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  color: ${theme.color.body};
  background-color: ${theme.color.gray200};
  border: none;
`;
