module.exports = {
  async redirects() {
    return [
      {
        source: "/products/cloud",
        has: [
          {
            type: "query",
            key: "variant",
            value: "112233",
          },
        ],
        permanent: true,
        destination: "/products/cloud/cumulus",
      },
      {
        source: "/products/cloud",
        has: [
          {
            type: "query",
            key: "variant",
            value: "223344",
          },
        ],
        permanent: true,
        destination: "/products/cloud/cumulonimbus",
      },
      {
        source: "/products/cloud",
        has: [
          {
            type: "query",
            key: "variant",
            value: "334455",
          },
        ],
        permanent: true,
        destination: "/products/cloud/stratus",
      },
    ];
  },
};
