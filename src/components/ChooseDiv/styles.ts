import styled from 'styled-components';

export const Choose = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #d49b00;
  border-radius: 0 0 0 25px;
  @media only screen and (max-width: 1000px) {
    border-radius: 0 0 0 20px;
  }

  div {
    position: absolute;
    background-color: white;
    width: 100%;
    height: 70vh;
    border-radius: 0 25px 0 0;
    @media only screen and (max-width: 1000px) {
      max-height: 1100px;
      border-radius: 25px 0 0 25px;
      left: 35px;
    }
  }
`;
