
// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import {
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     Button,
//     TextField,
//     Grid,
//     Paper,
//     Typography,
//     Container,
// } from '@mui/material';
// import { styled } from '@mui/system';

// // Styled components for Sidebar
// const Sidebar = styled('div')({
//     width: '250px',
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
//         color:'white'
//     },
// });

// const Content = styled('div')({
//     marginLeft: '260px', // Space for sidebar
//     padding: '20px',
// });

// const CreateTicketForm = () => {
//     const [openDialog, setOpenDialog] = useState(false);
//     const [dialogMessage, setDialogMessage] = useState('');

//     const formik = useFormik({
//         initialValues: {
//             ticketId: '',
//             category: '',
//             name: '',
//             startDate: '',
//             expiryDate: '',
//             price: '',
//             picture: null,
//         },
//         validationSchema: Yup.object({
//             ticketId: Yup.string().required('Ticket ID is required'),
//             category: Yup.string().required('Category ID is required'),
//             name: Yup.string().required('Name is required'),
//             startDate: Yup.date().required('Start date is required').nullable(),
//             expiryDate: Yup.date().required('Expiry date is required').nullable()
//                 .min(Yup.ref('startDate'), "Expiry date can't be before start date"),
//             price: Yup.number().required('Price is required').positive('Price must be a positive number'),
//             picture: Yup.mixed().required('A file is required'),
//         }),
//         onSubmit: async (values) => {
//             const formData = new FormData();
//             formData.append('ticket_Id', values.ticketId);
//             formData.append('category', values.category);
//             formData.append('name', values.name);
//             formData.append('start_date', values.startDate);
//             formData.append('expiry_date', values.expiryDate);
//             formData.append('price', values.price);
//             formData.append('picture', values.picture);

//             try {
//                 const response = await axios.post('http://localhost:5000/tickets', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//                 setDialogMessage(response.data.message || 'Ticket created successfully!');
//                 setOpenDialog(true);
//                 formik.resetForm();
//             } catch (error) {
//                 setDialogMessage(error.response?.data?.error || 'Error while creating ticket');
//                 setOpenDialog(true);
//             }
//         },
//     });

//     const handleFileChange = (event) => {
//         formik.setFieldValue('picture', event.currentTarget.files[0]);
//     };

//     const handleCloseDialog = () => {
//         setOpenDialog(false);
//     };

//     return (
//         <div>
//             {/* Sidebar */}
//             <Sidebar>
//                 <Typography variant="h5" style={{ color: '#fff', marginBottom: '20px' }}>TMS</Typography>
//                 <SidebarItem href="/admin/create-ticket">Create Ticket</SidebarItem>
//                 <SidebarItem href="/tickets">View Ticket</SidebarItem>
//                 <SidebarItem href="/update-ticket">Update Ticket</SidebarItem>
//             </Sidebar>

