import styled from 'styled-components';

export const CardsStyle = styled.a`
  position: relative;
  display: flex;

  width: 100%;
  height: 100%;
  background: white;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 2px 2px 10px grey;
  cursor: pointer;
  transition: 400ms;

  &:active {
    opacity: 0.6;
  }

  .plus {
    display: flex;
    width: 100%;
    height: 90%;
    justify-content: flex-end;
  }

  img:nth-child(1) {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
  img:nth-child(2) {
    width: 10%;
    height: 10%;
    opacity: 0.4;
    position: absolute;
    bottom: 10%;
    border-radius: 25px 0 25px 0;
    transition: 400ms;

    &:hover {
      opacity: 0.8;
    }
  }

  .legend {
    display: flex;
    width: 100%;
    height: 13%;
  }
  p {
    font-size: 2vh;
    line-height: 100%;
    margin-right: 60%;
    color: grey;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 0 0 25px 25px;
  }
`;
