import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material'; // Import icons for dropdown

const CreateTicketCategoryPage = () => {
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [ticketManagementOpen, setTicketManagementOpen] = useState(false); // State for dropdown

  const handleMenuItemClick = (item) => {
    if (item === 'Ticket Management') {
      setTicketManagementOpen(!ticketManagementOpen); // Toggle dropdown
    } else {
      setActiveMenuItem(item);
      setTicketManagementOpen(false); // Close dropdown for other items
    }
  };

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
      <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0, '& .MuiDrawer-paper': { backgroundColor: '#0F67B1' } }}>
        <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', padding: '16px' }}>TMS</Typography>
        <List>
          {['Ticket Management', 'Settings', 'User Ticket Management', 'Log Out'].map((text) => (
            <div key={text}>
              <ListItem
                button
                onClick={() => handleMenuItemClick(text)}
                style={{
                  backgroundColor: activeMenuItem === text ? '#FFDC7F' : 'transparent',
                  color: activeMenuItem === text ? '#16325B' : 'white',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginBottom: '5px',
                }}
              >
                <ListItemText primary={<span style={{ color: activeMenuItem === text ? '#16325B' : 'white' }}>{text}</span>} />
                {text === 'Ticket Management' ? (ticketManagementOpen ? <ExpandLess /> : <ExpandMore />) : null}
              </ListItem>
              <Collapse in={ticketManagementOpen && text === 'Ticket Management'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {['Create Ticket', 'View Ticket', 'Update Ticket', 'Delete Ticket'].map(option => (
                    <ListItem
                      button
                      key={option}
                      style={{
                        backgroundColor: '#0F67B1',
                        color: 'white',
                        marginLeft: '20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginBottom: '5px',
                      }}
                      component={Link}
                      to={getRouteForOption(option)}
                      onClick={() => setActiveMenuItem(option)}
                    >
                      <ListItemText primary={<span style={{ color: 'white' }}>{option}</span>} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Drawer>
      <div style={{ marginLeft: 240, padding: '20px', width: '400px', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#16325B' }}>Create Ticket Category</Typography>
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
          <Button type="submit" variant="contained" color="primary">Create Category</Button>
        </form>
        {/* Dialog for feedback messages */}
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
  );
};

const getRouteForOption = (option) => {
    switch (option) {
      case 'Create Ticket':
        return '/admin/create-category';
      case 'View Ticket':
        return '/admin/view-category';
      case 'Update Ticket':
        return '/admin/update-ticket';
      case 'Delete Ticket':
        return '/admin/delete-ticket';
      default:
        return '/admin/dashboard'; // Fallback route
    }
  };

export default CreateTicketCategoryPage;
