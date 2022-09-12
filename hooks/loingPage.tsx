import Router, { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { useContext, useEffect, useMemo, useState } from "react";
import AuthContext from '../store/authContext'
import useCountdown from '../utilities/useCountdown'

const useLoginPage = () => {
      const {
            register,
            handleSubmit,
            formState: { errors, submitCount },
            reset
      } = useForm({ mode: "onChange" });

      const onDelayComplete = () => {
            reset({}, { keepValues: true, keepSubmitCount: false });
            setLoginMessage(null)
      }

      const [loginMessage, setLoginMessage] = useState<string | null>(null);
      const authCtx = useContext(AuthContext);
      
      const { countdown: delayCountdown, start: startDelayLogin } = useCountdown(onDelayComplete);
      const languageOption = useMemo(() => [
            { value: "en_GB", label: "English" },
            { value: "th_TH", label: "ไทย" },
      ], [])

      useEffect(() => {
            if (delayCountdown > 0) {
                  setLoginMessage("Please try again in " + delayCountdown)
            }
      }, [delayCountdown])

      const handleSubmitLogin = async (data: any) => {
            if (submitCount < 4) {
                  if (data?.userName && data?.password) {
                        authCtx.setUserInfo()
                        Router.push('./home')
                  }
                  else {
                        setLoginMessage("No")
                  }
            }
            else {
                  startDelayLogin(10)
            }
      }

      return {
            inputUserName: {
                  props: {
                        ...register('userName',
                              {
                                    maxLength: {
                                          value: 2,
                                          message: 'error 1' // JS only: <p>error message</p> TS only support string
                                    }
                              })
                  },
                  error: errors.userName
            },
            inputPassword: {
                  props: { ...register('password') },
                  error: errors.password
            },
            language: {
                  props: {
                        value: languageOption.find((option) => option.value === authCtx.language),
                        onChange: (option: any) => authCtx.changeLanguage(option.value)
                  },
                  option: languageOption
            },
            loginError: loginMessage,
            handleSubmit: handleSubmit(handleSubmitLogin),
      }

}
export default useLoginPage;