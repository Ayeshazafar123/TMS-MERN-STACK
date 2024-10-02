// // Sidebar.js
// import React, { useState } from 'react';
// import {
//     Drawer,
//     Typography,
//     List,
//     ListItem,
//     ListItemText,
//     Collapse,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     Button,
// } from '@mui/material';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import { Link, useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//     const [activeMenuItem, setActiveMenuItem] = useState('');
//     const [ticketCategoryOpen, setTicketCategoryOpen] = useState(false);
//     const [ticketManagementOpen, setTicketManagementOpen] = useState(false);
//     const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleMenuItemClick = (text) => {
//         if (text === 'Ticket Category Management') {
//             setTicketCategoryOpen(!ticketCategoryOpen);
//             setActiveMenuItem(text);
//         } else if (text === 'Ticket Management') {
//             setTicketManagementOpen(!ticketManagementOpen);
//             setActiveMenuItem(text);
//         } else {
//             setActiveMenuItem(text);
//         }
//     };

//     const handleLogoutClick = () => {
//         setLogoutDialogOpen(true);
//     };

//     const handleCloseLogoutDialog = (confirm) => {
//         setLogoutDialogOpen(false);
//         if (confirm) {
//             navigate('/'); // Redirect to home page
//         }
//     };

//     const getRouteForOption = (option) => {
//         // Replace with your actual route mappings
//         switch (option) {
//             case 'Create Ticket':
//                 return '/admin/create-ticket';
//             case 'View Ticket':
//                 return '/tickets';
//             case 'Create Ticket Categ':
//                 return '/admin/create-category';
//             case 'View Ticket Categ':
//                 return '/admin/view-category';
//             default:
//                 return '/';
//         }
//     };

//     return (
//         <Drawer
//             variant="permanent"
//             sx={{
//                 width: 240,
//                 flexShrink: 0,
//                 '& .MuiDrawer-paper': { backgroundColor: '#0F67B1' },
//             }}
//         >
//             <Typography
//                 variant="h5"
//                 style={{
//                     color: 'white',
//                     fontWeight: 'bold',
//                     padding: '19px',
//                     width: '200px',
//                 }}
//             >
//                 TMS
//             </Typography>
//             <List>
//                 {/* Ticket Category Management */}
//                 <div>
//                     <ListItem
//                         button
//                         onClick={() => handleMenuItemClick('Ticket Category Management')}
//                         style={{
//                             backgroundColor: activeMenuItem === 'Ticket Category Management' ? '#FFDC7F' : 'transparent',
//                             color: activeMenuItem === 'Ticket Category Management' ? '#16325B' : 'white',
//                             borderRadius: '5px',
//                             cursor: 'pointer',
//                             marginBottom: '5px',
//                         }}
//                     >
//                         <ListItemText
//                             primary={<span style={{ color: activeMenuItem === 'Ticket Category Management' ? '#16325B' : 'white' }}>Ticket Category Management</span>}
//                         />
//                         {ticketCategoryOpen ? <ExpandLess /> : <ExpandMore />}
//                     </ListItem>
//                     <Collapse in={ticketCategoryOpen} timeout="auto" unmountOnExit>
//                         <List component="div" disablePadding>
//                             {['Create Ticket Categ', 'View Ticket Categ'].map(option => (
//                                 <ListItem
//                                     button
//                                     key={option}
//                                     style={{
//                                         backgroundColor: '#0F67B1',
//                                         color: 'white',
//                                         marginLeft: '20px',
//                                         borderRadius: '5px',
//                                         cursor: 'pointer',
//                                         marginBottom: '5px',
//                                     }}
//                                     component={Link}
//                                     to={getRouteForOption(option)}
//                                     onClick={() => setActiveMenuItem(option)}
//                                 >
//                                     <ListItemText primary={<span style={{ color: 'white' }}>{option}</span>} />
//                                 </ListItem>
//                             ))}
//                         </List>
//                     </Collapse>
//                 </div>

