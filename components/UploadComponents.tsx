import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
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