import styled from "styled-components";

export const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  cursor: pointer;
  width: 250px;
  margin: 0 auto;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    display: block;
  }

  h3 {
    padding: 8px;
    font-size: 1rem;
    min-height: 40px;
  }
`;