//                 {/* Ticket Management */}
//                 <div>
//                     <ListItem
//                         button
//                         onClick={() => handleMenuItemClick('Ticket Management')}
//                         style={{
//                             backgroundColor: activeMenuItem === 'Ticket Management' ? '#FFDC7F' : 'transparent',
//                             color: activeMenuItem === 'Ticket Management' ? '#16325B' : 'white',
//                             borderRadius: '5px',
//                             cursor: 'pointer',
//                             marginBottom: '5px',
//                         }}
//                     >
//                         <ListItemText
//                             primary={<span style={{ color: activeMenuItem === 'Ticket Management' ? '#16325B' : 'white' }}>Ticket Management</span>}
//                         />
//                         {ticketManagementOpen ? <ExpandLess /> : <ExpandMore />}
//                     </ListItem>
//                     <Collapse in={ticketManagementOpen} timeout="auto" unmountOnExit>
//                         <List component="div" disablePadding>
//                             {['Create Ticket', 'View Ticket'].map(option => (
//                                 <ListItem
//                                     button
//                                     key={option}
//                                     style={{
//                                         backgroundColor: '#0F67B1',
//                                         color: 'white',
//                                         marginLeft: '20px',
//                                         borderRadius: '5px',
//                                         cursor: 'pointer',
//                                         marginBottom: '5px',
//                                     }}
//                                     component={Link}
//                                     to={getRouteForOption(option)}
//                                     onClick={() => setActiveMenuItem(option)}
//                                 >
//                                     <ListItemText primary={<span style={{ color: 'white' }}>{option}</span>} />
//                                 </ListItem>
//                             ))}
//                         </List>
//                     </Collapse>
//                 </div>

//                 {/* Settings */}
//                 <ListItem
//                     button
//                     onClick={() => handleMenuItemClick('Settings')}
//                     style={{
//                         backgroundColor: activeMenuItem === 'Settings' ? '#FFDC7F' : 'transparent',
//                         color: activeMenuItem === 'Settings' ? '#16325B' : 'white',
//                         borderRadius: '5px',
//                         cursor: 'pointer',
//                         marginBottom: '5px',
//                     }}
//                 >
//                     <ListItemText primary={<span style={{ color: activeMenuItem === 'Settings' ? '#16325B' : 'white' }}>Settings</span>} />
//                 </ListItem>

//                 {/* Logout */}
//                 <ListItem
//                     button
//                     onClick={handleLogoutClick}
//                     style={{
//                         backgroundColor: 'transparent',
//                         color: 'white',
//                         borderRadius: '5px',
//                         cursor: 'pointer',
//                         marginBottom: '5px',
//                     }}
//                 >
//                     <ListItemText primary={<span style={{ color: 'white' }}>Log Out</span>} />
//                 </ListItem>
//             </List>

//             {/* Logout Confirmation Dialog */}
//             <Dialog
//                 open={logoutDialogOpen}
//                 onClose={() => handleCloseLogoutDialog(false)}
//             >
//                 <DialogTitle>Logout Confirmation</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         Are you sure you want to logout?
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button 
//                         onClick={() => handleCloseLogoutDialog(false)} 
//                         style={{ color: 'red' }} // Style for the "No" button
//                     >
//                         No
//                     </Button>
//                     <Button 
//                         onClick={() => handleCloseLogoutDialog(true)} 
//                         style={{ backgroundColor: '#FFDC7F', color: '#16325B' }} // Style for the "Yes" button
//                     >
//                         Yes
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </Drawer>
//     );
// };

// export default Sidebar;














// import React, { useState } from 'react';
// import { styled } from '@mui/system';
// import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText, Collapse } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // Styled components for Sidebar
// const SidebarContainer = styled('div')({
//     width: width ||'300px',
//     height: '100vh',
//     backgroundColor: '#3E92DB', // Blue background
//     padding: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     color: '#ffffff',
//     boxShadow: '2px 0 5px rgba(0,0,0,0.3)',
//     borderTopRightRadius: '15px',   // Rounded top-right corner
//     borderBottomRightRadius: '15px', // Rounded bottom-right corner
// });

// const SidebarHeader = styled(Typography)({
//     marginBottom: '20px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     textAlign: 'center',
// });

// const SidebarItem = styled('div')({
//     margin: '10px 0',
//     padding: '10px',
//     color: '#fff',
//     textDecoration: 'none',
//     fontSize: '18px',
//     cursor: 'pointer',
//     borderRadius: '4px',
//     transition: 'background-color 0.2s',
//     '&:hover': {
//         backgroundColor: '#54A3E3', // Light blue on hover
//         // backgroundColor:'red'
//     },
// });

