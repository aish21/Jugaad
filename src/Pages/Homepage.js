import Tabs from "../Components/Tabs";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import "./Homepage.css";
import Banner from "../Components/BannerShop";
import React, { useState, useEffect } from "react";
import {
    Text,
    Box,
    Container,
    Textarea,
    Button,
    ChakraProvider,
    FormLabel,
    Input,
    FormErrorMessage,
    FormControl
  } from '@chakra-ui/react'
import { TwitchEmbed } from 'react-twitch-embed';
import { updateSocialsAndBanner , database, writeProductInfo, firebasestorage } from '../firebase';
import {ref, onValue } from "firebase/database";
import FollowAt from "react-social-media-follow";
import Iframe from 'react-iframe';
import { uploadBytes, ref as sRef } from "firebase/storage";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Homepage() {

  const [data, setData] = useState("");
  const [links, setLinks] = useState([
    'https://twitter.com',
    'https://www.facebook.com',
    'https://www.youtube.com',
    'https://www.instagram.com',    
  ]);
  const [insta, setInsta] = useState("https://www.instagram.com");
  const [youTube, setYoutube] = useState("https://www.youtube.com");
  const [fb, setFB] = useState("https://www.facebook.com");
  const [twitter, setTwitter] = useState("https://twitter.com");
  const [prodTitle, setProdTitle] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [banner, setBanner] = useState(null);
  const {uid} = useParams();
  const isOwner = (uid === JSON.parse(localStorage.getItem("uid")));

  useEffect(() => {
    const userRef = ref(database, 'users/' + uid);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      localStorage.setItem("bannerURL", JSON.stringify(data.bannerURL));
      console.log(data.bannerURL);
    });
  }, []);

  useEffect(() => {
    if(data.insta != null) {
      setLinks([data.twitter.toString(), data.fb.toString(), data.youtube.toString(), data.insta.toString()]);
    }
  }, [data]);

  function onSubmitSettings() {
    const photoRef = sRef(firebasestorage, "banner/" + JSON.parse(localStorage.getItem("uid")));
    uploadBytes(photoRef, banner).then((snapshot) => {
      const bannerURL = snapshot.ref.fullPath;
      updateSocialsAndBanner(JSON.parse(localStorage.getItem("uid")),insta,fb, youTube,twitter,bannerURL);
      setLinks([twitter, fb, youTube, insta]);
    });
    
  }

  function onSubmitAd() {
    const photoRef = sRef(firebasestorage, "adPicture/" + JSON.parse(localStorage.getItem("uid")) + "/" + prodTitle);
    uploadBytes(photoRef, selectedFile).then((snapshot) => {
      const photoURL = snapshot.ref.fullPath;
      writeProductInfo(JSON.parse(localStorage.getItem("uid")),prodTitle, prodDesc, prodPrice, photoURL);
      alert("Advertisment created!");
    });
  }

  if(isOwner) {
    return (
      <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />
      <Banner />
      <div>
      <Tabs>
          <div label="About">
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
      </ChakraProvider>
          </div>
          <div label="ChatBot">
          <iframe src="https://console.dialogflow.com/api-client/demo/embedded/07b80450-f136-4545-80ee-a2ab2a7208fe" width="100%" height={600} ></iframe>
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
          <Input placeholder="Enter title here" onChange={(e) => setProdTitle(e.target.value)}/>
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl isRequired mb={5}>
          <FormLabel>Product / Service Description</FormLabel>
          <Input placeholder="Enter description here" onChange={(e) => setProdDesc(e.target.value)}/>
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl isRequired mb={5}>
          <FormLabel>Price (in SGD)</FormLabel>
          <Input type="number" placeholder="Enter price here" onChange={(e) => setProdPrice(e.target.value)}/>
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl isRequired display="flex" flexDirection="column">
          <FormLabel>Upload Photo</FormLabel>
          <img width="200px" max-height="400px" src="" alt="" />
          <input 
            type="file" 
            class="custom-file-input" 
            id="inputGroupFile02"
            onChange={(e) => setSelectedFile(e.target.files[0])} />
          <FormErrorMessage>Error message</FormErrorMessage>

        </FormControl>
        <Button
          variant="solid" 
          size="md" mt={10} 
          colorScheme="whatsapp" 
          onClick = {onSubmitAd}>
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
            justifyContent="flex-start"
            alignItems="stretch"
            fontWeight="bold"
            textAlign="center"
            fontSize="2xl"
            flexDirection="column"
            pt={5}
            pb={5}
          >
            Update your social media links!
          </Text>
          <Textarea
            placeholder="Enter link to Instagram Page"
            resize="vertical"
            display="block"
            mb={5}
            onChange = {(e) => setInsta(e.target.value)}
          />
          <Textarea
            placeholder="Enter link to YouTube Channel"
            resize="vertical"
            display="block"
            mb={5}
            onChange = {(e) => setYoutube(e.target.value)}
          />
          <Textarea
            placeholder="Enter link to Facebook Page"
            resize="vertical"
            display="block"
            mb={5}
            onChange = {(e) => setFB(e.target.value)}
          />
          <Textarea
            placeholder="Enter link to Twitter Page"
            resize="vertical"
            display="block"
            mb={5}
            onChange = {(e) => setTwitter(e.target.value)}
          />
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
            Upload Banner
          </Text>
           <FormControl isRequired display="flex" flexDirection="column">
            <img width="200px" max-height="400px" src="" alt="" />
            <input type="file" onChange={(e) => setBanner(e.target.files[0])} class="custom-file-input" id="inputGroupFile03" />
            <FormErrorMessage>Error message</FormErrorMessage>
          </FormControl>
          <p>{" "}</p>
          <Button variant="solid" size="md"
          onClick={onSubmitSettings}>
            Confirm Changes
          </Button>
        </Container>
      </Box>
          </div>
      </Tabs>
      </div>
  </div>
    );
} else {
  return (
    <div className="container mt-5 py-4 px-xl-5">
        <ScrollToTopOnMount />
        <Banner />
        <div>
        <Tabs>
            <div label="About">
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
        </ChakraProvider>
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
        </Tabs>
        </div>
    </div>
    );
}
}