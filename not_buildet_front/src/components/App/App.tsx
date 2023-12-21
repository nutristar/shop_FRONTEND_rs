import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import MainLayout from "~/components/MainLayout/MainLayout";
import PageProductForm from "~/components/pages/PageProductForm/PageProductForm";
import PageOrders from "~/components/pages/PageOrders/PageOrders";
import PageOrder from "~/components/pages/PageOrder/PageOrder";
import PageProductImport from "~/components/pages/admin/PageProductImport/PageProductImport";
import PageCart from "~/components/pages/PageCart/PageCart";
import PageProducts from "~/components/pages/PageProducts/PageProducts";
import { Typography } from "@mui/material";
// Убедитесь, что компонент YourComponent существует и правильно импортирован
import LinkComponent from "./newcomponent";

import { fetchTokens } from './fetchTokens'; // Проверьте правильность пути

function App() {
  const [products, setProducts] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetchTokens(code)
        .then(tokens => {
          console.log('Access Token:', tokens);
          localStorage.setItem('accessToken', tokens.access_token
          );


        })
        .catch(error => {
          console.error('Ошибка получения токенов:', error);
        });
    }

  }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const accessToken = localStorage.getItem('accessToken');
  //     const response = await fetch('https://h439o1jara.execute-api.us-east-1.amazonaws.com/dev/products', {
  //       headers: {
  //         'authorizationToken': `Bearer ${accessToken}`
  //       }
  //     } );
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.statusText}`);
  //     }
  //     const data = await response.json();
  //     setProducts(JSON.stringify(data, null, 2));
  //   } catch (error) {
  //     console.error('Fetching products failed', error);
  //   }
  // };




  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<PageProducts />} />
        <Route path="cart" element={<PageCart />} />
        <Route path="admin/orders">
          <Route index element={<PageOrders />} />
          <Route path=":id" element={<PageOrder />} />
        </Route>
        <Route path="admin/products" element={<PageProductImport />} />    {/* !!!!!!!! admin/products!!!!!! */}

        <Route path="admin/product-form">
          <Route index element={<PageProductForm />} />
          <Route path=":id" element={<PageProductForm />} />
        </Route>

        <Route
          path="*"
          element={<Typography variant="h1">Not found</Typography>}   />
      </Routes>
      <div>
        <div>
          {/* <Link to="#" onClick={fetchProducts}>Load Products</Link>
          <pre>{products}</pre> Использование элемента <pre> для отображения данных */}
        </div>
        <div>
          <LinkComponent />
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
