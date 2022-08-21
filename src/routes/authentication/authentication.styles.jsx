import styled from "styled-components";

export const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  gap: 7rem;
  margin: 5rem auto;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
  }
`;
