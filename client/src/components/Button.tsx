import { styled } from "styled-components";

const StyledButton = styled.a`
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  width: fit-content;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &.primary {
    background-color: var(--primary-neutral);
    color: var(--primary);

    &:hover {
      background-color: var(--primary);
      color: var(--primary-neutral);
    }

    /* &--dark {
      background-color: var(--primary);
      color: var(--primary-neutral);
      border: 1px solid var(--primary);

      &:hover {
        background-color: var(--primary-medium);
        color: var(--primary-neutral);
        border: 1px solid var(--primary-medium);
      }

      &--disabled {
        opacity: 0.7;
        cursor: not-allowed;

        &:hover {
          background-color: var(--primary);
          color: var(--primary-neutral);
          border: 1px solid var(--primary);
        }
      }
    } */
  }
`;

type Props = {
  children: string;
  className: string;
};

const Button = ({ children, className }: Props) => {
  return <StyledButton className={className}> {children} </StyledButton>;
};

export default Button;
