import Footer from './footer'
import Navbar from './navbar'
// import Footer from './footer'
interface PropsType {
      textHeader: string
}
export default function Header(props: PropsType) {
      const { textHeader } = props;
      return (
            <>
                  <div className="card">
                        <div className="card-header">
                              {textHeader}
                        </div>
                  </div>
            </>
      )
}