//             {/* Main Content */}
//             <Content>
//                 <Container maxWidth="sm" style={{ marginTop: '20px' }}>
//                     <Paper elevation={3} style={{ padding: '20px' }}>
//                         <Typography variant="h4" align="center" gutterBottom>
//                             Create Ticket
//                         </Typography>
//                         <form onSubmit={formik.handleSubmit}>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         fullWidth
//                                         label="Ticket ID"
//                                         name="ticketId"
//                                         variant="outlined"
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         value={formik.values.ticketId}
//                                         error={formik.touched.ticketId && Boolean(formik.errors.ticketId)}
//                                         helperText={formik.touched.ticketId && formik.errors.ticketId}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <TextField
//                                         fullWidth
//                                         label="Category ID"
//                                         name="category"
//                                         variant="outlined"
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         value={formik.values.category}
//                                         error={formik.touched.category && Boolean(formik.errors.category)}
//                                         helperText={formik.touched.category && formik.errors.category}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <TextField
//                                         fullWidth
//                                         label="Name"
//                                         name="name"
//                                         variant="outlined"
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         value={formik.values.name}
//                                         error={formik.touched.name && Boolean(formik.errors.name)}
//                                         helperText={formik.touched.name && formik.errors.name}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <TextField
//                                         fullWidth
//                                         label="Start Date"
//                                         type="date"
//                                         name="startDate"
//                                         InputLabelProps={{ shrink: true }}
//                                         variant="outlined"
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         value={formik.values.startDate}
//                                         error={formik.touched.startDate && Boolean(formik.errors.startDate)}
//                                         helperText={formik.touched.startDate && formik.errors.startDate}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <TextField
//                                         fullWidth
//                                         label="Expiry Date"
//                                         type="date"
//                                         name="expiryDate"
//                                         InputLabelProps={{ shrink: true }}
//                                         variant="outlined"
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         value={formik.values.expiryDate}
//                                         error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
//                                         helperText={formik.touched.expiryDate && formik.errors.expiryDate}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <TextField
//                                         fullWidth
//                                         label="Price"
//                                         type="number"
//                                         name="price"
//                                         variant="outlined"
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         value={formik.values.price}
//                                         error={formik.touched.price && Boolean(formik.errors.price)}
//                                         helperText={formik.touched.price && formik.errors.price}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <input
//                                         accept="image/*"
//                                         style={{ display: 'none' }}
//                                         id="picture"
//                                         type="file"
//                                         onChange={handleFileChange}
//                                         onBlur={formik.handleBlur}
//                                     />
//                                     <label htmlFor="picture">
//                                         <Button variant="contained" component="span" fullWidth>
//                                             Upload Picture
//                                         </Button>
//                                     </label>
//                                     {formik.touched.picture && formik.errors.picture ? (
//                                         <div style={{ color: 'red' }}>{formik.errors.picture}</div>
//                                     ) : null}
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <Button type="submit" variant="contained" color="primary" fullWidth>
//                                         Create Ticket
//                                     </Button>
//                                 </Grid>
//                             </Grid>
//                         </form>
//                     </Paper>

//                     {/* Dialog for displaying success/error messages */}
//                     <Dialog open={openDialog} onClose={handleCloseDialog}>
//                         <DialogTitle>Ticket Creation</DialogTitle>
//                         <DialogContent>
//                             <DialogContentText>
//                                 {dialogMessage}
//                             </DialogContentText>
//                         </DialogContent>
//                         <DialogActions>
//                             <Button onClick={handleCloseDialog} color="primary">Close</Button>
//                         </DialogActions>
//                     </Dialog>
//                 </Container>
//             </Content>
//         </div>
//     );
// };
// // padding: '40px', width: 'calc(100% - 370px)';
// export default CreateTicketForm;






// import React from 'react';
// import {
//     Container, Paper, Typography, TextField, Button, Grid, Dialog, DialogTitle,
//     DialogContent, DialogContentText, DialogActions
// } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios'; // Make sure axios is imported
// import Sidebar from '../components/SideBar'; // Corrected import path for Sidebar

// const TicketCreationForm = () => {
//     const [openDialog, setOpenDialog] = React.useState(false);
//     const [dialogMessage, setDialogMessage] = React.useState('');

//     // Formik setup
//     const formik = useFormik({
//         initialValues: {
//             ticketId: '',
//             category: '',
//             name: '',
//             startDate: '',
//             expiryDate: '',
//             price: '',
//             picture: null,
//         },
//         validationSchema: Yup.object({
//             ticketId: Yup.string().required('Ticket ID is required'),
//             category: Yup.string().required('Category ID is required'),
//             name: Yup.string().required('Name is required'),
//             startDate: Yup.date().required('Start date is required').nullable(),
//             expiryDate: Yup.date().required('Expiry date is required').nullable()
//                 .min(Yup.ref('startDate'), "Expiry date can't be before start date"),
//             price: Yup.number().required('Price is required').positive('Price must be a positive number'),
//             picture: Yup.mixed().required('A file is required'),
//         }),
//         onSubmit: async (values) => {
//             const formData = new FormData();
//             formData.append('ticket_Id', values.ticketId);
//             formData.append('category', values.category);
//             formData.append('name', values.name);
//             formData.append('start_date', values.startDate);
//             formData.append('expiry_date', values.expiryDate);
//             formData.append('price', values.price);
//             formData.append('picture', values.picture);

//             try {
//                 const response = await axios.post('http://localhost:5000/tickets', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//                 setDialogMessage(response.data.message || 'Ticket created successfully!');
//                 setOpenDialog(true);
//                 formik.resetForm();
//             } catch (error) {
//                 setDialogMessage(error.response?.data?.error || 'Error while creating ticket');
//                 setOpenDialog(true);
//             }
//         },
//     });


//     const handleCloseDialog = () => {
//         setOpenDialog(false);
//     };

