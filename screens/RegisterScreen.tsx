import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, MessageContainer, MessageTitle, Message, ForgotPasswordText, InputContainer, Input, ContainerButton, SubmitButton, ButtonText, CenteredView, GoogleButton, GoogleImage, NavigationMessage, BlueText, NavigationTextContainer } from '../components/AuthComponents'
import { Entypo } from '@expo/vector-icons';
import googleIcon from '../assets/googleIcon.png'

export default function RegisterScreen({ navigation } : any) {
  return (
    <Container>
        <MessageContainer>
            <MessageTitle>Let's Register Account!</MessageTitle>
            <Message>In Taugor Drive you enjoy 15GB of free storage!</Message>
        </MessageContainer>

        <InputContainer style={{height: 180}}>
            <Input 
                placeholder='Name'
            />
            <Input 
                placeholder='Email'
            />
            <Input 
                placeholder='Password'
                secureTextEntry={true}
            />
            <Input 
                placeholder='Confirm Password'
                secureTextEntry={true}
            />
        </InputContainer>

        <ContainerButton>
            <SubmitButton>
                <ButtonText>Register</ButtonText>
            </SubmitButton>
        </ContainerButton>
        
        <NavigationTextContainer>
            <NavigationMessage>
                Already have an account? 
            </NavigationMessage>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <BlueText> Login</BlueText>
            </TouchableOpacity>
        </NavigationTextContainer>
    </Container>
  )
}
