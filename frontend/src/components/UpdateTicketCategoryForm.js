
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import axios from 'axios';

const UpdateTicketCategoryForm = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({ category_Name: '', category_Description: '', isActive: true });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const [ticketManagementOpen, setTicketManagementOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (item) => {
    if (item === 'Ticket Management') {
      setTicketManagementOpen(!ticketManagementOpen);
    } else {
      setActiveMenuItem(item);
      setTicketManagementOpen(false);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/ticket/ticket-categories/${id}`);
        setCategory(response.data);
      } catch (err) {
        setError('Error fetching category : ' + (err.response?.data?.error || 'Unexpected error'));
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/ticket/ticket-categories/${id}`, category, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      navigate('/admin/view-category');
    } catch (err) {
      setError('Error updating category: ' + (err.response?.data?.error || 'Unexpected error'));
    }
    setOpenDialog(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: 'flex' }}>
      <Drawer variant="permanent" sx={{ 
        width: 240, flexShrink: 0, 
        '& .MuiDrawer-paper': { backgroundColor: '#0F67B1' } }}>
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
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#16325B', width: '100%', textAlign: 'left', borderBottom: '2px solid #16325B', paddingBottom: '20px' }}>
          Update Ticket Category
        </Typography>
        <Box sx={{ maxWidth: 400, width: '100%', mx: 'auto', mt: 4, p: 3, border: '1px solid #ccc', borderRadius: '8px' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="category_Name"
              label="Category Name"
              value={category.category_Name}
              onChange={handleChange}
              required
              id="category-name"
            />
            <TextField
              fullWidth
              name="category_Description"
              label="Category Description"
              value={category.category_Description}
              onChange={handleChange}
              multiline
              rows={4}
              required
              sx={{ mt: 2 }}
              id="category-description"
            />
            <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Update</Button>
          </form>

          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Confirm Update</DialogTitle>
            <DialogContent>
              <DialogContentText align="center">
                Are you sure you want to update changes?
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>
              <Button onClick={handleCloseDialog} color="primary">No</Button>
              <Button onClick={handleConfirmUpdate} color="primary" autoFocus>Yes</Button>
            </DialogActions>
          </Dialog>
        </Box>
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
      return '/admin/dashboard';
  }
};

export default UpdateTicketCategoryForm;
