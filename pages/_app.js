/* eslint-disable react/jsx-props-no-spreading */
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
// When Router event starts, it starts the nprogress
Router.events.on('routerChangeStart', () => NProgress.start());
// When Router event finishes, it starts the nprogress
Router.events.on('routerChangeComplete', () => NProgress.done());
Router.events.on('routerChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
