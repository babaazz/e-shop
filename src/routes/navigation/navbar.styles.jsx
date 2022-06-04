import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0 0 0;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 400;
`;

// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   padding: 1.5rem 0 0 0;
//   margin-bottom: 25px;

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//       font-size: 1.25rem;
//       font-weight: 400;
//     }
//   }
// }
