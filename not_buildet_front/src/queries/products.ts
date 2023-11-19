import axios, { AxiosError } from "axios";
import API_PATHS from "~/constants/apiPaths";
import { AvailableProduct } from "~/models/Product";
import { useQuery, useQueryClient, useMutation } from "react-query";
import React from "react";

export function useAvailableProducts() {
  return useQuery<AvailableProduct[], AxiosError>(
    "available-products",
    async () => {
      const res = await axios.get<AvailableProduct[]>(
        // `${API_PATHS.product}/product/available`
          `${API_PATHS.product}/`
      );
      return res.data;
    }
  );
}

// export async function useAvailableProducts() {
//   try {
//     const response = await axios.get('https://4mq3naeez9.execute-api.us-east-1.amazonaws.com/prod/products');
//     // if (!response.ok) {
//     //   throw new Error(`Error: ${response.statusText}`);
//     // }
//     // const data = await response.json();
//     // return data;
//     return (JSON.stringify(response, null, 2));
//   } catch (error) {
//     console.error('Fetching products failed', error);
//   }
// }


export function useInvalidateAvailableProducts() {
  const queryClient = useQueryClient();
  return React.useCallback(
    () => queryClient.invalidateQueries("available-products", { exact: true }),
    []
  );
}

export function useAvailableProduct(id?: string) {
  return useQuery<AvailableProduct, AxiosError>(
    ["product", { id }],
    async () => {
      const res = await axios.get<AvailableProduct>(
        // `${API_PATHS.product}/product/${id}`
        `${API_PATHS.product}${id}`
      );
      return res.data;
    },
    { enabled: !!id }
  );
}

export function useRemoveProductCache() {
  const queryClient = useQueryClient();
  return React.useCallback(
    (id?: string) =>
      queryClient.removeQueries(["product", { id }], { exact: true }),
    []
  );
}

export function useUpsertAvailableProduct() {
  return useMutation((values: AvailableProduct) =>
    axios.put<AvailableProduct>(`${API_PATHS.product}/product`, values, {    //API_PATHS.product bff
      headers: {
        Authorization: `Basic ${localStorage.getItem("authorization_token")}`,
      },
    })
  );
}

export function useDeleteAvailableProduct() {
  return useMutation((id: string) =>
    axios.delete(`${API_PATHS.product}/product/${id}`, {  //bff
      headers: {
        Authorization: `Basic ${localStorage.getItem("authorization_token")}`,
      },
    })
  );
}
