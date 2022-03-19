import React from 'react'
import {
  ChakraProvider,
  Stack,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Flex,
  Box,
  Heading,
  Image,
  Text,
  FormControl,
  Button
} from '@chakra-ui/react'
import {  ArrowForwardIcon } from '@chakra-ui/icons'

const JugaadIcon = () => (
  <Image height="100px" width="100px" src="PUT IMAGE PATH HERE" />
)

const RegisterPageHeading = () => (
  <Text fontSize="5xl" textAlign="center" pr={20} fontWeight="bold">
    Register Your Business
  </Text>
)

const App = () => (
  <ChakraProvider resetCSS>
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
      mt={4}
      boxShadow={1}
    >
      <JugaadIcon />
      <RegisterPageHeading />
    </Flex>
    <Grid p={10} gap={6} templateColumns="repeat(auto-fit, minmax(350px, 1fr))">
      <Stack>
        <Box
          backgroundColor="whiteAlpha.500"
          boxShadow="sm"
          borderRadius="lg"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          display="block"
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            pb={2}
          >
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
              textAlign="center"
            >
              Registration Details
            </Heading>
          </Flex>
          <FormControl isRequired mb={3}>
            <FormLabel>First Name</FormLabel>
            <Input size="md" placeholder="Enter First Name here" isFullWidth />
            <FormErrorMessage>
              Invalid Entry, Please try again!
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired mb={3}>
            <FormLabel>Last Name</FormLabel>
            <Input size="md" isFullWidth placeholder="Enter Last Name here" />
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              size="md"
              isFullWidth
              placeholder="Enter Email Address here"
            />
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
            <FormHelperText pb={3}>
              This is the company official's email address
            </FormHelperText>
          </FormControl>
          <FormControl isRequired mb={3}>
            <FormLabel>Company Name</FormLabel>
            <Input
              size="md"
              isFullWidth
              placeholder="Enter Company Name here"
            />
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
          </FormControl>
          <FormControl isRequired mb={3}>
            <FormLabel>Company Contact Number</FormLabel>
            <Input
              size="md"
              isFullWidth
              placeholder="Enter Contact Number here"
            />
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
            <FormHelperText>
              This is the company's hotline number for customers
            </FormHelperText>
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
          </FormControl>
          <FormControl isRequired mb={3}>
            <FormLabel>Company Email</FormLabel>
            <Input
              size="md"
              isFullWidth
              placeholder="Enter Email Address here"
            />
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
            <FormHelperText>
              This is the email address for business enquiries (for customers)
            </FormHelperText>
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
          </FormControl>
          <FormControl isRequired pb={5}>
            <FormLabel textAlign="center" pt={3} fontSize="xl">
              Company Address
            </FormLabel>
            <FormLabel mt={3}>Address Line 1</FormLabel>
            <Input size="md" isFullWidth placeholder="Address Line 1" />
            <FormLabel mt={3}>Address Line 2</FormLabel>
            <Input size="md" isFullWidth placeholder="Address Line 2" />
            <FormLabel mt={3}>City</FormLabel>
            <Input size="md" isFullWidth placeholder="City" />
            <FormLabel mt={3}>State</FormLabel>
            <Input size="md" isFullWidth placeholder="State" />
            <FormLabel mt={3}>Country</FormLabel>
            <Input size="md" isFullWidth placeholder="Country" />
            <FormLabel mt={3}>Zipcode</FormLabel>
            <Input size="md" isFullWidth placeholder="Zipcode" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input size="md" isFullWidth placeholder="Enter Password here" />
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
            <FormHelperText>
              Password must have a length of at least 8 characters, including
              numbers, upper case letters and special case characters
            </FormHelperText>
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
          </FormControl>
          <FormControl isRequired pt={5}>
            <FormLabel>Retype Password</FormLabel>
            <Input size="md" isFullWidth placeholder="Enter Password here" />
          </FormControl>
          <FormControl isRequired>
              <FormLabel>Twitch ID</FormLabel>
              <Input />
              <FormHelperText>
                Twitch ID is required to facilitate the live streaming option
                for your business. Twitch allows users to seamlessly connect to
                your livestream, donate to your stream via Twitch, and support
                your content via live chat. You can learn more about Twitch and
                register for the same -{' '}
              </FormHelperText>
              <FormErrorMessage>Invalid Entry!</FormErrorMessage>
              <div>
              <a target="_blank" href="https://www.twitch.tv" rel = "noreferrer">Register  for Twitch</a>
              </div>
              <div>
              <a target="_blank" href="https://www.twitch.tv/p/en/about/" rel = "noreferrer">About Twitch</a>
              </div>
            </FormControl>
        </Box>
        <Button variant="solid" size="lg" leftIcon={<ArrowForwardIcon />}>
          Submit
        </Button>
      </Stack>
    </Grid>
  </ChakraProvider>
)

export default App