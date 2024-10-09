// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useCart } from '../context/CartContext'; // Adjust the path as needed
// // import './CartPage.css'; // Import your CSS file for styling
// // import ConfirmationDialog from './ConfirmationDialog';

// // const categories = [
// //   { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
// //   { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
// //   { id: '66f11850a0071a83021b1e12', name: 'Anime' },
// //   { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
// //   { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Horror)' },
// //   { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
// // ];

// // // Function to get category name based on ID
// // const getCategoryName = (categoryId) => {
// //   const category = categories.find(cat => cat.id === categoryId);
// //   return category ? category.name : 'Unknown Category';
// // };


// // const CartPage = () => {
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const { cart, removeFromCart, addToCart } = useCart();
// //   const [confirmDialog, setConfirmDialog] = useState({ visible: false, ticketId: null });
// //   const [setCart] = useState([]);


// //   const fetchCartContents = async () => {
// //     try {
// //       const token = localStorage.getItem('token');
// //       const response = await axios.get('http://localhost:5000/cart', {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         }
// //       });

// //       // Clear existing cart
// //       if (response.data.cart.length === 0) {
// //         setError('');
// //         return; // Exit early if cart is empty
// //       }

// //       const ticketDetailsPromises = response.data.cart.map(async (cartItem) => {
// //         const ticketResponse = await axios.get(`http://localhost:5000/tickets/${cartItem.ticketId}`);
// //         return {
// //           ...ticketResponse.data,
// //           quantity: cartItem.quantity,
// //         };
// //       });
// //       const fullCartItems = await Promise.all(ticketDetailsPromises);
// //       fullCartItems.forEach((item) => {
// //         addToCart(item);
// //       });
// //     } catch (err) {
// //       if (err.response && err.response.status === 401) {
// //         setError('Unauthorized access. Please log in.');
// //       } else {
// //         setError('Failed to fetch cart contents. Please try again.');
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCartContents();
// //   }, []);

// //   const handleRemoveFromCart = (ticketId) => {
// //     setConfirmDialog({ visible: true, ticketId });
// //   };

// //   const confirmRemove = () => {
// //     if (confirmDialog.ticketId) {
// //       removeFromCart(confirmDialog.ticketId);
// //     }
// //     setConfirmDialog({ visible: false, ticketId: null });
// //   };

// //   const cancelRemove = () => {
// //     setConfirmDialog({ visible: false, ticketId: null });
// //   };

// //   const handleCheckout = () => {
// //     alert('Proceeding to checkout...');
// //   };
  

// //   const handleDecreaseQuantity = (ticketId) => {
// //     setCart((prevCart) =>
// //       prevCart.map((ticket) =>
// //         ticket._id === ticketId && ticket.quantity > 1
// //           ? { ...ticket, quantity: ticket.quantity - 1 }
// //           : ticket
// //       )
// //     );
// //   };
  
// //   const handleIncreaseQuantity = (ticketId) => {
// //     setCart((prevCart) =>
// //       prevCart.map((ticket) =>
// //         ticket._id === ticketId
// //           ? { ...ticket, quantity: ticket.quantity + 1 }
// //           : ticket
// //       )
// //     );
// //   };
  

// //   // return (
// //   //   <div className="cart-container">
// //   //     <h2>Shopping Cart</h2>
// //   //     {loading && <p>Loading...</p>}
// //   //     {error && <p>{error}</p>}
// //   //     {cart.length > 0 ? (
// //   //       <div>
// //   //         <ul>
// //   //           {cart.map((ticket) => (
// //   //             <li key={ticket._id} className="ticket-detail">
// //   //               <div className="ticket-image-container">
// //   //                 {ticket.picture && (
// //   //                   <img
// //   //                     src={`http://localhost:5000/${ticket.picture}`}
// //   //                     alt={ticket.name}
// //   //                     className="ticket-image" // Class for the image
// //   //                   />
// //   //                 )}
// //   //               </div>
// //   //               <div className="ticket-info">
// //   //                 <p className='ticket-name'><strong>{ticket.name}</strong></p>
// //   //                 <p><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
// //   //                 <p><strong>Start Date:</strong> {new Date(ticket.start_date).toLocaleDateString()}</p>
// //   //                 <p><strong>Expiry Date:</strong> {new Date(ticket.expiry_date).toLocaleDateString()}</p>
// //   //                 <p className="ticket-price"><strong>Price:</strong> ${ticket.price ? ticket.price.toFixed(2) : 'N/A'}</p>
// //   //                 <p className="ticket-quantity"><strong>Quantity:</strong> {ticket.quantity || 1}</p>
// //   //               </div>
// //   //               <div className="ticket-remove-container">
// //   //                 <button className="ticket-remove-button" onClick={() => handleRemoveFromCart(ticket._id)}>Remove</button>
// //   //               </div>
// //   //             </li>
// //   //           ))}
// //   //         </ul>
// //   //         <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>

// //   //         {/* Confirmation Dialog */}
// //   //         {confirmDialog.visible && (
// //   //           <ConfirmationDialog
// //   //             onClose={cancelRemove}
// //   //             onConfirm={confirmRemove}
// //   //             message="Are you sure you want to remove this ticket?"
// //   //           />
// //   //         )}
// //   //       </div>
// //   //     ) : (
// //   //       <p>Your cart is empty.</p> // Display only this message when cart is empty
// //   //     )}
// //   //   </div>
// //   // );

// //   return (
// //     <div className="shopping-cart-container">
// //       <h2>Shopping Cart</h2>
// //       {loading && <p>Loading...</p>}
// //       {error && <p>{error}</p>}
// //       {cart.length > 0 ? (
// //         <div>
// //           <ul className="cart-item-list">
// //             {cart.map((ticket) => (
// //               <li key={ticket._id} className="cart-item">
// //                 <div className="cart-item-image">
// //                   {ticket.picture && (
// //                     <img
// //                       src={`http://localhost:5000/${ticket.picture}`}
// //                       alt={ticket.name}
// //                       className="cart-image"
// //                     />
// //                   )}
// //                 </div>
// //                 <div className="cart-item-details">
// //                   <p className="cart-item-name"><strong>{ticket.name}</strong></p>
// //                   <p className="cart-item-category"><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
// //                 </div>
// //                 <div className="cart-item-quantity">
// //                   <button onClick={() => handleDecreaseQuantity(ticket._id)} className="quantity-button">-</button>
// //                   <span>{ticket.quantity || 1}</span>
// //                   <button onClick={() => handleIncreaseQuantity(ticket._id)} className="quantity-button">+</button>
// //                 </div>
// //                 <div className="cart-item-remove">
// //                   <button className="remove-button" onClick={() => handleRemoveFromCart(ticket._id)}>Remove</button>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //           <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
  
// //           {/* Confirmation Dialog */}
// //           {confirmDialog.visible && (
// //             <ConfirmationDialog
// //               onClose={cancelRemove}
// //               onConfirm={confirmRemove}
// //               message="Are you sure you want to remove this ticket?"
// //             />
// //           )}
// //         </div>
// //       ) : (
// //         <p>Your cart is empty.</p> // Display only this message when cart is empty
// //       )}
// //     </div>
// //   );
  





// // };


// // export default CartPage;












// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useCart } from '../context/CartContext'; // Adjust the path as needed
// // import './CartPage.css'; // Import your CSS file for styling
// // import ConfirmationDialog from './ConfirmationDialog';

// // const categories = [
// //   { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
// //   { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
// //   { id: '66f11850a0071a83021b1e12', name: 'Anime' },
// //   { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
// //   { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Thriller)' }, // Changed from Horror to Thriller
// //   { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
// // ];

