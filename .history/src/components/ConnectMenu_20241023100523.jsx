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
  const [showIframe, setShowIframe] = useState(false);

  const handleAppointmentClick = () => {
    setShowIframe(true);
    onOpen(); // Open modal for appointment scheduling
  };

  return (
    <>
      <Menu>
        <MenuButton as={Button}>
          Connect
        </MenuButton>
        <MenuList>
          <MenuItem>Email</MenuItem>
          <MenuItem onClick={handleAppointmentClick}>Appointment</MenuItem>
        </MenuList>
      </Menu>

      {/* Appointment Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Schedule an Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {showIframe && (
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1L4XtENmKKlJ4noe6DJbCB-nxOkgNk1kP13sj4jYtXFYLEWUT2o_yTxjyOcUDMbwSnqFJhTKRw?gv=true"
                style={{ border: 0, width: '100%', height: '600px' }}
                frameBorder="0"
                title="Google Calendar Appointment Scheduling"
              ></iframe>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectMenu;
