import { styled } from "styled-components";

const StyledHeading = styled.h1`
  font-family: var(--heading);
  line-height: 100%;

  &.small {
    font-size: clamp(1.3rem, 4vw, 1.7rem);
    font-weight: 700;

    &--white {
      color: var(--primary-neutral);
    }

    &--dark {
      color: var(--primary);
    }
  }

  &.medium {
    font-size: clamp(1.8rem, 5vw, 8rem);
    color: var(--primary-neutral);
    font-weight: 900;
  }
`;

type Props = {
  children: string;
  className?: string;
};

const Heading = ({ children, className }: Props) => (
  <StyledHeading className={className}>{children}</StyledHeading>
);

export default Heading;
