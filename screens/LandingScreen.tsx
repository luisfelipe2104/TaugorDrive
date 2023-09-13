import React from 'react'
import { View, Image } from 'react-native'
import landingImg from '../assets/landingImg.png'
import { LandingContainer, ImageContainer, LandingTitle, TitleContainer, TextContainer, LandingText, DetailText, LandingImage } from '../components/LandingComponents'

export default function LandingScreen() {
  return (
    <LandingContainer>
        <TitleContainer>
            <LandingTitle>Taugor Drive</LandingTitle>
        </TitleContainer>
        <ImageContainer>
            <LandingImage source={landingImg} />
        </ImageContainer>
        <TextContainer>
            <LandingText>Welcome to Taugor Drive!</LandingText>
            <DetailText>You can save your files and resort to them whenever you want!</DetailText>
        </TextContainer>
    </LandingContainer>
  )
}
