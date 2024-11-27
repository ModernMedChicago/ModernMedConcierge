import { Box, Text, Stack } from "@chakra-ui/react";

const MMCWhyIDoThis = () => {
  return (
    <Box maxW="600px" mx="auto" px={4} py={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        MMC Why I Do This
      </Text>
      <Stack spacing={4}>
        <Text>
          As an ER doc, I don't get more than a day with patients. It's a reality of the job, of course.
          But like most doctors, I do end up being the go-to call for my family, friends, friends of friends,
          neighbors, friends of neighbors, etc. And I'm happy to do it because the fact is I've probably seen
          and heard what they're concerned about already, I can tell them what <strong>IS</strong> an emergency
          and what isn't, and I don't want them relying on the Internet for answers.
        </Text>

        <Text>
          I enjoy and cherish the role I've played in their lives. And they do, too. It's not just because
          I'm able to address an immediate question or concern; it's that I've been able to do it whenever
          they needed it for years—even decades.
        </Text>

        <Text>
          I have been in the substance abuse space since 2014. Nothing has brought me more personal and
          professional satisfaction than guiding my patients through the entire process and bearing witness
          to their progress and eventual stabilization. My practice has taught me that a long-standing
          doctor-patient relationship is critical. Not just until the point of stabilization but beyond.
          (Case in point: I have a patient who did not reveal their underlying childhood trauma until 15
          months of stable treatment.)
        </Text>

        <Text>
          I was trained to make quick reads and decisions, and I bring that skill set to my role as a
          concierge doctor: timely reassurance, peace of mind, and guidance. But my career has taught me
          that true care requires a relationship. The deeper and longer it is, the better I can serve my
          patients.
        </Text>
      </Stack>
    </Box>
  );
};

export default MMCWhyIDoThis;
