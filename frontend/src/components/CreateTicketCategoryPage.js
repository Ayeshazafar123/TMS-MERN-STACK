

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import Sidebar from './SideBar'; // Import Sidebar

const CreateTicketCategoryPage = () => {
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const validateForm = () => {
    const errors = {};
    if (!categoryId) errors.categoryId = 'Category ID is required.';
    if (!categoryName) errors.categoryName = 'Category Name is required.';
    if (!categoryDescription) errors.categoryDescription = 'Category Description is required.';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setDialogMessage(Object.values(errors).join(' '));
      setDialogOpen(true);
      return;
    }

    try {
      await axios.post('http://localhost:5000/ticket/ticket-categories/create', {
        category_Id: categoryId,
        category_Name: categoryName,
        category_Description: categoryDescription,
        isActive,
      });
      setDialogMessage('Category created successfully!');
      setDialogOpen(true);
      setCategoryId('');
      setCategoryName('');
      setCategoryDescription('');
      setIsActive(false);
    } catch (err) {
      setDialogMessage('Error creating category: ' + (err.response?.data?.error || 'Unexpected error'));
      setDialogOpen(true);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar style={{ width: '300px' }} /> {/* Set the Sidebar width here */}
      <div style={{ padding: '40px', width: 'calc(100% - 370px)',  }}> {/* Adjust width of the main content */}
        <Typography variant="h4" gutterBottom style={{ color: '#16325B', borderBottom: '2px solid #16325B', textAlign: 'left', width: '100%' }}>
          Create Ticket Category
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '400px' }}> {/* Set the width of the form */}
            <form onSubmit={handleSubmit}>
              <TextField
                label="Category ID"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
                margin="normal"
                fullWidth
              />
              <TextField
                label="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
                margin="normal"
                fullWidth
              />
              <TextField
                label="Category Description"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                required
                margin="normal"
                fullWidth
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    color="primary"
                  />
                }
                label="Is Active"
              />
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                Create Category
              </Button>
            </form>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} PaperProps={{ style: { borderRadius: '8px' } }}>
              <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', color: '#16325B' }}>Form Validation</DialogTitle>
              <DialogContent>
                <Typography style={{ color: '#16325B', textAlign: 'center' }}>{dialogMessage}</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setDialogOpen(false)} color="primary">Close</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicketCategoryPage;
