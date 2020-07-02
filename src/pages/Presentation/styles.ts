import styled from 'styled-components';
import dragger from '../../assets/dragger.png';

export const RespHeader = styled.header`
  position: absolute;
  display: flex;

  height: 60px;
  width: 100vw;

  border-bottom: 1px solid white;
  top: -100px;

  transition: 700ms;

  @media only screen and (max-width: 1000px) {
    position: relative;
    top: 0;
  }

  button {
    position: absolute;
    display: flex;
    width: 30px;
    height: 30px;

    left: 0%;
    margin: 15px 0 auto 30px;
    border: 0;

    background: url(${dragger});
    background-size: 100%;
    background-color: transparent;
    border-radius: 3px;

    transition: 400ms;

    &:hover {
      background-color: rgba(50, 50, 50, 0.2);
    }
  }

  img {
    display: flex;
    justify-content: center;
    height: 50%;
    margin: 15px auto 0 auto;
  }
`;
export const Header = styled.a`
  height: 4vmax;
  display: flex;
  justify-content: center;
  margin-top: 2vmax;

  img {
    height: 80%;
    max-width: 368px;
    max-height: 368px;
    @media screen and (max-width: 1000px) {
      max-width: 200px;
    }
  }
`;
