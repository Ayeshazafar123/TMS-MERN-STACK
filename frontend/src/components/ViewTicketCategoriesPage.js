

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  // Drawer,
  // List,
  // ListItem,
  // ListItemText,
  Typography,
  Box,
  // Collapse,
  Button,
} from '@mui/material';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';
import DeleteCategoryDialog from './DeleteCategoryDialog';
import Sidebar from './SideBar';

const ViewTicketCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // const [setActiveMenuItem] = useState(null);

  // const [ticketManagementOpen, setTicketManagementOpen] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);

  // const handleMenuItemClick = (item) => {
  //   if (item === 'Ticket Management') {
  //     setTicketManagementOpen(!ticketManagementOpen);
  //   } else {
  //     setActiveMenuItem(item);
  //     setTicketManagementOpen(false);
  //   }
  // };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/ticket/ticket-categories');
      setCategories(response.data);
    } catch (err) {
      const errorMessage = err.response
        ? `Error fetching categories: ${err.response.data.error || err.message}`
        : 'Unexpected error: ' + err.message;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDeleteSuccess = (id) => {
    setCategories(categories.filter(category => category._id !== id));
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar style={{
        width:'370px',
      }}/>
      {/* <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': { backgroundColor: '#0F67B1' },
        }}
      >
        <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', padding: '16px' }}>
          TMS
        </Typography>
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
                <ListItemText
                  primary={<span style={{ color: activeMenuItem === text ? '#16325B' : 'white' }}>{text}</span>}
                />
                {text === 'Ticket Management' ? (
                  ticketManagementOpen ? <ExpandLess /> : <ExpandMore />
                ) : null}
              </ListItem>
              <Collapse
                in={ticketManagementOpen && text === 'Ticket Management'}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {['Create Ticket', 'View Ticket', 'Update Ticket', 'Delete Ticket'].map((option) => (
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
      </Drawer> */}
      <div style={{ padding: '20px', width: 'calc(100% - 370px)' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#16325B', borderBottom: '2px solid #16325B' }}>
          View Ticket Categories
        </Typography>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {categories.map((category, index) => (
            <Box
              key={category._id}
              sx={{
                backgroundColor: index % 2 === 0 ? '#E5D9F2' : '#EECAD5', // Even: purple, Odd: peach
                borderRadius: '16px',
                padding: '16px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                width: 'calc(20% - 16px)', // Five boxes per row
                aspectRatio: '1 / 1', // Maintain square shape
              }}
            >
              <Typography
                variant="h6"
                style={{
                  background: index % 2 === 0 ? '#624E88' : '#C96868', // Even: purple, Odd: peach
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                  textTransform: 'uppercase', // Capitalize the category name
                }}
              >
                {category.category_Name}
              </Typography>
              <hr style={{ border: '1px solid white', margin: '10px 0' }} />
              <Typography
                variant="body2"
                style={{
                  color: index % 2 === 0 ? '#624E88' : '#C96868', // for odd it is purple shade, and for even it is peach.
                }}
              >
                {category.category_Description}
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: '8px', fontStyle: 'italic', color: index % 2 === 0 ? '#624E88' : '#C96868', }} // Deep pink for date
              >
                Created Date: {new Date(category.createdAt).toLocaleDateString()}
              </Typography>
              <Button
                component={Link}
                to={`/admin/update-ticket/${category._id}`}
                variant="contained"
                style={{
                  marginTop: '10px',
                  // backgroundColor: '#694F8E', // Custom green color for update
                  backgroundColor: index % 2 === 0 ? '#624E88' : '#C96868',
                  color: 'white', // White text color
                  fontWeight: 'bold',
                }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                style={{
                  marginLeft: '10px',
                  marginTop: '10px',
                  backgroundColor: '#800000', // Custom red color for delete
                  color: 'white', // White text color
                  fontWeight: 'bold',
                }}
                onClick={() => setCategoryIdToDelete(category._id)}
              >
                Delete
              </Button>
            </Box>
          ))}
        </div>
        {categoryIdToDelete && (
          <DeleteCategoryDialog
            categoryId={categoryIdToDelete}
            onDelete={handleDeleteSuccess}
            onClose={() => setCategoryIdToDelete(null)}
          />
        )}
      </div>
    </div>
  );
};


export default ViewTicketCategoriesPage;