// const DropdownList = styled(List)({
//     paddingLeft: '20px',
// });

// const DropdownItem = styled(ListItem)({
//     color: '#ffffff',
//     '&:hover': {
//         backgroundColor: '#54A3E3',
//         borderRadius:'4px'
//     },
// });

// const Sidebar = () => {
//     const navigate = useNavigate(); // Use navigate for routing
//     const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
//     const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
//     const [ticketDropdownOpen, setTicketDropdownOpen] = useState(false);

//     const handleNavigation = (option) => {
//         const path = switchNavigation(option);
//         navigate(path); // Use navigate for routing
//     };

//     const switchNavigation = (option) => {
//         switch (option) {
//             case 'Create Ticket Categ':
//                 return '/admin/create-category';
//             case 'View Ticket Categ':
//                 return '/admin/view-category';
//             case 'Create Ticket':
//                 return '/admin/create-ticket';
//             case 'View Ticket':
//                 return '/tickets';
//             case 'Settings':
//                 return '/settings';
//             default:
//                 return '/';
//         }
//     };

//     const handleLogoutConfirmation = (confirm) => {
//         if (confirm) {
//             console.log('Logging out...');
//             // Implement your logout logic here
//         }
//         setLogoutDialogOpen(false);
//     };

//     return (
//         <SidebarContainer>
//             <SidebarHeader variant="h6">Ticket Management System</SidebarHeader>

//             {/* Ticket Category Management Dropdown */}
//             <SidebarItem onClick={() => setCategoryDropdownOpen((prev) => !prev)}>
//                 Ticket Category Management {categoryDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </SidebarItem>
//             <Collapse in={categoryDropdownOpen} timeout="auto" unmountOnExit>
//                 <DropdownList component="div">
//                     <DropdownItem button onClick={() => handleNavigation('Create Ticket Categ')}>
//                         <ListItemText primary="Create Ticket Categ" />
//                     </DropdownItem>
//                     <DropdownItem button onClick={() => handleNavigation('View Ticket Categ')}>
//                         <ListItemText primary="View Ticket Categ" />
//                     </DropdownItem>
//                 </DropdownList>
//             </Collapse>

//             {/* Ticket Management Dropdown */}
//             <SidebarItem onClick={() => setTicketDropdownOpen((prev) => !prev)}>
//                 Ticket Management {ticketDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </SidebarItem>
//             <Collapse in={ticketDropdownOpen} timeout="auto" unmountOnExit>
//                 <DropdownList component="div">
//                     <DropdownItem button onClick={() => handleNavigation('Create Ticket')}>
//                         <ListItemText primary="Create Ticket" />
//                     </DropdownItem>
//                     <DropdownItem button onClick={() => handleNavigation('View Ticket')}>
//                         <ListItemText primary="View Ticket" />
//                     </DropdownItem>
//                 </DropdownList>
//             </Collapse>

//             <SidebarItem onClick={() => handleNavigation('Settings')}>Settings</SidebarItem>
//             <SidebarItem onClick={() => setLogoutDialogOpen(true)}>Logout</SidebarItem>

//             {/* Logout Confirmation Dialog */}
//             <Dialog open={logoutDialogOpen} onClose={() => setLogoutDialogOpen(false)}>
//                 <DialogTitle>Logout Confirmation</DialogTitle>
//                 <DialogContent>
//                     Are you sure you want to logout?
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => handleLogoutConfirmation(true)} style={{ color: 'green' }}>
//                         Yes
//                     </Button>
//                     <Button onClick={() => handleLogoutConfirmation(false)} style={{ color: 'red' }}>
//                         No
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </SidebarContainer>
//     );
// };

// export default Sidebar;









import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';

// Styled components for Sidebar
const SidebarContainer = styled('div')(({ width,backgroundColor,position }) => ({
    width: width || '300px', // Default to 300px if no width is provided
    height: '100vh',
    // backgroundColor: backgroundColor || '#3E92DB',
    // backgroundColor:'#ffffff',
    backgroundColor:'#DFEFF0',
    borderColor:'pink',
    borderWidth:'10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    // color: '#ffffff',
    color:'#3E92DB',
    boxShadow: '2px 0 5px rgba(0,0,0,0.3)',
    borderTopRightRadius: '15px',
    borderBottomRightRadius: '15px',
    // position: position || 'fixed'
}));

