import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Container, UploadButton, UploadButtonText } from '../components/UploadComponents'
import * as DocumentPicker from 'expo-document-picker';

type size = number | undefined
type fileType = string | undefined

export default function UploadScreen() {
  const [fileName, setFileName] = useState("")
  const [fileSize, setFileSize] = useState<size>(0)
  const [fileType, setFileType] = useState<fileType>("")
  const [filePath, setFilePath] = useState("")
  const handleFileSelection = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true,
      multiple: true
    });
    if (result.assets) {
      setFileName(result.assets[0].name);
      setFileSize(result.assets[0].size)
      setFileType(result.assets[0].mimeType)
      setFilePath(result.assets[0].uri)
      console.log(result);
    }
    console.log();
  }

  return (
    <Container>
      <UploadButton onPress={() => handleFileSelection()}>
        <UploadButtonText>Upload</UploadButtonText>
      </UploadButton>
    </Container>
  )
}
