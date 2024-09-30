
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './EditTicket.css'; // Import the CSS file for styles

// Set the app element for accessibility
Modal.setAppElement('#root');

const EditTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState({
    ticket_Id: '',
    category: '',
    name: '',
    start_date: '',
    expiry_date: '',
    price: '',
    picture: null,
  });
  const [error, setError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success'); // To differentiate between success and error

  const categories = [
    { id: '66f117aea0071a83021b1e07', name: 'Movies ( Horror )' },
    { id: '66f117f6a0071a83021b1e10', name: 'Movies ( Comedy )' },
    { id: '66f11850a0071a83021b1e12', name: 'Anime' },
    {id:  '66f12738fd0977e888c713e5' , name:'Animated Movies'},
    {id:  '66f271d124f3a8f1d6f35202' , name:'Movie (Horror)'},
    {id:  '66f30e4291341f5cfa6a50d0' , name:'horror and emotional'},
  ];

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tickets/${id}`);
        const ticketData = response.data;
        setTicket({
          ...ticketData,
          start_date: ticketData.start_date.split('T')[0],
          expiry_date: ticketData.expiry_date.split('T')[0],
        });
      } catch (error) {
        setError('Error fetching ticket data');
      }
    };

    fetchTicket();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setTicket((prev) => ({
      ...prev,
      picture: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(ticket).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      await axios.put(`http://localhost:5000/tickets/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setModalMessage('Ticket updated successfully!');
      setModalType('success'); // Set the modal type to success
      setModalIsOpen(true);
    } catch (error) {
      setModalMessage('Failed to update ticket. Please try again.');
      setModalType('error'); // Set the modal type to error
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    navigate('/tickets'); // Navigate to /tickets after closing the modal
  };

  return (
    <div className="edit-ticket-container">
      <h1>Edit Ticket</h1>
      {error && <p className="error-message">{error}</p>}
      <form className="edit-ticket-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ticket ID:</label>
          <input
            type="text"
            name="ticket_Id"
            value={ticket.ticket_Id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            name="category"
            value={ticket.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={ticket.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="start_date"
            value={ticket.start_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="date"
            name="expiry_date"
            value={ticket.expiry_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={ticket.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Picture:</label>
          <input
            type="file"
            name="picture"
            onChange={handleFileChange}
            id="picture-upload" // Add an ID for styling
            style={{ display: 'none' }} // Hide default file input
          />
          <label htmlFor="picture-upload" className="upload-button">
            Upload Picture
          </label>
        </div>
        <button type="submit" className="submit-button">Update Ticket</button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#ffffff', // White background for modal
            border: '1px solid #ccc',
          },
        }}
      >
        <h2>{modalType === 'success' ? 'Success' : 'Error'}</h2>
        <p>{modalMessage}</p>
        <button onClick={closeModal} className="submit-button">Close</button>
      </Modal>
    </div>
  );
};

export default EditTicket;
