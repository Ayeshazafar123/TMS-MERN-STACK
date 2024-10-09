
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import styled from 'styled-components';
// import Header from '../components/Header';

// const categories = [
//     { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
//     { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
//     { id: '66f11850a0071a83021b1e12', name: 'Anime' },
//     { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
//     { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Horror)' },
//     { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
// ];

// // Styled button component
// const StyledButton = styled.button`
//     background-color: #4caf50;
//     color: white;
//     padding: 10px 20px;
//     font-size: 1.2rem;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;

//     &:hover {
//         background-color: #45a049;
//     }

//     &:disabled {
//         background-color: #ccc;
//         cursor: not-allowed;
//     }
// `;

// const TicketDetailsPage = () => {
//     const [ticket, setTicket] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const { id: ticketId } = useParams(); // Get ticketId from URL params

//     useEffect(() => {
//         const fetchTicketDetails = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/tickets/${ticketId}`);
//                 setTicket(response.data);
//             } catch (err) {
//                 setError('Error fetching ticket details');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTicketDetails();
//     }, [ticketId]);

//     // const handleAddToCart = async () => {
//     //     // Prompt the user to enter their email
//     //     const email = prompt("Please enter your email:");
//     //     if (!email) {
//     //         console.error('Email is not defined. Please enter a valid email.');
//     //         return;
//     //     }

//     //     try {
//     //         // Fetch user information by email
//     //         const userResponse = await axios.get(`http://localhost:5000/user/view`, {
//     //             params: { email }, // Send the email as a query parameter
//     //         });

//     //         // Extract user ID from the response
//     //         const userId = userResponse.data.id; // Adjust based on your response structure
//     //         console.log('User ID:', userId); // Log the user ID for debugging

//     //         // Log the Ticket ID for debugging
//     //         console.log('Ticket ID:', ticketId); // Use the ticket ID from the URL

//     //         // Check if Ticket ID is valid
//     //         if (!ticketId) {
//     //             console.error('Ticket ID is not defined. Please check your ticket context.');
//     //             return;
//     //         }

//     //         // Retrieve the token from localStorage
//     //         const token = localStorage.getItem('token');
//     //         if (!token) {
//     //             console.error('Token is not defined. Please log in.');
//     //             return;
//     //         }

//     //         // Add the ticket to the cart using the retrieved user ID and ticket ID
//     //         const response = await axios.post(`http://localhost:5000/cart/add/${userId}`, {
//     //             ticketId: ticketId, // Use the Ticket ID from URL
//     //         }, {
//     //             headers: {
//     //                 Authorization: `Bearer ${token}`, // Include the token in the header
//     //             }
//     //         });

//     //         console.log('Ticket successfully added to cart:', response.data);
//     //     } catch (error) {
//     //         console.error('Error adding ticket to cart:', error.response ? error.response.data : error.message); // More specific error handling
//     //     }
//     // };



//     const handleAddToCart = async () => {
//         // Prompt the user to enter their email
//         const email = prompt("Please enter your email:");
//         if (!email) {
//             console.error('Email is not defined. Please enter a valid email.');
//             return;
//         }
    
//         try {
//             // Fetch user information by email
//             const userResponse = await axios.get(`http://localhost:5000/user/view`, {
//                 params: { email }, // Send the email as a query parameter
//             });
    
//             // Extract user ID from the response
//             const userId = userResponse.data.id; // Adjust based on your response structure
//             console.log('User ID:', userId); // Log the user ID for debugging
    
//             // Log the Ticket ID for debugging
//             console.log('Ticket ID:', ticketId); // Use the ticket ID from the URL
    
//             // Check if Ticket ID is valid
//             if (!ticketId) {
//                 console.error('Ticket ID is not defined. Please check your ticket context.');
//                 return;
//             }
    
//             // Retrieve the token from localStorage
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 console.error('Token is not defined. Please log in.');
//                 return;
//             }
    
//             // Add the ticket to the cart using the retrieved user ID and ticket ID
//             const response = await axios.post(`http://localhost:5000/cart/add/${userId}`, {
//                 ticketId: ticketId, // Use the Ticket ID from URL
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // Include the token in the header
//                 }
//             });
    
//             console.log('Ticket successfully added to cart:', response.data);
//         } catch (error) {
//             console.error('Error adding ticket to cart:', error.response ? error.response.data : error.message); // More specific error handling
//         }
//     };
    
//     const getCategoryName = (categoryId) => {
//         const category = categories.find(cat => cat.id === categoryId);
//         return category ? category.name : 'Unknown Category';
//     };

