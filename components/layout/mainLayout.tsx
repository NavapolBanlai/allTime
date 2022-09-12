import Footer from './footer'
import Navbar from './navbar'
// import Footer from './footer'
import Header from './header';
import useRouteController from '../../hooks/useRouteController';
function MainLayout({ children }: any) {
      useRouteController(children);
      return (
            <>
                  <Navbar />
                  {children.type.getHeader && <Header textHeader={children.type.getHeader()} />}
                  <main>{children}</main>
                  {/* <Footer /> */}
            </>
      )
}
export default MainLayout