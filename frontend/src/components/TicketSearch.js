import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TicketSearch = () => {
  const [ticketId, setTicketId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/tickets/${ticketId}`);
      if (!response.ok) {
        throw new Error('Unable to fetch ticket details');
      }
      // Navigate to the TicketDetailsView with the ID
      navigate(`/ticket-detail/${ticketId}`);
      setError(''); // Reset error if the fetch is successful
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Search for Ticket</h2>
      <input
        type="text"
        value={ticketId}
        onChange={(e) => setTicketId(e.target.value)}
        placeholder="Enter Ticket ID...."
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TicketSearch;

