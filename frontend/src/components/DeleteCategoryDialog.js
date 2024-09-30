
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
