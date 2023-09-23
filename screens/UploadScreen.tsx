import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, ButtonText, Container, FileContainer, FileName, FileSize, FileType, Header, UploadButton, UploadButtonText } from '../components/UploadComponents'
import * as DocumentPicker from 'expo-document-picker';
import { DocumentPickerAsset } from 'expo-document-picker';
import { uploadFile } from '../services/fileService';

type size = number | undefined
type fileType = string | undefined

export default function UploadScreen() {
  const [isFileSelected, setIsFileSelected] = useState(false)
  const [selectedFile, setSelectedFile] = useState<DocumentPickerAsset>()
  const [fileName, setFileName] = useState("")
  const [fileSize, setFileSize] = useState<size>(0)
  const [fileType, setFileType] = useState<fileType>("")
  const [filePath, setFilePath] = useState("")
  const handleFileSelection = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true
    });
    if (result.assets) {
      setSelectedFile(result.assets[0])
      setFileName(result.assets[0].name);
      setFileSize(result.assets[0].size ? result.assets[0].size * 0.000001 : result.assets[0].size)
      setFileType(result.assets[0].mimeType ? result.assets[0].mimeType.split("/")[1] : result.assets[0].mimeType)
      setFilePath(result.assets[0].uri)
      setIsFileSelected(true)
      console.log(result);
    }
    console.log();
  }

  const handleFileSubmit = async () => {
    uploadFile(selectedFile)
  }

  if (isFileSelected) {
    return (
      <View>
        <Header>
          <Button 
            style={{backgroundColor: '#b50721'}}
            onPress={() => {
              setIsFileSelected(false)
              setFileName("")
              setFilePath("")
              setFileSize(0)
              setFileType("")
            }}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>

          <Button onPress={() => handleFileSubmit()}>
            <ButtonText>Upload</ButtonText>
          </Button>
        </Header>
        <Container>
          <FileContainer>
            <FileType>{fileType}</FileType>
            <FileSize>{fileSize?.toFixed(2)} mb</FileSize>
          </FileContainer>
          <FileName 
            value={fileName}
          />
        </Container>
      </View>
    )
  }

  return (
    <Container>
      <UploadButton onPress={() => handleFileSelection()}>
        <UploadButtonText>Upload</UploadButtonText>
      </UploadButton>
    </Container>
  )
}
