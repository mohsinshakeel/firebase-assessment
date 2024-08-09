import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import NotificationButton from './components/notificationButton';
import NotificationsList from './components/notificationsList';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Notification System
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <NotificationButton label="Notification 1" />
        </Grid>
        <Grid item>
          <NotificationButton label="Notification 2" />
        </Grid>
        <Grid item>
          <NotificationButton label="Notification 3" />
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
        Notifications:
      </Typography>
      <NotificationsList />
    </Container>
  );
};

export default App;
