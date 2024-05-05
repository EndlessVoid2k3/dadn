import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NotificationDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Dummy notifications data
  const notifications = ["New message", "New friend request", "Event reminder"];

  return (
    <div>
      <Button
        aria-controls="notification-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="Outlined"
        endIcon={
            <Badge badgeContent={notifications.length} color="error">
            </Badge>
          }
      >
        Notifications
      </Button>
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {notifications.map((notification, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {notification}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NotificationDropdown;