//     const handleFileChange = (event) => {
//         const file = event.currentTarget.files[0];
//         formik.setFieldValue('picture', file);
//     };

//     return (
//         <div style={{ display: 'flex' }}>
//             <Sidebar style={{ width: "370px" }} />
//             {/* Main Content */}
//             <Container maxWidth="sm" style={{ marginTop: '20px', flex: 1 }}>
//                 <Paper elevation={3} style={{ padding: '30px', borderRadius: '15px' }}>
//                     <Typography variant="h4" align="center" gutterBottom>
//                         Create Ticket
//                     </Typography>
//                     <form onSubmit={formik.handleSubmit}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Ticket ID"
//                                     name="ticketId"
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.ticketId}
//                                     error={formik.touched.ticketId && Boolean(formik.errors.ticketId)}
//                                     helperText={formik.touched.ticketId && formik.errors.ticketId}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Category"
//                                     name="category"
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.category}
//                                     error={formik.touched.category && Boolean(formik.errors.category)}
//                                     helperText={formik.touched.category && formik.errors.category}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Name"
//                                     name="name"
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.name}
//                                     error={formik.touched.name && Boolean(formik.errors.name)}
//                                     helperText={formik.touched.name && formik.errors.name}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Start Date"
//                                     type="date"
//                                     name="startDate"
//                                     InputLabelProps={{ shrink: true }}
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.startDate}
//                                     error={formik.touched.startDate && Boolean(formik.errors.startDate)}
//                                     helperText={formik.touched.startDate && formik.errors.startDate}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Expiry Date"
//                                     type="date"
//                                     name="expiryDate"
//                                     InputLabelProps={{ shrink: true }}
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.expiryDate}
//                                     error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
//                                     helperText={formik.touched.expiryDate && formik.errors.expiryDate}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Price"
//                                     type="number"
//                                     name="price"
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.price}
//                                     error={formik.touched.price && Boolean(formik.errors.price)}
//                                     helperText={formik.touched.price && formik.errors.price}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <input
//                                     accept="image/*"
//                                     style={{ display: 'none' }}
//                                     id="picture"
//                                     type="file"
//                                     onChange={handleFileChange}
//                                     onBlur={formik.handleBlur}
//                                 />
//                                 <label htmlFor="picture">
//                                     <Button variant="contained" component="span" fullWidth>
//                                         Upload Picture
//                                     </Button>
//                                 </label>
//                                 {formik.touched.picture && formik.errors.picture ? (
//                                     <div style={{ color: 'red' }}>{formik.errors.picture}</div>
//                                 ) : null}
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <Button type="submit" variant="contained" color="primary" fullWidth>
//                                     Create Ticket
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </Paper>

//                 {/* Dialog for displaying success/error messages */}
//                 <Dialog open={openDialog} onClose={handleCloseDialog}>
//                     <DialogTitle>Ticket Creation</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText>
//                             {dialogMessage}
//                         </DialogContentText>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleCloseDialog} color="primary">Close</Button>
//                     </DialogActions>
//                 </Dialog>
//             </Container>
//         </div>
//     );
// };

// export default TicketCreationForm;












// import React from 'react';
// import {
//     Container, Paper, Typography, TextField, Button, Grid, Dialog, DialogTitle,
//     DialogContent, DialogContentText, DialogActions
// } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios'; // Make sure axios is imported
// import Sidebar from '../components/SideBar'; // Corrected import path for Sidebar

// const TicketCreationForm = () => {
//     const [openDialog, setOpenDialog] = React.useState(false);
//     const [dialogMessage, setDialogMessage] = React.useState('');

//     // Formik setup
//     const formik = useFormik({
//         initialValues: {
//             ticketId: '',
//             category: '',
//             name: '',
//             startDate: '',
//             expiryDate: '',
//             price: '',
//             picture: null,
//         },
//         validationSchema: Yup.object({
//             ticketId: Yup.string().required('Ticket ID is required'),
//             category: Yup.string().required('Category ID is required'),
//             name: Yup.string().required('Name is required'),
//             startDate: Yup.date().required('Start date is required').nullable(),
//             expiryDate: Yup.date().required('Expiry date is required').nullable()
//                 .min(Yup.ref('startDate'), "Expiry date can't be before start date"),
//             price: Yup.number().required('Price is required').positive('Price must be a positive number'),
//             picture: Yup.mixed().required('A file is required'),
//         }),
//         onSubmit: async (values) => {
//             const formData = new FormData();
//             formData.append('ticket_Id', values.ticketId);
//             formData.append('category', values.category);
//             formData.append('name', values.name);
//             formData.append('start_date', values.startDate);
//             formData.append('expiry_date', values.expiryDate);
//             formData.append('price', values.price);
//             formData.append('picture', values.picture);

