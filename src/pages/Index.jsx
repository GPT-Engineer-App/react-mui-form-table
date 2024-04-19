import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Table, Thead, Tbody, Tr, Th, Td, VStack, Text } from "@chakra-ui/react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]);
    setFormData({ name: "", email: "", phoneNumber: "" });
  };

  return (
    <VStack spacing={4} p={5}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Phone Number</FormLabel>
        <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your phone number" />
      </FormControl>
      <Button colorScheme="red" aria-label="Submit form" onClick={handleSubmit}>
        Submit
      </Button>

      {submissions.length > 0 && (
        <Box w="full" aria-live="polite">
          <Text fontSize="xl" mt={6} mb={4}>
            Submissions
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone Number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {submissions.map((submission, index) => (
                <Tr key={index}>
                  <Td>{submission.name}</Td>
                  <Td>{submission.email}</Td>
                  <Td>{submission.phoneNumber}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </VStack>
  );
};

export default Index;
