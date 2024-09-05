import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./index.css?url"
import { styled } from "@styled-system/jsx";
import "./tailwind.css";

const Button = styled("button", {
  base: {
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.25rem",
    color: "white",
    backgroundColor: "blue.600",
    cursor: "pointer",
  }
})

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Button>
          ボタン
        </Button>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return <Outlet />;
}
