import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    justify-content: space-between;
    min-height: 77%;
`

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 10px 20px;
    background-color: #e6e6e6;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000000;
`

export const ImageContainer = styled.View`
    display: flex;
    align-items: center;
    padding: 15px 0px;
`

export const HomeImage = styled.Image`
    height: 250px;
    width: 250px;
`

export const TextContainer = styled.View`
    padding: 20px 10px 10px 10px;
`

export const WelcomeText = styled.Text`
    font-size: 25px;
    font-weight: 600;
    color: #000000;
    text-align: center;
`

export const PresentationText = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    text-align: center;
`

export const ButtonContainer = styled.View`
    display: flex;
    align-items: center;
`

export const UploadButton = styled.TouchableOpacity`
    background-color: #025dbf;
    padding: 15px 50px;
    border-radius: 10px;
`

export const UploadButtonText = styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: #FFF;
`