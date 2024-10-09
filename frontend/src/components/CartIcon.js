import React from 'react';
import { useCart } from '../context/CartContext'; // Adjust the path as needed
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  padding: 10px;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #ff0000;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 0.8rem;
`;

const CartIcon = () => {
  const { cart } = useCart(); // Access the cart from context
  const token = localStorage.getItem('token'); // Retrieve the token from local storage
  let userId = '';

  // Function to extract user ID from token
  const getUserIdFromToken = (token) => {
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload.id; // Adjust if the user ID has a different key
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  // Get the user ID from the token
  userId = getUserIdFromToken(token);

  // Construct the cart link dynamically
  const cartLink = userId ? `/cart/${userId}` : '/cart'; // Fallback if userId is not found

  return (
    <Link to={cartLink} style={{ textDecoration: 'none' }}>
      <CartContainer>
        <FaShoppingCart style={{ width: '30px', height: '30px' }} />
        {cart.length > 0 && <CartBadge>{cart.reduce((acc, item) => acc + item.quantity, 0)}</CartBadge>}
      </CartContainer>
    </Link>
  );
};

export default CartIcon;
