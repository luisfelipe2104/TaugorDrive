import axios from "axios";
import { api } from "./api";

export async function uploadFile(selectedFile) {
    const formData = new FormData();
    formData.append('formData', {
        uri : selectedFile.uri,
        type: selectedFile.mimeType,
        name: selectedFile.name
    })

    try{
        const { data } = await api.post(`/api/file`, formData)
        console.log(data);
    } catch (err) {
        console.log(err.response.data.msg);
    }
}