import React from 'react';
import styled from 'styled-components'; // Install styled-components if not already done

// Styled component for the container
const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height for centering */
  background-color: #f9f9f9; /* Light background color */
  padding: 20px;
  text-align: center;
`;

const SuccessMessage = styled.h1`
  font-size: 2rem;
  color: #28a745; /* Green color for success */
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555; /* Dark grey for description */
`;

// The Checkout Success component
const PurchaseSuccess = () => {
  return (
    <SuccessContainer>
      <SuccessMessage>Purchase Successful</SuccessMessage>
      <Description>Your order has been placed successfully!</Description>
      <Description>Thank you for shopping with us.</Description>
      {/* You can add more details or buttons if needed */}
    </SuccessContainer>
  );
};

export default PurchaseSuccess;
