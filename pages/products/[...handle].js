import cloudData from "public/cloudData";

function createHandleFromTitle(title) {
  return title.toLocaleLowerCase().split(" ").join("-");
}

function extractProperties(x) {
  return {
    handle: x.handle || createHandleFromTitle(x.title),
    title: x.title,
    price: x.price,
  };
}

const cloudPaths = [
  { ...extractProperties(cloudData), variant: false },
  ...cloudData.variants.map((v) => ({
    ...extractProperties(v),
    pathPrefix: cloudData.handle,
    variant: true,
  })),
];

export function getStaticPaths() {
  const paths = cloudPaths.map((c) => ({
    params: { handle: c.pathPrefix ? [c.pathPrefix, c.handle] : [c.handle] },
  }));

  return {
    paths,
    fallback: true,
  };
}

export function getStaticProps({ params }) {
  const handle = params.handle.pop();
  const data = cloudPaths.find((v) => v.handle === handle) || null;

  return {
    props: {
      data,
    },
  };
}

export default function ProductDetailPage({ data }) {
  if (!data) {
    return <div>Whoops! Not found.</div>;
  }

  return (
    <>
      <h2>{data.title} clouds</h2>
      <p>Price: {data.price}</p>
    </>
  );
}
