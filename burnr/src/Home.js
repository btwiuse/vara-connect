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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ib21lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQXFCLE1BQU0sT0FBTyxDQUFBO0FBQzlELE9BQU8sRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLEdBQUcsRUFDSCxVQUFVLEVBQ1YsZ0JBQWdCLEdBQ2pCLE1BQU0sbUJBQW1CLENBQUE7QUFDMUIsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUE7QUFDMUQsT0FBTyxpQkFBaUIsTUFBTSxrQ0FBa0MsQ0FBQTtBQUNoRSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGNBQWMsQ0FBQTtBQUVyQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUE7QUFFckQsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLFlBQVksRUFBRTtRQUNaLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0tBQ3hDO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLHFCQUFxQjtRQUM3QixTQUFTLEVBQUUsUUFBUTtRQUNuQixPQUFPLEVBQUUsTUFBTTtRQUNmLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0NBQ0YsQ0FBQyxDQUFDLENBQUE7QUFPSCxNQUFNLElBQUksR0FBNkIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQVMsRUFBRSxFQUFFO0lBQ3BFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFD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