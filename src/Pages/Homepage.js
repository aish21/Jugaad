import Tabs from "../Components/Tabs";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import "./Homepage.css";
import Banner from "../Components/BannerShop";
import React from 'react';
import {
    ChakraProvider,
    Stack,
    Avatar,
    AvatarBadge,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    FormLabel,
    Input,
    FormHelperText,
    FormErrorMessage,
    Grid,
    Switch,
    InputGroup,
    InputRightElement,
    Icon,
    Flex,
    Text,
    Box,
    Container,
    Textarea,
    Button
  } from '@chakra-ui/react'
  import { EmailIcon } from '@chakra-ui/icons'  
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function Homepage() {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyCE60wJlGYdIfAUM9wg2SLEKGcXVcbP6JU",
    authDomain: "jugaad-dc4e0.firebaseapp.com",
    projectId: "jugaad-dc4e0",
    storageBucket: "jugaad-dc4e0.appspot.com",
    messagingSenderId: "944531526558",
    appId: "1:944531526558:web:d62865229402e50e8d3c8f",
    measurementId: "G-2FEN0WZXKX"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    return (
    <div className="container mt-5 py-4 px-xl-5">
        <ScrollToTopOnMount />
        <Banner/>
        <div>
        <Tabs>
            <div label="About">
            <Box
          backgroundColor="white"
          boxShadow="sm"
          borderRadius="lg"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          display="block"
          justifyContent="flex-start"
          flexDirection="column"
        >
          <Container
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Text
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="bold"
              textAlign="center"
              fontSize="4xl"
              flexDirection="row"
              mb={5}
            >
              Business Name{' '}
            </Text>
            <Button variant="solid" size="md">
              Edit Profile
            </Button>
          </Container>
          <Container
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Text
              display="flex"
              justifyContent="flex-start"
              alignItems="stretch"
              fontWeight="bold"
              textAlign="center"
              fontSize="2xl"
              flexDirection="column"
              pt={5}
              pb={5}
            >
              About Us
            </Text>
            <Text></Text>
            <Textarea placeholder="Give a brief description of your business, and attract potential new customers!" />
          </Container>
          <Container
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Text
              display="flex"
              justifyContent="flex-start"
              alignItems="stretch"
              fontWeight="bold"
              textAlign="center"
              fontSize="2xl"
              flexDirection="column"
              pt={5}
              pb={5}
            >
              Follow us on Social Media!
            </Text>
            <Textarea
              placeholder="Enter link to Instagram Page"
              resize="vertical"
              display="block"
              mb={5}
            />
            <Textarea
              placeholder="Enter link to YouTube Channel"
              resize="vertical"
              display="block"
              mb={5}
            />
            <Textarea
              placeholder="Enter link to Facebook Page"
              resize="vertical"
              display="block"
              mb={5}
            />
            <Textarea
              placeholder="Enter link to Twitch Channel"
              resize="vertical"
              display="block"
              mb={5}
            />
            <Button variant="solid" size="md">
              Confirm Changes
            </Button>
          </Container>
        </Box>
            </div>
            <div label="Live Chat">
            After 'while, <em>Crocodile</em>!
            </div>
            <div label="Live Stream">
            <TwitchEmbed
                channel="Whippy"
                id="Whippy"
                theme="dark"
                width="100%"
                onVideoPause={() => console.log(':(')}
            />
            </div>
            <div label="Product">
            Nothing to see here, this tab is <em>extinct</em>!
            </div>
        </Tabs>
        </div>
    </div>
    );
}