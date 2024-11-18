import createNextIntlPlugin from "next-intl/plugin";

const withIntl = createNextIntlPlugin("./i18.ts");

const nextConfig = {
  images: {
    domains: ["lano.s3.eu-north-1.amazonaws.com"],
  },
  exports: {
    experimental: { appDir: true },
  },
};

export default withIntl(nextConfig);
