import "../styles/Contact.scss"

import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

import { Form} from 'semantic-ui-react';

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
            <div id='email'>
              mwaked01@gmail.com
            </div>
            <div id='location'>
              Windsor, Ontario, Canada
            </div>
            </Form>
          </Box>
        </Fade>
      </Modal>
    </section>
  );
};

export default Contact;