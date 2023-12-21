import React from "react";
import axios, {AxiosError} from "axios"; 
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

      console.log("eto response", response);
  
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
      if (typeof error === 'object' && error !== null && 'response' in error) {
          const e = error as AxiosError;
          if (e.response && e.response.status === 401) {
            alert('Unauthorized: Access is denied due to invalid credentials.');
          } else if (e.response && e.response.status === 403) {
            alert('Forbidden: You do not have permission to access this resource.');
          }
        } else if (error instanceof Error && error.message) {
          // Что-то пошло не так при настройке запроса
          console.log('Error', error.message);
        }
    }
    
  };
  

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
