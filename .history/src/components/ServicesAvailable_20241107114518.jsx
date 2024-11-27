import { Box, Text, Divider, Stack } from "@chakra-ui/react";

const ServicesAvailable = () => {
    const services = [
        "Comprehensive physical exams",
        "Prescriptions (medication management)",
        "Metabolic Workup interpretations and directed therapy for overall health and wellness.",
        "Hormone Optimization (Testosterone, Estrogen, Progesterone, Thyroid, DHEA, Vitamin and Peptide therapy)",
        "Medication-assisted weight loss management - GLP1 receptor agonist",
        "Medication-assisted recovery treatment for alcohol, opioid, and other substance misuse",
        "Chronic condition management (Hypertension, Cholesterol, Hypothyroidism, Diabetes, Asthma, Chronic Pain)",
        "Comprehensive physical exams",
        "Prescriptions (medication management)",
        "Metabolic Workup interpretations and directed therapy for overall health and wellness.",
        "Hormone Optimization (Testosterone, Estrogen, Progesterone, Thyroid, DHEA, Vitamin and Peptide therapy)",
        "Medication-assisted weight loss management - GLP1 receptor agonist",
        "Medication-assisted recovery treatment for alcohol, opioid, and other substance misuse",
        "Chronic condition management (Hypertension, Cholesterol, Hypothyroidism, Diabetes, Asthma, Chronic Pain)",
        "Mental health services/Mental Health Medication Management",
        "Comprehensive blood work panel and interpretation",
        "EKG Interpretation"
      ];
      

  return (
    <Box>

      <Stack spacing={4}>
        {services.map((service, index) => (
          <Box key={index}>
            <Text>{service}</Text>
            {index < services.length - 1 && <Divider />}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ServicesAvailable;
