import React,{useState} from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCart from "./menuCart";
const Restaurant = () => {
    // hooks always in top of the function
    const [menuData, setMenuData] = useState(Menu);
  return (
    <>
    <MenuCart menuData={menuData} />
    </>
  );
};

export default Restaurant;
