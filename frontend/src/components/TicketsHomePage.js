
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {
//     Typography,
//     TextField,
//     Button,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogTitle,
// } from '@mui/material';
// import { styled } from '@mui/system';
// import './TicketsHome.css'; // Ensure this CSS file is linked

// // Styled components for Sidebar
// const Sidebar = styled('div')({
//     width: '220px',
//     height: '100vh',
//     backgroundColor: '#2196F3', // Blue color
//     padding: '20px',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
// });

// const SidebarItem = styled('a')({
//     margin: '10px 0',
//     color: '#fff',
//     textDecoration: 'none',
//     fontSize: '18px',
//     padding: '10px', // Add padding for better click area
//     borderRadius: '4px', // Rounded corners for buttons
//     '&:hover': {
//         backgroundColor: '#1976D2',
//         color: 'white',
//     },
// });

// const TicketsHome = () => {
//     const [tickets, setTickets] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [ticketId, setTicketId] = useState('');
//     const [dialogOpen, setDialogOpen] = useState(false);
//     const [dialogMessage, setDialogMessage] = useState('');
//     const [confirmDeleteId, setConfirmDeleteId] = useState(null); // ID of the ticket to be deleted
//     const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); // State for delete confirmation dialog

//     const navigate = useNavigate();
//     const [currentPage, setCurrentPage] = useState(1);
//     const ticketsPerPage = 10; // Set tickets per page

//     const fetchTickets = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/tickets');
//             setTickets(response.data.tickets);
//         } catch (err) {
//             setError('Failed to fetch tickets. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSearch = () => {
//         if (ticketId) {
//             navigate(`/ticket-detail/${ticketId}`);
//         } else {
//             setDialogMessage('Please enter a Ticket ID.');
//             setDialogOpen(true);
//         }
//     };

//     const handleDeleteTicket = (id) => {
//         setConfirmDeleteId(id);
//         setDeleteDialogOpen(true);
//     };

//     const confirmDelete = async () => {
//         try {
//             await axios.delete(`http://localhost:5000/tickets/${confirmDeleteId}`);
//             setTickets(tickets.filter(ticket => ticket._id !== confirmDeleteId));
//             setDeleteDialogOpen(false);
//             setConfirmDeleteId(null); // Reset after deletion
//         } catch (error) {
//             setDialogMessage('Failed to delete the ticket. Please try again.');
//             setDialogOpen(true);
//         }
//     };

//     useEffect(() => {
//         fetchTickets();
//     }, []);

//     // Pagination logic
//     const indexOfLastTicket = currentPage * ticketsPerPage;
//     const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
//     const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);
//     const totalPages = Math.ceil(tickets.length / ticketsPerPage);

//     return (
//         <div style={{ display: 'flex' }}>
//             <Sidebar>
//                 <Typography variant="h5" style={{ color: '#fff', marginBottom: '20px' }}>TMS</Typography>
//                 <SidebarItem href="/admin/create-ticket">Create Ticket</SidebarItem>
//                 <SidebarItem href="/tickets">View Tickets</SidebarItem>
//                 <SidebarItem href="/update-ticket">Update Ticket</SidebarItem>
//             </Sidebar>
//             <div style={{ padding: '20px', marginLeft: '250px', width: '100%' }}>
//                 <Typography variant="h4" gutterBottom style={{ color: '#16325B', borderBottom: '2px solid #16325B', marginLeft: "30px" }}>
//                     Available Tickets
//                 </Typography>

//                 <div className="search-bar">
//                     <TextField
//                         label="Enter Ticket ID"
//                         value={ticketId}
//                         onChange={(e) => setTicketId(e.target.value)}
//                         variant="outlined"
//                         style={{ marginRight: '8px', width: '300px' }}
//                     />
//                     <Button variant="contained" color="primary" onClick={handleSearch}>
//                         Submit
//                     </Button>
//                 </div>

//                 {loading && <p className="loading">Loading...</p>}
//                 {error && <p className="error-message">{error}</p>}
//                 <div className="tickets-grid">
//                     {currentTickets.length === 0 ? (
//                         <p className="no-tickets">No tickets available.</p>
//                     ) : (
//                         currentTickets.map((ticket) => (
//                             <div key={ticket._id} className="ticket-card">
//                                 <h3 className="ticket-name">{ticket.name}</h3>
//                                 <img
//                                     src={`http://localhost:5000/${ticket.picture}`}
//                                     alt={ticket.name}
//                                     className="ticket-image"
//                                 />
//                                 <p className="category">Category: {ticket.category}</p>
//                                 <p className="price">Price: ${ticket.price}</p>
//                                 <p className="dates">
//                                     Start Date: {new Date(ticket.start_date).toLocaleDateString()} <br />
//                                     Expiry Date: {new Date(ticket.expiry_date).toLocaleDateString()}
//                                 </p>
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={() => navigate(`/ticket-detail/${ticket._id}`)}
//                                     style={{ marginLeft: '10px', marginTop: '20px' }}
//                                 >
//                                     View Ticket
//                                 </Button>
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     onClick={() => navigate(`/ticket-update/${ticket._id}`)} // Navigate to edit page
//                                     style={{ marginLeft: '10px', marginTop: '20px' }}
//                                 >
//                                     Edit Ticket
//                                 </Button>
//                                 <Button
//                                     variant="contained"
//                                     color="error"
//                                     onClick={() => handleDeleteTicket(ticket._id)} // Open delete confirmation dialog
//                                     style={{ marginLeft: '10px', marginTop: '20px' }}
//                                 >
//                                     Delete Ticket
//                                 </Button>
//                             </div>
//                         ))
//                     )}
//                 </div>

//                 {/* Pagination Controls */}
//                 <div className="pagination">
//                     <Button
//                         onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
//                         disabled={currentPage === 1}
//                         variant="contained"
//                         color="primary"
//                         style={{ margin: '10px' }}
//                     >
//                         Previous
//                     </Button>
//                     <Typography variant="body1" style={{ margin: '10px' }}>
//                         Page {currentPage} of {totalPages}
//                     </Typography>
//                     <Button
//                         onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
//                         disabled={currentPage === totalPages}
//                         variant="contained"
//                         color="primary"
//                         style={{ margin: '10px' }}
//                     >
//                         Next
//                     </Button>
//                 </div>

//                 <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} PaperProps={{ style: { borderRadius: '8px' } }}>
//                     <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', color: '#16325B' }}>
//                         Alert
//                     </DialogTitle>
//                     <DialogContent>
//                         <Typography style={{ color: '#16325B', textAlign: 'center' }}>{dialogMessage}</Typography>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={() => setDialogOpen(false)} color="primary">Close</Button>
//                     </DialogActions>
//                 </Dialog>

//                 {/* Delete Confirmation Dialog */}
//                 <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)} PaperProps={{ style: { borderRadius: '8px' } }}>
//                     <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', color: '#FF0000' }}>
//                         Confirm Deletion
//                     </DialogTitle>
//                     <DialogContent>
//                         <Typography style={{ color: '#16325B', textAlign: 'center' }}>
//                             Are you sure you want to delete this ticket?
//                         </Typography>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={confirmDelete} color="primary">Yes</Button>
//                         <Button onClick={() => setDeleteDialogOpen(false)} color="secondary">No</Button>
//                     </DialogActions>
//                 </Dialog>
//             </div>
//         </div>
//     );
// };

// export default TicketsHome;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {
//     Typography,
//     TextField,
//     Button,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogTitle,
// } from '@mui/material';
// import './TicketsHome.css'; // Ensure this CSS file is linked
// import Sidebar from './SideBar';
// import TicketSearch from './TicketSearch';

// const TicketsHome = () => {
//     const [tickets, setTickets] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [ticketId, setTicketId] = useState('');
//     const [dialogOpen, setDialogOpen] = useState(false);
//     const [dialogMessage, setDialogMessage] = useState('');
//     const [confirmDeleteId, setConfirmDeleteId] = useState(null);
//     const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

//     const navigate = useNavigate();
//     const [currentPage, setCurrentPage] = useState(1);
//     const ticketsPerPage = 10;

//     const fetchTickets = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/tickets');
//             setTickets(response.data.tickets);
//         } catch (err) {
//             setError('Failed to fetch tickets. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSearch = () => {
//         if (ticketId) {
//             navigate(`/ticket-detail/${ticketId}`);
//         } else {
//             setDialogMessage('Please enter a Ticket ID.');
//             setDialogOpen(true);
//         }
//     };

//     const handleDeleteTicket = (id) => {
//         setConfirmDeleteId(id);
//         setDeleteDialogOpen(true);
//     };

//     const confirmDelete = async () => {
//         try {
//             await axios.delete(`http://localhost:5000/tickets/${confirmDeleteId}`);
//             setTickets(tickets.filter(ticket => ticket._id !== confirmDeleteId));
//             setDeleteDialogOpen(false);
//             setConfirmDeleteId(null);
//         } catch (error) {
//             setDialogMessage('Failed to delete the ticket. Please try again.');
//             setDialogOpen(true);
//         }
//     };

//     useEffect(() => {
//         fetchTickets();
//     }, []);

//     const indexOfLastTicket = currentPage * ticketsPerPage;
//     const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
//     const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);
//     const totalPages = Math.ceil(tickets.length / ticketsPerPage);

//     return (
//         <div className="tickets-home">
//             <Sidebar style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }} />

//             <div className="content-area">
//                 <Typography variant="h4" gutterBottom className="title">
//                     Available Tickets
//                 </Typography>

//                 <div className="search-bar">
//                     <TextField
//                         label="Enter Ticket ID..."
//                         value={ticketId}
//                         onChange={(e) => setTicketId(e.target.value)}
//                         variant="outlined"
//                         style={{ marginRight: '8px', width: '300px' }}
//                     />
//                     {/* <TicketSearch/> */}
//                     <Button variant="contained" color="primary" onClick={handleSearch}>
//                         Submit
//                     </Button>
//                 </div>

//                 {loading && <p className="loading">Loading...</p>}
//                 {error && <p className="error-message">{error}</p>}
//                 <div className="tickets-grid">
//                     {currentTickets.length === 0 ? (
//                         <p className="no-tickets">No tickets available.</p>
//                     ) : (
//                         currentTickets.map((ticket) => (
//                             <div key={ticket._id} className="ticket-card">
//                                 <h3 className="ticket-name">{ticket.name}</h3>
//                                 <img
//                                     src={`http://localhost:5000/${ticket.picture}`}
//                                     alt={ticket.name}
//                                     className="ticket-image"
//                                 />
//                                 <p className="category">Category: {ticket.category}</p>
//                                 <p className="price">Price: ${ticket.price}</p>
//                                 <p className="dates">
//                                     Start Date: {new Date(ticket.start_date).toLocaleDateString()} <br />
//                                     Expiry Date: {new Date(ticket.expiry_date).toLocaleDateString()}
//                                 </p>
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={() => navigate(`/ticket-detail/${ticket._id}`)}
//                                     style={{ marginLeft: '10px', marginTop: '20px' }}
//                                 >
//                                     View Ticket
//                                 </Button>
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     onClick={() => navigate(`/ticket-update/${ticket._id}`)}
//                                     style={{ marginLeft: '10px', marginTop: '20px' }}
//                                 >
//                                     Edit Ticket
//                                 </Button>
//                                 <Button
//                                     variant="contained"
//                                     color="error"
//                                     onClick={() => handleDeleteTicket(ticket._id)}
//                                     style={{ marginLeft: '10px', marginTop: '20px' }}
//                                 >
//                                     Delete Ticket
//                                 </Button>
//                             </div>
//                         ))
//                     )}
//                 </div>

//                 {/* Pagination Controls */}
//                 <div className="pagination">
//                     <Button
//                         onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
//                         disabled={currentPage === 1}
//                         variant="contained"
//                         color="primary"
//                         style={{ margin: '10px' }}
//                     >
//                         Previous
//                     </Button>
//                     <Typography variant="body1" style={{ margin: '10px' }}>
//                         Page {currentPage} of {totalPages}
//                     </Typography>
//                     <Button
//                         onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
//                         disabled={currentPage === totalPages}
//                         variant="contained"
//                         color="primary"
//                         style={{ margin: '10px' }}
//                     >
//                         Next
//                     </Button>
//                 </div>

//                 <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} PaperProps={{ style: { borderRadius: '8px' } }}>
//                     <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', color: '#16325B' }}>
//                         Alert
//                     </DialogTitle>
//                     <DialogContent>
//                         <Typography style={{ color: '#16325B', textAlign: 'center' }}>{dialogMessage}</Typography>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={() => setDialogOpen(false)} color="primary">Close</Button>
//                     </DialogActions>
//                 </Dialog>

//                 {/* Delete Confirmation Dialog */}
//                 <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)} PaperProps={{ style: { borderRadius: '8px' } }}>
//                     <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', color: '#FF0000' }}>
//                         Confirm Deletion
//                     </DialogTitle>
//                     <DialogContent>
//                         <Typography style={{ color: '#16325B', textAlign: 'center' }}>
//                             Are you sure you want to delete this ticket?
//                         </Typography>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={confirmDelete} color="primary">Yes</Button>
//                         <Button onClick={() => setDeleteDialogOpen(false)} color="error">No</Button>
//                     </DialogActions>
//                 </Dialog>
//             </div>
//         </div>
//     );
// };

// export default TicketsHome;
// above code is 100% correct







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Typography,
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import './TicketsHome.css'; // Ensure this CSS file is linked
import Sidebar from './SideBar';

const TicketsHome = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [ticketId, setTicketId] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const ticketsPerPage = 10;

    // Sample category data
    const categories = [
        { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
        { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
        { id: '66f11850a0071a83021b1e12', name: 'Anime' },
        { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
        { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Horror)' },
        { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
    ];

    const fetchTickets = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tickets');
            setTickets(response.data.tickets);
        } catch (err) {
            setError('Failed to fetch tickets. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (ticketId) {
            navigate(`/ticket-detail/${ticketId}`);
        } else {
            setDialogMessage('Please enter a Ticket ID.');
            setDialogOpen(true);
        }
    };

    const handleDeleteTicket = (id) => {
        setConfirmDeleteId(id);
        setDeleteDialogOpen(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/tickets/${confirmDeleteId}`);
            setTickets(tickets.filter(ticket => ticket._id !== confirmDeleteId));
            setDeleteDialogOpen(false);
            setConfirmDeleteId(null);
        } catch (error) {
            setDialogMessage('Failed to delete the ticket. Please try again.');
            setDialogOpen(true);
        }
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);
    const totalPages = Math.ceil(tickets.length / ticketsPerPage);

    // Function to get category name by ID
    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Unknown Category';
    };

    return (
        <div className="tickets-home">
            <Sidebar style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }} />

            <div className="content-area">
                <Typography variant="h4" gutterBottom className="title">
                    Available Tickets
                </Typography>

                <div className="search-bar">
                    <TextField
                        label="Enter Ticket ID..."
                        value={ticketId}
                        onChange={(e) => setTicketId(e.target.value)}
                        variant="outlined"
                        style={{ marginRight: '8px', width: '300px' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Submit
                    </Button>
                </div>

                {loading && <p className="loading">Loading...</p>}
                {error && <p className="error-message">{error}</p>}
                <div className="tickets-grid">
                    {currentTickets.length === 0 ? (
                        <p className="no-tickets">No tickets available.</p>
                    ) : (
                        currentTickets.map((ticket) => (
                            <div key={ticket._id} className="ticket-card">
                                <h3 className="ticket-name">{ticket.name}</h3>
                                <img
                                    src={`http://localhost:5000/${ticket.picture}`}
                                    alt={ticket.name}
                                    className="ticket-image"
                                />
                                <p className="category">Category: {getCategoryName(ticket.category)}</p>
                                <p className="price">Price: ${ticket.price}</p>
                                <p className="dates">
                                    Start Date: {new Date(ticket.start_date).toLocaleDateString()} <br />
                                    Expiry Date: {new Date(ticket.expiry_date).toLocaleDateString()}
                                </p>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate(`/ticket-detail/${ticket._id}`)}
                                    style={{ marginLeft: '10px', marginTop: '20px' }}
                                >
                                    View Ticket
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => navigate(`/ticket-update/${ticket._id}`)}
                                    style={{ marginLeft: '10px', marginTop: '20px' }}
                                >
                                    Edit Ticket
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDeleteTicket(ticket._id)}
                                    style={{ marginLeft: '10px', marginTop: '20px' }}
                                >
                                    Delete Ticket
                                </Button>
                            </div>
                        ))
                    )}
                </div>

                {/* Pagination Controls */}
                <div className="pagination">
                    <Button
                        onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
                        disabled={currentPage === 1}
                        variant="contained"
                        color="primary"
                        style={{ margin: '10px' }}
                    >
                        Previous
                    </Button>
                    <Typography variant="body1" style={{ margin: '10px' }}>
                        Page {currentPage} of {totalPages}
                    </Typography>
                    <Button
                        onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        variant="contained"
                        color="primary"
                        style={{ margin: '10px' }}
                    >
                        Next
                    </Button>
                </div>

                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} PaperProps={{ style: { borderRadius: '8px' } }}>
                    <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', color: '#16325B' }}>
                        Alert
                    </DialogTitle>
                    <DialogContent>
                        <Typography style={{ color: '#16325B', textAlign: 'center' }}>{dialogMessage}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDialogOpen(false)} color="primary">Close</Button>
                    </DialogActions>
                </Dialog>

                {/* Delete Confirmation Dialog */}
                <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)} PaperProps={{ style: { borderRadius: '8px' } }}>
                    <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', color: '#FF0000' }}>
                        Confirm Deletion
                    </DialogTitle>
                    <DialogContent>
                        <Typography style={{ color: '#16325B', textAlign: 'center' }}>
                            Are you sure you want to delete this ticket?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={confirmDelete} color="primary">Yes</Button>
                        <Button onClick={() => setDeleteDialogOpen(false)} color="error">No</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

export default TicketsHome;
