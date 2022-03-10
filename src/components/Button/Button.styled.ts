import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: initial;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0 2rem;
  text-align: center;
  text-decoration: none;
  line-height: 3.5rem;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow.bs1};
  }

  &.primary {
    background-color: var(--primary-main);
    border: 0.1rem solid var(--primary-main);
    color: var(--white);
  }

  .primary:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
  }

  &.secondary {
    background-color: var(--secondary-main);
    border-color: var(--secondary-main);
    color: var(--white);
  }

  &.secondary:hover {
    background-color: var(--secondary-dark);
    transform: translateY(-3px);
  }

  &.error {
    background-color: var(--error-main);
    border-color: var(--error-main);
    color: var(--white);
    outline: 0;
  }

  &.error:hover {
    background-color: var(--error-dark);
    transform: translateY(-3px);
  }

  &.warning {
    background-color: var(--warning-main);
    border-color: var(--warning-main);
    color: var(--white);
    outline: 0;
  }

  &.warning:hover {
    background-color: var(--warning-dark);
    transform: translateY(-3px);
  }
  &.warning {
    background-color: var(--warning-main);
    border-color: var(--warning-main);
    color: var(--white);
    outline: 0;
  }

  &.warning:hover {
    background-color: var(--warning-dark);
  }

  /* outline buttons */
  &.outline-primary {
    background-color: transparent;
    border: 1px solid;
    color: var(--primary-main);
  }

  &.outline-primary:hover {
    color: var(--white);
    background-color: var(--primary-main);
  }

  &.outline-secondary {
    background-color: transparent;
    border: 1px solid;
    color: var(--secondary-main);
  }

  &.outline-secondary:hover {
    color: var(--white);
    background-color: var(--secondary-main);
  }

  &.outline-error {
    background-color: transparent;
    border: 1px solid;
    color: var(--error-main);
  }

  &.outline-error:hover {
    color: var(--white);
    background-color: var(--error-main);
  }
`;

export default Button;
