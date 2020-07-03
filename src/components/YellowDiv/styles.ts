import styled from 'styled-components';

export const Yellow = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #d49b00;
  border-radius: 0 25px 0 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    border-radius: 25px 0 0 0;
  }

  #gosta {
    vertical-align: middle;
    line-height: 20px;
    font-size: 25px;
    display: inline-block;
    background-color: transparent;
    color: white;
    p {
      font-weight: bolder;
      @media screen and (max-width: 1000px) {
        max-height: 610px;
      }
    }
  }
  #hash {
    line-height: 20px;
    font-size: 25px;
    position: relative;

    background-color: transparent;
    color: white;
    color: #5e5626;

    @media screen and (max-width: 1000px) {
      float: top;
    }
    strong {
      text-align: left;
      font-weight: bold;
      display: table-cell;
      vertical-align: middle;
    }
  }
`;
