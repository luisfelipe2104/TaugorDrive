import styled from "styled-components/native";

export const LandingContainer = styled.View`
    display: flex;
    align-items: center;
    min-height: 95%;
    justify-content: space-around;
`

export const TitleContainer = styled.View`
    /* padding-top: 50px; */
    display: flex;
    align-items: center;
`

export const LandingTitle = styled.Text`
    font-size: 30px;
    font-weight: 700;
    font-style: italic;
`

export const TextContainer = styled.View`
    padding: 10px 10px 0px 10px;
`

export const LandingText = styled.Text`
    font-size: 22px;
    font-weight: 700;
    text-align: center;
`

export const DetailText = styled.Text`
    font-size: 21px;
    font-weight: 600;
    text-align: center;
`

export const ImageContainer = styled.View`
    padding-top: 20px;
`

export const LandingImage = styled.Image`
    height: 250px; 
    width: 250px; 
`

export const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;

`

export const LoginButton = styled.TouchableOpacity`
    background-color: #1b2536;
    border-radius: 10px;
    width: 120px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RegisterButton = styled.TouchableOpacity`
    background-color: #608bd1;
    border-radius: 10px;
    width: 120px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-weight: 700;
`