// // // Function to get category name based on ID
// // const getCategoryName = (categoryId) => {
// //   const category = categories.find((cat) => cat.id === categoryId);
// //   return category ? category.name : 'Unknown Category';
// // };

// // const CartPage = () => {
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const { cart, removeFromCart, addToCart, setCart } = useCart([]);
// //   // const [newCart, setCart] = useState([]); // New cart state
// //   const [confirmDialog, setConfirmDialog] = useState({ visible: false, ticketId: null });

// //   const fetchCartContents = async () => {
// //     try {
// //       const token = localStorage.getItem('token');
// //       const response = await axios.get('http://localhost:5000/cart', {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       // Clear existing cart
// //       if (response.data.cart.length === 0) {
// //         setError('');
// //         return; // Exit early if cart is empty
// //       }

// //       const ticketDetailsPromises = response.data.cart.map(async (cartItem) => {
// //         const ticketResponse = await axios.get(`http://localhost:5000/tickets/${cartItem.ticketId}`);
// //         return {
// //           ...ticketResponse.data,
// //           quantity: cartItem.quantity,
// //         };
// //       });
// //       const fullCartItems = await Promise.all(ticketDetailsPromises);
// //       setCart(fullCartItems); // Set the new cart state
// //       fullCartItems.forEach((item) => {
// //         addToCart(item);
// //       });
// //     } catch (err) {
// //       if (err.response && err.response.status === 401) {
// //         setError('Unauthorized access. Please log in.');
// //       } else {
// //         setError('Failed to fetch cart contents. Please try again.');
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCartContents();
// //   }, []);

// //   const handleRemoveFromCart = (ticketId) => {
// //     setConfirmDialog({ visible: true, ticketId });
// //   };

// //   const confirmRemove = () => {
// //     if (confirmDialog.ticketId) {
// //       setCart(cart.filter(ticket => ticket._id !== confirmDialog.ticketId)); // Update newCart on remove
// //       removeFromCart(confirmDialog.ticketId);
// //     }
// //     setConfirmDialog({ visible: false, ticketId: null });
// //   };

// //   const cancelRemove = () => {
// //     setConfirmDialog({ visible: false, ticketId: null });
// //   };

// //   const handleCheckout = () => {
// //     alert('Proceeding to checkout...');
// //   };

// //   const handleDecreaseQuantity = (ticketId) => {
// //     setCart((prevCart) =>
// //       prevCart.map((ticket) => {
// //         if (ticket._id === ticketId && ticket.quantity > 1) {
// //           return { ...ticket, quantity: ticket.quantity - 1 };
// //         }
// //         return ticket; // Return the ticket unchanged if it doesn't match the condition
// //       })
// //     );
// //   };
  
// //   const handleIncreaseQuantity = (ticketId) => {
// //     setCart((prevCart) =>
// //       prevCart.map((ticket) => {
// //         if (ticket._id === ticketId) {
// //           return { ...ticket, quantity: ticket.quantity + 1 };
// //         }
// //         return ticket; // Return the ticket unchanged if it doesn't match the condition
// //       })
// //     );
// //   };

// //   const calculateTotal = () => {
// //     return cart.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0).toFixed(2);
// // };
  


  
// //   return (
// //     <div className="shopping-cart-container">
// //       <h2>Shopping Cart</h2>
// //       {loading && <p>Loading...</p>}
// //       {error && <p>{error}</p>}
// //       {cart.length > 0 ? (
// //         <div>
// //           <ul className="cart-item-list">
// //             {cart.map((ticket) => (
// //               <li key={ticket._id} className="cart-item">
// //                 <div className="cart-item-image">
// //                   {ticket.picture && (
// //                     <img
// //                       src={`http://localhost:5000/${ticket.picture}`}
// //                       alt={ticket.name}
// //                       className="cart-image"
// //                     />
// //                   )}
// //                 </div>
// //                 <div className="cart-item-details">
// //                   <p className="cart-item-name"><strong>{ticket.name}</strong></p>
// //                   <p className="cart-item-category"><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
// //                   <p>Price: ${ticket.price}</p>
// //                 </div>
// //                 <div className="cart-item-quantity">
// //                   <button onClick={() => handleDecreaseQuantity(ticket._id)} className="quantity-button">-</button>
// //                   <span>{ticket.quantity || 1}</span>
// //                   <button onClick={() => handleIncreaseQuantity(ticket._id)} className="quantity-button">+</button>
// //                 </div>
// //                 <div className="cart-item-remove">
// //                   <button className="remove-button" onClick={() => handleRemoveFromCart(ticket._id)}>Remove</button>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //           <h3>Total Bill: ${calculateTotal()}</h3>
// //           <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>

// //           {/* Confirmation Dialog */}
// //           {confirmDialog.visible && (
// //             <ConfirmationDialog
// //               onClose={cancelRemove}
// //               onConfirm={confirmRemove}
// //               message="Are you sure you want to remove this ticket?"
// //             />
// //           )}
// //         </div>
// //       ) : (
// //         <p>Your cart is empty.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default CartPage;





















// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useCart } from '../context/CartContext'; // Adjust the path as needed
// // import './CartPage.css'; // Import your CSS file for styling
// // import ConfirmationDialog from './ConfirmationDialog';
// // import {useNavigate} from 'react-router-dom';

// // const categories = [
// //   { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
// //   { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
// //   { id: '66f11850a0071a83021b1e12', name: 'Anime' },
// //   { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
// //   { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Thriller)' }, // Changed from Horror to Thriller
// //   { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
// // ];

// // // Function to get category name based on ID
// // const getCategoryName = (categoryId) => {
// //   const category = categories.find((cat) => cat.id === categoryId);
// //   return category ? category.name : 'Unknown Category';
// // };

// // const CartPage = () => {
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const { cart, removeFromCart, addToCart, setCart } = useCart([]);
// //   // const [newCart, setCart] = useState([]); // New cart state
// //   const [confirmDialog, setConfirmDialog] = useState({ visible: false, ticketId: null });


// //   const fetchCartContents = async () => {
// //     try {
// //       const token = localStorage.getItem('token');
// //       const response = await axios.get('http://localhost:5000/cart', {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       // Clear existing cart
// //       if (response.data.cart.length === 0) {
// //         setError('');
// //         return; // Exit early if cart is empty
// //       }

// //       const ticketDetailsPromises = response.data.cart.map(async (cartItem) => {
// //         const ticketResponse = await axios.get(`http://localhost:5000/tickets/${cartItem.ticketId}`);
// //         return {
// //           ...ticketResponse.data,
// //           quantity: cartItem.quantity,
// //         };
// //       });
// //       const fullCartItems = await Promise.all(ticketDetailsPromises);
// //       setCart(fullCartItems); // Set the new cart state
// //       fullCartItems.forEach((item) => {
// //         addToCart(item);
// //       });
// //     } catch (err) {
// //       if (err.response && err.response.status === 401) {
// //         setError('Unauthorized access. Please log in.');
// //       } else {
// //         setError('Failed to fetch cart contents. Please try again.');
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCartContents();
// //   }, []);

// //   const handleRemoveFromCart = (ticketId) => {
// //     setConfirmDialog({ visible: true, ticketId });
// //   };

// //   const confirmRemove = () => {
// //     if (confirmDialog.ticketId) {
// //       setCart(cart.filter(ticket => ticket._id !== confirmDialog.ticketId)); // Update newCart on remove
// //       removeFromCart(confirmDialog.ticketId);
// //     }
// //     setConfirmDialog({ visible: false, ticketId: null });
// //   };

// //   const cancelRemove = () => {
// //     setConfirmDialog({ visible: false, ticketId: null });
// //   };


