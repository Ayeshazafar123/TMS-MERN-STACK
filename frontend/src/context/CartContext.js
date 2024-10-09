
// // // // import React, { createContext, useContext, useState, useEffect } from 'react';

// // // // // Create the CartContext
// // // // const CartContext = createContext();

// // // // // Custom hook to use the CartContext
// // // // export const useCart = () => {
// // // //     return useContext(CartContext);
// // // // };

// // // // // CartProvider component to wrap the app and provide the cart state
// // // // export const CartProvider = ({ children }) => {
// // // //     // Initialize the cart state by reading from localStorage (if available)
// // // //     const [cart, setCart] = useState(() => {
// // // //         const savedCart = localStorage.getItem('cart');
// // // //         return savedCart ? JSON.parse(savedCart) : [];
// // // //     });

// // // //     // Effect to persist cart state in localStorage whenever it changes
// // // //     useEffect(() => {
// // // //         localStorage.setItem('cart', JSON.stringify(cart));
// // // //     }, [cart]);

// // // //     // Function to add a ticket to the cart
// // // //     const addToCart = (ticket) => {
// // // //         setCart((prevCart) => {
// // // //             const existingTicket = prevCart.find((item) => item._id === ticket._id);
// // // //             if (existingTicket) {
// // // //                 // If the ticket already exists, increase its quantity
// // // //                 return prevCart.map((item) =>
// // // //                     item._id === ticket._id
// // // //                         ? { ...item, quantity: item.quantity + 1 }
// // // //                         : item
// // // //                 );
// // // //             } else {
// // // //                 // If it's a new ticket, add it to the cart with quantity 1
// // // //                 return [...prevCart, { ...ticket, quantity: 1 }];
// // // //             }
// // // //         });
// // // //     };

// // // //     // Function to remove a ticket from the cart
// // // //     const removeFromCart = (ticketId) => {
// // // //         setCart((prevCart) => prevCart.filter((ticket) => ticket._id !== ticketId));
// // // //     };

// // // //     // Provide the cart and actions to the rest of the app
// // // //     return (
// // // //         <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
// // // //             {children}
// // // //         </CartContext.Provider>
// // // //     );
// // // // };

















// // import React, { createContext, useContext, useState, useEffect } from 'react';

// // // Create the CartContext
// // const CartContext = createContext();

// // // Custom hook to use the CartContext
// // export const useCart = () => {
// //     return useContext(CartContext);
// // };

// // // CartProvider component to wrap the app and provide the cart state
// // export const CartProvider = ({ children }) => {
// //     // Initialize the cart state by reading from localStorage (if available)
// //     const [cart, setCart] = useState(() => {
// //         const savedCart = localStorage.getItem('cart');
// //         return savedCart ? JSON.parse(savedCart) : [];
// //     });

// //     // Effect to persist cart state in localStorage whenever it changes
// //     useEffect(() => {
// //         localStorage.setItem('cart', JSON.stringify(cart));
// //     }, [cart]);

// //     // Function to add a ticket to the cart
// //     const addToCart = async (ticket) => {
// //         setCart((prevCart) => {
// //             const existingTicket = prevCart.find((item) => item._id === ticket._id);
// //             const updatedCart = existingTicket
// //                 ? prevCart.map((item) =>
// //                       item._id === ticket._id
// //                           ? { ...item, quantity: item.quantity + 1 }
// //                           : item
// //                   )
// //                 : [...prevCart, { ...ticket, quantity: 1 }];

// //             // Update localStorage
// //             localStorage.setItem('cart', JSON.stringify(updatedCart));

// //             // Send updated cart to backend session
// //             const token = localStorage.getItem('token'); // Retrieve token from localStorage
// //             fetch('http://localhost:5000/cart/add', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${token}`, // Use the retrieved token
// //                 },
// //                 body: JSON.stringify({ ticketId: ticket._id }), // Pass the ticket ID
// //             })
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error('Failed to add ticket to the cart');
// //                 }
// //                 return response.json(); // Handle response as needed
// //             })
// //             .catch(error => {
// //                 console.error('Error adding ticket:', error);
// //             });

// //             return updatedCart; // Return the updated cart
// //         });
// //     };

// //     // Function to remove a ticket from the cart
// //     const removeFromCart = (ticketId) => {
// //         setCart((prevCart) => prevCart.filter((ticket) => ticket._id !== ticketId));
// //     };

// //     // Function to handle checkout
// //     const handleCheckout = async (email) => {
// //         const token = localStorage.getItem('token'); // Retrieve token from localStorage

// //         if (!token) {
// //             console.error("No token found. User is not authenticated.");
// //             return; // Handle error as needed
// //         }

// //         try {
// //             const response = await fetch('http://localhost:5000/cart/checkout', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${token}`, // Use the retrieved token
// //                 },
// //                 body: JSON.stringify({ email }),
// //             });

// //             if (!response.ok) {
// //                 const errorDetails = await response.json();
// //                 console.error("Error response from server:", errorDetails);
// //                 throw new Error(errorDetails.message || 'Something went wrong');
// //             }

// //             const data = await response.json();
// //             console.log("Checkout successful:", data);
// //             // Handle successful checkout here
// //         } catch (error) {
// //             console.error("Error creating order:", error);
// //         }
// //     };

// //     // Provide the cart and actions to the rest of the app
// //     return (
// //         <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, handleCheckout }}>
// //             {children}
// //         </CartContext.Provider>
// //     );
// // };

















