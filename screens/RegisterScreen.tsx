import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, MessageContainer, MessageTitle, Message, ForgotPasswordText, InputContainer, Input, ContainerButton, SubmitButton, ButtonText, CenteredView, GoogleButton, GoogleImage, NavigationMessage, BlueText, NavigationTextContainer } from '../components/AuthComponents'

import { auth } from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function RegisterScreen({ navigation } : any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(userCredential);
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <Container>
            <MessageContainer>
                <MessageTitle>Let's Register Account!</MessageTitle>
                <Message>In Taugor Drive you enjoy 15GB of free storage!</Message>
            </MessageContainer>

            <InputContainer style={{height: 150}}>
                {/* <Input 
                    placeholder='Name'
                /> */}
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
                <Input 
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                    secureTextEntry={true}
                />
            </InputContainer>

            <ContainerButton>
                <SubmitButton onPress={() => handleRegister()}>
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
