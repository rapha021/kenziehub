import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .list-header {
    width: 90%;
    max-width: 780px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const SubHeader = styled.div`
  width: 100%;
  height: 131px;

  border: 2px solid var(--grey-3);
  border-right: 0;
  border-left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .infos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 800px) {
    .infos {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      max-width: 780px;
    }
  }
`
export const List = styled.ul`
  padding: 0;
  margin: 0;

  width: 90%;
  max-width: 750px;
  padding: 15px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  background-color: var(--grey-3);
  list-style: none;

  li {
    width: 90%;
    height: 50px;

    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    border-radius: 4px;
    background-color: var(--grey-4);

    transition: all 250ms;
    &:hover {
      background-color: var(--grey-2);
    }
  }
`
