import {TaskProps} from "./Task.types";
import {L} from "@/design-system";
import {DeleteButton} from "./Task.DeleteButton";
import styled from "styled-components";
import {theme} from "@/styles/theme";

const TaskItem = ({id, text = "김장"}: TaskProps) => {
  return (
    <L.FlexRow alignItems='center' justifyContent='space-between' w={"100%"}>
      <Txt>{text}</Txt>
      <DeleteButton id={id} />
    </L.FlexRow>
  );
};

export default TaskItem;

const Txt = styled.span`
  color: ${theme.color.gray700};
  font-size: 1rem;
`;