//             try {
//                 const response = await axios.post('http://localhost:5000/tickets', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//                 setDialogMessage(response.data.message || 'Ticket created successfully!');
//                 setOpenDialog(true);
//                 formik.resetForm();
//             } catch (error) {
//                 setDialogMessage(error.response?.data?.error || 'Error while creating ticket');
//                 setOpenDialog(true);
//             }
//         },
//     });


//     const handleCloseDialog = () => {
//         setOpenDialog(false);
//     };

//     const handleFileChange = (event) => {
//         const file = event.currentTarget.files[0];
//         formik.setFieldValue('picture', file);
//     };

//     return (
//         <div style={{ display: 'flex' }}>
//             <Sidebar style={{ width: "370px" }} />
//             {/* Main Content */}
//             <Container maxWidth="sm" style={{ marginTop: '20px', flex: 1 }}>
//                 <Paper elevation={3} style={{ padding: '30px', borderRadius: '15px' }}>
//                     <Typography variant="h4" align="center" gutterBottom>
//                         Create Ticket
//                     </Typography>
//                     <form onSubmit={formik.handleSubmit}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Ticket ID"
//                                     name="ticketId"
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.ticketId}
//                                     error={formik.touched.ticketId && Boolean(formik.errors.ticketId)}
//                                     helperText={formik.touched.ticketId && formik.errors.ticketId}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Category"
//                                     name="category"
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.category}
//                                     error={formik.touched.category && Boolean(formik.errors.category)}
//                                     helperText={formik.touched.category && formik.errors.category}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Name"
//                                     name="name"
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.name}
//                                     error={formik.touched.name && Boolean(formik.errors.name)}
//                                     helperText={formik.touched.name && formik.errors.name}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Start Date"
//                                     type="date"
//                                     name="startDate"
//                                     InputLabelProps={{ shrink: true }}
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.startDate}
//                                     error={formik.touched.startDate && Boolean(formik.errors.startDate)}
//                                     helperText={formik.touched.startDate && formik.errors.startDate}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Expiry Date"
//                                     type="date"
//                                     name="expiryDate"
//                                     InputLabelProps={{ shrink: true }}
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.expiryDate}
//                                     error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
//                                     helperText={formik.touched.expiryDate && formik.errors.expiryDate}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Price"
//                                     type="number"
//                                     name="price"
//                                     variant="outlined"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     value={formik.values.price}
//                                     error={formik.touched.price && Boolean(formik.errors.price)}
//                                     helperText={formik.touched.price && formik.errors.price}
//                                 />
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <input
//                                     accept="image/*"
//                                     style={{ display: 'none' }}
//                                     id="picture"
//                                     type="file"
//                                     onChange={handleFileChange}
//                                     onBlur={formik.handleBlur}
//                                 />
//                                 <label htmlFor="picture">
//                                     <Button variant="contained" component="span" fullWidth>
//                                         Upload Picture
//                                     </Button>
//                                 </label>
//                                 {formik.touched.picture && formik.errors.picture ? (
//                                     <div style={{ color: 'red' }}>{formik.errors.picture}</div>
//                                 ) : null}
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <Button type="submit" variant="contained" color="primary" fullWidth>
//                                     Create Ticket
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </Paper>

//                 {/* Dialog for displaying success/error messages */}
//                 <Dialog open={openDialog} onClose={handleCloseDialog}>
//                     <DialogTitle>Ticket Creation</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText>
//                             {dialogMessage}
//                         </DialogContentText>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleCloseDialog} color="primary">Close</Button>
//                     </DialogActions>
//                 </Dialog>
//             </Container>
//         </div>
//     );
// };

// export default TicketCreationForm;

// above code is 100% correct.