//     return (
//         <div>
//             <Header />
//             <div className='ticket-detail-container'>
//                 {loading && <p>Loading....</p>}
//                 {error && <p>{error}</p>}
//                 {ticket && (
//                     <div className='ticket-detail'>
//                         <h2>{ticket.name}</h2>
//                         {ticket.picture ? (
//                             <img
//                                 src={`http://localhost:5000/${ticket.picture}`}
//                                 alt={ticket.name}
//                             />
//                         ) : (
//                             <img src="/path/to/placeholder.jpg" alt="Placeholder" />
//                         )}
//                         <div className='ticket-info'>
//                             <p><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
//                             <p><strong>Start Date:</strong> {new Date(ticket.start_date).toLocaleDateString()}</p>
//                             <p><strong>Expiry Date:</strong> {new Date(ticket.expiry_date).toLocaleDateString()}</p>
//                             <p className='ticket-price'>Price: ${ticket.price}</p>
//                         </div>
//                         <StyledButton onClick={handleAddToCart} disabled={loading || !ticket}>
//                             Buy Ticket
//                         </StyledButton>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default TicketDetailsPage;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import { useCart } from '../context/CartContext'; // Import useCart

const categories = [
    { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
    { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
    { id: '66f11850a0071a83021b1e12', name: 'Anime' },
    { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
    { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Horror)' },
    { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
];

// Styled button component
const StyledButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const TicketDetailsPage = () => {
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { id: ticketId } = useParams(); // Get ticketId from URL params
    const { addToCart } = useCart(); // Use useCart to access addToCart

    useEffect(() => {
        const fetchTicketDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/tickets/${ticketId}`);
                setTicket(response.data);
            } catch (err) {
                setError('Error fetching ticket details');
            } finally {
                setLoading(false);
            }
        };

        fetchTicketDetails();
    }, [ticketId]);

    const handleAddToCart = async () => {
        // Prompt the user to enter their email
        const email = prompt("Please enter your email:");
        if (!email) {
            console.error('Email is not defined. Please enter a valid email.');
            return;
        }
    
        try {
            // Fetch user information by email
            const userResponse = await axios.get(`http://localhost:5000/user/view`, {
                params: { email }, // Send the email as a query parameter
            });
    
            // Extract user ID from the response
            const userId = userResponse.data.id; // Adjust based on your response structure
            console.log('User ID:', userId); // Log the user ID for debugging
    
            // Log the Ticket ID for debugging
            console.log('Ticket ID:', ticketId); // Use the ticket ID from the URL
    
            // Check if Ticket ID is valid
            if (!ticketId) {
                console.error('Ticket ID is not defined. Please check your ticket context.');
                return;
            }
    
            // Retrieve the token from localStorage
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token is not defined. Please log in.');
                return;
            }
    
            // Add the ticket to the cart using the retrieved user ID and ticket ID
            const response = await axios.post(`http://localhost:5000/cart/add/${userId}`, {
                userId: userId, // Include the user ID in the request body
                ticketId: ticketId, // Include the ticket ID in the request body
            }, {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the header
                }
            });
    
            console.log('Ticket successfully added to cart:', response.data);
            addToCart({ _id: ticketId, name: ticket.name, price: ticket.price }); // Add ticket with relevant details to the cart
        } catch (error) {
            console.error('Error adding ticket to cart:', error.response ? error.response.data : error.message); // More specific error handling
        }
    };
    

    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Unknown Category';
    };

    return (
        <div>
            <Header />
            <div className='ticket-detail-container'>
                {loading && <p>Loading....</p>}
                {error && <p>{error}</p>}
                {ticket && (
                    <div className='ticket-detail'>
                        <h2>{ticket.name}</h2>
                        {ticket.picture ? (
                            <img
                                src={`http://localhost:5000/${ticket.picture}`}
                                alt={ticket.name}
                            />
                        ) : (
                            <img src="/path/to/placeholder.jpg" alt="Placeholder" />
                        )}
                        <div className='ticket-info'>
                            <p><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
                            <p><strong>Start Date:</strong> {new Date(ticket.start_date).toLocaleDateString()}</p>
                            <p><strong>Expiry Date:</strong> {new Date(ticket.expiry_date).toLocaleDateString()}</p>
                            <p className='ticket-price'>Price: ${ticket.price}</p>
                        </div>
                        <StyledButton onClick={handleAddToCart} disabled={loading || !ticket}>
                            Buy Ticket
                        </StyledButton>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TicketDetailsPage;
