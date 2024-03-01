import {L} from "@/design-system";
import {taskAdded} from "@/store/slices";
import {ChangeEvent, useCallback, useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {theme} from "@/styles/theme";
import Button from "../Button/Button";
import {ADD_BUTTON_TEXT} from "@/utils/constants";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const isDisabled = useMemo(() => inputValue.trim() === "", [inputValue]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const id = new Date().toISOString();
      const text = inputValue;

      dispatch(taskAdded({id, text}));
      setInputValue("");
    },
    [dispatch, inputValue]
  );

  return (
    <form onSubmit={handleSubmit}>
      <L.FlexRow gap={8} alignItems='center'>
        <Input
          id='text'
          name='text'
          placeholder='Write your to-do task'
          value={inputValue}
          onChange={handleChange}
        />
        <Button disabled={isDisabled} label={`${ADD_BUTTON_TEXT}`} />
      </L.FlexRow>
    </form>
  );
};

const Input = styled.input`
  border-radius: 0.4rem;
  padding: 0.4rem 1rem;
  color: ${theme.color.gray600};
  font-size: 1rem;
  background-color: ${theme.color.white};
  border: none;
  box-shadow: ${theme.shadow.md}
  &::placeholder {
    color: ${theme.color.gray400};
  }
`;
