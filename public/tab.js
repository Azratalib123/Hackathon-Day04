// pages/index.js
import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>

      {/* Correct way to include external script in Next.js */}
      <Script src="/tab.js" strategy="lazyOnload" />

      <p>Check console for tab.js message!</p>
    </>
  );
}