// // const handleCheckout = async () => {
// //   const token = localStorage.getItem('token'); // Get token from local storage
// //     console.log('Token before checkout:', token); // Log the token to check if it's stored correctly

// //     if (!token) {
// //         console.error('No token found. User may not be logged in.');
// //         // Optionally, show a message to the user or redirect to login
// //         return; // Exit the function if no token is found
// //     }

// //     // Proceed with the checkout request
// //     try {
// //         const response = await fetch('http://localhost:5000/cart/checkout', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //                 'Authorization': `Bearer ${token}`, // Include token in headers
// //             },
// //             body: JSON.stringify({
// //                 // Add your checkout data here, such as order items
// //             }),
// //         });

// //         if (!response.ok) {
// //             throw new Error('Checkout failed. Please try again.');
// //       }

// //         const data = await response.json();
// //         console.log('Checkout successful:', data);
// //     } catch (error) {
// //         console.error('Error creating order:', error);
// //     }
// // };

// //   const handleDecreaseQuantity = (ticketId) => {
// //     setCart((prevCart) =>
// //       prevCart.map((ticket) => {
// //         if (ticket._id === ticketId && ticket.quantity > 1) {
// //           return { ...ticket, quantity: ticket.quantity - 1 };
// //         }
// //         return ticket; // Return the ticket unchanged if it doesn't match the condition
// //       })
// //     );
// //   };
  
// //   const handleIncreaseQuantity = (ticketId) => {
// //     setCart((prevCart) =>
// //       prevCart.map((ticket) => {
// //         if (ticket._id === ticketId) {
// //           return { ...ticket, quantity: ticket.quantity + 1 };
// //         }
// //         return ticket; // Return the ticket unchanged if it doesn't match the condition
// //       })
// //     );
// //   };

// //   const calculateTotal = () => {
// //     return cart.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0).toFixed(2);
// // };


// //   return (
// //     <div className="shopping-cart-container">
// //       <h2>Shopping Cart</h2>
// //       {loading && <p>Loading...</p>}
// //       {error && <p>{error}</p>}
// //       {cart.length > 0 ? (
// //         <div>
// //           <ul className="cart-item-list">
// //             {cart.map((ticket) => (
// //               <li key={ticket._id} className="cart-item">
// //                 <div className="cart-item-image">
// //                   {ticket.picture && (
// //                     <img
// //                       src={`http://localhost:5000/${ticket.picture}`}
// //                       alt={ticket.name}
// //                       className="cart-image"
// //                     />
// //                   )}
// //                 </div>
// //                 <div className="cart-item-details">
// //                   <p className="cart-item-name"><strong>{ticket.name}</strong></p>
// //                   <p className="cart-item-category"><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
// //                   <p>Price: ${ticket.price}</p>
// //                 </div>
// //                 <div className="cart-item-quantity">
// //                   <button onClick={() => handleDecreaseQuantity(ticket._id)} className="quantity-button">-</button>
// //                   <span>{ticket.quantity || 1}</span>
// //                   <button onClick={() => handleIncreaseQuantity(ticket._id)} className="quantity-button">+</button>
// //                 </div>
// //                 <div className="cart-item-remove">
// //                   <button className="remove-button" onClick={() => handleRemoveFromCart(ticket._id)}>Remove</button>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //           <h3>Total Bill: ${calculateTotal()}</h3>
// //           <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
// //           {error && <p className='error-message'>{error}</p>}

// //           {/* Confirmation Dialog */}
// //           {confirmDialog.visible && (
// //             <ConfirmationDialog
// //               onClose={cancelRemove}
// //               onConfirm={confirmRemove}
// //               message="Are you sure you want to remove this ticket?"
// //             />
// //           )}
// //         </div>
// //       ) : (
// //         <p>Your cart is empty.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default CartPage;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useCart } from '../context/CartContext'; // Adjust the path as needed
// import './CartPage.css'; // Import your CSS file for styling
// import ConfirmationDialog from './ConfirmationDialog';
// import { useNavigate } from 'react-router-dom';

// const categories = [
//   { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
//   { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
//   { id: '66f11850a0071a83021b1e12', name: 'Anime' },
//   { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
//   { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Thriller)' },
//   { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
// ];

// // Function to get category name based on ID
// const getCategoryName = (categoryId) => {
//   const category = categories.find((cat) => cat.id === categoryId);
//   return category ? category.name : 'Unknown Category';
// };

// const CartPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const { cart, removeFromCart, addToCart, setCart } = useCart([]);
//   const [confirmDialog, setConfirmDialog] = useState({ visible: false, ticketId: null });

//   const fetchCartContents = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/cart', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.data.cart.length === 0) {
//         setError('');
//         return; // Exit early if cart is empty
//       }

//       const ticketDetailsPromises = response.data.cart.map(async (cartItem) => {
//         const ticketResponse = await axios.get(`http://localhost:5000/tickets/${cartItem.ticketId}`);
//         return {
//           ...ticketResponse.data,
//           quantity: cartItem.quantity,
//         };
//       });
//       const fullCartItems = await Promise.all(ticketDetailsPromises);
//       setCart(fullCartItems);
//       fullCartItems.forEach((item) => {
//         addToCart(item);
//       });
//     } catch (err) {
//       if (err.response && err.response.status === 401) {
//         setError('Unauthorized access. Please log in.');
//       } else {
//         setError('Failed to fetch cart contents. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartContents();
//   }, []);

//   const handleRemoveFromCart = (ticketId) => {
//     setConfirmDialog({ visible: true, ticketId });
//   };

//   const confirmRemove = () => {
//     if (confirmDialog.ticketId) {
//       setCart(cart.filter(ticket => ticket._id !== confirmDialog.ticketId));
//       removeFromCart(confirmDialog.ticketId);
//     }
//     setConfirmDialog({ visible: false, ticketId: null });
//   };

//   const cancelRemove = () => {
//     setConfirmDialog({ visible: false, ticketId: null });
//   };





// // Function to handle checkout
// const handleCheckout = async (email) => {
//   const token = localStorage.getItem('token'); // Retrieve token from localStorage

//   if (!token) {
//       console.error("No token found. User is not authenticated.");
//       return; // Handle error as needed
//   }

//   try {
//       const response = await fetch('http://localhost:5000/cart/checkout', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ${token}`, // Use the retrieved token
//           },
//           body: JSON.stringify({ email }), // Send the email for checkout
//       });

//       if (!response.ok) {
//           const errorDetails = await response.json(); // Get error details from response
//           console.error("Error response from server:", errorDetails);
//           throw new Error(errorDetails.message || 'Something went wrong');
//       }

//       const data = await response.json(); // Handle the successful response
//       console.log("Checkout successful:", data);
//       // Optionally, you can clear the cart here
//       setCart([]); // Clear the cart after successful checkout
//   } catch (error) {
//       console.error("Error creating order:", error);
//   }
// };





  




//   const handleDecreaseQuantity = (ticketId) => {
//     setCart((prevCart) =>
//       prevCart.map((ticket) => {
//         if (ticket._id === ticketId && ticket.quantity > 1) {
//           return { ...ticket, quantity: ticket.quantity - 1 };
//         }
//         return ticket; // Return the ticket unchanged if it doesn't match the condition
//       })
//     );
//   };
  
