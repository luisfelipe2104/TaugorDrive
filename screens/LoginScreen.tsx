import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, MessageContainer, MessageTitle, Message, ForgotPasswordText, InputContainer, Input, ContainerButton, SubmitButton, ButtonText, CenteredView, GoogleButton, GoogleImage, NavigationMessage, BlueText, NavigationTextContainer } from '../components/AuthComponents'
import { Entypo } from '@expo/vector-icons';
import googleIcon from '../assets/googleIcon.png'

import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation} : any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                
            });
    }

    return (
        <Container>
            <MessageContainer>
                <MessageTitle>Let's log you in!</MessageTitle>
                <Message>You're one step from enjoy 15GB of free storage!</Message>
            </MessageContainer>

            <InputContainer>
                <Input 
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder='Password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
            </InputContainer>

            <TouchableOpacity>
                <ForgotPasswordText>Forgot password?</ForgotPasswordText>
            </TouchableOpacity>

            <ContainerButton>
                <SubmitButton onPress={() => handleLogin()}>
                    <ButtonText>Login</ButtonText>
                </SubmitButton>
            </ContainerButton>

            <CenteredView>
                <Entypo name="dots-three-horizontal" size={28} color="#9c9c9c" />
                <GoogleButton onPress={() => handleLogin()}>
                    <GoogleImage source={googleIcon} /> 
                    <ButtonText>oogle</ButtonText>
                </GoogleButton>
            </CenteredView>
            
            <NavigationTextContainer>
                <NavigationMessage>
                    Don't you have an account? 
                </NavigationMessage>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <BlueText> Register Now</BlueText>
                </TouchableOpacity>
            </NavigationTextContainer>
        </Container>
    )
}
