import React from 'react';
import { Box, Heading, Center } from '@chakra-ui/react';

const Calendar = () => {
  return (
    <Box p={4} maxW="1200px" mx="auto">
      <Heading as="h1" size="lg" textAlign="center" mb={6}>
        Schedule an Appointment
      </Heading>
      <Center>
        <Box width="100%" maxW="100%" boxShadow="md" borderRadius="md">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1L4XtENmKKlJ4noe6DJbCB-nxOkgNk1kP13sj4jYtXFYLEWUT2o_yTxjyOcUDMbwSnqFJhTKRw?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            title="Google Calendar Appointment Scheduling"
          ></iframe>
        </Box>
      </Center>
    </Box>
  );
};

export default Calendar;
