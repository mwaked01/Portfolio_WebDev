import "../styles/Contact.scss"

import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Email, LocationOn } from '@mui/icons-material';

import { Form } from 'semantic-ui-react';

const Contact = (props) => {
  const { openContact, setOpenContact } = props;

  const handleCloseContact = () => setOpenContact(false);
  return (
    <section id="CONTACT" >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openContact}
        onClose={handleCloseContact}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openContact}>
          <Box>
            <Form>
              <TextField
                className='field'
                id="outlined-multiline-static"
                label="Email"
                name='from_email'
                inputProps={{ style: { color: "white" } }}
                required
                focused
                placeholder='example@mail.ca'
              />
              <TextField
                className='field'
                id="outlined-multiline-static"
                label="Name"
                name='from_name'
                inputProps={{ style: { color: "white" } }}
                required
                focused
                placeholder='Your Name'
              />
              <TextField
                className='field'
                id="outlined-multiline-static"
                label="Message"
                name='message'
                multiline
                inputProps={{ style: { color: "white" } }}
                rows={4}
                required
                focused
              />

              <Button id='form-button' type='submit' variant="contained" color='success' >Submit</Button>

              <div id='email'>
                <Email className='contact-icon' />
                mwaked01@gmail.com
              </div>
              <div id='location'>
                <LocationOn className='contact-icon' /> Windsor, Ontario, Canada
              </div>
            </Form>
          </Box>
        </Fade>
      </Modal>
    </section>
  );
};

export default Contact;
