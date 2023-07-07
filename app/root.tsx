/* eslint-disable react/jsx-no-comment-textnodes */
import { LiveReload } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <title>Remix: So great, it's funny!</title>
      </head>
      //LiveReload connects to Remix's websocket to provide hot reloads only for dev env
      <body>
        Hello world
        <LiveReload />
      </body>
    </html>
  );
}
