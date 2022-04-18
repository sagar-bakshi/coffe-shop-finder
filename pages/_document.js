import Document, { NextScript, Head, Main } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/RobotoSlab-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/RobotoSlab-Medium.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/RobotoSlab-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
