import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ButtonContainer, TextContainer, Container, Header, HomeImage, ImageContainer, PresentationText, Title, UploadButton, UploadButtonText, WelcomeText } from '../components/HomeComponents'
import { FontAwesome } from '@expo/vector-icons';
import homeImage from '../assets/homeImage.png'

export default function HomeScreen({ navigation }: any) {
  return (
    <Container>
      <View>
        <Header>
          <Title>Home</Title>
          <TouchableOpacity onPress={() => navigation.navigate("Results")}>
            <FontAwesome name="search" size={26} color="black" />
          </TouchableOpacity>
        </Header>

        <TextContainer>
          <WelcomeText>Welcome to Taugor Drive!</WelcomeText>
          <PresentationText>You can save files and retrive them whenever you want!</PresentationText>
        </TextContainer>

        <ImageContainer>
          <HomeImage source={homeImage} />
        </ImageContainer>
      </View>

      <View>
        <ButtonContainer>
          <UploadButton onPress={() => navigation.navigate("Upload")}>
            <UploadButtonText>Upload</UploadButtonText>
          </UploadButton>
        </ButtonContainer>
      </View>
    </Container>
  )
}
