// import React, { useState } from 'react';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
// import axios from 'axios';

// const DeleteCategoryDialog = ({ open, onClose, categoryId, onDelete }) => {
  
//   // Handler for confirming the deletion
//   const confirmDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/ticket/ticket-categories/${categoryId}`);
//       onDelete(categoryId); // Call the parent function to update the UI
//       onClose(); // Close the dialog
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         console.error('Category not found.');
//         // Display a user-friendly message here
//       } else {
//         console.error('Error deleting category:', error);
//       }
//     }
//   };
  

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle style={{ fontWeight: 'bold' }}>Confirm Deletion</DialogTitle>
//       <DialogContent>
//         <DialogContentText>
//           Are you sure you want to delete this category? This action cannot be undone.
//         </DialogContentText>
//       </DialogContent>
//       <DialogActions>
//         <Button style={{ fontWeight: 'bold' }} onClick={onClose} color="primary">
//           Cancel
//         </Button>
//         <Button style={{ fontWeight: 'bold' }} onClick={confirmDelete} color="secondary">
//           Delete
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default DeleteCategoryDialog;


import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import axios from 'axios';

const DeleteCategoryDialog = ({ categoryId, onDelete, onClose }) => {
    const confirmDelete = async () => {
        try {
          const token = localStorage.getItem('token'); // or however you store your token
          await axios.delete(`http://localhost:5000/ticket/ticket-categories/${categoryId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          onDelete(categoryId);
          onClose();
        } catch (error) {
          console.error('Error deleting category:', error.response ? error.response.data : error.message);
        }
      };
      

  return (
    <Dialog open={!!categoryId} onClose={onClose}>
      <DialogTitle style={{ fontWeight: 'bold' }}>Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this category? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button style={{ fontWeight: 'bold' }} onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button style={{ fontWeight: 'bold' }} onClick={confirmDelete} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteCategoryDialog;
