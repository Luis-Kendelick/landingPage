import styled from 'styled-components';

export const Drafts = styled.div`
  position: relative;
  margin: 25vh auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  width: 70%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  div {
    width: 40%;
    height: 95%;

    margin: auto 0;

    background-color: black;

    border-radius: 25px;
  }

  img {
  }
  span {
    width: 58%;
    height: 95%;
    margin: auto 0;
    background-color: red;
  }
`;
