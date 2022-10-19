import styled, { createGlobalStyle } from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FatherDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default createGlobalStyle`
*, body{
    margin: 0;
    padding: 0;
}
body{
    width: 100%;
    height: 100vh;
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
`;
