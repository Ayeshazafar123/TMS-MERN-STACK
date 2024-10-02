// Dialog.js
import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from '@mui/material';

const CustomDialog = ({ open, onClose, title, message, actions }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {actions.map((action, index) => (
                    <Button 
                        key={index} 
                        onClick={action.onClick} 
                        color={action.color || 'primary'}
                    >
                        {action.label}
                    </Button>
                ))}
            </DialogActions>
        </Dialog>
    );
};

export default CustomDialog;
