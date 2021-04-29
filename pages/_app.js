import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ul>
        <li>
          <a href="/">
            <pre>Home (/)</pre>
          </a>
        </li>
        <li>
          <a href="/products/cloud">
            <pre>/products/cloud</pre>
          </a>
        </li>
        <li>
          <a href="/products/cloud?variant=112233">
            <pre>/products/cloud?variant=112233</pre>
          </a>
        </li>
        <li>
          <a href="/products/cloud?variant=223344">
            <pre>/products/cloud?variant=223344</pre>
          </a>
        </li>
        <li>
          <a href="/products/cloud?variant=334455">
            <pre>/products/cloud?variant=334455</pre>
          </a>
        </li>
      </ul>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
