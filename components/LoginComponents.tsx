import styled from "styled-components/native";

export const Container = styled.View`
    min-height: 100%;
    padding: 0px 20px;
`

export const MessageContainer = styled.View`
    padding: 60px 0px 40px;
`

export const MessageTitle = styled.Text`
    font-size: 25px;
    font-weight: 700;
`

export const Message = styled.Text`
    font-size: 19px;
`

export const InputContainer = styled.View`
    display: flex;
    height: 80px;
    justify-content: space-between;
`

export const Input = styled.TextInput`
    border: 1px solid #9e9e9e;
    padding: 3px 10px;
    font-size: 18px;
`

export const ForgotPasswordText = styled.Text`
    text-align: right;
    padding: 8px 0px;
`

export const ContainerButton = styled.View`
    padding-top: 20px;
    margin-bottom: 20px;
`

export const SubmitButton = styled.TouchableOpacity`
    background-color: #585cdb;
    padding: 9px 0px;
    border-radius: 10px;
`

export const ButtonText = styled.Text`
    text-align: center;
    color: #FFF;
    font-size: 21px;
    font-weight: 700;
`

export const CenteredView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GoogleButton = styled.TouchableOpacity`
    background-color: #2a42f7;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50%;
    padding: 10px;
    margin-top: 20px;
`

export const GoogleImage = styled.Image`
    height: 25px;
    width: 25px;
`

export const NavigationTextContainer = styled.View`
    padding: 30px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const NavigationMessage = styled.Text`
    font-size: 16px;
`

export const BlueText = styled.Text`
    font-size: 16px;
    color: #5266ff;
`
