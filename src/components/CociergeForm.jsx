import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  VStack, 
  Heading, 
  HStack, 
  Textarea,
  Divider 
} from '@chakra-ui/react';

const UserFormWithSignature = () => {
  const signatureRef = useRef(null);
  const [formData, setFormData] = useState({
    memberName: '',
    dateOfBirth: '',
    address: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    pharmacyName: '',
    pharmacyPhone: '',
    pharmacyAddress: '',
    additionalMemberName: '',
    additionalMemberDob: '',
    agreementSignature: '',
    agreementDate: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearSignature = () => {
    signatureRef.current.clear();
    setFormData((prev) => ({ ...prev, agreementSignature: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!signatureRef.current.isEmpty()) {
      const signatureData = signatureRef.current.getTrimmedCanvas().toDataURL('image/png');
      setFormData((prev) => ({ ...prev, agreementSignature: signatureData }));
      
      setIsLoading(true);

      try {
        const response = await fetch('https://your-backend.com/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData, agreementSignature: signatureData }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        const result = await response.json();
        console.log('Success:', result);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit form. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Please provide a signature.');
    }
  };

  return (
    <Box p={8} maxW="700px" mx="auto" borderWidth={1} borderRadius="lg">
      <Heading mb={6} textAlign="center">Member Enrollment Form</Heading>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            {/* Member Name & Date of Birth */}
            <HStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Member Name (First & Last)</FormLabel>
                <Input 
                  type="text" 
                  name="memberName" 
                  value={formData.memberName} 
                  onChange={handleInputChange} 
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Date of Birth</FormLabel>
                <Input 
                  type="date" 
                  name="dateOfBirth" 
                  value={formData.dateOfBirth} 
                  onChange={handleInputChange} 
                />
              </FormControl>
            </HStack>

            {/* Address */}
            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <Textarea 
                name="address" 
                value={formData.address} 
                onChange={handleInputChange} 
              />
            </FormControl>

            <Divider />

            {/* Emergency Contact */}
            <HStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Emergency Contact Name (First & Last)</FormLabel>
                <Input 
                  type="text" 
                  name="emergencyContactName" 
                  value={formData.emergencyContactName} 
                  onChange={handleInputChange} 
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Emergency Contact Phone</FormLabel>
                <Input 
                  type="tel" 
                  name="emergencyContactPhone" 
                  value={formData.emergencyContactPhone} 
                  onChange={handleInputChange} 
                />
              </FormControl>
            </HStack>

            {/* Pharmacy Details */}
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Pharmacy Name</FormLabel>
                <Input 
                  type="text" 
                  name="pharmacyName" 
                  value={formData.pharmacyName} 
                  onChange={handleInputChange} 
                />
              </FormControl>
              <FormControl>
                <FormLabel>Pharmacy Phone</FormLabel>
                <Input 
                  type="tel" 
                  name="pharmacyPhone" 
                  value={formData.pharmacyPhone} 
                  onChange={handleInputChange} 
                />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Pharmacy Address</FormLabel>
              <Textarea 
                name="pharmacyAddress" 
                value={formData.pharmacyAddress} 
                onChange={handleInputChange} 
              />
            </FormControl>

            <Divider />

            {/* Additional Member Details */}
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Additional Enrolled Member’s Name</FormLabel>
                <Input 
                  type="text" 
                  name="additionalMemberName" 
                  value={formData.additionalMemberName} 
                  onChange={handleInputChange} 
                />
              </FormControl>
              <FormControl>
                <FormLabel>Date of Birth</FormLabel>
                <Input 
                  type="date" 
                  name="additionalMemberDob" 
                  value={formData.additionalMemberDob} 
                  onChange={handleInputChange} 
                />
              </FormControl>
            </HStack>

            {/* Agreement */}
            <FormControl isRequired>
              <FormLabel>Agreement Signature</FormLabel>
              <Box border="1px solid" borderColor="gray.300" borderRadius="md">
                <SignatureCanvas
                  ref={signatureRef}
                  penColor="black"
                  canvasProps={{ width: 500, height: 200, className: 'signatureCanvas' }}
                />
              </Box>
              <Button mt={2} size="sm" onClick={handleClearSignature}>Clear Signature</Button>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Date</FormLabel>
              <Input 
                type="date" 
                name="agreementDate" 
                value={formData.agreementDate} 
                onChange={handleInputChange} 
              />
            </FormControl>

            <Button 
              type="submit" 
              colorScheme="blue" 
              size="lg" 
              isLoading={isLoading}
              loadingText="Submitting"
            >
              Submit
            </Button>
          </VStack>
        </form>
      ) : (
        <Box>
          <Heading size="md" mb={4}>Form Submitted Successfully!</Heading>
          <p><strong>Member Name:</strong> {formData.memberName}</p>
          <p><strong>Signature:</strong></p>
          <Box mt={2}>
            <img src={formData.agreementSignature} alt="User Signature" />
          </Box>
          <Button mt={4} onClick={() => setIsSubmitted(false)}>Submit Another Response</Button>
        </Box>
      )}
    </Box>
  );
};

export default UserFormWithSignature;
