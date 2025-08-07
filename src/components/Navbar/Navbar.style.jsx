import { NavLink as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #1f1f1f;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index: 10;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Brand = styled(RouterLink)`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(RouterLink)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 40px;
  cursor: pointer;
  border: 1px solid #ffffff;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  font-size: 16px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background-color: #ffffff;
    color: #1f1f1f;
  }
`;