import React from 'react';
import {
    Container, Paper, Typography, TextField, Button, Grid, Dialog, DialogTitle,
    DialogContent, DialogContentText, DialogActions, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; // Make sure axios is imported
import Sidebar from '../components/SideBar'; // Corrected import path for Sidebar

const categories = [
    { id: '66f117aea0071a83021b1e07', name: 'Movies (Horror)' },
    { id: '66f117f6a0071a83021b1e10', name: 'Movies (Comedy)' },
    { id: '66f11850a0071a83021b1e12', name: 'Anime' },
    { id: '66f12738fd0977e888c713e5', name: 'Animated Movies' },
    { id: '66f271d124f3a8f1d6f35202', name: 'Movie (Horror)' },
    { id: '66f30e4291341f5cfa6a50d0', name: 'Horror and Emotional' },
];

const TicketCreationForm = () => {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [dialogMessage, setDialogMessage] = React.useState('');

    // Formik setup
    const formik = useFormik({
        initialValues: {
            ticketId: '',
            category: '',
            name: '',
            startDate: '',
            expiryDate: '',
            price: '',
            picture: null,
        },
        validationSchema: Yup.object({
            ticketId: Yup.string().required('Ticket ID is required'),
            category: Yup.string().required('Category ID is required'),
            name: Yup.string().required('Name is required'),
            startDate: Yup.date().required('Start date is required').nullable(),
            expiryDate: Yup.date().required('Expiry date is required').nullable()
                .min(Yup.ref('startDate'), "Expiry date can't be before start date"),
            price: Yup.number().required('Price is required').positive('Price must be a positive number'),
            picture: Yup.mixed().required('A file is required'),
        }),
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('ticket_Id', values.ticketId);
            formData.append('category', values.category);
            formData.append('name', values.name);
            formData.append('start_date', values.startDate);
            formData.append('expiry_date', values.expiryDate);
            formData.append('price', values.price);
            formData.append('picture', values.picture);

            try {
                const response = await axios.post('http://localhost:5000/tickets', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setDialogMessage(response.data.message || 'Ticket created successfully!');
                setOpenDialog(true);
                formik.resetForm();
            } catch (error) {
                setDialogMessage(error.response?.data?.error || 'Error while creating ticket');
                setOpenDialog(true);
            }
        },
    });

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleFileChange = (event) => {
        const file = event.currentTarget.files[0];
        formik.setFieldValue('picture', file);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar style={{ width: "370px" }} />
            {/* Main Content */}
            <Container maxWidth="sm" style={{ marginTop: '20px', flex: 1 }}>
                <Paper elevation={3} style={{ padding: '30px', borderRadius: '15px' }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Create Ticket
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Ticket ID"
                                    name="ticketId"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.ticketId}
                                    error={formik.touched.ticketId && Boolean(formik.errors.ticketId)}
                                    helperText={formik.touched.ticketId && formik.errors.ticketId}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined" error={formik.touched.category && Boolean(formik.errors.category)}>
                                    <InputLabel>Category</InputLabel>
                                    <Select
                                        name="category"
                                        value={formik.values.category}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        label="Category"
                                    >
                                        <MenuItem value="">
                                            <em>Select Category</em>
                                        </MenuItem>
                                        {categories.map((category) => (
                                            <MenuItem key={category.id} value={category.id}>
                                                {category.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {formik.touched.category && formik.errors.category && (
                                        <div style={{ color: 'red' }}>{formik.errors.category}</div>
                                    )}
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Start Date"
                                    type="date"
                                    name="startDate"
                                    InputLabelProps={{ shrink: true }}
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.startDate}
                                    error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                                    helperText={formik.touched.startDate && formik.errors.startDate}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Expiry Date"
                                    type="date"
                                    name="expiryDate"
                                    InputLabelProps={{ shrink: true }}
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.expiryDate}
                                    error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
                                    helperText={formik.touched.expiryDate && formik.errors.expiryDate}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Price"
                                    type="number"
                                    name="price"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.price}
                                    error={formik.touched.price && Boolean(formik.errors.price)}
                                    helperText={formik.touched.price && formik.errors.price}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="picture"
                                    type="file"
                                    onChange={handleFileChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="picture">
                                    <Button variant="contained" component="span" fullWidth>
                                        Upload Picture
                                    </Button>
                                </label>
                                {formik.touched.picture && formik.errors.picture ? (
                                    <div style={{ color: 'red' }}>{formik.errors.picture}</div>
                                ) : null}
                            </Grid>

                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Create Ticket
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>

                {/* Dialog for displaying success/error messages */}
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Ticket Creation</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {dialogMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">Close</Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    );
};

export default TicketCreationForm;
