import type { AppProps } from 'next/app'
import { Fragment, useContext } from 'react';
import '../styles/sty.scss';
import MainLayout from '../components/layout/mainLayout'
import { AuthContextProvider } from '../store/authContext'
import LoginPage from './login/index'
import React from 'react';


const MyApp = ({ Component, pageProps, ...appProps }: AppProps) => {

  // const getLayout = (page: any) => {
  //   //code run on server-side
  //   if (typeof window === 'undefined') {
  //     return null
  //   }

  //   if (Component.isErrorPage) {
  //     return page
  //   }

  //   if (Component.getLayout) {
  //     return Component.getLayout(page)
  //   }

  //   return <MainLayout>{page}</MainLayout>
  // }

  // const Layout = Component.layout ?? Fragment

  // return (
  //   <AuthContextProvider>
  //     <Layout>
  //       {getLayout(<Component {...pageProps} />)}
  //     </Layout>
  //   </AuthContextProvider>
  // )

  // const isLayoutNeeded = [`/login`].includes(appProps.router.pathname);
  // const LayoutComponent = isLayoutNeeded ? Fragment : MainLayout;
  // return (
  //   <React.StrictMode>
  //     <AuthContextProvider>
  //       <LayoutComponent>
  //         <Component {...pageProps} />
  //       </LayoutComponent>
  //     </AuthContextProvider>
  //   </React.StrictMode>
  // )
  const getContent = () => {
    
    if ([`/login`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    else {
      return (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      );
    }
  };

  return (
    <AuthContextProvider>
      {getContent()}
    </AuthContextProvider>
  )

}

export default MyApp

