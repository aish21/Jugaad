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
import { signUpUser } from '../firebase'
import { useHistory } from 'react-router-dom'

const JugaadIcon = () => (
  <Image height="100px" width="100px" src="PUT IMAGE PATH HERE" />
)

const RegisterPageHeading = () => (
  <Text fontSize="5xl" textAlign="center" pr={20} fontWeight="bold">
    Register Your Business
  </Text>
)
var emailId = ""
var password = ""
var firstName = ""
var lastName = ""
var companyName = ""
var companyContactNo = ""
var companyEmail = ""
var twitchID = ""
var checkPassed = false;

export default function Signup() {
  const history = useHistory();

  function validationChecks() {
    if(emailId.length > 0 && 
      password.length > 0 && 
      firstName.length > 0 && 
      lastName.length > 0 &&
      companyName.length > 0 &&
      companyContactNo.length > 0 &&
      companyEmail.length > 0 &&
      twitchID.length > 0){
        checkPassed = true;
        console.log('correct'); 
      }
    else{
      checkPassed = false;
      alert("One or more fields missing! All fields must be populated in order for a successful registration.")
      return checkPassed;
    }
  
    // Email Check
    if(checkPassed && emailId.includes('@')){
      console.log('correct');
    }
    else{
      checkPassed = false;
      alert('Email format incorrect, try again!');
      return checkPassed;
    }
  
    // Password Check
    if(checkPassed && 
      password.length > 8 && 
      (password.includes('!') || password.includes('.') || password.includes('$') || password.includes(',') || password.includes(';') || password.includes('/'))){
        console.log('correct');
    }
    else{
      checkPassed = false;
      alert('Error! Password must be at least 8 characters and must contain at least one special character (! , . ; / $)!');
      return checkPassed;
    }

    // Company Email
    if(checkPassed && companyEmail.includes('@')){
      console.log('correct');
    }
    else{
      checkPassed = false;
      alert('Company Email format incorrect, try again!');
      return checkPassed;
    }

    return checkPassed;
  }

function OnClickEvent() {
  validationChecks()
  if(validationChecks()){
    console.log('reached inside');
    signUpUser(emailId,password, firstName, lastName, companyName, companyContactNo, companyEmail, twitchID)
    alert("Successfully Registered! Please Login")
    history.push("/Login")
  } else{
  }
}

const getEmail = (event) => {
  emailId = event.target.value;
}

const getPass = (event) => {
  password = event.target.value;
}

const getFirstName = (event) => {
  firstName = event.target.value;
}

const getLastName = (event) => {
  lastName = event.target.value;
}

const getCompanyName = (event) => {
  companyName = event.target.value;
}

const getCompanyEmail = (event) => {
  companyEmail = event.target.value;
}

const getCompanyContact = (event) => {
  companyContactNo = event.target.value;
}

const getTwitchID = (event) => {
  twitchID = event.target.value;
}

return (
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
            <Input size="md" placeholder="Enter First Name here" isFullWidth onChange = {getFirstName} />
            <FormErrorMessage>
              Invalid Entry, Please try again!
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired mb={3}>
            <FormLabel>Last Name</FormLabel>
            <Input size="md" isFullWidth placeholder="Enter Last Name here" onChange = {getLastName} />
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              size="md"
              isFullWidth
              placeholder="Enter Email Address here"
              onChange={getEmail}
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
              onChange = {getCompanyName}
            />
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
          </FormControl>
          <FormControl isRequired mb={3}>
            <FormLabel>Company Contact Number</FormLabel>
            <Input
              size="md"
              isFullWidth
              placeholder="Enter Contact Number here"
              onChange = {getCompanyContact}
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
              onChange = {getCompanyEmail}
            />
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
            <FormHelperText>
              This is the email address for business enquiries (for customers)
            </FormHelperText>
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input size="md" isFullWidth placeholder="Enter Password here" />
            <FormErrorMessage>Invalid Entry!</FormErrorMessage>
            <FormHelperText>
              Password must have a length of at least 8 characters, including
              numbers, upper case letters and special case characters
            </FormHelperText>
          </FormControl>
          <FormControl isRequired pt={5}>
            <FormLabel>Retype Password</FormLabel>
            <Input size="md" isFullWidth placeholder="Enter Password here" onChange={getPass}/>
          </FormControl>
          <FormControl isRequired mb={3}>
              <FormLabel>Twitch ID</FormLabel>
              <Input onChange = {getTwitchID}/>
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
        <Button variant="solid" size="lg" leftIcon={<ArrowForwardIcon />} onClick = {OnClickEvent}>
          Submit
        </Button>
      </Stack>
    </Grid>
  </ChakraProvider>
)

}