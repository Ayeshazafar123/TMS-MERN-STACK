// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   Box,
//   Collapse,
// } from '@mui/material';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';

// const ViewTicketCategoriesPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activeMenuItem, setActiveMenuItem] = useState(null);
//   const [ticketManagementOpen, setTicketManagementOpen] = useState(false);

//   const handleMenuItemClick = (item) => {
//     if (item === 'Ticket Management') {
//       setTicketManagementOpen(!ticketManagementOpen); // Toggle dropdown
//     } else {
//       setActiveMenuItem(item);
//       setTicketManagementOpen(false); // Close dropdown for other items
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/ticket/ticket-categories');
//       setCategories(response.data);
//     } catch (err) {
//       setError('Error fetching categories: ' + (err.response?.data?.error || 'Unexpected error'));
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   return (
//     <div style={{ display: 'flex' }}>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: 240,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': { backgroundColor: '#0F67B1' },
//         }}
//       >
//         <Typography
//           variant="h5"
//           style={{ color: 'white', fontWeight: 'bold', padding: '16px' }}
//         >
//           TMS
//         </Typography>
//         <List>
//           {['Ticket Management', 'Settings', 'User Ticket Management', 'Log Out'].map((text) => (
//             <div key={text}>
//               <ListItem
//                 button
//                 onClick={() => handleMenuItemClick(text)}
//                 style={{
//                   backgroundColor: activeMenuItem === text ? '#FFDC7F' : 'transparent',
//                   color: activeMenuItem === text ? '#16325B' : 'white',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   marginBottom: '5px',
//                 }}
//               >
//                 <ListItemText
//                   primary={<span style={{ color: activeMenuItem === text ? '#16325B' : 'white' }}>{text}</span>}
//                 />
//                 {text === 'Ticket Management' ? (
//                   ticketManagementOpen ? <ExpandLess /> : <ExpandMore />
//                 ) : null}
//               </ListItem>
//               <Collapse
//                 in={ticketManagementOpen && text === 'Ticket Management'}
//                 timeout="auto"
//                 unmountOnExit
//               >
//                 <List component="div" disablePadding>
//                   {['Create Ticket', 'View Ticket', 'Update Ticket', 'Delete Ticket'].map((option) => (
//                     <ListItem
//                       button
//                       key={option}
//                       style={{
//                         backgroundColor: '#0F67B1',
//                         color: 'white',
//                         marginLeft: '20px',
//                         borderRadius: '5px',
//                         cursor: 'pointer',
//                         marginBottom: '5px',
//                       }}
//                       component={Link}
//                       to={getRouteForOption(option)}
//                       onClick={() => setActiveMenuItem(option)}
//                     >
//                       <ListItemText primary={<span style={{ color: 'white' }}>{option}</span>} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Collapse>
//             </div>
//           ))}
//         </List>
//       </Drawer>
//       <div style={{ padding: '20px', width: '100%' }}>
//         <Typography variant="h4" gutterBottom style={{ color: '#16325B' }}>
//           View Ticket Categories
//         </Typography>
//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//         <div>
//           {categories.map((category, index) => (
//             <Box
//               key={category.category_Id}
//               sx={{
//                 backgroundColor: index % 2 === 0 ? '#FEF9D9' : '#ECF9FF',
//                 borderRadius: '8px',
//                 padding: '16px',
//                 marginBottom: '16px',
//                 boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//                 maxWidth: '400px',
//                 height: 'auto', // Adjust height if needed
//               }}
//             >
//               <Typography variant="h6" style={{ fontWeight: 'bold' }}>
//                 {category.category_Name}
//               </Typography>
//               <Typography variant="body2">{category.category_Description}</Typography>
//               <Typography
//                 variant="body2"
//                 style={{ marginTop: '8px', fontStyle: 'italic', color: '#666' }}
//               >
//                 Created Date: {new Date(category.createdAt).toLocaleDateString()}
//               </Typography>
//             </Box>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const getRouteForOption = (option) => {
//   switch (option) {
//     case 'Create Ticket':
//       return '/admin/create-category';
//     case 'View Ticket':
//       return '/admin/view-category';
//     case 'Update Ticket':
//       return '/admin/update-ticket';
//     case 'Delete Ticket':
//       return '/admin/delete-ticket';
//     default:
//       return '/admin/dashboard'; // Fallback route
//   }
// };

// export default ViewTicketCategoriesPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Collapse,
  Button,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const ViewTicketCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [ticketManagementOpen, setTicketManagementOpen] = useState(false);

  const handleMenuItemClick = (item) => {
    if (item === 'Ticket Management') {
      setTicketManagementOpen(!ticketManagementOpen);
    } else {
      setActiveMenuItem(item);
      setTicketManagementOpen(false);
    }
  };

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

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
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
      </Drawer>
      <div style={{ padding: '20px', width: '100%' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#16325B' }}>
          View Ticket Categories
        </Typography>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
          {categories.map((category, index) => (
            <Box
              key={category.category_Id}
              sx={{
                backgroundColor: index % 2 === 0 ? '#FEF9D9' : '#ECF9FF',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                maxWidth: '400px',
              }}
            >
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                {category.category_Name}
              </Typography>
              <Typography variant="body2">{category.category_Description}</Typography>
              <Typography
                variant="body2"
                style={{ marginTop: '8px', fontStyle: 'italic', color: '#666' }}
              >
                Created Date: {new Date(category.createdAt).toLocaleDateString()}
              </Typography>
              <Button
                component={Link}
                to={`/admin/update-ticket/${category._id}`}
                variant="contained"
                color="primary"
                style={{ marginTop: '10px' }}
                >
                Update
                </Button>



            </Box>
          ))}
        </div>
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

export default ViewTicketCategoriesPage;
