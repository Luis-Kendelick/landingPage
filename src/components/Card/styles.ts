import styled from 'styled-components';

export const Cards = styled.div`
  display: flex;
  justify-content: center;

  margin: 1.3vmax auto;

  .card-content {
    width: 80vw;
    height: 30vw;
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    color: grey;

    @media only screen and (max-width: 1000px) {
      justify-content: flex-start;
      display: flex;
      flex-direction: column;
      height: 130vw;
      width: 80vw;
    }
  }
`;

export const MajorCards = styled.div`
  height: 85%;
  width: 35%;
  background-color: white;
  border-radius: 25px 25px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 20px grey;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    height: 90vw;
    width: 80vw;
  }

  .image-container {
    position: relative;
    display: flex;
    height: 90%;
    width: 100%;
    box-sizing: border-box;

    .carro {
      height: 100%;
      width: 100%;
      border-radius: 25px;
      object-fit: cover;
    }

    .plus-container {
      position: absolute;
      height: 12%;
      bottom: 0;
      right: 0;

      .plus {
        height: 100%;
        border-radius: 25% 0 25% 0;
        background-color: white;
        opacity: 0.6;
        transition: 500ms;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  footer {
    width: 100%;
    height: 10%;
    position: relative;

    p {
      height: 50%;
      width: 100%;
      display: flex;
      position: absolute;
      align-content: space-between;
      left: 2%;
      font-size: 1.6vmax;
      @media only screen and (max-width: 1000px) {
        font-size: 4.5vmin;
      }
    }
  }
`;

export const MinorCards = styled.div`
  height: 100%;
  width: 50%;

  .ScrollContainer {
    height: 85%;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    color: grey;
    overflow-y: hidden;
    cursor: -webkit-grab;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media only screen and (max-width: 1000px) {
    height: 30vw;
    width: 80vw;
  }

  .scroll-container {
    height: 46%;
    width: 39%;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    box-shadow: 2px 1px 5px grey;
    border-radius: 10px;
    margin: 0 50px 2px 0;

    @media only screen and (max-width: 1000px) {
      height: 98%;
      width: 35%;
      margin: 0 50px 2px 0;
    }
    .image-container {
      position: relative;
      display: flex;
      height: 90%;
      width: 100%;

      .carro {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
      }

      .plus-container {
        position: absolute;
        height: 12%;
        bottom: 0;
        right: 0;

        .plus {
          height: 100%;
          border-radius: 25% 0 25% 0;
          background-color: white;
          opacity: 0.6;
          transition: 500ms;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
    footer {
      width: 100%;
      height: 100%;
      position: relative;
      display: block;

      p {
        display: flex;
        position: absolute;
        height: 10%;
        width: 100%;
        max-width: 210px;
        margin-top: 1%;
        margin-bottom: 1%;
        left: 4%;
        font-size: 1.8vmin;
        font-weight: bold;

        @media only screen and (max-width: 1000px) {
          font-size: 2.2vmin;
        }
      }
    }
  }
`;

export const ScrollButton = styled.div`
  width: 10%;
  height: 100%;
  background-color: black;

  @media only screen and (max-width: 1000px) {
    height: 0;
  }
`;