//   const handleIncreaseQuantity = (ticketId) => {
//     setCart((prevCart) =>
//       prevCart.map((ticket) => {
//         if (ticket._id === ticketId) {
//           return { ...ticket, quantity: ticket.quantity + 1 };
//         }
//         return ticket; // Return the ticket unchanged if it doesn't match the condition
//       })
//     );
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="shopping-cart-container">
//       <h2>Shopping Cart</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {cart.length > 0 ? (
//         <div>
//           <ul className="cart-item-list">
//             {cart.map((ticket) => (
//               <li key={ticket._id} className="cart-item">
//                 <div className="cart-item-image">
//                   {ticket.picture && (
//                     <img
//                       src={`http://localhost:5000/${ticket.picture}`}
//                       alt={ticket.name}
//                       className="cart-image"
//                     />
//                   )}
//                 </div>
//                 <div className="cart-item-details">
//                   <p className="cart-item-name"><strong>{ticket.name}</strong></p>
//                   <p className="cart-item-category"><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
//                   <p>Price: ${ticket.price}</p>
//                 </div>
//                 <div className="cart-item-quantity">
//                   <button onClick={() => handleDecreaseQuantity(ticket._id)} className="quantity-button">-</button>
//                   <span>{ticket.quantity || 1}</span>
//                   <button onClick={() => handleIncreaseQuantity(ticket._id)} className="quantity-button">+</button>
//                 </div>
//                 <div className="cart-item-remove">
//                   <button className="remove-button" onClick={() => handleRemoveFromCart(ticket._id)}>Remove</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <h3>Total Bill: ${calculateTotal()}</h3>
//           <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
//           {error && <p className='error-message'>{error}</p>}

//           {/* Confirmation Dialog */}
//           {confirmDialog.visible && (
//             <ConfirmationDialog
//               onClose={cancelRemove}
//               onConfirm={confirmRemove}
//               message="Are you sure you want to remove this ticket?"
//             />
//           )}
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default CartPage;





















// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CartPage.css'; // Assuming you have a CSS file for styles

// const CartPage = () => {
//     const [cart, setCart] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [confirmDialog, setConfirmDialog] = useState({ visible: false, ticketId: null }); // State for confirmation dialog
//     const navigate = useNavigate(); // Use the useNavigate hook for navigation

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         console.log('Token:', token); // Log the token for debugging
//         if (token) {
//             const userId = getUserIdFromToken(token); // Function to extract user ID
//             console.log('User ID:', userId); // Log the user ID for debugging
//             if (userId) {
//                 fetchCart(token, userId); // Fetch cart using token and user ID
//             } else {
//                 console.error('Invalid token: No user ID found.');
//                 navigate('/user/login'); // Redirect to login if token is invalid
//             }
//         } else {
//             console.log('No user is logged in.');
//             navigate('/user/login'); // Redirect to login if not authenticated
//         }
//     }, [navigate]);

//     // Extract user ID from token
//     const getUserIdFromToken = (token) => {
//         try {
//             const payload = token.split('.')[1];
//             const decodedPayload = JSON.parse(atob(payload));
//             return decodedPayload.id; // Adjust if the user ID has a different key
//         } catch (error) {
//             console.error('Error decoding token:', error);
//             return null;
//         }
//     };

//     // Fetch cart items from the backend
//     // const fetchCart = async (token, userId) => {
//     //     try {
//     //         const response = await fetch(`http://localhost:5000/cart/${userId}`, {
//     //             method: 'GET',
//     //             headers: {
//     //                 'Authorization': `Bearer ${token}`,
//     //                 'Content-Type': 'application/json',
//     //             },
//     //         });

//     //         if (!response.ok) {
//     //             const errorData = await response.json();
//     //             console.error('Fetch cart error:', errorData.message); // Log the error for debugging
//     //             throw new Error(errorData.message || 'Failed to fetch cart contents.');
//     //         }

//     //         const data = await response.json();
//     //         console.log('Fetched cart data:', data); // Log the fetched cart data for debugging

