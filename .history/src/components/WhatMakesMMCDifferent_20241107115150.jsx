import { Box, Text, Stack } from "@chakra-ui/react";

const WhatMakesMMCDifferent = () => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        What Makes MMC Different
      </Text>
      <Stack spacing={4}>
        <Text>
          Concierge medicine has gained popularity in the last several years for good reasons.
          Typically, a traditional primary care physician maintains a patient panel of 2,000+ and
          sees 20+ patients a day. And when you have questions, concerns, and needs, the last thing
          you want to do is wait for an appointment in their overloaded schedules. Concierge
          medicine offers a direct line to a doctor with no wait time and without insurance or
          corporate health system interference/headaches.
        </Text>

        <Text>
          While internists and family medicine physicians service most concierge practices, I am a
          board-certified Emergency Medicine physician. And that offers many unique advantages. As
          an ER doc, I've seen, diagnosed, and treated a wide variety of patients with issues
          relating to virtually every subspecialty:
        </Text>

        <Text fontWeight="bold">
          Surgery, OB-GYN, Cardiology, Neurology, Pediatrics, Pulmonology, Orthopedics,
          Gastroenterology, Urology, Psychiatry/Addiction/ Substance Abuse, Nephrology,
          Hematology/Oncology
        </Text>

        <Text>
          The perspective of an acute care/critical care and trauma specialist is a different kind
          of concierge physician. In short, I have seen and heard just about everything. Maybe most
          significantly, I have a wealth of knowledge and experience to determine what is and isn't
          an emergency.
        </Text>
      </Stack>
    </Box>
  );
};

export default WhatMakesMMCDifferent;
