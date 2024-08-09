import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { Notification } from '../types/notification'; // Importing the Notification type
import { subscribeToNotifications, markNotificationAsRead } from '../services/notifications'; // Importing necessary functions for subscribing and marking notifications as read

// Functional component to display a list of notifications
const NotificationsList: React.FC = () => {
  // State to store the list of notifications
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // useEffect hook to handle subscription to notifications when the component mounts
  useEffect(() => {
    // Subscribing to notifications and updating the state whenever notifications change
    const unsubscribe = subscribeToNotifications(setNotifications);
    
    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to handle marking a notification as read
  const handleMarkAsRead = (id: string) => {
    markNotificationAsRead(id); // Call service to mark the notification as read
  };

  // Rendering the list of notifications
  return (
    <List>
      {/* Mapping over the notifications array and rendering each notification as a ListItem */}
      {notifications.map((notification) => (
        <ListItem key={notification.id}>
          {/* Displaying the notification message and its read status */}
          <ListItemText
            primary={notification.message}
            secondary={notification.read ? "Read" : "Unread"}
          />
          {/* If the notification is unread, show a button to mark it as read */}
          {!notification.read && (
            <Button variant="contained" onClick={() => handleMarkAsRead(notification.id)}>
              Mark as Read
            </Button>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default NotificationsList; // Exporting the NotificationsList component as default
