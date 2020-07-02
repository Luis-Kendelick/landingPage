import styled from 'styled-components';

export const Cards = styled.div`
  display: flex;
  justify-content: center;

  margin: 5vmax 0;

  .card-content {
    width: 80vw;
    height: 30vmax;
    background-color: transparent;
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: 1000px) {
      justify-content: flex-start;
      display: flex;
      flex-direction: column;
      height: 130vw;
      width: 80vw;
    }
  }

  .major-card {
    height: 95%;
    width: 30%;
    background-color: blue;

    @media only screen and (max-width: 1000px) {
      height: 90vw;
      width: 80vw;
    }
  }

  .minor-cards {
    height: 95%;
    width: 65%;

    background-color: yellow;

    @media only screen and (max-width: 1000px) {
      height: 30vw;
      width: 80vw;
    }
    @media only screen and (max-width: 700px) {
      height: 50vw;
      width: 80vw;
    }
  }
`;
