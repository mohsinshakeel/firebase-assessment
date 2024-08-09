import React from 'react';
import { Button } from '@mui/material'; // Importing the MUI Button component
import { createNotification } from '../services/notifications'; // Importing the createNotification service

// Interface to define the expected props for the NotificationButton component
interface NotificationButtonProps {
  label: string; // Label that will be displayed on the button
}

// Functional component to render a button that creates a notification when clicked
const NotificationButton: React.FC<NotificationButtonProps> = ({ label }) => {
  // Function to handle the button click event
  const handleClick = () => {
    createNotification(label); // Call the service to create a notification with the provided label
  };

  // Rendering the button with the provided label and attaching the click handler
  return <Button variant="contained" onClick={handleClick}>{label}</Button>;
};

export default NotificationButton; // Exporting the NotificationButton component as default