//     //         // Check if the cart is defined and is an array
//     //         if (data.cart && Array.isArray(data.cart)) {
//     //             setCart(data.cart);
//     //         } else {
//     //             setError('Cart is empty or invalid data received.');
//     //         }
//     //     } catch (err) {
//     //         setError(err.message);
//     //         console.error('Error fetching cart:', err.message); // Log the error for debugging
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     const fetchCart = async () => {
//         const token = localStorage.getItem('token');
//         const userId = getUserIdFromToken(token); // Extract user ID from token
    
//         if (!userId) {
//             console.error('User ID is invalid or not found.');
//             return;
//         }
    
//         try {
//             const response = await fetch(`http://localhost:5000/cart/${userId}`, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`, // Include token if your backend requires it
//                     'Content-Type': 'application/json',
//                 },
//             });
    
//             console.log('Response Status:', response.status); // Log status
//             if (!response.ok) {
//                 throw new Error(`Error fetching cart: ${response.statusText}`);
//             }
    
//             const data = await response.json();
//             console.log('Fetched cart data:', data); // Log fetched data
    
//             if (data.cart && Array.isArray(data.cart)) {
//                 setCart(data.cart);
//             } else {
//                 console.error('Cart data is not in the expected format:', data);
//             }
//         } catch (error) {
//             console.error('Error fetching cart data:', error);
//             setError('Failed to fetch cart data. Please try again later.'); // Update error state
//         }
//     };
    
    
    

//     // Get category name from ID
//     const getCategoryName = (categoryId) => {
//         const categories = {
//             '66f11850a0071a83021b1e12': 'Horror',
//             '66f12738fd0977e888c713e5': 'Comedy',
//             '66f271d124f3a8f1d6f35202': 'Movie (Horror)',
//             '66f30e4291341f5cfa6a50d0': 'Horror and Emotional',
//             // Add more categories as needed
//         };
//         return categories[categoryId] || 'Unknown Category';
//     };

//     // Handle quantity change
//     const handleDecreaseQuantity = (ticketId) => {
//         console.log(`Decreasing quantity for ticket ID: ${ticketId}`); // Log for debugging
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item.ticket._id === ticketId
//                     ? { ...item, quantity: Math.max(1, item.quantity - 1) }
//                     : item
//             )
//         );
//     };

//     const handleIncreaseQuantity = (ticketId) => {
//         console.log(`Increasing quantity for ticket ID: ${ticketId}`); // Log for debugging
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item.ticket._id === ticketId
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item
//             )
//         );
//     };

//     // Handle removal of item from cart
//     const handleRemoveFromCart = (ticketId) => {
//         console.log(`Request to remove ticket ID: ${ticketId}`); // Log for debugging
//         setConfirmDialog({ visible: true, ticketId });
//     };

//     const confirmRemove = () => {
//         console.log(`Confirmed removal of ticket ID: ${confirmDialog.ticketId}`); // Log for debugging
//         setCart((prevCart) => prevCart.filter((item) => item.ticket._id !== confirmDialog.ticketId));
//         setConfirmDialog({ visible: false, ticketId: null });
//     };

//     const cancelRemove = () => {
//         console.log('Cancelled removal'); // Log for debugging
//         setConfirmDialog({ visible: false, ticketId: null });
//     };

//     // Calculate total price of cart
//     const calculateTotal = () => {
//         const total = cart.reduce((acc, item) => acc + item.ticket.price * (item.quantity || 1), 0).toFixed(2);
//         console.log('Total Bill:', total); // Log for debugging
//         return total;
//     };

// //     return (
// //         <div className="shopping-cart-container">
// //             <h2>Shopping Cart</h2>
// //             {loading && <p>Loading...</p>}
// //             {error && <p className="error-message">{error}</p>}
// //             {cart.length > 0 ? (
// //                 <div>
// //                     <ul className="cart-item-list">
// //     {cart.map(({ ticket, quantity }) => ( // Destructure the ticket object
// //         <li key={ticket._id} className="cart-item">
// //             <div className="cart-item-image">
// //                 {ticket.picture && (
// //                     <img
// //                         src={`http://localhost:5000/${ticket.picture}`}
// //                         alt={ticket.name}
// //                         className="cart-image"
// //                     />
// //                 )}
// //             </div>
// //             <div className="cart-item-details">
// //                 <p className="cart-item-id"><strong>Ticket ID:</strong> {ticket.ticket_Id}</p> {/* Correct access */}
// //                 <p className="cart-item-name"><strong>{ticket.name}</strong></p> {/* Correct access */}
// //                 <p className="cart-item-category"><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
// //                 <p>Price: ${ticket.price}</p>
// //                 <p className="cart-item-dates">
// //                     <strong>Start Date:</strong> {new Date(ticket.start_date).toLocaleDateString()}<br />
// //                     <strong>Expiry Date:</strong> {new Date(ticket.expiry_date).toLocaleDateString()}
// //                 </p>
// //             </div>
// //             <div className="cart-item-quantity">
// //                 <button onClick={() => handleDecreaseQuantity(ticket._id)} className="quantity-button">-</button>
// //                 <span>{quantity || 1}</span>
// //                 <button onClick={() => handleIncreaseQuantity(ticket._id)} className="quantity-button">+</button>
// //             </div>
// //             <div className="cart-item-remove">
// //                 <button className="remove-button" onClick={() => handleRemoveFromCart(ticket._id)}>Remove</button>
// //             </div>
// //         </li>
// //     ))}
// // </ul>

// //                     <h3>Total Bill: ${calculateTotal()}</h3>
// //                     <button className="checkout-button" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
                    
// //                     {/* Confirmation Dialog */}
// //                     {confirmDialog.visible && (
// //                         <div className="confirmation-dialog">
// //                             <p>Are you sure you want to remove this ticket?</p>
// //                             <button onClick={confirmRemove}>Yes</button>
// //                             <button onClick={cancelRemove}>No</button>
// //                         </div>
// //                     )}
// //                 </div>
// //             ) : (
// //                 <p>Your cart is empty.</p>
// //             )}
// //         </div>
// //     );


// return (
//   <div className="shopping-cart-container">
//       <h2>Shopping Cart</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p className="error-message">{error}</p>}
//       {cart.length > 0 ? (
//           <div>
//               <ul className="cart-item-list">
//                   {cart.map((item) => (
//                       <li key={item.ticket._id} className="cart-item">
//                           <div className="cart-item-image">
//                               <img
//                                   src={`http://localhost:5000/${item.ticket.picture}`}
//                                   alt={item.ticket.name}
//                                   className="cart-image"
//                               />
//                           </div>
//                           <div className="cart-item-details">
//                               <p className="cart-item-name"><strong>{item.ticket.name}</strong></p>
//                               <p className="cart-item-category"><strong>Category:</strong> {item.ticket.category}</p>
//                               <p>Price: ${item.ticket.price}</p>
//                               <p>Quantity: {item.quantity}</p>
//                           </div>
//                       </li>
//                   ))}
//               </ul>
//           </div>
//       ) : (
//           <p>Your cart is empty.</p>
//       )}
//   </div>
// );
// };


// export default CartPage;



























































// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CartPage.css'; // Assuming you have a CSS file for styles

// const CartPage = () => {
//     const [cart, setCart] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [confirmDialog, setConfirmDialog] = useState({ visible: false, ticketId: null }); // State for confirmation dialog
//     const navigate = useNavigate(); // Use the useNavigate hook for navigation

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         console.log('Token:', token); // Log the token for debugging
//         if (token) {
//             const userId = getUserIdFromToken(token); // Function to extract user ID
//             console.log('User ID:', userId); // Log the user ID for debugging
//             if (userId) {
//                 fetchCart(token, userId); // Fetch cart using token and user ID
//             } else {
//                 console.error('Invalid token: No user ID found.');
//                 navigate('/user/login'); // Redirect to login if token is invalid
//             }
//         } else {
//             console.log('No user is logged in.');
//             navigate('/user/login'); // Redirect to login if not authenticated
//         }
//     }, [navigate]);

//     // Extract user ID from token
//     const getUserIdFromToken = (token) => {
//         try {
//             const payload = token.split('.')[1];
//             const decodedPayload = JSON.parse(atob(payload));
//             return decodedPayload.id; // Adjust if the user ID has a different key
//         } catch (error) {
//             console.error('Error decoding token:', error);
//             return null;
//         }
//     };

//     // Fetch cart items from the backend
//     // const fetchCart = async (token, userId) => {
//     //     try {
//     //         const response = await fetch(`http://localhost:5000/cart/${userId}`, {
//     //             method: 'GET',
//     //             headers: {
//     //                 'Authorization': `Bearer ${token}`,
//     //                 'Content-Type': 'application/json',
//     //             },
//     //         });

//     //         if (!response.ok) {
//     //             const errorData = await response.json();
//     //             console.error('Fetch cart error:', errorData.message); // Log the error for debugging
//     //             throw new Error(errorData.message || 'Failed to fetch cart contents.');
//     //         }

//     //         const data = await response.json();
//     //         console.log('Fetched cart data:', data); // Log the fetched cart data for debugging

//     //         // Check if the cart is defined and is an array
//     //         if (data.cart && Array.isArray(data.cart)) {
//     //             setCart(data.cart);
//     //         } else {
//     //             setError('Cart is empty or invalid data received.');
//     //         }
//     //     } catch (err) {
//     //         setError(err.message);
//     //         console.error('Error fetching cart:', err.message); // Log the error for debugging
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     const fetchCart = async () => {
//         const token = localStorage.getItem('token');
//         const userId = getUserIdFromToken(token); // Extract user ID from token
    
//         if (!userId) {
//             console.error('User ID is invalid or not found.');
//             return;
//         }
    
//         try {
//             const response = await fetch(`http://localhost:5000/cart/${userId}`, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`, // Include token if your backend requires it
//                     'Content-Type': 'application/json',
//                 },
//             });
    
//             console.log('Response Status:', response.status); // Log status
//             if (!response.ok) {
//                 throw new Error(`Error fetching cart: ${response.statusText}`);
//             }
    
//             const data = await response.json();
//             console.log('Fetched cart data:', data); // Log fetched data
    
//             if (data.cart && Array.isArray(data.cart)) {
//                 setCart(data.cart);
//             } else {
//                 console.error('Cart data is not in the expected format:', data);
//             }
//         } catch (error) {
//             console.error('Error fetching cart data:', error);
//             setError('Failed to fetch cart data. Please try again later.'); // Update error state
//         }
//     };
    
    
    

//     // Get category name from ID
//     const getCategoryName = (categoryId) => {
//         const categories = {
//             '66f11850a0071a83021b1e12': 'Horror',
//             '66f12738fd0977e888c713e5': 'Comedy',
//             '66f271d124f3a8f1d6f35202': 'Movie (Horror)',
//             '66f30e4291341f5cfa6a50d0': 'Horror and Emotional',
//             // Add more categories as needed
//         };
//         return categories[categoryId] || 'Unknown Category';
//     };

//     // Handle quantity change
//     const handleDecreaseQuantity = (ticketId) => {
//         console.log(`Decreasing quantity for ticket ID: ${ticketId}`); // Log for debugging
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item.ticket._id === ticketId
//                     ? { ...item, quantity: Math.max(1, item.quantity - 1) }
//                     : item
//             )
//         );
//     };

//     const handleIncreaseQuantity = (ticketId) => {
//         console.log(`Increasing quantity for ticket ID: ${ticketId}`); // Log for debugging
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item.ticket._id === ticketId
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item
//             )
//         );
//     };

//     // Handle removal of item from cart
//     const handleRemoveFromCart = (ticketId) => {
//         console.log(`Request to remove ticket ID: ${ticketId}`); // Log for debugging
//         setConfirmDialog({ visible: true, ticketId });
//     };

//     const confirmRemove = () => {
//         console.log(`Confirmed removal of ticket ID: ${confirmDialog.ticketId}`); // Log for debugging
//         setCart((prevCart) => prevCart.filter((item) => item.ticket._id !== confirmDialog.ticketId));
//         setConfirmDialog({ visible: false, ticketId: null });
//     };

//     const cancelRemove = () => {
//         console.log('Cancelled removal'); // Log for debugging
//         setConfirmDialog({ visible: false, ticketId: null });
//     };

//     // Calculate total price of cart
//     const calculateTotal = () => {
//         const total = cart.reduce((acc, item) => acc + item.ticket.price * (item.quantity || 1), 0).toFixed(2);
//         console.log('Total Bill:', total); // Log for debugging
//         return total;
//     };

// //     return (
// //         <div className="shopping-cart-container">
// //             <h2>Shopping Cart</h2>
// //             {loading && <p>Loading...</p>}
// //             {error && <p className="error-message">{error}</p>}
// //             {cart.length > 0 ? (
// //                 <div>
// //                     <ul className="cart-item-list">
// //     {cart.map(({ ticket, quantity }) => ( // Destructure the ticket object
// //         <li key={ticket._id} className="cart-item">
// //             <div className="cart-item-image">
// //                 {ticket.picture && (
// //                     <img
// //                         src={`http://localhost:5000/${ticket.picture}`}
// //                         alt={ticket.name}
// //                         className="cart-image"
// //                     />
// //                 )}
// //             </div>
// //             <div className="cart-item-details">
// //                 <p className="cart-item-id"><strong>Ticket ID:</strong> {ticket.ticket_Id}</p> {/* Correct access */}
// //                 <p className="cart-item-name"><strong>{ticket.name}</strong></p> {/* Correct access */}
// //                 <p className="cart-item-category"><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
// //                 <p>Price: ${ticket.price}</p>
// //                 <p className="cart-item-dates">
// //                     <strong>Start Date:</strong> {new Date(ticket.start_date).toLocaleDateString()}<br />
// //                     <strong>Expiry Date:</strong> {new Date(ticket.expiry_date).toLocaleDateString()}
// //                 </p>
// //             </div>
// //             <div className="cart-item-quantity">
// //                 <button onClick={() => handleDecreaseQuantity(ticket._id)} className="quantity-button">-</button>
// //                 <span>{quantity || 1}</span>
// //                 <button onClick={() => handleIncreaseQuantity(ticket._id)} className="quantity-button">+</button>
// //             </div>
// //             <div className="cart-item-remove">
// //                 <button className="remove-button" onClick={() => handleRemoveFromCart(ticket._id)}>Remove</button>
// //             </div>
// //         </li>
// //     ))}
// // </ul>

// //                     <h3>Total Bill: ${calculateTotal()}</h3>
// //                     <button className="checkout-button" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
                    
// //                     {/* Confirmation Dialog */}
// //                     {confirmDialog.visible && (
// //                         <div className="confirmation-dialog">
// //                             <p>Are you sure you want to remove this ticket?</p>
// //                             <button onClick={confirmRemove}>Yes</button>
// //                             <button onClick={cancelRemove}>No</button>
// //                         </div>
// //                     )}
// //                 </div>
// //             ) : (
// //                 <p>Your cart is empty.</p>
// //             )}
// //         </div>
// //     );


// return (
//   <div className="shopping-cart-container">
//       <h2>Shopping Cart</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p className="error-message">{error}</p>}
//       {cart.length > 0 ? (
//           <div>
//               <ul className="cart-item-list">
//                   {cart.map((item) => (
//                       <li key={item.ticket._id} className="cart-item">
//                           <div className="cart-item-image">
//                               <img
//                                   src={`http://localhost:5000/${item.ticket.picture}`}
//                                   alt={item.ticket.name}
//                                   className="cart-image"
//                               />
//                           </div>
//                           <div className="cart-item-details">
//                               <p className="cart-item-name"><strong>{item.ticket.name}</strong></p>
//                               <p className="cart-item-category"><strong>Category:</strong> {item.ticket.category}</p>
//                               <p>Price: ${item.ticket.price}</p>
//                               <p>Quantity: {item.quantity}</p>
//                           </div>
//                       </li>
//                   ))}
//               </ul>
//           </div>
//       ) : (
//           <p>Your cart is empty.</p>
//       )}
//   </div>
// );
// };


// export default CartPage;

















































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import './CartPage.css'; // Assuming you have a CSS file for styles

// const CartPage = () => {
//     const [cart, setCart] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [confirmDialog, setConfirmDialog] = useState({ visible: false, ticketId: null }); // State for confirmation dialog
//     const navigate = useNavigate(); // Use the useNavigate hook for navigation

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         console.log('Token:', token); // Log the token for debugging
//         if (token) {
//             const userId = getUserIdFromToken(token); // Function to extract user ID
//             console.log('User ID:', userId); // Log the user ID for debugging
//             if (userId) {
//                 fetchCart(token, userId); // Fetch cart using token and user ID
//             } else {
//                 console.error('Invalid token: No user ID found.');
//                 navigate('/user/login'); // Redirect to login if token is invalid
//             }
//         } else {
//             console.log('No user is logged in.');
//             navigate('/user/login'); // Redirect to login if not authenticated
//         }
//     }, [navigate]);

//     // Extract user ID from token
//     const getUserIdFromToken = (token) => {
//         try {
//             const payload = token.split('.')[1];
//             const decodedPayload = JSON.parse(atob(payload));
//             return decodedPayload.id; // Adjust if the user ID has a different key
//         } catch (error) {
//             console.error('Error decoding token:', error);
//             return null;
//         }
//     };

//     // Fetch cart items from the backend
//     const fetchCart = async (token, userId) => {
//         try {
//             const response = await fetch(`http://localhost:5000/cart/${userId}`, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json',
//                 },
//             });

//             console.log('Response Status:', response.status); // Log status
//             if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error('Fetch cart error:', errorData.message); // Log the error for debugging
//                 throw new Error(errorData.message || 'Failed to fetch cart contents.');
//             }

//             const data = await response.json();
//             console.log('Fetched cart data:', data); // Log the fetched cart data for debugging

//             if (data.cart && Array.isArray(data.cart)) {
//                 setCart(data.cart);
//             } else {
//                 setError('Cart is empty or invalid data received.');
//             }
//         } catch (err) {
//             setError(err.message);
//             console.error('Error fetching cart:', err.message); // Log the error for debugging
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Get category name from ID
//     const getCategoryName = (categoryId) => {
//         const categories = {
//             '66f11850a0071a83021b1e12': 'Horror',
//             '66f12738fd0977e888c713e5': 'Comedy',
//             '66f271d124f3a8f1d6f35202': 'Movie (Horror)',
//             '66f30e4291341f5cfa6a50d0': 'Horror and Emotional',
//             // Add more categories as needed
//         };
//         return categories[categoryId] || 'Unknown Category';
//     };

//     // Handle quantity change
//     const handleDecreaseQuantity = (ticketId) => {
//         console.log(`Decreasing quantity for ticket ID: ${ticketId}`); // Log for debugging
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item.ticket._id === ticketId
//                     ? { ...item, quantity: Math.max(1, item.quantity - 1) }
//                     : item
//             )
//         );
//     };

//     const handleIncreaseQuantity = (ticketId) => {
//         console.log(`Increasing quantity for ticket ID: ${ticketId}`); // Log for debugging
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item.ticket._id === ticketId
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item
//             )
//         );
//     };

//     // Handle removal of item from cart
//     const handleRemoveFromCart = async (ticketId) => {
//         const { userId } = useParams(); // Extract the userId directly from the URL
    
//         try {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 console.error('Token is not defined. Please log in.');
//                 return;
//             }
    
//             // Make DELETE request to remove the ticket from the user's cart
//             const response = await axios.delete(`http://localhost:5000/cart/remove/${userId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // Include the token in the header
//                 },
//                 data: { ticketId } // Include the ticket ID in the request body
//             });
    
//             console.log('Ticket successfully removed from cart:', response.data);
//             // Update local state to remove the item from cart
//         } catch (error) {
//             console.error('Error removing ticket from cart:', error.response ? error.response.data : error.message);
//         }
//     };
    
    
    

//     const confirmRemove = async () => {
//         const token = localStorage.getItem('token'); // Get the token for authorization
//         const userId = getUserIdFromToken(token); // Extract user ID from the token
    
//         console.log(`Confirmed removal of ticket ID: ${confirmDialog.ticketId}`); // Log for debugging
    
//         try {
//             const response = await fetch(`http://localhost:5000/cart/${confirmDialog.ticketId}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ userId }), // Include userId in the request body
//             });
    
//             if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error('Remove from cart error:', errorData.message); // Log error for debugging
//                 throw new Error(errorData.message || 'Failed to remove item from cart.');
//             }
    
//             // Update local state to remove the item
//             setCart((prevCart) => prevCart.filter((item) => item.ticket._id !== confirmDialog.ticketId));
//             setConfirmDialog({ visible: false, ticketId: null });
//         } catch (error) {
//             console.error('Error removing from cart:', error.message); // Log the error for debugging
//         }
//     };

//     const cancelRemove = () => {
//         console.log('Cancelled removal'); // Log for debugging
//         setConfirmDialog({ visible: false, ticketId: null });
//     };

//     // Calculate total price of cart
//     const calculateTotal = () => {
//         const total = cart.reduce((acc, item) => acc + item.ticket.price * (item.quantity || 1), 0).toFixed(2);
//         console.log('Total Bill:', total); // Log for debugging
//         return total;
//     };

//     return (
//         <div className="shopping-cart-container">
//             <h2>Shopping Cart</h2>
//             {loading && <p>Loading...</p>}
//             {error && <p className="error-message">{error}</p>}
//             {cart.length > 0 ? (
//                 <div>
//                     <ul className="cart-item-list">
//                         {cart.map(({ ticket, quantity }) => ( // Destructure the ticket object
//                             <li key={ticket._id} className="cart-item">
//                                 <div className="cart-item-image">
//                                     {ticket.picture && (
//                                         <img
//                                             src={`http://localhost:5000/${ticket.picture}`}
//                                             alt={ticket.name}
//                                             className="cart-image"
//                                         />
//                                     )}
//                                 </div>
//                                 <div className="cart-item-details">
//                                     <p className="cart-item-id"><strong>Ticket ID:</strong> {ticket.ticket_Id}</p> {/* Correct access */}
//                                     <p className="cart-item-name"><strong>{ticket.name}</strong></p> {/* Correct access */}
//                                     <p className="cart-item-category"><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
//                                     <p>Price: ${ticket.price}</p>
//                                     <p>Quantity: {quantity || 1}</p>
//                                 </div>
//                                 <div className="cart-item-quantity">
//                                     <button onClick={() => handleDecreaseQuantity(ticket._id)} className="quantity-button">-</button>
//                                     <span>{quantity || 1}</span>
//                                     <button onClick={() => handleIncreaseQuantity(ticket._id)} className="quantity-button">+</button>
//                                 </div>
//                                 <div className="cart-item-remove">
//                                     <button className="remove-button" onClick={() => handleRemoveFromCart(ticket._id)}>Remove</button>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>

//                     <h3>Total Bill: ${calculateTotal()}</h3>
//                     <button className="checkout-button" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
                    
//                     {/* Confirmation Dialog */}
//                     {confirmDialog.visible && (
//                         <div className="confirmation-dialog">
//                             <p>Are you sure you want to remove this ticket?</p>
//                             <button onClick={confirmRemove}>Yes</button>
//                             <button onClick={cancelRemove}>No</button>
//                         </div>
//                     )}
//                 </div>
//             ) : (
//                 <p>Your cart is empty.</p>
//             )}
//         </div>
//     );
// };

// export default CartPage;


























import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './CartPage.css'; // Assuming you have a CSS file for styles

const CartPage = () => {
    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [confirmDialog, setConfirmDialog] = useState({ visible: false, ticketId: null }); // State for confirmation dialog
    const navigate = useNavigate(); // Use the useNavigate hook for navigation
    // const { userId } = useParams(); // Extract the userId directly from the URL
    const { id: userId } = useParams();
    console.log(`User ID is: ${userId}`);


    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     console.log('Token:', token); // Log the token for debugging
    //     if (token) {
    //         const userIdFromToken = getUserIdFromToken(token); // Function to extract user ID
    //         console.log('User ID:', userIdFromToken); // Log the user ID for debugging
    //         if (userIdFromToken) {
    //             fetchCart(token, userIdFromToken); // Fetch cart using token and user ID
    //         } else {
    //             console.error('Invalid token: No user ID found.');
    //             navigate('/user/login'); // Redirect to login if token is invalid
    //         }
    //     } else {
    //         console.log('No user is logged in.');
    //         navigate('/user/login'); // Redirect to login if not authenticated
    //     }
    // }, [navigate]);




    // // Fetch cart items from the backend
    // const fetchCart = async (token, userIdFromToken) => {
    //     try {
    //         const response = await fetch(`http://localhost:5000/cart/${userIdFromToken}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         console.log('Response Status:', response.status); // Log status
    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             console.error('Fetch cart error:', errorData.message); // Log the error for debugging
    //             throw new Error(errorData.message || 'Failed to fetch cart contents.');
    //         }

    //         const data = await response.json();
    //         console.log('Fetched cart data:', data); // Log the fetched cart data for debugging

    //         if (data.cart && Array.isArray(data.cart)) {
    //             setCart(data.cart);
    //         } else {
    //             setError('Cart is empty or invalid data received.');
    //         }
    //     } catch (err) {
    //         setError(err.message);
    //         console.error('Error fetching cart:', err.message); // Log the error for debugging
    //     } finally {
    //         setLoading(false);
    //     }
    // };






    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Token:', token); // Log the token for debugging
        if (token) {
            const userIdFromToken = getUserIdFromToken(token);
            console.log('User ID:', userIdFromToken); // Log the user ID for debugging
            if (userIdFromToken) {
                fetchCart(token, userIdFromToken);
            } else {
                console.error('Invalid token: No user ID found.');
                navigate('/user/login');
            }
        } else {
            console.log('No user is logged in.');
            navigate('/user/login');
        }
    }, [navigate]);
    
    const fetchCart = async (token, userIdFromToken) => {
        try {
            console.log(`Fetching cart for user ID: ${userIdFromToken}`); // Log user ID for fetching
            const response = await fetch(`http://localhost:5000/cart/${userIdFromToken}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
    
            console.log('Response Status:', response.status); // Log status
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Fetch cart error:', errorData.message);
                throw new Error(errorData.message || 'Failed to fetch cart contents.');
            }
    
            const data = await response.json();
            console.log('Fetched cart data:', data); // Log the fetched cart data for debugging
    
            if (data.cart && Array.isArray(data.cart)) {
                setCart(data.cart);
            } else {
                setError('Cart is empty or invalid data received.');
            }
        } catch (err) {
            setError(err.message);
            console.error('Error fetching cart:', err.message);
        } finally {
            setLoading(false);
        }
    };
    








    // Extract user ID from token
    const getUserIdFromToken = (token) => {
        try {
            const payload = token.split('.')[1];
            const decodedPayload = JSON.parse(atob(payload));
            return decodedPayload.id; // Adjust if the user ID has a different key
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };

    






    // Handle removal of item from cart
//     const handleRemoveFromCart = async () => {
//     // Prompt the user for the ticket ID
//     const ticketId = prompt("Please enter the Ticket ID to remove:");

//     if (!ticketId) {
//         console.error("No Ticket ID entered.");
//         return;
//     }

//     const token = localStorage.getItem('token');
//     if (!token) {
//         console.error('Token is not defined. Please log in.');
//         return;
//     }

//     try {
//         const response = await axios.delete(`http://localhost:5000/cart/remove/${userId}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//             data: {
//                 ticketId: ticketId,
//             },
//         });

//         if (response.status === 200) {
//             console.log('Item removed from cart successfully:', response.data);
//             // Update the cartItems state to remove the deleted ticket
//             setCartItems(prevItems => prevItems.filter(item => item.ticket._id !== response.data.cart.items.find(i => i.ticket.ticket_Id === ticketId)._id));
//         }
//     } catch (error) {
//         console.error('Error removing from cart:', error.response?.data || error.message);
//     }
// };


// Handle removal of item from cart
const handleRemoveFromCart = async () => {
    // Prompt the user for the ticket ID
    const ticketId = prompt("Please enter the Ticket ID to remove:");

    if (!ticketId) {
        console.error("No Ticket ID entered.");
        return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
        console.error('Token is not defined. Please log in.');
        return;
    }

    try {
        const response = await axios.delete(`http://localhost:5000/cart/remove/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            data: {
                ticketId: ticketId,
            },
        });

        if (response.status === 200) {
            console.log('Item removed from cart successfully:', response.data);
            
            // Assuming you have an updated list of cart items in response.data.cart.items
            setCartItems(response.data.cart.items); // This will set the cart items to the latest state
        }
    } catch (error) {
        console.error('Error removing from cart:', error.response?.data || error.message);
    }
};

    // Get category name from ID
    const getCategoryName = (categoryId) => {
        const categories = {
            '66f11850a0071a83021b1e12': 'Horror',
            '66f12738fd0977e888c713e5': 'Comedy',
            '66f271d124f3a8f1d6f35202': 'Movie (Horror)',
            '66f30e4291341f5cfa6a50d0': 'Horror and Emotional',
            // Add more categories as needed
        };
        return categories[categoryId] || 'Unknown Category';
    };

    // Handle quantity decrease
    const handleDecreaseQuantity = (ticketId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.ticket._id === ticketId
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            )
        );
    };

    // Handle quantity increase
    const handleIncreaseQuantity = (ticketId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.ticket._id === ticketId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Calculate total price of cart
    const calculateTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.ticket.price * (item.quantity || 1), 0).toFixed(2);
        return total;
    };

    const confirmRemove = async () => {
        const token = localStorage.getItem('token'); // Get the token for authorization
        const userId = getUserIdFromToken(token); // Extract user ID from the token
    
        try {
            const response = await fetch(`http://localhost:5000/cart/${confirmDialog.ticketId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId }), // Include userId in the request body
            });
    
            if (!response.ok) {
                throw new Error('Failed to remove item from cart.');
            }
    
            setCart((prevCart) => prevCart.filter((item) => item.ticket._id !== confirmDialog.ticketId));
            setConfirmDialog({ visible: false, ticketId: null });
        } catch (error) {
            console.error('Error removing from cart:', error.message);
        }
    };
    
    const cancelRemove = () => {
        setConfirmDialog({ visible: false, ticketId: null });
    };
    

    // return (
    //     <div className="shopping-cart-container">
    //         <h2>Shopping Cart</h2>
    //         {loading && <p>Loading...</p>}
    //         {error && <p className="error-message">{error}</p>}
    //         {cart.length > 0 ? (
    //             <div>
    //                 <ul className="cart-item-list">
    //                     {cart.map(({ ticket, quantity }) => ( // Destructure the ticket object
    //                         <li key={ticket._id} className="cart-item">
    //                             <div className="cart-item-image">
    //                                 {ticket.picture && (
    //                                     <img
    //                                         src={`http://localhost:5000/${ticket.picture}`}
    //                                         alt={ticket.name}
    //                                         className="cart-image"
    //                                     />
    //                                 )}
    //                             </div>
    //                             <div className="cart-item-details">
    //                                 <p className="cart-item-id"><strong>Ticket ID:</strong> {ticket.ticket_Id}</p> {/* Correct access */}
    //                                 <p className="cart-item-name"><strong>{ticket.name}</strong></p> {/* Correct access */}
    //                                 <p className="cart-item-category"><strong>Category:</strong> {getCategoryName(ticket.category)}</p>
    //                                 <p>Price: ${ticket.price}</p>
    //                                 <p>Quantity: {quantity || 1}</p>
    //                             </div>
    //                             <div className="cart-item-quantity">
    //                                 <button onClick={() => handleDecreaseQuantity(ticket._id)} className="quantity-button">-</button>
    //                                 <span>{quantity || 1}</span>
    //                                 <button onClick={() => handleIncreaseQuantity(ticket._id)} className="quantity-button">+</button>
    //                             </div>
    //                             <div className="cart-item-remove">
    //                                 <button className="remove-button" onClick={() => handleRemoveFromCart(ticket._id)}>Remove</button>
    //                             </div>
    //                         </li>
    //                     ))}
    //                 </ul>

    //                 <h3>Total Bill: ${calculateTotal()}</h3>
    //                 <button className="checkout-button" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
                    
    //                 {/* Confirmation Dialog */}
    //                 {confirmDialog.visible && (
    //                     <div className="confirmation-dialog">
    //                         <p>Are you sure you want to remove this ticket?</p>
    //                         <button onClick={confirmRemove}>Yes</button>
    //                         <button onClick={cancelRemove}>No</button>
    //                     </div>
    //                 )}
    //             </div>
    //         ) : (
    //             <p>Your cart is empty.</p>
    //         )}
    //     </div>
    // );
    
    
    
    return (
        <div className="shopping-cart-container">
            <h2>Shopping Cart</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {cart.length > 0 ? (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Ticket ID</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(({ ticket, quantity }) => (
                            <tr key={ticket._id}>
                                <td>{ticket.ticket_Id}</td>
                                <td>
                                    {ticket.picture && (
                                        <img
                                            src={`http://localhost:5000/${ticket.picture}`}
                                            alt={ticket.name}
                                            className="cart-image"
                                        />
                                    )}
                                </td>
                                <td>{ticket.name}</td>
                                <td>{getCategoryName(ticket.category)}</td>
                                <td>
                                    <button onClick={() => handleDecreaseQuantity(ticket._id)} className="quantity-button">-</button>
                                    <span>{quantity || 1}</span>
                                    <button onClick={() => handleIncreaseQuantity(ticket._id)} className="quantity-button">+</button>
                                </td>
                                <td>${ticket.price}</td>
                                <td>
                                    <button className="remove-button" onClick={() => handleRemoveFromCart(ticket._id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Your cart is empty.</p>
            )}
            <h3 className='total-bill' >Total Bill: ${calculateTotal()}</h3>
            <button className="checkout-button" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
            
            {/* Confirmation Dialog */}
            {confirmDialog.visible && (
                <div className="confirmation-dialog">
                    <p>Are you sure you want to remove this ticket?</p>
                    <button onClick={confirmRemove}>Yes</button>
                    <button onClick={cancelRemove}>No</button>
                </div>
            )}
        </div>
    );
};



export default CartPage;
