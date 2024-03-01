import {taskDeleted} from "@/store/slices";
import {DELETE_BUTTON_TEXT} from "@/utils/constants";
import {useDispatch} from "react-redux";
import Button from "../Button/Button";

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
      size='md'
      id={`deleteTask-${id}`}
      aria-label={`deleteTask-${id}`}
      key={`deleteTask-${id}`}
      type='button'
      label={`${DELETE_BUTTON_TEXT}`}
      onClick={handleDeleteButton}
    />
  );
};
