import React from 'react';

const LinkComponent = () => {
  return (
    <a href="https://demoappauthlun.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=bqq3mm4tu09lfgr54pvt6dfos&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone&redirect_uri=https%3A%2F%2Fdsvxb49u3nk1f.cloudfront.net%2F">
      Перейти на страницу регистрации...
    </a>
  );
};

export default LinkComponent;


// import React, { useState } from 'react';

// const YourComponent: React.FC = () => {
//   const [products, setProducts] = useState<string>('');
//   const [selectedNumber, setSelectedNumber] = useState<string>('1');

//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedNumber(event.target.value);
//   };

//   // Function to perform a GET request with the selected number
//   function fetchProduct2(selectedNumber: string) {
//     const url = `https://h439o1jara.execute-api.us-east-1.amazonaws.com/dev/products/${selectedNumber}`;

//     // Perform the GET request to the API
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Handle the received data
//         console.log(data);
//         setProducts(JSON.stringify(data, null, 2)); // Format and update the state
//       })
//       .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//       });
//   }

//   const handleSubmit = () => {
//     fetchProduct2(selectedNumber); // Call with the selected number
//   };

//   return (
//     <div>
//       {/* Add a dropdown list */}
//       <select value={selectedNumber} onChange={handleSelectChange}>
//         {Array.from({ length: 10 }, (_, i) => i + 1).map(number => (
//           <option key={number.toString()} value={number.toString()}>{number}</option>
//         ))}
//       </select>

//       {/* Add a submit button */}
//       <button onClick={handleSubmit}>Submit</button>

//       {/* Display product data */}
//       <pre>{products}</pre>
//     </div>
//   );
// }

// export default YourComponent;



// import React, { useState } from 'react';

// function YourComponent() {
//   const [products, setProducts] = useState('');
//   const [selectedNumber, setSelectedNumber] = useState('1');

//   const handleSelectChange = (event) => {
//     setSelectedNumber(event.target.value);
//   };

//   // Функция для выполнения GET-запроса с выбранным числом
//   function fetchProduct2(selectedNumber) {
//     const url = `https://zwzhz3jrej.execute-api.us-east-1.amazonaws.com/prod/products/${selectedNumber}`;
    
//     // Выполняем GET-запрос к API
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         // return response.json();
//         return response;
//       })
//       .then(data => {
//         // Обработка полученных данных
//         console.log(data);
//         setProducts(JSON.stringify(data, null, 2)); // Форматируем и обновляем состояние
//       })
//       .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//       });
//   }

//   const handleSubmit = () => {
//     fetchProduct2(selectedNumber); // вызывается с выбранным числом
//   };

//   return (
//     <div>
//       {/* Добавление выпадающего списка */}
//       <select value={selectedNumber} onChange={handleSelectChange}>
//         {Array.from({ length: 10 }, (_, i) => i + 1).map(number => (
//           <option key={number} value={number}>{number}</option>
//         ))}
//       </select>

//       {/* Добавление кнопки submit */}
//       <button onClick={handleSubmit}>Submit</button>

//       {/* Отображение данных продуктов */}
//       <pre>{products}</pre>
//     </div>
//   );
// }

// export default YourComponent;
