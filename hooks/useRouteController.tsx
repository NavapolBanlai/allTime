import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "../store/authContext";

const useRouteController = (page: any) => {
    const authCtx = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        const chackPages = async () => {
            if (!page.isPublic) {
                if (!authCtx.initialized) {
                    console.log("[routeController] redirect to callback page, returnUrl = ");
                    await router.push("./login");
                }
            }
        };
        chackPages();
    }, []);
};
export default useRouteController;
