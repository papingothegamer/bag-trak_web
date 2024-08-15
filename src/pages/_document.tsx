import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <style>{`
            @font-face {
              font-family: 'Galano Classic DEMO';
              src: url('/fonts/ReneBieder-GalanoClassicDEMO.otf') format('opentype');
              font-weight: normal;
              font-style: normal;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
