import { FiShoppingCart } from 'react-icons/fi';
import { Nav, Brand, NavMenu, NavLink } from './Navbar.style';

const Navbar = () => {
  return (
    <Nav>
      <Brand to="/">Marvelous React</Brand>

      <NavMenu>
        <NavLink to="/carrinho">
          <FiShoppingCart style={{ marginRight: '8px' }} />
          Carrinho
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
