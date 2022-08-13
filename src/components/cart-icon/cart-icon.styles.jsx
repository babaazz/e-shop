import styled from "styled-components";
import { ReactComponent as BagIcon } from "../../assets/shopping-icon.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(BagIcon)`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 3px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 17px;
  font-weight: 400;
  bottom: 14px;
`;

// .cart-icon-container {
//   width: 45px;
//   height: 45px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;

//   .shopping-icon {
//     position: absolute;
//     width: 30px;
//     height: 30px;
//     top: 3px;
//   }

//   .item-count {
//     position: absolute;
//     font-size: 5px;
//     font-weight: bold;
//     top: -10px;
//     left: -10px;
//   }
// }
