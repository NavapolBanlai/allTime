import Card from "../../components/global/card";
import { useRouter } from 'next/router';

const Home = () => {
      const router = useRouter()
      return (
            <>
                  <div className="container-fluid" id="home-page">
                        <div className="row">
                              <div className="col-md card-home">
                                    <Card
                                          classCard="home-card"
                                          img="https://gms.unocha.org/sites/default/files/u2963/Registration.png"
                                          classImg="home-card-img"
                                          classText="text-description"
                                          title="Card Register"
                                          description="For the registration employees who use time stamps and configuration of default shifts, weekly holidays, etc."
                                          url="./home"
                                    />
                              </div>
                              <div className="col-md card-home">
                                    <Card
                                          classCard="home-card"
                                          img="https://www.sto.nato.int/PublishingImages/calendar-icon.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3De696adf6%252D036f%252D4285%252D9caa%252D34eefe236873%26View%3D09c71f77%252D9eca%252D412b%252Dbb53%252D48827ca331c6%26ID%3D255%26CurrentPage%3D1"
                                          classImg="home-card-img"
                                          classText="text-description"
                                          title="Review Time Status"
                                          description="For checking the approval status of time and used for Re-Process Time in case of adjust time by group."
                                          url="./home"
                                    />

                              </div>
                              <div className="col-md card-home">
                                    <Card
                                          classCard="home-card"
                                          img="https://qmetrix.com.au/wp-content/uploads/2019/06/master-data-mgt.png"
                                          classImg="home-card-img"
                                          classText="text-description"
                                          title="Employee Master"
                                          description="Details of employee for time attendance such as employee id, employee type, department, position etc."
                                          url="./home"
                                    />
                              </div>
                              <div className="col-md card-home">
                                    <Card
                                          classCard="home-card"
                                          img="https://cdn-icons-png.flaticon.com/512/852/852234.png"
                                          classImg="home-card-img"
                                          classText="text-description"
                                          title="HR Management"
                                          description="Data management for time attendance such as department group, shift group, holiday group etc."
                                          url="./home"
                                    />
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-md card-home">
                                    <Card
                                          classCard="home-card"
                                          img="https://cdn.pixabay.com/photo/2017/01/30/23/51/bus-2022381_1280.png"
                                          classImg="home-card-img"
                                          classText="text-description"
                                          title="Bus Routing Management"
                                          description="For management process of the bus routing and use for caculate payment to bus routing or car owner.  "
                                          url="./home"
                                    />
                              </div>
                              <div className="col-md card-home">
                                    <Card
                                          classCard="home-card"
                                          img="https://docs.sympoq.com/images/user-management.png"
                                          classImg="home-card-img"
                                          classText="text-description"
                                          title="Role Manager Setup"
                                          description="Setup role for manager such as assign shift, assign O.T. Plan, Approve TimeSheet, Approve Payable, etc."
                                          url="./home"
                                    />

                              </div>
                              <div className="col-md card-home">
                                    <Card
                                          classCard="home-card"
                                          img="https://cdn0.iconfinder.com/data/icons/seo-marketing-cute-style-vol-1/52/admin__administration__setting__user__gear__account__profile-512.png"
                                          classImg="home-card-img"
                                          classText="text-description"
                                          title="Administration Setting"
                                          description="For management master data of system such as SetID, Interface setting, Others system setting etc."
                                          url="./home"
                                    />
                              </div>
                              <div className="col-md card-home">
                                    <Card
                                          classCard="home-card"
                                          img="https://d3075pyijv0bbs.cloudfront.net/marketplace_8/f10ab040b17c623a55ccd6c5c3f61ad85950a82f/logos/4deed9bcee8ff6ec4186709f7457b1cf4d7e0d9a_300x300.png"
                                          classImg="home-card-img"
                                          classText="text-description"
                                          title="Master Data Setting"
                                          description="For setup master data in the Alltime system such as Workgroup, Shift, TRC, Holiday, Others master data etc."
                                          url="./home"
                                    />
                              </div>
                        </div>
                  </div>
            </>
      )
}
Home.getHeader = function getHeader() {
      return "Home Page";
}
export default Home;