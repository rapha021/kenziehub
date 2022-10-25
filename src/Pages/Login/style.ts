import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 370px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  form {
    width: 100%;
    height: 500px;

    border-radius: 4px;
    background-color: var(--grey-3);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .form__login-container {
      width: 90%;

      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 20px;
      margin-bottom: 20px;
    }

    .form__register-container {
      width: 90%;
      text-align: center;

      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`
