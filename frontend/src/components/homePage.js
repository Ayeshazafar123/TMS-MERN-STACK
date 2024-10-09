
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import styled from 'styled-components';
// import { Modal, Button } from 'react-bootstrap';
// import './homePage.css';
// import { useCart } from '../context/CartContext';

// const categories = [
//     { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
//     { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
//     { id: '66f11850a0071a83021b1e12', name: 'Anime' },
//     { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
//     { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Horror)' },
//     { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
// ];

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

// const HomePageRecent = () => {
//     const [tickets, setTickets] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [modalMessage, setModalMessage] = useState('');
//     const { addToCart } = useCart();
//     const [ticket, setTicket] = useState(null);
//     const { id } = useParams();
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();


//     const fetchRecentTickets = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/home/recent');
//             if (response.data && response.data.data) {
//                 setTickets(response.data.data);
//             } else {
//                 setError("No ticket found.");
//             }
//         } catch (err) {
//             setError("Error fetching recent tickets");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchRecentTickets();
//     }, []);

//     const getCategoryName = (categoryId) => {
//         const category = categories.find(cat => cat.id === categoryId);
//         return category ? category.name : "Unknown category";
//     };

//     const handleImageClick = (ticketId) => {
//         navigate(`/home-detail/${ticketId}`);
//     };

//     const handleBuyTicket = async (selectedTicket) => {
//         try {
//             await addToCart(selectedTicket);
//             setModalMessage('Ticket added to cart successfully!');
//         } catch (err) {
//             console.error('Error adding ticket to cart:', err);
//             setModalMessage('Failed to add ticket to cart.');
//         }
//         setShowModal(true);
//     };


//     const handleOkClick = () => {
//         setShowModal(false); // Close the modal
//         navigate('/cart'); // Navigate to the cart page
//     };

//     const handleCrossClick = () => {
//         setShowModal(false); // Simply close the modal without navigating
//     };


//     return (
//         <div>
//             <h2>Recent Tickets</h2>
//             {loading && <p className='loading'>Loading...</p>}
//             {error && <p className='error'>{error}</p>}
//             <div className='ticket-grid'>
//                 {tickets.map((ticket) => (
//                     <div key={ticket._id} className='ticket-card'>
//                         <h3>{ticket.name}</h3>
//                         {ticket.picture && (
//                             <img
//                                 src={`http://localhost:5000/${ticket.picture}`}
//                                 alt={ticket.name}
//                                 className="ticket-image"
//                                 onClick={() => handleImageClick(ticket._id)}
//                             />
//                         )}
//                         <p>Category: {getCategoryName(ticket.category)}</p>
//                         <p>Start Date: {new Date(ticket.start_date).toLocaleDateString()}</p>
//                         <p>Expiry Date: {new Date(ticket.expiry_date).toLocaleDateString()}</p>
//                         <p>Price: ${ticket.price}</p>
//                         <StyledButton onClick={() => handleBuyTicket(ticket)}>
//                             Add to Cart
//                         </StyledButton>
//                     </div>
//                 ))}
//             </div>

//             <Modal show={showModal} onHide={handleCrossClick}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Notification</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>{modalMessage}</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleOkClick}>
//                         OK
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//         </div>
//     );
// };

// export default HomePageRecent;

















// import React , {useState, useEffect} from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './homePage.css';


// const categories = [
//     { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
//     { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
//     { id: '66f11850a0071a83021b1e12', name: 'Anime' },
//     { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
//     { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Horror)' },
//     { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
// ];
// const HomePageRecent
//  =()=>{
//     // state for storing tickets
//     const [tickets, setTickets] = useState([]);

//     // state for loading and error messages

//     const [loading , setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // usenavigte
//     const navigate = useNavigate();

//     // function to fetch the 10 recent tickets

//     const fetchRecentTickets = async()=>{

//         try {

//             const response = await axios.get('http://localhost:5000/home/recent');
//             console.log("API Response: ", response.data);
//             if(response.data && response.data.data){
//                 setTickets(response.data.data);
//             }
//             else{
//                 setError("no ticket found.");
//             }
//             // update state

//             // setTickets(response.data.data);

//         } catch (err) {
//             // error duing fetchung

//             setError("error fetching recent tickets");
//         }

//         finally{
//             // set loading state false after fetching
//             setLoading(false);
//         }
//     }


// // useEffect for fetchng 10 tuckets
// useEffect(() =>{
//     fetchRecentTickets();
// }, []);

// const getCategoryName = (categoryId) =>{
//     const category = categories.find(cat => cat.id === categoryId);
//     return category ? category.name :"unknown category";
// }

