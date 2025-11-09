import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  //fetching all products from API
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const productData = res.data;
      setData(productData);
    } catch (error) {
      console.log(error);
    }
  };
  const getUniqueCategory = (data, property) => {
    let newVA1 = data?.map((curElem) => {
      return curElem[property];
    });
    newVA1 = ["all", ...new Set(newVA1)];
    return newVA1;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        categoryOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
