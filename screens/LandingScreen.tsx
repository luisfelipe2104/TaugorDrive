import React from 'react'
import { View, Image } from 'react-native'
import landingImg from '../assets/landingImg.png'
import { LandingContainer, ImageContainer, LandingTitle, TitleContainer, ButtonContainer, ButtonText, LoginButton, RegisterButton, TextContainer, LandingText, DetailText, LandingImage } from '../components/LandingComponents'

export default function LandingScreen() {
  return (
    <LandingContainer>
        <View>
          <TitleContainer>
              <LandingTitle>Taugor Drive</LandingTitle>
          </TitleContainer>

          <ImageContainer>
              <LandingImage source={landingImg} />
          </ImageContainer>
        </View>

        <TextContainer>
            <LandingText>Welcome to Taugor Drive!</LandingText>
            <DetailText>You can save your files and resort to them whenever you want!</DetailText>
        </TextContainer>

        <ButtonContainer>
          <LoginButton>
            <ButtonText>Login</ButtonText>
          </LoginButton>
          <RegisterButton>
            <ButtonText>Register</ButtonText>
          </RegisterButton>
        </ButtonContainer>
    </LandingContainer>
  )
}
