import Tabs from "../Components/Tabs";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import "./Homepage.css";
import Banner from "../Components/BannerShop";
import React from 'react';
import { useContext, useRef, useState } from "react";
import {
    Text,
    Box,
    Container,
    Textarea,
    Button,
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
    FormControl
  } from '@chakra-ui/react'
import { TwitchEmbed } from 'react-twitch-embed';
import { auth, database, firebasestorage } from '../firebase';
import {ref, onValue } from "firebase/database";
import FollowAt from "react-social-media-follow";
import { AuthContext } from '../store/Context';

export default function Homepage() {

  var data = null;
  const user = auth.currentUser;

  if(user != null){
    const userRef = ref(database, 'users/' + user.uid);
    onValue(userRef, (snapshot) => {
      data = snapshot.val();
    });
  } else{
    console.log('error');
  }

  const links = [
    'https://twitter.com',
    'https://www.facebook.com',
    'https://www.youtube.com',
    'https://www.instagram.com',
  ];


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
          display="flex"
          flexDirection="column"
        >
          <Text textAlign="center" fontWeight="bold" fontSize="4xl">
            About Us
          </Text>
          <Text
            display="inline"
            mt={3}
            fontWeight="bold"
            textAlign="left"
            fontSize="lg"
          >
            Business Name
          </Text>
          <Text>{data.companyName}</Text>
          <Text
            display="inline"
            mt={3}
            fontWeight="bold"
            textAlign="left"
            fontSize="lg"
          >
            Company Email
          </Text>
          <Text>{data.companyEmail}</Text>
          <Text
            display="inline"
            mt={3}
            fontWeight="bold"
            textAlign="left"
            fontSize="lg"
          >
            Company Contact{' '}
          </Text>
          <Text>{data.companyContactNo}</Text>
          <FollowAt links = {links}/>
        </Box>
            </div>
            <div label="Live Chat">
            After 'while, <em>Crocodile</em>!
            </div>
            <div label="Live Stream">
            <TwitchEmbed
                channel={data.twitchID}
                id="Whippy"
                theme="dark"
                width="100%"
                onVideoPause={() => console.log(':(')}
            />
            </div>
            <div label="Product">
            Nothing to see here, this tab is <em>extinct</em>!
            </div>
            <div label="Create Ad">
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
            <input type="file" class="custom-file-input" id="inputGroupFile02" />
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
            </div>
            <div label = "Settings">
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
        </Tabs>
        </div>
    </div>
    );
}