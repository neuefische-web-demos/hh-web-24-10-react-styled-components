import styled, { css } from "styled-components";
import Link from "next/link";
import Button from "../components/Button.js";

// BREAK TIME: Meet back at 15:04

// const DangerButton = styled.button`
//   all: unset;
//   border: none;
//   cursor: pointer;
//   padding: 1rem;
//   color: white;
//   background-color: red;

//   &:hover {
//     color: red;
//   }
// `;

const StyledA = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;
const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default function HomePage() {
  return (
    <>
      <h1>Styled Components</h1>
      <Button $color="danger" $muffin="chocolate">
        Danger Button
      </Button>
      <Button>Click Me</Button>

      <h2>Styled next.js Link</h2>
      <p>
        <StyledA href="/about">Link 2</StyledA>
        <StyledLink href="/about">Link 1</StyledLink>
        <StyledLink href="page">Link to page 2</StyledLink>
      </p>
      <h2>Using Props: css block / Complex Component</h2>
      <FlexContainer>
        <Button $variant="text">Click Me - Text</Button>
        <Button $variant="outlined">Click Me - Outlined</Button>

        <Button $variant="outlined">Click Me - Another Outlined</Button>
      </FlexContainer>
    </>
  );
}
