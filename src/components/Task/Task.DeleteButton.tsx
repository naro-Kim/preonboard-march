import {taskDeleted} from "@/store/slices";
import {theme} from "@/styles/theme";
import {DELETE_BUTTON_TEXT} from "@/utils/constants";
import {useDispatch} from "react-redux";
import styled from "styled-components";

type buttonProps = {
  id: string;
};

export const DeleteButton = ({id}: buttonProps) => {
  const dispatch = useDispatch();
  const handleDeleteButton = () => {
    dispatch(taskDeleted(id));
  };

  return (
    <Button
      id={`deleteTask-${id}`}
      aria-label={`deleteTask-${id}`}
      key={`deleteTask-${id}`}
      type='button'
      onClick={handleDeleteButton}
    >
      {DELETE_BUTTON_TEXT}
    </Button>
  );
};

const Button = styled.button`
  border-radius: 0.4rem;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  background-color: ${theme.color.gray300};
  color: ${theme.color.white};

  &:hover {
    background-color: ${theme.color.gray600};
  }
`;
