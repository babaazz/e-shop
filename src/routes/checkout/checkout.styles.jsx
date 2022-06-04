import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 70vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  font-size: 1.25rem;
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:nth-child(2) {
    margin-left: 3rem;
  }

  &:last-child {
    width: 8%;
  }
`;

export const TotalDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  margin-left: auto;
  font-size: 36px;
`;

// .checkout-container {
//   width: 70vw;
//   min-height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 50px auto 0;

//   .checkout-header {
//     font-size: 1.25rem;
//     width: 100%;
//     padding: 1.5rem 0;
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px solid darkgrey;

//     .header-block {
//       text-transform: capitalize;
//       width: 23%;
//       &:nth-child(2) {
//         margin-left: 3rem;
//       }

//       &:last-child {
//         width: 8%;
//       }
//     }
//   }

//   .total {
//     margin-top: 30px;
//     margin-bottom: 40px;
//     margin-left: auto;
//     font-size: 36px;
//   }
// }
