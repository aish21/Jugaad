import Tabs from "../Components/Tabs";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import "./Homepage.css";
import Banner from "../Components/BannerShop";
import React from 'react';
import {
    Text,
    Box,
    Container,
    Textarea,
    Button
  } from '@chakra-ui/react'
import { TwitchEmbed } from 'react-twitch-embed';
import { auth, database } from '../firebase';
import {ref, onValue } from "firebase/database";
import FollowAt from "react-social-media-follow";

export default function Homepage() {

  var data = null;
  const user = auth.currentUser;

  if(user != null){
    const userRef = ref(database, 'users/' + user.uid);
    onValue(userRef, (snapshot) => {
      data = snapshot.val();
    });
  }
  // console.log(data.companyName);

  const links = [
    'https://twitter.com/magicahmd',
    'https://www.facebook.com/ahmdsalhi',
    'https://www.youtube.com/magicahmd',
    'https://www.instagram.com/ahmdsalhi',
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