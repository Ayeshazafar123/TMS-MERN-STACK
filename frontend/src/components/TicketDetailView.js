// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { Button } from '@mui/material';

// // const TicketDetailsView = () => {
// //   const { id } = useParams(); // Get the ID from the URL
// //   const [ticket, setTicket] = useState(null); // State for storing ticket details
// //   const [error, setError] = useState(''); // State for error messages

// //   useEffect(() => {
// //     const fetchTicketDetails = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:5000/tickets/${id}`);
// //         if (!response.ok) {
// //           throw new Error('Unable to fetch ticket details');
// //         }
// //         const data = await response.json();
// //         setTicket(data); // Set the fetched ticket data
// //       } catch (err) {
// //         setError(err.message); // Set error message if fetching fails
// //       }
// //     };

// //     fetchTicketDetails(); // Call the function to fetch ticket details
// //   }, [id]);

// //   // If there’s an error, display it
// //   if (error) return <div style={{ color: 'red' }}>{error}</div>;

// //   // Check if ticket is not provided or is an empty object
// //   if (!ticket || Object.keys(ticket).length === 0) {
// //     return <div>No ticket details available.</div>;
// //   }

// //   return (
// //     <div style={styles.container}>
// //       <h3 style={styles.title}>{ticket.name}</h3>
// //       <p><strong>Ticket ID:</strong> {ticket.ticket_Id}</p>
// //       <p><strong>Category:</strong> {ticket.category}</p>
// //       <p><strong>Start Date:</strong> {new Date(ticket.start_date).toLocaleDateString()}</p>
// //       <p><strong>Expiry Date:</strong> {new Date(ticket.expiry_date).toLocaleDateString()}</p>
// //       <p><strong>Price:</strong> ${ticket.price}</p>
// //       {ticket.picture ? (
// //   <img
// //     src={`http://localhost:5000/${ticket.picture}`} // Assuming picture is a URL
// //     alt={ticket.name}
// //     style={styles.image}
// //   />
// // ) : (
// //   <img
// //     src="path_to_placeholder_image.jpg" // Path to a placeholder image
// //     alt="No Image Available"
// //     style={styles.image}
// //   />
  
// // )}

// //     </div>
// //   );
// // };

// // // Inline styles for better presentation
// // const styles = {
// //     container: {
// //       padding: '20px',
// //       border: '1px solid #ccc',
// //       borderRadius: '8px', // Slightly increased border radius for a softer look
// //       maxWidth: '600px',
// //       margin: '20px auto',
// //       backgroundColor: '#ffffff', // Changed to a pure white background for better contrast
// //       boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Added a subtle shadow for depth
// //     },
// //     title: {
// //       color: '#333',
// //       fontSize: '1.5em', // Increased font size for the title
// //       marginBottom: '10px', // Added margin below title for spacing
// //     },
// //     image: {
// //       marginTop: '15px', // Increased margin on top for better spacing
// //       width: '100%',      // Make it responsive to the container width
// //       maxWidth: '200px',  // Set a maximum width to prevent it from getting too large
// //       height: 'auto',     // Maintain aspect ratio
// //       borderRadius: '5px',
// //       display: 'block',   // Ensure it's displayed as a block element
// //       marginLeft: 'auto', // Center image if desired
// //       marginRight: 'auto', // Center image if desired
// //     },
// //   };
  

// // export default TicketDetailsView;





// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material'; // Import Button from Material-UI

// const TicketDetailsView = () => {
//   const { id } = useParams(); // Get the ID from the URL
//   const navigate = useNavigate(); // Hook to programmatically navigate
//   const [ticket, setTicket] = useState(null); // State for storing ticket details
//   const [error, setError] = useState(''); // State for error messages
//   const [confirmDeleteId, setConfirmDeleteId] = useState(null);
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

//   useEffect(() => {
//     const fetchTicketDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/tickets/${id}`);
//         if (!response.ok) {
//           throw new Error('Unable to fetch ticket details');
//         }
//         const data = await response.json();
//         setTicket(data); // Set the fetched ticket data
//       } catch (err) {
//         setError(err.message); // Set error message if fetching fails
//       }
//     };

//     fetchTicketDetails(); // Call the function to fetch ticket details
//   }, [id]);

//   // If there’s an error, display it
//   if (error) return <div style={{ color: 'red' }}>{error}</div>;

//   // Check if ticket is not provided or is an empty object
//   if (!ticket || Object.keys(ticket).length === 0) {
//     return <div>No ticket details available.</div>;
//   }

