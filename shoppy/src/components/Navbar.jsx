import React, { useEffect } from "react";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { userData, handleGoogleLogin, isLogin, handleGoogleLogOut } =
    useUser();

  useEffect(() => {
    if (isLogin) {
      console.log("ueseffect");
      userData.isAdmin();
    }
  }, [isLogin]);

  return (
    <header className={styles.container}>
      <Link to="/" className={styles.logo_box}>
        <AiOutlineShopping className={styles.logo} />
        <p>Shoppy</p>
      </Link>
      <div className={styles.box}>
        <Link className={styles.products} to="/products">
          Products
        </Link>
        <Link className={styles.cart} to="/carts">
          <AiOutlineShoppingCart />
        </Link>
        {isLogin && userData.admin ? (
          <button>eddit</button>
        ) : (
          console.log("UI렌더링", useUser.admin)
        )}
        {isLogin ? (
          <div className={styles.profileBox}>
            <img
              className={styles.profile}
              src={userData.photoUrl}
              alt="profile"
            />
            <span>{userData.name}</span>
          </div>
        ) : (
          ""
        )}

        <button onClick={isLogin ? handleGoogleLogOut : handleGoogleLogin}>
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
}
