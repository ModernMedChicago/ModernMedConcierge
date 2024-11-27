import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

const ConnectMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState(null); // Track which modal to show

  const handleEmailClick = () => {
    setModalType('email');
    onOpen(); // Open modal for Email form
  };

  const handleAppointmentClick = () => {
    setModalType('appointment');
    onOpen(); // Open modal for Appointment scheduling
  };

  return (
    <>
      <Menu>
        <MenuButton as={Button} fontFamily="Sentinel">
          Connect
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleEmailClick} fontFamily="Sentinel">Email</MenuItem>
          <MenuItem onClick={handleAppointmentClick} fontFamily="Sentinel">Appointment</MenuItem>
          <MenuItem as="a" href="tel:+18474236800" fontFamily="Sentinel">Phone: 847-423-6800</MenuItem>
        </MenuList>
      </Menu>

      {/* Modal for both Email and Appointment */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily="Sentinel">
            {modalType === 'email' ? 'Contact via Email' : 'Schedule an Appointment'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily="Sentinel">
            {modalType === 'email' && (
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfWZiWt86JjQh0fYDQBQcfs0-mH4Rad2UycsPlTjC2vJMEh1w/viewform?usp=sf_link"
                style={{ border: 0, width: '100%', height: '500px' }}
                frameBorder="0"
                title="Google Form for Email"
              ></iframe>
            )}
            {modalType === 'appointment' && (
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1L4XtENmKKlJ4noe6DJbCB-nxOkgNk1kP13sj4jYtXFYLEWUT2o_yTxjyOcUDMbwSnqFJhTKRw?gv=true"
                style={{ border: 0, width: '100%', height: '600px' }}
                frameBorder="0"
                title="Google Calendar Appointment Scheduling"
              ></iframe>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} fontFamily="Sentinel">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectMenu;
