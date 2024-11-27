import React, { useState } from 'react';
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

const ConnectButtons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState(null);

  const handleEmailClick = () => {
    setModalType('email');
    onOpen();
  };

  const handleAppointmentClick = () => {
    setModalType('appointment');
    onOpen();
  };

  return (
    <>
      {/* Email Button */}
      <Button fontFamily="Sentinel" onClick={handleEmailClick} variant="ghost">
        Email
      </Button>

      {/* Appointment Button */}
      <Button fontFamily="Sentinel" onClick={handleAppointmentClick} variant="ghost">
        Appointment
      </Button>

      {/* Phone Link Button */}
      <Button fontFamily="Sentinel"  as="a" href="tel:+18474236800" variant="ghost">
        Phone: 847-423-6800
      </Button>

      {/* Modal for Email and Appointment */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalType === 'email' ? 'Contact via Email' : 'Schedule an Appointment'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
            <Button fontFamily="Sentinel" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectButtons;
