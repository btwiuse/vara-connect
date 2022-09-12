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
    return (_jsx(BrowserRouter, { children: _jsx("div", Object.assign({ className: `${classes.root} ${className}` }, { children: _jsx(ThemeToggleProvider, { children: _jsx(AccountContext.Provider, Object.assign({ value: { account, setCurrentAccount } }, { children: _jsxs(ErrorBoundary, { children: [_jsx("main", Object.assign({ className: classes.main }, { children: _jsxs(ApiContext.Provider, Object.assign({ value: api }, { children: [_jsx(Head, {}), _jsx(BurnrDivider, {}), _jsx(Home, { account: account, loader: loader }), _jsx(BurnrBG, {})] })) })), _jsx(NavFooter, {})] }) })) }) })) }));
};
export default App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBa0IsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUEsQ0FBQyxRQUFRO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBRTdELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFBO0FBQ3ZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFHM0MsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFBO0FBRXpCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLElBQUksRUFDSixhQUFhLEVBQ2IsT0FBTyxFQUNQLFlBQVksR0FDYixNQUFNLGNBQWMsQ0FBQTtBQU1yQixNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixhQUFhLEVBQUUsUUFBUTtRQUN2QixVQUFVLEVBQUUsUUFBUTtRQUNwQixTQUFTLEVBQUUsT0FBTztLQUNuQjtJQUNELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxNQUFNO1FBQ2IsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUk7UUFDdkMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksRUFBRSxD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