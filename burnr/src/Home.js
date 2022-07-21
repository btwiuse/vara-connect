import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Paper, IconButton, Box, makeStyles, CircularProgress, } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { NavTabs, AccountCard, BalanceValue, BurnrDivider, AccountMenu, } from "./components";
import { BalanceVisibleContext } from "./utils/contexts";
import { validateLocalstorage } from "./utils/utils";
import { useBalance, useLocalStorage } from "./hooks";
const useStyles = makeStyles((theme) => ({
    paperAccount: {
        borderTopLeftRadius: theme.spacing(0.5),
    },
    loadingPaper: {
        height: "calc(100vh - 150px)",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));
const Home = ({ account, loader }) => {
    const [localBalance, setLocalBalance] = useLocalStorage("balanceVisibility");
    const [balanceVisibility, setBalanceVisibility] = useState(localBalance !== "false");
    const classes = useStyles();
    const balanceArr = useBalance((account === null || account === void 0 ? void 0 : account.userAddress) || "");
    const balance = balanceArr[1];
    const unit = balanceArr[3];
    useEffect(() => {
        validateLocalstorage();
    }, []);
    useEffect(() => {
        setLocalBalance(balanceVisibility ? "true" : "false");
    }, [balanceVisibility, setLocalBalance]);
    return loader ? (_jsx(Paper, Object.assign({ className: classes.loadingPaper }, { children: _jsx(CircularProgress, {}) }))) : (_jsxs(BalanceVisibleContext.Provider, Object.assign({ value: { balanceVisibility, setBalanceVisibility } }, { children: [_jsx(Paper, Object.assign({ square: true, className: classes.paperAccount }, { children: _jsxs(Box, Object.assign({ paddingY: 1, paddingX: 2, display: "flex", alignItems: "center" }, { children: [_jsx(Box, Object.assign({ width: "50%", display: "flex" }, { children: (account === null || account === void 0 ? void 0 : account.userAddress) && (_jsxs(_Fragment, { children: [_jsx(AccountCard, { account: {
                                            address: account === null || account === void 0 ? void 0 : account.userAddress,
                                            name: account === null || account === void 0 ? void 0 : account.userName,
                                        } }), _jsx(AccountMenu, {})] })) })), _jsxs(Box, Object.assign({ width: "50%", display: "flex", alignItems: "center" }, { children: [_jsx(BalanceValue, { isVisible: balanceVisibility, unit: unit, value: balance, size: "large", style: { width: "100%", justifyContent: "flex-end" } }), _jsx(IconButton, Object.assign({ style: { borderRadius: 4 }, onClick: () => setBalanceVisibility(!balanceVisibility) }, { children: balanceVisibility ? _jsx(VisibilityIcon, {}) : _jsx(VisibilityOffIcon, {}) }))] }))] })) })), _jsx(BurnrDivider, {}), _jsx(NavTabs, {})] })));
};
export default Home;
//# sourceMappingURL=Home.js.map