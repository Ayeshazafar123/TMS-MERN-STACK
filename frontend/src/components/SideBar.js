
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
