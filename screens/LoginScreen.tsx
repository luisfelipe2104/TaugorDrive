import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, MessageContainer, MessageTitle, Message, ForgotPasswordText, InputContainer, Input, ContainerButton, SubmitButton, ButtonText, CenteredView, GoogleButton, GoogleImage, NavigationMessage, BlueText, NavigationTextContainer } from '../components/LoginComponents'
import { Entypo } from '@expo/vector-icons';
import googleIcon from '../assets/googleIcon.png'

export default function LoginScreen() {
  return (
    <Container>
        <MessageContainer>
            <MessageTitle>Let's log you in!</MessageTitle>
            <Message>You're one step from enjoy 15GB of free storage!</Message>
        </MessageContainer>

        <InputContainer>
            <Input 
                placeholder='Email'
            />
            <Input 
                placeholder='Password'
            />
        </InputContainer>

        <TouchableOpacity>
            <ForgotPasswordText>Forgot password?</ForgotPasswordText>
        </TouchableOpacity>

        <ContainerButton>
            <SubmitButton>
                <ButtonText>Login</ButtonText>
            </SubmitButton>
        </ContainerButton>

        <CenteredView>
            <Entypo name="dots-three-horizontal" size={28} color="#9c9c9c" />
            <GoogleButton>
                <GoogleImage source={googleIcon} /> 
                <ButtonText>oogle</ButtonText>
            </GoogleButton>
        </CenteredView>
        
        <NavigationTextContainer>
            <NavigationMessage>
                Don't you have an account? 
            </NavigationMessage>
            <TouchableOpacity>
                <BlueText> Register Now</BlueText>
            </TouchableOpacity>
        </NavigationTextContainer>
    </Container>
  )
}
