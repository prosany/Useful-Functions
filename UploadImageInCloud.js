import React from "react"

export default function usePDUploader() {
  const [file, setFile] = React.useState(null)
  const [uploadedImage, SetUploadedImage] = React.useState([])

  const uploadImage = async () => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "react-ecommerce")
    formData.append("cloud_name", "dzjrzrvxw")
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dzjrzrvxw/image/upload",
      {
        method: "POST",
        body: formData
      }
    )
    const file = await res.json()
    SetUploadedImage([...uploadedImage, file])
  }
  return <div>usePDUploader</div>
}
