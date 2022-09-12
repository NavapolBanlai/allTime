import { useState } from "react";
import { Button } from "react-bootstrap";
import Input from "../../components/global/input";
import InputDropdown from "../../components/global/inputDropDown";
import useLoginPage from "../../hooks/loingPage";
const Login = () => {
      const { inputUserName, inputPassword, loginError, language, handleSubmit } = useLoginPage()
      const [admin, setAdmin] = useState(false)

      return (
            <>
                  <div id="login-wrapper">
                        <div className="container-fluid text-center" id="login-card">
                              <div className="row" id="login-row">
                                    <div className="col-4 d-none d-md-flex p-0 align-items-center justify-content-center" id="login-container-left">
                                          <img src="https://www.cpfworldwide.com/storage/news/effmuk9ka24xsad1ideh6htcex5zynvxmrtlt8op.jpg" className="img-fluid " alt="Responsive image" id="login-img-left" />
                                    </div>
                                    <div className="col-12 col-md-8 mt-auto mb-auto" id="login-container-right">
                                          <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" className="img-fluid" alt="Responsive image" id="login-img-right" />
                                          <form onSubmit={handleSubmit}>

                                                <Input {...inputUserName.props} placeholder="User ID" className="login-input" />
                                                <Input {...inputPassword.props} placeholder="Password" className="login-input" />

                                                <InputDropdown options={language.option} className="login-input" {...language.props} />
                                                {loginError && (<h1>
                                                      <div className="row">
                                                            <div className="col p-0 text-center">
                                                                  <span id="textLoginFeedback" className="text-danger">
                                                                        {loginError}
                                                                  </span>
                                                            </div>
                                                      </div>
                                                </h1>)}
                                                <br />
                                                <Button type="submit" className="login-button">
                                                      Login
                                                </Button>
                                          </form>
                                    </div>
                              </div>

                        </div>
                  </div>
            </>
      )
}

export default Login;