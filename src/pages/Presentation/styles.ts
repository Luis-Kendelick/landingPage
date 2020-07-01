import styled from 'styled-components';

export const Title = styled.div`
  position: relative;
  margin: 25vh auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  width: 70vmax;
  height: 25vmax;
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  .show {
    width: 40%;
    height: 95%;
    margin: auto 0;
  }
  .choose {
    display: flex;
    width: 58%;
    height: 95%;
    margin: auto 0;
  }
`;
