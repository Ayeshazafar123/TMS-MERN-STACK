// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { TextField, Button, Typography } from '@mui/material';

// // const UpdateTicketCategoryForm = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
  
// //   const [categoryData, setCategoryData] = useState({
// //     category_Id: '',
// //     category_Name: '',
// //     category_Description: '',
// //     isActive: true,
// //   });

// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchCategoryData = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:5000/ticket/ticket-categories/${id}`);
// //         setCategoryData(response.data);
// //       } catch (err) {
// //         setError('Error fetching category data: ' + (err.response?.data?.error || 'Unexpected error'));
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCategoryData();
// //   }, [id]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setCategoryData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.put(`http://localhost:5000/ticket/ticket-categories/${id}`, categoryData);
// //       navigate('/admin/view-category'); // Redirect after update
// //     } catch (err) {
// //       setError('Error updating category: ' + (err.response?.data?.error || 'Unexpected error'));
// //     }
// //   };

// //   const handleDelete = async () => {
// //     try {
// //       await axios.delete(`http://localhost:5000/ticket/ticket-categories/${id}`);
// //       navigate('/admin/view-category'); // Redirect after deletion
// //     } catch (err) {
// //       setError('Error deleting category: ' + (err.response?.data?.error || 'Unexpected error'));
// //     }
// //   };

// //   return (
// //     <div>
// //       <Typography variant="h4" gutterBottom>
// //         Update Ticket Category
// //       </Typography>
// //       {loading && <p>Loading...</p>}
// //       {error && <p>{error}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <TextField
// //           label="Category ID"
// //           name="category_Id"
// //           value={categoryData.category_Id}
// //           onChange={handleChange}
// //           fullWidth
// //           margin="normal"
// //           disabled // ID should not be editable
// //         />
// //         <TextField
// //           label="Category Name"
// //           name="category_Name"
// //           value={categoryData.category_Name}
// //           onChange={handleChange}
// //           fullWidth
// //           margin="normal"
// //         />
// //         <TextField
// //           label="Description"
// //           name="category_Description"
// //           value={categoryData.category_Description}
// //           onChange={handleChange}
// //           fullWidth
// //           margin="normal"
// //           multiline
// //           rows={4}
// //         />
// //         <div>
// //           <label>
// //             Active:
// //             <input
// //               type="checkbox"
// //               name="isActive"
// //               checked={categoryData.isActive}
// //               onChange={() => setCategoryData((prevData) => ({ ...prevData, isActive: !prevData.isActive }))}
// //             />
// //           </label>
// //         </div>
// //         <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>
// //           Update
// //         </Button>
// //         <Button variant="contained" color="secondary" onClick={handleDelete}>
// //           Delete
// //         </Button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UpdateTicketCategoryForm;




// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { TextField, Button, Typography, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

// const UpdateTicketCategoryForm = () => {
//   const { id } = useParams();
//   const [category, setCategory] = useState({ category_Name: '', category_Description: '', isActive: true });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [openDialog, setOpenDialog] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/ticket/ticket-categories/${id}`);
//         setCategory(response.data);
//       } catch (err) {
//         setError('Error fetching category: ' + (err.response?.data?.error || 'Unexpected error'));
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCategory();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCategory((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setOpenDialog(true); // Open the confirmation dialog
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleConfirmUpdate = async () => {
//     try {
//       const token = localStorage.getItem('token'); // Retrieve the token from local storage
//       await axios.put(`http://localhost:5000/ticket/ticket-categories/${id}`, category, {
//         headers: {
//           'Authorization': `Bearer ${token}`,  // Add the token to the request headers
//         },
//       });
//       navigate('/admin/view-category');
//     } catch (err) {
//       setError('Error updating category: ' + (err.response?.data?.error || 'Unexpected error'));
//     }
//     setOpenDialog(false); // Close the dialog after the operation
//   };
  

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3, border: '1px solid #ccc', borderRadius: '8px' }}>
//       <Typography variant="h5" gutterBottom>Update Ticket Category</Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField 
//           fullWidth 
//           name="category_Name" 
//           label="Category Name" 
//           value={category.category_Name} 
//           onChange={handleChange} 
//           required 
//           id="category-name"  // Added unique id
//         />
//         <TextField 
//           fullWidth 
//           name="category_Description" 
//           label="Category Description" 
//           value={category.category_Description} 
//           onChange={handleChange} 
//           multiline 
//           rows={4} 
//           required 
//           sx={{ mt: 2 }} 
//           id="category-description"  // Added unique id
//         />
//         <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Update</Button>
//       </form>

//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Confirm Update</DialogTitle>
//         <DialogContent>
//           <DialogContentText align="center">
//             Are you sure you want to update changes?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>
//           <Button onClick={handleCloseDialog} color="primary">No</Button>
//           <Button onClick={handleConfirmUpdate} color="primary" autoFocus>Yes</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default UpdateTicketCategoryForm;






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
        setError('Error fetching category: ' + (err.response?.data?.error || 'Unexpected error'));
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