//   return (
//     <div style={styles.container}>
//       <h3 style={styles.title}>{ticket.name}</h3>
//       <p><strong>Ticket ID:</strong> {ticket.ticket_Id}</p>
//       <p><strong>Category:</strong> {ticket.category}</p>
//       <p><strong>Start Date:</strong> {new Date(ticket.start_date).toLocaleDateString()}</p>
//       <p><strong>Expiry Date:</strong> {new Date(ticket.expiry_date).toLocaleDateString()}</p>
//       <p><strong>Price:</strong> ${ticket.price}</p>
//       {ticket.picture ? (
//         <img
//           src={`http://localhost:5000/${ticket.picture}`} // Assuming picture is a URL
//           alt={ticket.name}
//           style={styles.image}
//         />
//       ) : (
//         <img
//           src="path_to_placeholder_image.jpg" // Path to a placeholder image
//           alt="No Image Available"
//           style={styles.image}
//         />
//       )}
//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={() => navigate(`/ticket-update/${ticket._id}`)} // Navigate to edit page
//         style={{ marginTop: '10px' }} // Add margin for better spacing
//       >
//         Edit Ticket
//       </Button>
//     </div>
//   );
// };

// // Inline styles for better presentation
// const styles = {
//   container: {
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px', 
//     maxWidth: '600px',
//     margin: '20px auto',
//     backgroundColor: '#ffffff', 
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
//   },
//   title: {
//     color: '#333',
//     fontSize: '1.5em', 
//     marginBottom: '10px', 
//   },
//   image: {
//     marginTop: '15px', 
//     width: '100%',      
//     maxWidth: '200px',  
//     height: 'auto',     
//     borderRadius: '5px',
//     display: 'block',   
//     marginLeft: 'auto', 
//     marginRight: 'auto', 
//   },
// };

// export default TicketDetailsView;






import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'; // Import necessary components from Material-UI
import Sidebar from './SideBar'; // Import the Sidebar component

const TicketDetailsView = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [ticket, setTicket] = useState(null); // State for storing ticket details
  const [error, setError] = useState(''); // State for error messages
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); // State for delete confirmation dialog

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/tickets/${id}`);
        if (!response.ok) {
          throw new Error('Unable to fetch ticket details');
        }
        const data = await response.json();
        setTicket(data); // Set the fetched ticket data
      } catch (err) {
        setError(err.message); // Set error message if fetching fails
      }
    };

    fetchTicketDetails(); // Call the function to fetch ticket details
  }, [id]);

  // Function to handle deletion of the ticket
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/tickets/${id}`, {
        method: 'DELETE', // Specify the DELETE method
      });
      if (!response.ok) {
        throw new Error('Failed to delete the ticket');
      }
      navigate('/tickets'); // Redirect to the tickets page after deletion
    } catch (err) {
      setError(err.message); // Set error message if deletion fails
    } finally {
      setDeleteDialogOpen(false); // Close the dialog after attempting to delete
    }
  };

  // If there’s an error, display it
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  // Check if ticket is not provided or is an empty object
  if (!ticket || Object.keys(ticket).length === 0) {
    return <div>No ticket details available.</div>;
  }

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Component */}
      <Sidebar /> {/* Predefined sidebar component */}

      {/* Main Content Area, backgroundColor: '#f9f9f9' */}
      <div style={{ marginLeft: '300px', padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh',
      paddingLeft:'0px', paddingRight:'100px', paddingTop:"20px", paddingBottom:'30px', 
       }}>
        <h3 style={styles.title}>{ticket.name}</h3>
        <p><strong>Ticket ID:</strong> {ticket.ticket_Id}</p>
        <p><strong>Category:</strong> {ticket.category}</p>
        <p><strong>Start Date:</strong> {new Date(ticket.start_date).toLocaleDateString()}</p>
        <p><strong>Expiry Date:</strong> {new Date(ticket.expiry_date).toLocaleDateString()}</p>
        <p><strong>Price:</strong> ${ticket.price}</p>
        {ticket.picture ? (
          <img
            src={`http://localhost:5000/${ticket.picture}`} 
            alt={ticket.name}
            style={styles.image}
          />
        ) : (
          <img
            src="path_to_placeholder_image.jpg" 
            alt="No Image Available"
            style={styles.image}
          />
        )}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(`/ticket-update/${ticket._id}`)} 
          style={{ marginTop: '10px' }}
        >
          Edit Ticket
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setDeleteDialogOpen(true)} 
          style={{ marginTop: '10px', marginLeft: '10px' }}
        >
          Delete Ticket
        </Button>

        {/* Confirmation Dialog for Deletion */}
        <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to delete this ticket?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)} color="primary">Cancel</Button>
            <Button onClick={handleDelete} color="error">Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

// Inline styles for better presentation
const styles = {
  wrapper: {
    display: 'flex', // Use flex to align sidebar and content
  },
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '600px',
    marginLeft: '100px', 
    // Space between sidebar and content
    backgroundColor: '#f9f9f9', // Lighter background
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    flex: 1, // Allow the container to take the remaining width
  },
  title: {
    color: '#333',
    fontSize: '1.5em', 
    marginBottom: '10px', 
    textTransform: 'uppercase',
  },
  image: {
    marginTop: '15px',
    width: '100%',
    maxWidth: '300px', 
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover', 
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default TicketDetailsView;
