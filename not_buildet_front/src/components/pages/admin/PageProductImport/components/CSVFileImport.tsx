import React from "react";
import axios from "axios"; 
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };
  const uploadFile = async () => {
    if (!file) {
      console.log("No file selected");
      return;
    }
  
    console.log("uploadFile to", url);
    localStorage.setItem("myAuthToken", "bnV0cmlzdGFyOlRFU1RfUEFTU1dPUkQ=");

    const token = localStorage.getItem("myAuthToken");
    try {
      // Получение данных для подписанного POST запроса
      const response = await axios.get(url, {
        params: { name: encodeURIComponent(file.name) },
        headers: {
          'Authorization': `Basic ${token}`
        }
      });
  
      // Данные, возвращенные лямбда-функцией
      const postData = response.data;
  
      // Создание объекта FormData
      const formData = new FormData();
      for (const key in postData.fields) {
        formData.append(key, postData.fields[key]);
      }
      // Добавляем файл в последнюю очередь, как требуется в S3 POST запросе
      formData.append('file', file);
  
      // Выполнение POST запроса для загрузки файла
      const postResponse = await axios.post(postData.url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log("File upload response:", postResponse);
      setFile(null);
    } catch (error) {
      console.error("Error during file upload: ", error);
    }
  };
  

/////////////////////////////////////////////////////////////////////
  // const uploadFile = async () => {
  //   if (!file) {
  //     console.log("No file selected");
  //     return;
  //   }

  //   console.log("uploadFile to", url);

  //   // Получение подписанного URL
  //   try {
  //     const response = await axios.get(url, {
  //       params: { name: encodeURIComponent(file.name) },
  //     });
  //     console.log("File to upload: ", file.name);
  //     console.log("Uploading to: ", response.data);
  //     const signedUrl = response.data.url; 
  //     console.log("Signed URL: ", signedUrl);


  //     // Загрузка файла на подписанный URL
  //     const result = await fetch(signedUrl, {
  //       method: "PUT",
  //       body: file,
  //     });
  //     console.log("Result: ", result);
  //     setFile(null);
  //   } catch (error) {
  //     console.error("Error during file upload: ", error);
  //   }
  // };

//////////////////////////////////////////////////////////////////////////////////

  // const uploadFile = async () => {
  //   if (!file) {
  //     console.log("No file selected");
  //     return;
  //   }
  
  //   console.log("uploadFile to", url);
  
  //   try {
  //     // Получение данных для подписанного POST запроса
  //     const response = await axios.get(url, {
  //       params: { name: encodeURIComponent(file.name) },
  //     });
  //     const formData = new FormData();
  
  //     // Добавление полей и файла в форму
  //     for (const field in response.data.fields) {
  //       formData.append(field, response.data.fields[field]);
  //     }
  //     formData.append('file', file);
  
  //     // Выполнение POST запроса для загрузки файла
  //     const postResponse = await fetch(response.data.url, {
  //       method: "POST",
  //       body: formData
  //     });
  
  //     if (!postResponse.ok) {
  //       throw new Error('File upload failed');
  //     }
  
  //     console.log("File uploaded successfully");
  //     setFile(null);
  //   } catch (error) {
  //     console.error("Error during file upload: ", error);
  //   }
  // };
  



  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </Box>
  );
}
