import {theme} from "@/styles/theme";
import {ButtonHTMLAttributes, forwardRef} from "react";
import styled from "styled-components";

type ButtonProps = {
  variant?: "default";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "blue" | "black";
  label?: string;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {variant = "default", size = "md", color, label, disabled, ...restProps} = props;
  return (
    <ButtonElement
      disabled={disabled}
      variant={variant}
      size={size}
      color={color}
      ref={ref}
      {...restProps}
    >
      {label}
    </ButtonElement>
  );
});

const ButtonElement = styled.button<ButtonProps>`
  ${(props) =>
    props.size === "md" &&
    ` 
      width: 80px;
      padding: 0.4rem 1rem;
      font-size: 1rem;
      border-radius: 0.4rem;
    `};

  background-color: ${(props) => props.color || theme.color.white};
  color: ${theme.color.primary};
  font-weight: ${theme.text.bodyRegular};
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  box-shadow: ${theme.shadow.md};

  &:disabled {
    background-color: ${theme.color.gray100}; 
    border: 1px solid ${theme.color.gray200};
    color: ${theme.color.gray300};
    cursor: not-allowed;
  }

  &:not(:disabled) {
    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
    }
`;

export default Button;
