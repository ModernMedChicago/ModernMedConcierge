import { Box, Text, Stack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box maxW="600px" mx="auto" px={4} py={4} textAlign="center">
      <Text fontSize="lg" fontWeight="medium" mb={4} fontFamily="Sentinel">
        With MMC, you get:
      </Text>
      <Stack spacing={4} align="center">
        <Text fontSize="lg" fontWeight="bold" fontFamily="Sentinel">
          A DOCTOR AVAILABLE TO TALK TO YOU
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="blue.600" fontFamily="Sentinel">
          24/7/365
        </Text>
        <Text fontFamily="Sentinel">
          Specifically, a practicing ER physician with almost 30 years of experience
        </Text>
        <Text fontFamily="Sentinel">
          Comprehensive evaluations and diagnoses, physical exams, medication management, treatment
          plans, expert medical opinions on a broad category of medical subspecialties
        </Text>
        <Text fontFamily="Sentinel">
          Personalized, compassionate, discreet, no-BS communication
        </Text>
      </Stack>
    </Box>
  );
};

export default HomePage;