const SidebarHeader = styled(Typography)({
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
});

const SidebarItem = styled('div')({
    margin: '10px 0',
    padding: '10px',
    // color: '#fff',
    // backgroundColor:'brown',
    color:'#3E92DB',
    textDecoration: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '40px',
    marginRight:'20px',
    paddingLeft:'20px',
    paddingBottom:'20px',
    paddingTop:'10px',
    paddingRight:'10px',
    transition: 'background-color 0.2s',
    '&:hover': {
        backgroundColor: '#54A3E3',
        borderRadius: '40px',
        color:'white',
    },
});

const DropdownList = styled(List)({
    paddingLeft: '20px',
    cursor:'pointer'
});

const DropdownItem = styled(ListItem)({
    // color: '#ffffff',
    color:'#3E92DB',
    '&:hover': {
        backgroundColor: '#54A3E3',
        borderRadius: '20px',
        color:'white'
    },
});

const Sidebar = () => {
    const navigate = useNavigate(); // Use navigate for routing
    const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [ticketDropdownOpen, setTicketDropdownOpen] = useState(false);

    const handleNavigation = (option) => {
        const path = switchNavigation(option);
        navigate(path); // Use navigate for routing
    };

    const switchNavigation = (option) => {
        switch (option) {
            case 'Create Ticket Categ':
                return '/admin/create-category';
            case 'View Ticket Categ':
                return '/admin/view-category';
            case 'Create Ticket':
                return '/admin/create-ticket';
            case 'View Ticket':
                return '/tickets';
            case 'Settings':
                return '/settings';
            default:
                return '/';
        }
    };

    const handleLogoutConfirmation = (confirm) => {
        if (confirm) {
            console.log('Logging out...');
            // Implement your logout logic here, e.g., clearing tokens
            navigate('/'); // Redirect to home page after logout
        }
        setLogoutDialogOpen(false);
    };

    return (
        <SidebarContainer>
            <SidebarHeader variant="h6">Ticket Management System</SidebarHeader>

            {/* Ticket Category Management Dropdown */}
            <SidebarItem onClick={() => setCategoryDropdownOpen((prev) => !prev)}>
                Ticket Categ Management {categoryDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </SidebarItem>
            <Collapse in={categoryDropdownOpen} timeout="auto" unmountOnExit>
                <DropdownList component="div">
                    <DropdownItem button onClick={() => handleNavigation('Create Ticket Categ')}>
                        <ListItemText primary="Create Ticket Categ" />
                    </DropdownItem>
                    <DropdownItem button onClick={() => handleNavigation('View Ticket Categ')}>
                        <ListItemText primary="View Ticket Categ" />
                    </DropdownItem>
                </DropdownList>
            </Collapse>

            {/* Ticket Management Dropdown */}
            <SidebarItem onClick={() => setTicketDropdownOpen((prev) => !prev)}>
                Ticket Management {ticketDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </SidebarItem>
            <Collapse in={ticketDropdownOpen} timeout="auto" unmountOnExit>
                <DropdownList component="div">
                    <DropdownItem button onClick={() => handleNavigation('Create Ticket')}>
                        <ListItemText primary="Create Ticket" />
                    </DropdownItem>
                    <DropdownItem button onClick={() => handleNavigation('View Ticket')}>
                        <ListItemText primary="View Ticket" />
                    </DropdownItem>
                </DropdownList>
            </Collapse>

            <SidebarItem onClick={() => handleNavigation('Settings')}>Settings</SidebarItem>
            <SidebarItem onClick={() => setLogoutDialogOpen(true)}>Logout</SidebarItem>

            {/* Logout Confirmation Dialog */}
            <Dialog open={logoutDialogOpen} onClose={() => setLogoutDialogOpen(false)}>
                <DialogTitle>Logout Confirmation</DialogTitle>
                <DialogContent>
                    Are you sure you want to logout?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleLogoutConfirmation(true)} style={{ color: 'green' }}>
                        Yes
                    </Button>
                    <Button onClick={() => handleLogoutConfirmation(false)} style={{ color: 'red' }}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </SidebarContainer>
    );
};

export default Sidebar;
