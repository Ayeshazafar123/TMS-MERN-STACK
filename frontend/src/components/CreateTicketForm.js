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
