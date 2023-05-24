import { styled } from "styled-components";

const StyledHeading = styled.h1`
  font-family: var(--heading);
  line-height: 100%;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;

  &.small {
    font-size: clamp(1.3rem, 4vw, 1.7rem);
    font-weight: 700;

    &.white {
      color: var(--primary-neutral);

      &--styled {
        line-height: 1.5em;
        padding-bottom: 10px;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 5px;
          width: 55px;
          background-color: var(--primary-light);
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          height: 1px;
          width: 95%;
          max-width: 130px;

          background-color: var(--primary-neutral);
        }
      }
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
