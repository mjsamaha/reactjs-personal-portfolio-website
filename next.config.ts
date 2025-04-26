
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@use "src/styles/variables" as *;`
  }
};

export default nextConfig;
