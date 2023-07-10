var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom"; // Pages
import { makeStyles } from "@material-ui/core/styles";
import { ApiContext, AccountContext } from "./utils/contexts";
import { useApiCreate, useLocalStorage } from "./hooks";
import { createLocalStorageAccount } from "./utils/utils";
import { NETWORK } from "./utils/constants";
import Home from "./Home";
import { NavFooter, ThemeToggleProvider, Head, ErrorBoundary, BurnrBG, BurnrDivider, } from "./components";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
    },
    main: {
        width: "100%",
        maxWidth: `${theme.spacing(3) + 650}px`,
        padding: theme.spacing(2),
        flex: 1,
    },
}));
const App = ({ className = "" }) => {
    const api = useApiCreate();
    const classes = useStyles();
    const [endpoint, setEndpoint] = useLocalStorage("endpoint");
    if (!endpoint) {
        setEndpoint(NETWORK.id);
    }
    const [localStorageAccount, setLocalStorageAccount] = useLocalStorage(endpoint === null || endpoint === void 0 ? void 0 : endpoint.toLowerCase());
    const [account, setCurrentAccount] = useState({});
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const callSetters = () => __awaiter(void 0, void 0, void 0, function* () {
            if (yield api.isReady) {
                if (!localStorageAccount) {
                    const userTmp = createLocalStorageAccount();
                    setLocalStorageAccount(JSON.stringify(userTmp));
                    setCurrentAccount(userTmp);
                }
                else {
                    setCurrentAccount(JSON.parse(localStorageAccount));
                }
                setLoader(false);
            }
        });
        api && callSetters();
    }, [localStorageAccount, setLocalStorageAccount, api]);
    return (_jsx(BrowserRouter, { children: _jsx("div", { className: `${classes.root} ${className}`, children: _jsx(ThemeToggleProvider, { children: _jsx(AccountContext.Provider, { value: { account, setCurrentAccount }, children: _jsxs(ErrorBoundary, { children: [_jsx("main", { className: classes.main, children: _jsxs(ApiContext.Provider, { value: api, children: [_jsx(Head, {}), _jsx(BurnrDivider, {}), _jsx(Home, { account: account, loader: loader }), _jsx(BurnrBG, {})] }) }), _jsx(NavFooter, {})] }) }) }) }) }));
};
export default App;
//# sourceMappingURL=App.js.map