import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
`

export const Header = styled.View`
    padding: 40px 10px 20px;
    background-color: #e6e6e6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
    background-color: #025dbf;
    padding: 7px 12px;
    border-radius: 10px;
`

export const ButtonText = styled.Text`
    color: #FFF;
    font-size: 20px;
`

export const UploadButton = styled.TouchableOpacity`
    background-color: #025dbf;
    padding: 15px 50px;
    border-radius: 10px;
`

export const UploadButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`

export const FileContainer = styled.View`
    background-color: #e81a3f;
    margin-top: -50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 250px;
    border-radius: 10px;
`

export const FileType = styled.Text`
    font-size: 45px;
    font-weight: 900;
`

export const FileName = styled.TextInput`
    text-align: left;
    margin-top: 3px;
    border: 0.5px solid #9e9e9e;
    padding: 1px 10px;
    border-radius: 10px;
    font-size: 17px;
    width: 250px;
`

export const FileSize = styled.Text`
    position: relative;
    top: 75px;
    left: 82px;
    font-size: 18px;
`