import Router from "next/router";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface AuthContextInterface {
    language: string
    initialized: boolean | null
    changeLanguage: Function
    isLoggedIn: Function
    singOut: Function
    setUserInfo: Function
}
const AuthContext = React.createContext<AuthContextInterface>({
    language: "",
    initialized: null,
    changeLanguage: () => { },
    isLoggedIn: () => { },
    singOut: () => { },
    setUserInfo: () => [],

});
export const AuthContextProvider = (props: any) => {
    const getInitialLanguage = () => {
        if (typeof window !== "undefined") {
            const fromStorage = window.localStorage.getItem("language");
            if (fromStorage) {
                return fromStorage;
            }
        }
        return "en_GB";
    };
    const [language, setLanguage] = useState(getInitialLanguage());
    const [initialized, setInitialized] = useState<boolean | null>(true);

    const changeLanguageHandler = (language: string) => {
        language
            ? setLanguage(language)
            : setLanguage((prevState) => (prevState === "en_GB" ? "th_TH" : "en_GB"));
    }

    const isLoggedIn = () => {
        // console.log(!!window.sessionStorage.getItem("session-id"))s  

        return !!window.sessionStorage.getItem("session-id")
    };

    const singOut = () => {
        setInitialized(false);
        window.sessionStorage.removeItem("session-id");
        return Router.push('./login')
    };


    const setUserInfo = () => {
        window.sessionStorage.setItem("session-id", uuidv4());
        setInitialized(true);
    };

    const contextValue = {
        language: language,
        initialized: initialized,
        changeLanguage: changeLanguageHandler,
        isLoggedIn: isLoggedIn,
        singOut: singOut,
        setUserInfo: setUserInfo
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
