import styled from "styled-components"

export const Header = styled.div`
  width: 100%;
  max-width: 370px;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 370px;
  height: max-content;

  margin: 30px 0;
  padding: 20px 0;

  border-radius: 4px;
  background-color: var(--grey-3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 90%;
    height: max-content;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;

    p {
      text-align: center;
      width: 50%;
    }
  }
`
