import React, { useContext } from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
import AppContext from "../../context/AppContext";
///共通
const Layout = (props) => {
  const { user, setUser } = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>FoodDeliveryService</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
              margin: 10px;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">HOME</a>
            </Link>
          </NavItem>

          <NavItem className="ml-auto">
            {user ? (
              <Link href="/">
                <a
                  className="nav-link"
                  onClick={() => {
                    setUser(null);
                  }}
                >
                  logout
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="navbar-link">login</a>
              </Link>
            )}
          </NavItem>

          <NavItem>
            {user ? (
              <h5>{user.username}</h5>
            ) : (
              <Link href="/register">
                <a className="navbar-link">新規登録</a>
              </Link>
            )}
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
