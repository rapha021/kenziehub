import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  max-width: 780px;
  height: 72px;

  background-color: var(--grey-4);

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 800px) {
    justify-content: space-between;
  }
`
