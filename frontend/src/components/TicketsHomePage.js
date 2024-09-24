import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TicketsHome.css'; // Ensure this CSS file is linked

const TicketsHome = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tickets');
      setTickets(response.data.tickets);
      console.log("Fetched tickets:", response.data.tickets);
    } catch (err) {
      setError('Failed to fetch tickets. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="tickets-home">
      <h2 className="title">Available Tickets</h2>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="tickets-grid">
        {tickets.length === 0 ? (
          <p className="no-tickets">No tickets available.</p>
        ) : (
          tickets.map((ticket) => (
            <div key={ticket.ticket_Id} className="ticket-card">
              <h3 className="ticket-name">{ticket.name}</h3>
              <img
                src={`http://localhost:5000/${ticket.picture}`}
                alt={ticket.name}
                className="ticket-image"
              />
              <p className="category">Category: {ticket.category}</p>
              <p className="price">Price: ${ticket.price}</p>
              <p className="dates">
                Start Date: {new Date(ticket.start_date).toLocaleDateString()} <br />
                Expiry Date: {new Date(ticket.expiry_date).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TicketsHome;