// const handleImageClick = (ticketId) =>{
//     console.log("navigating to ticket ID: ",ticketId);
//     navigate(`/home-detail/${ticketId}`)
// }

// return(
//     <div>
//         <h2>Recent Tickets</h2>
//         {/* now displaying loading message */}
//         {loading && <p className='loading'>Loading...</p>}

//         {/* now displaying error message */}

//         {error && <p className='error'>{error}</p>}

//         {/* displaying tickets  */}

//         <div className='ticket-grid'>
//             {tickets.map((ticket)=>(
//                 <div key={ticket._id} className='ticket-card' >

//                     {/* displaying ticket message */}
//                     <h3>{ticket.name}</h3>
//                     {ticket.picture && <img
//                         src={`http://localhost:5000/${ticket.picture}`}
//                         alt={ticket.name}
//                         className="ticket-image"
//                         onClick={()=> handleImageClick(ticket._id)}
//                                 />}
//                     <p>Category: {getCategoryName(ticket.category)}</p>
//                     <p>Start Date: {new Date(ticket.start_date).toLocaleDateString()}</p>
//                     <p>Expiry Date: {new Date (ticket.expiry_date).toLocaleDateString()}</p>
//                     <p>Price: ${ticket.price}</p>


//                 </div>
//             ))}
//         </div>
//     </div>
// );
// };
// export default HomePageRecent
// ;



































import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';
import './homePage.css';
// import { useCart } from '../context/CartContext';

const categories = [
    { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
    { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
    { id: '66f11850a0071a83021b1e12', name: 'Anime' },
    { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
    { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Horror)' },
    { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
];

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

const HomePageRecent = () => {
    const [tickets, setTickets] = useState([]);
    // const [showModal, setShowModal] = useState(false);
    // const [modalMessage, setModalMessage] = useState('');
    // const { addToCart } = useCart();
    // const [ticket, setTicket] = useState(null);
    // const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const fetchRecentTickets = async () => {
        try {
            const response = await axios.get('http://localhost:5000/home/recent');
            if (response.data && response.data.data) {
                setTickets(response.data.data);
            } else {
                setError("No ticket found.");
            }
        } catch (err) {
            setError("Error fetching recent tickets");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecentTickets();
    }, []);

    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : "Unknown category";
    };

    const handleImageClick = (ticketId) => {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    
        if (!token || token === 'undefined' || token === null) {
            console.log('No user is logged in. Redirecting to the user login page.');
            navigate('/user/login'); // Redirect to the login page if no user is logged in
        } else {
            console.log(`User is logged in with token: ${token}`);
            console.log(`Navigating to ticket details page for ticket ID: ${ticketId}`);
            navigate(`/home-detail/${ticketId}`); // Navigate to the ticket details page
        }
    };
    
    
    

    // const handleBuyTicket = async (selectedTicket) => {
    //     try {
    //         await addToCart(selectedTicket);
    //         setModalMessage('Ticket added to cart successfully!');
    //     } catch (err) {
    //         console.error('Error adding ticket to cart:', err);
    //         setModalMessage('Failed to add ticket to cart.');
    //     }
    //     setShowModal(true);
    // };


    // const handleOkClick = () => {
    //     setShowModal(false); // Close the modal
    //     navigate('/cart'); // Navigate to the cart page
    // };

    // const handleCrossClick = () => {
    //     setShowModal(false); // Simply close the modal without navigating
    // };


    return (
        <div>
            <h2>Recent Tickets</h2>
            {loading && <p className='loading'>Loading...</p>}
            {error && <p className='error'>{error}</p>}
            <div className='ticket-grid'>
                {tickets.map((ticket) => (
                    <div key={ticket._id} className='ticket-card'>
                        <h3>{ticket.name}</h3>
                        {ticket.picture && (
                            <img
                                src={`http://localhost:5000/${ticket.picture}`}
                                alt={ticket.name}
                                className="ticket-image"
                                onClick={() => handleImageClick(ticket._id)}
                            />
                        )}
                        <p>Category: {getCategoryName(ticket.category)}</p>
                        <p>Start Date: {new Date(ticket.start_date).toLocaleDateString()}</p>
                        <p>Expiry Date: {new Date(ticket.expiry_date).toLocaleDateString()}</p>
                        <p>Price: ${ticket.price}</p>
                        {/* <StyledButton onClick={() => handleBuyTicket(ticket)}>
                            Add to Cart
                        </StyledButton> */}
                    </div>
                ))}
            </div>

            {/* <Modal show={showModal} onHide={handleCrossClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleOkClick}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal> */}

        </div>
    );
};

export default HomePageRecent;
