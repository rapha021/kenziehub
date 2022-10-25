import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;

  .modal-block {
    width: 90%;
    max-width: 370px;
    height: 360px;

    display: flex;
    flex-direction: column;

    gap: 26px;

    background-color: var(--grey-3);
    border-radius: 4px;

    .modal-header {
      width: 100%;
      max-width: calc(100% - 20px);
      height: 40px;

      padding: 0 10px;

      border-radius: 4px 4px 0 0;
      background-color: var(--grey-2);

      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        margin: 0;
      }
    }
    form {
      width: 100%;
      height: 300px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      gap: 26px;
    }
  }
`
