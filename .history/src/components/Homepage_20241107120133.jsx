import { Box, Text, Stack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box maxW="600px" mx="auto" px={4} py={4} textAlign="center">
      
      
      <Text fontSize="lg" fontWeight="medium" mb={4}>
        With MMC, you get:
      </Text>
      <Stack spacing={4} align="center">
        <Text fontSize="lg" fontWeight="bold">
          A DOCTOR AVAILABLE TO TALK TO YOU
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="blue.600">
          24/7/365
        </Text>
        <Text>
          Specifically, a practicing ER physician with almost 30 years of experience
        </Text>
        <Text>
          Comprehensive evaluations and diagnoses, physical exams, medication management, treatment
          plans, expert medical opinions on a broad category of medical subspecialties
        </Text>
        <Text>
          Personalized, compassionate, discreet, no-BS communication
        </Text>
      </Stack>
    </Box>
  );
};

export default HomePage;
