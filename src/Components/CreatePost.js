import React from 'react'
import {
  ChakraProvider,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Text,
  FormControl,
  Button
} from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
        <Box
          backgroundColor="white"
          boxShadow="sm"
          borderRadius="lg"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          display="flex"
          flexDirection="column"
        >
          <Text textAlign="center" fontWeight="bold" fontSize="3xl">
            Create Ad
          </Text>
          <FormControl isRequired mb={5}>
            <FormLabel>Product / Service Title</FormLabel>
            <Input placeholder="Enter title here" />
            <FormErrorMessage>Error message</FormErrorMessage>
          </FormControl>
          <FormControl isRequired mb={5}>
            <FormLabel>Product / Service Description</FormLabel>
            <Input placeholder="Enter description here" />
            <FormErrorMessage>Error message</FormErrorMessage>
          </FormControl>
          <FormControl isRequired mb={5}>
            <FormLabel>Price (in SGD)</FormLabel>
            <Input type="number" placeholder="Enter price here" />
            <FormErrorMessage>Error message</FormErrorMessage>
          </FormControl>
          <FormControl isRequired display="flex" flexDirection="column">
            <FormLabel>Upload Photo</FormLabel>
            <img width="200px" max-height="400px" src="" alt="" />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} class="custom-file-input" id="inputGroupFile02" />
            <FormErrorMessage>Error message</FormErrorMessage>
            <Button
              variant="solid"
              size="md"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              mt={3}
            >
              Browse
            </Button>
          </FormControl>
          <Button variant="solid" size="md" mt={10} colorScheme="whatsapp">
            Upload Ad
          </Button>
        </Box>
  </ChakraProvider>
)

export default App