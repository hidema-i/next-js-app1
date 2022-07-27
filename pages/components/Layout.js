import React from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
///共通
const Layout = (props) => {
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
            <Link href="/login">
              <a className="navbar-link">サインイン</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/register">
              <a className="navbar-link">サインアップ</a>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
