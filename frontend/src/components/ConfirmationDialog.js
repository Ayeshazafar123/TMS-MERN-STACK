import React from 'react';
import styled from 'styled-components';

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Darker overlay for more contrast */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it is on top */
`;

const DialogContainer = styled.div`
  background: white;
  padding: 30px; /* Increased padding for a spacious look */
  border-radius: 10px; /* Slightly larger border radius */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Softer shadow */
  text-align: center;
  width: 400px; /* Set a fixed width */
`;

const Message = styled.p`
  font-size: 18px; /* Increased font size for better readability */
  margin-bottom: 20px; /* Add space between the message and buttons */
  color: #333; /* Darker text for better contrast */
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* Slightly larger font size */
  transition: background-color 0.3s, transform 0.2s; /* Transition effects for button */
  
  &:hover {
    transform: scale(1.05); /* Scale effect on hover */
  }

  &.confirm {
    background-color: #ff4757; /* Red for confirmation */
    color: white;
  }

  &.cancel {
    background-color: #7f8c8d; /* Grey for cancel */
    color: white;
  }
`;

const ConfirmationDialog = ({ onClose, onConfirm, message }) => {
  return (
    <DialogOverlay>
      <DialogContainer>
        <Message>{message}</Message>
        <Button className="confirm" onClick={onConfirm}>Yes, Delete</Button>
        <Button className="cancel" onClick={onClose}>Cancel</Button>
      </DialogContainer>
    </DialogOverlay>
  );
};

export default ConfirmationDialog;
