import React from "react";
import { useUser } from "../context/UserContext";
import { ref, child, get } from "firebase/database";

export default function Products() {
  const { userData, isLogin } = useUser();

  return (
    <section>
      <button onClick={() => userData.addToCart("개이쁜신발", 12000)}>
        dddd
      </button>
      {/* <button onClick={userData.addConsoleLog}></button> */}
      {/* {userData[`${userData.uid}`].carts.map((item) => {
        console.log(item.id, item.price);
      })} */}
      <button onClick={() => userData.readCart()}>카트를 읽자</button>
      {/* {userData.readCart().map((item) => console.log("item:", item))} */}
    </section>
  );
}
