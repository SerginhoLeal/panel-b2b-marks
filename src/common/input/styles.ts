import { styled, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 5px 0;

  align-items: center;

  width: 400px;
  min-height: 50px;

  box-shadow: 1px 1px 5px #DEDEDE;

  span {
    width: 1px;
    height: 20px;

    background-color: #DEDEDE;
  }
`;

export const ContainerSvg = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
`;

export const InputStyles = styled.input`
  border: 0;

  width: 100%;
  height: 100%;

  padding: 0 15px;

  color: #47474D;
  outline: none;

  font-family: 'Poppins', sans-serif;
`;

// export const Button = styled.button`
//   border: 0;

//   width: 40px;

//   background-color: #fff;
  
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   cursor: pointer;

//   opacity: .5;

//   svg {
//     margin: 15px;
//     width: 35px;
//   }
// `;