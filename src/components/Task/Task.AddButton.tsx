import {theme} from "@/styles/theme";
import {ADD_BUTTON_TEXT} from "@/utils/constants";
import styled from "styled-components";
export const TaskButton = () => <Button type='submit'>{ADD_BUTTON_TEXT}</Button>;

const Button = styled.button`
  border: none;
  border-radius: 0.4rem;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  background-color: ${theme.color.primary};
  color: ${theme.color.white};
`;
