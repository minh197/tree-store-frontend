import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// we will use getinitialProps which is one of styled-components props to use it with nextjs
// get initialProps will wait until that method has been resolved before it sends the data
// off from the server to the browser
// collect style will go through every single component that needs to be rendered inside
// our components and it will rip out the CSS that it needs  and render it out to the server
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      // eslint-disable-next-line react/jsx-props-no-spreading
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-CA">
        <bod>
          <Main />
          <Head />
          <NextScript />
        </bod>
      </Html>
    );
  }
}
// The reason we do this is because we need access to be able to do custom HTML attributes
// as well as the ability to stick our CSS inside the head
