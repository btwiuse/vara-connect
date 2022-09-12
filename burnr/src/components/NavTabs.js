var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useState, } from "react";
import { Tabs, Tab, Typography, Box, Paper, makeStyles, } from "@material-ui/core";
import SwapHorizSharpIcon from "@material-ui/icons/SwapHorizSharp";
import CallMadeSharpIcon from "@material-ui/icons/CallMadeSharp";
import CallReceivedSharpIcon from "@material-ui/icons/CallReceivedSharp";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import { SendFundsForm, ReceiveFundsForm, BurnrDivider, HistoryTable, } from "../components";
import { useApi, useBalance, useLocalStorage } from "../hooks";
import { AccountContext } from "../utils/contexts";
import { createLocalStorageAccount } from "../utils/utils";
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "calc(100vh - 265px)",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        [theme.breakpoints.down("sm")]: {
            minHeight: "calc(100vh - 320px)",
        },
    },
    rootHeading: {
        marginBottom: theme.spacing(3),
    },
    tabBurn: {
        "& svg, & .MuiTab-wrapper": {
            color: theme.palette.error.main,
        },
    },
    rootTabs: {
        "& .MuiTab-root": Object.assign(Object.assign({ minHeight: theme.spacing(8), padding: 0 }, theme.typography.overline), { lineHeight: 1 }),
    },
}));
const TabPanel = (_a) => {
    var { children, value, index } = _a, props = __rest(_a, ["children", "value", "index"]);
    return (_jsx("div", Object.assign({ hidden: value !== index, id: `tabpanel-${index}` }, props, { children: value === index && _jsx(Box, Object.assign({ p: 2 }, { children: children })) })));
};
const NavTabs = () => {
    var _a;
    const classes = useStyles();
    const [value, setValue] = useState(1);
    const api = useApi();
    const [endpoint] = useLocalStorage("endpoint");
    const minEndpoint = (_a = endpoint === null || endpoint === void 0 ? void 0 : endpoint.split("-")[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const { account, setCurrentAccount } = useContext(AccountContext);
    const balance = useBalance(account.userAddress);
    const handleChange = (event, newValue) => {
        if (newValue === 0) {
            if (!balance[2] &&
                !window.confirm(`Burn keys from account with ${balance[0].toString()} ${api.registry.chainTokens.toString()}?`)) {
                return;
            }
            localStorage.removeItem(minEndpoint);
            const userTmp = createLocalStorageAccount();
            setCurrentAccount(userTmp);
            return;
        }
        setValue(newValue);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Paper, Object.assign({ square: true }, { children: _jsxs(Tabs, Object.assign({ value: value, onChange: handleChange, variant: "fullWidth", className: classes.rootTabs }, { children: [_jsx(Tab, { label: "Burn Account", icon: _jsx(WhatshotSharpIcon, { fontSize: "small" }), className: classes.tabBurn }), _jsx(Tab, { label: "Receipts", icon: _jsx(SwapHorizSharpIcon, { fontSize: "small" }) }), _jsx(Tab, { label: "Send", icon: _jsx(CallMadeSharpIcon, { fontSize: "small" }) }), _jsx(Tab, { label: "Receive", icon: _jsx(CallReceivedSharpIcon, { fontSize: "small" }) })] })) })), _jsx(BurnrDivider, {}), _jsxs(Paper, Object.assign({ className: classes.root }, { children: [_jsxs(TabPanel, Object.assign({ value: value, index: 1 }, { children: [_jsx(Typography, Object.assign({ variant: "h2", className: classes.rootHeading }, { children: "Transaction History" })), _jsx(HistoryTable, {})] })), _jsxs(TabPanel, Object.assign({ value: value, index: 2 }, { children: [_jsx(Typography, Object.assign({ variant: "h2", className: classes.rootHeading }, { children: "Send Funds" })), _jsx(SendFundsForm, {})] })), _jsxs(TabPanel, Object.assign({ value: value, index: 3 }, { children: [_jsx(Typography, Object.assign({ variant: "h2", className: classes.rootHeading }, { children: "Receive Funds" })), _jsx(ReceiveFundsForm, {})] }))] }))] }));
};
export default NavTabs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2VGFicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdlRhYnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFFTCxVQUFVLEVBQ1YsUUFBUSxHQUdULE1BQU0sT0FBTyxDQUFBO0FBQ2QsT0FBTyxFQUNMLElBQUksRUFDSixHQUFHLEVBQ0gsVUFBVSxFQUNWLEdBQUcsRUFDSCxLQUFLLEVBQ0wsVUFBVSxHQUVYLE1BQU0sbUJBQW1CLENBQUE7QUFDMUIsT0FBTyxrQkFBa0IsTUFBTSxtQ0FBbUMsQ0FBQTtBQUNsRSxPQUFPLGlCQUFpQixNQUFNLGtDQUFrQyxDQUFBO0FBQ2hFLE9BQU8scUJBQXFCLE1BQU0sc0NBQXNDLENBQUE7QUFDeEUsT0FBTyxpQkFBaUIsTUFBTSxrQ0FBa0MsQ0FBQTtBQUVoRSxPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFRMUQsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsb0JBQW9CLEVBQUUsQ0FBQztRQUN2QixtQkFBbUIsRUFBRSxDQUFDO1FBRXRCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUM5QixTQUFTLEVBQUUscUJBQXFCO1NBQ2pDO0tBQ0Y7SUFDRCxXQUFXLEVBQUU7UUFDWCxZQUFZLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDL0I7SUFDRCxPQUFPLEVBQUU7UUFDUCwwQkFBMEIsRUFBRTtZQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSTtTQUNoQztLQUNGO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsZ0JBQWdCLGdDQUNkLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUMzQixPQUFPLEVBQUUsQ0FBQyxJQUNQLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxLQUM1QixVQUFVLEVBQUUsQ0FBQyxHQUNkO0tBQ0Y7Q0FDRixDQUFDLENBQUMsQ0FBQTtBQUVILE1BQU0sUUFBUSxHQUFxQyxDQUFDLEVBS3BDLEVBQUUsRUFBRTtRQUxnQyxFQUNsRCxRQUFRLEVBQ1IsS0FBSyxFQUNMLEtBQUssT0FFUyxFQURYLEtBQUssY0FKMEMsOEJBS25ELENBRFM7SUFFUixPQUFPLENBQ0wsNEJBQUssTUFBTSxFQUFFLEtBQUssS0FBSyxLQUFLLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxFQUFFLElBQU0sS0FBSyxjQUM3RCxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUMsR0FBRyxrQkFBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBRyxRQUFRLElBQU8sSUFDM0MsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsTUFBTSxPQUFPLEdBQXNCLEdBQUcsRUFBRTs7SUFDdEMsTUFBTSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUE7SUFDM0IsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFckMsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUE7SUFDcEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM5QyxNQUFNLFdBQVcsR0FBRyxNQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQywwQ0FBRSxXQUFXLEVBQUUsQ0FBQTtJQUMxRCxNQUFNLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLEdBQ2xDLFVBQVUsQ0FBbUIsY0FBYyxDQUFDLENBQUE7SUFDOUMsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUUvQyxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQTJCLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1FBQ3JFLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtZQUNsQixJQUNFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ2IsK0JBQStCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUMvRixFQUNEO2dCQUNBLE9BQU07YUFDUDtZQUNELFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDcEMsTUFBTSxPQUFPLEdBQUcseUJBQXlCLEVBQUUsQ0FBQTtZQUMzQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUMxQixPQUFNO1NBQ1A7UUFDRCxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDcEIsQ0FBQyxDQUFBO0lBRUQsT0FBTyxDQUNMLDhCQUNFLEtBQUMsS0FBSyxrQkFBQyxNQUFNLHNCQUNYLE1BQUMsSUFBSSxrQkFDSCxLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxZQUFZLEVBQ3RCLE9BQU8sRUFBQyxXQUFXLEVBQ25CLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxpQkFFM0IsS0FBQyxHQUFHLElBQ0YsS0FBSyxFQUFDLGNBQWMsRUFDcEIsSUFBSSxFQUFFLEtBQUMsaUJBQWlCLElBQUMsUUFBUSxFQUFDLE9BQU8sR0FBRyxFQUM1QyxTQUFTLEVBQUUsT0FBTyxDQUFDLE9BQU8sR0FDMUIsRUFDRixLQUFDLEdBQUcsSUFDRixLQUFLLEVBQUMsVUFBVSxFQUNoQixJQUFJLEVBQUUsS0FBQyxrQkFBa0IsSUFBQyxRQUFRLEVBQUMsT0FBTyxHQUFHLEdBQzdDLEVBQ0YsS0FBQyxHQUFHLElBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUUsS0FBQyxpQkFBaUIsSUFBQyxRQUFRLEVBQUMsT0FBTyxHQUFHLEdBQUksRUFDbEUsS0FBQyxHQUFHLElBQ0YsS0FBSyxFQUFDLFNBQVMsRUFDZixJQUFJLEVBQUUsS0FBQyxxQkFBcUIsSUFBQyxRQUFRLEVBQUMsT0FBTyxHQUFHLEdBQ2hELEtBQ0csSUFDRCxFQUVSLEtBQUMsWUFBWSxLQUFHLEVBRWhCLE1BQUMsS0FBSyxrQkFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksaUJBQzVCLE1BQUMsUUFBUSxrQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLGlCQUM5QixLQUFDLFVBQVUsa0JBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcseUNBRTFDLEVBQ2IsS0FBQyxZQUFZLEtBQUcsS0FDUCxFQUNYLE1BQUMsUUFBUSxrQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLGlCQUM5QixLQUFDLFVBQVUsa0JBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsZ0NBRTFDLEVBQ2IsS0FBQyxhQUFhLEtBQUcsS0FDUixFQUNYLE1BQUMsUUFBUSxrQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLGlCQUM5QixLQUFDLFVBQVUsa0JBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsbUNBRTFDLEVBQ2IsS0FBQyxnQkFBZ0IsS0FBRyxLQUNYLEtBQ0wsSUFDUCxDQUNKLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLE9BQU8sQ0FBQSJ9