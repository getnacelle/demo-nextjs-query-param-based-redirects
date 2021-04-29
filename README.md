# Next.js Redirects with Query Parameters

This is a super simple example site which demonstrates the use of query param-driven `redirects` in Next.js, where:

- routes which contain `?query=params` should be redirected to `/another/route`
- the `source` routes without query params are legitimate routes that the user shouldn't be redirected away from

To see it in action:

- `npm i` to install dependencies
- `npm run dev` to spin up the dev server
- navigate to `localhost:3000`
- click on one of the links in the header navigation

The `redirects` in [`next.config.js`](./next.config.js) use the [`has`](https://nextjs.org/docs/api-reference/next.config.js/redirects#header-cookie-and-query-matching) property, with `query`-type entries which redirect to the proper `destination` based on the `value` of the `variant` query param.
