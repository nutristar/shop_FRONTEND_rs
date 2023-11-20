import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import MainLayout from "~/components/MainLayout/MainLayout";
import PageProductForm from "~/components/pages/PageProductForm/PageProductForm";
import PageOrders from "~/components/pages/PageOrders/PageOrders";
import PageOrder from "~/components/pages/PageOrder/PageOrder";
import PageProductImport from "~/components/pages/admin/PageProductImport/PageProductImport";
import PageCart from "~/components/pages/PageCart/PageCart";
import PageProducts from "~/components/pages/PageProducts/PageProducts";
import { Typography } from "@mui/material";
import YourComponent from "./newcomponent";


function App() {
  const [products, setProducts] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://zwzhz3jrej.execute-api.us-east-1.amazonaws.com/prod/products');
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(JSON.stringify(data, null, 2)); // Преобразуем данные в строку JSON
    } catch (error) {
      console.error('Fetching products failed', error);
    }
  };



  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<PageProducts />} />
        <Route path="cart" element={<PageCart />} />
        <Route path="admin/orders">
          <Route index element={<PageOrders />} />
          <Route path=":id" element={<PageOrder />} />
        </Route>
        <Route path="admin/products" element={<PageProductImport />} />

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
          <Link to="#" onClick={fetchProducts}>Load Products</Link>
          <pre>{products}</pre> {/* Использование элемента <pre> для отображения данных */}
        </div>
        <div>
          <YourComponent />
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
