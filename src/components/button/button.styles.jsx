import styled from "styled-components";

export const DefaultButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 2rem;
  font-size: 1.3rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(DefaultButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(DefaultButton)`
  background-color: #f4f4f4;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: #f4f4f4;
    border: none;
  }
`;

// .button-container {
//   min-width: 165px;
//   width: auto;
//   height: 50px;
//   letter-spacing: 0.5px;
//   line-height: 50px;
//   padding: 0 35px 0 35px;
//   font-size: 20px;
//   background-color: black;
//   color: white;
//   text-transform: uppercase;
//   font-family: "Open Sans Condensed";
//   font-weight: bolder;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;

//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//   }

//   &.google-sign-in {
//     background-color: #4285f4;
//     color: white;

//     &:hover {
//       background-color: #357ae8;
//       border: none;
//     }
//   }

//   &.inverted {
//     background-color: #f4f4f4;
//     color: black;
//     border: 1px solid black;

//     &:hover {
//       background-color: black;
//       color: #f4f4f4;
//       border: none;
//     }
//   }
// }
