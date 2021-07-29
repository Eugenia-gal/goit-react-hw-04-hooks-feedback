import React from 'react';
import PropTypes from 'prop-types';
import CustomNotify from './NotificationMessage.styled';

const NotificationMessage = ({ message }) => {
  return <CustomNotify>{message}</CustomNotify>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
