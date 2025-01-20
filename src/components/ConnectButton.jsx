import React from 'react';
import { ArrowOutward } from '@mui/icons-material';
import '../styles/ConnectButton.scss';

const ConnectButton = ({handleOpenContact}) => {

  return (
    <button className="connect-button" onClick={handleOpenContact}>
      Let's Connect!
      <ArrowOutward className="arrow-icon" />
    </button>
  );
};

export default ConnectButton;