// // import React, { createContext, useReducer, useContext } from 'react';
// // import axios from 'axios';

// // // Create context
// // const CartContext = createContext();

// // // Initial state
// // const initialState = {
// //   cart: [],
// // };

// // // Reducer function to manage cart state
// // const cartReducer = (state, action) => {
// //   switch (action.type) {


// //     case 'LOAD_CART':
// //       return{
// //         ...state,
// //         cart: action.payload,
// //       }

// //     case 'ADD_TO_CART':
// //       // Check if the item already exists in the cart
// //       const existingItem = state.cart.find(item => item.id === action.payload._id);// here also
// //       if (existingItem) {
// //         // If the item exists, increase its quantity
// //         return {
// //           ...state,
// //           cart: state.cart.map(item =>
// //             item.id === action.payload._id // here i convert id to _id
// //               ? { ...item, quantity: item.quantity + 1 }
// //               : item
// //           ),
// //         };
// //       } else {
// //         // If the item doesn't exist, add it to the cart with quantity 1
// //         return {
// //           ...state,
// //           cart: [...state.cart, { ...action.payload, quantity: 1 }],
// //         };
// //       }

// //     case 'REMOVE_FROM_CART':
// //       // Remove the item from the cart
// //       return {
// //         ...state,
// //         cart: state.cart.filter(item => item._id !== action.payload._id),
// //       };

// //     case 'CLEAR_CART':
// //       // Clear the cart
// //       return {
// //         ...state,
// //         cart: [],
// //       };

// //     default:
// //       return state;
// //   }
// // };

// // // Context provider component
// // const CartProvider = ({ children }) => {
// //   const [state, dispatch] = useReducer(cartReducer, initialState);

// //   // Function to add ticket to cart
// //   const addToCart = (ticket) => {
// //     dispatch({ type: 'ADD_TO_CART', payload: ticket });
// //   };

// //   const fetchCartData = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:5000/cart');
// //       dispatch({ type: 'LOAD_CART', payload: response.data.cart });
// //     } catch (error) {
// //       console.error('Error fetching cart data:', error);
// //     }
// //   };

// //   // Function to remove ticket from cart
// //   const removeFromCart = (ticket) => {
// //     dispatch({ type: 'REMOVE_FROM_CART', payload: ticket });
// //   };

// //   // Function to clear the cart
// //   const clearCart = () => {
// //     dispatch({ type: 'CLEAR_CART' });
// //   };

// //   return (
// //     <CartContext.Provider value={{ cart: state.cart, addToCart, fetchCartData, removeFromCart, clearCart }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // // Custom hook for using the CartContext
// // const useCart = () => {
// //   return useContext(CartContext);
// // };

// // export { CartProvider, useCart };

































// // src/context/CartContext.js
// import React, { createContext, useReducer, useContext } from 'react';

// // Create context
// const CartContext = createContext();

// // Initial state
// const initialState = {
//   cart: [],
// };

// // Reducer function to manage cart state
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOAD_CART':
//       return {
//         ...state,
//         cart: action.payload,
//       };
//     case 'ADD_TO_CART':
//       const existingItem = state.cart.find(item => item._id === action.payload._id);
//       if (existingItem) {
//         // If item already exists in the cart, increase its quantity
//         return {
//           ...state,
//           cart: state.cart.map(item =>
//             item._id === action.payload._id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         // Add new item to the cart
//         return {
//           ...state,
//           cart: [...state.cart, { ...action.payload, quantity: 1 }],
//         };
//       }
//     case 'REMOVE_FROM_CART':
//       // Remove item from the cart
//       return {
//         ...state,
//         cart: state.cart.filter(item => item._id !== action.payload._id),
//       };
//     case 'CLEAR_CART':
//       // Clear the cart
//       return {
//         ...state,
//         cart: [],
//       };
//     default:
//       return state;
//   }
// };

// // Context provider component
// const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   // Function to load cart from local storage (optional)
//   const loadCart = (cartItems) => {
//     dispatch({ type: 'LOAD_CART', payload: cartItems });
//   };

//   // Function to add item to cart
//   const addToCart = (ticket) => {
//     dispatch({ type: 'ADD_TO_CART', payload: ticket });
//   };

//   // Function to remove item from cart
//   const removeFromCart = (ticketId) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: { _id: ticketId } });
//   };

//   // Function to clear the cart
//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   // Provide cart state and actions to children
//   return (
//     <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart, clearCart, loadCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook for using the CartContext
// const useCart = () => {
//   return useContext(CartContext);
// };

// export { CartProvider, useCart };
























































































import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Create context
const CartContext = createContext();

// Initial state
const initialState = {
  cart: [],
};

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return {
        ...state,
        cart: action.payload,
      };
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item._id === action.payload._id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item._id !== action.payload._id),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

// Load cart items from local storage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

// Context provider component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
    cart: loadCartFromLocalStorage(),
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  // Function to load cart from local storage (optional)
  const loadCart = (cartItems) => {
    dispatch({ type: 'LOAD_CART', payload: cartItems });
  };

  // Function to add item to cart
  const addToCart = (ticket) => {
    dispatch({ type: 'ADD_TO_CART', payload: ticket });
  };

  // Function to remove item from cart
  const removeFromCart = (ticketId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { _id: ticketId } });
  };

  // Function to clear the cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Provide cart state and actions to children
  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart, clearCart, loadCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the CartContext
const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
