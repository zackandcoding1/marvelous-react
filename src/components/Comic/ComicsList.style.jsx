import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 900px;
  margin: 0 auto;
  gap: 20px;
  padding: 20px;
  justify-content: center;
`;