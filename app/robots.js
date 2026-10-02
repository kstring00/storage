// Demos are private concepts: keep every crawler out of the whole deployment.
export default function robots() {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
