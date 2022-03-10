import StyledButton from "./Button.styled";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const Button = ({ children, disabled, className, ...rest }: ButtonProps) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};

export default Button;
