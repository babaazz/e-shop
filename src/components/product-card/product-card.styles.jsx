import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: center;
    position: relative;

    img {
      width: 100%;
      height: 95%;
      object-fit: cover;
      margin-bottom: 5px;
    }

    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 380px;
      display: none;
    }

    &:hover {
      img {
        opacity: 0.8;
      }

      button {
        opacity: 0.85;
        display: flex;
      }
`;

export const ProductFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

// .product-card-container {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 500px;
//   align-items: center;
//   position: relative;

//   img {
//     width: 100%;
//     height: 95%;
//     object-fit: cover;
//     margin-bottom: 5px;
//   }

//   button {
//     width: 80%;
//     opacity: 0.7;
//     position: absolute;
//     top: 380px;
//     display: none;
//   }

//   &:hover {
//     img {
//       opacity: 0.8;
//     }

//     button {
//       opacity: 0.85;
//       display: flex;
//     }
//   }

//   .product-footer {
//     width: 100%;
//     height: 5%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 18px;

//     .name {
//       width: 90%;
//       margin-bottom: 15px;
//     }

//     .price {
//       width: 10%;
//     }
//   }
// }
