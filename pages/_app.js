/* eslint-disable react/jsx-props-no-spreading */
import NProgress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import withData from '../lib/withData';
import '../components/styles/nprogress.css';
// When Router event starts, it starts the nprogress
Router.events.on('routerChangeStart', () => NProgress.start());
// When Router event finishes, it starts the nprogress
Router.events.on('routerChangeComplete', () => NProgress.done());
Router.events.on('routerChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps, apollo }) {
  // console.log(apollo);
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    // we need to wrap our entire application in what's called a provider
    // a provider in react is a component that lives very high in our application
    // it allows all the components that are several levels deep in order
    // to access that data
    // apollo client needs a client property
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}
// we need to tell next.js that it needs to go and fetch all of the queries in all of the children components
// myApp.getinitial props is a specific nextjs thing
// this is an async function
// ctx = context
// if any of the props have a getinitalprops method on them then we will wait and fetch them
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  // this will allow us to get any query variables like /products/2
  return { pageProps };
};
// give me my app but inject the apollo client along inside of it
export default withData(MyApp);
