import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { Grid, Button, makeStyles, createStyles, } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { AccountContext } from "../utils/contexts";
import { createLocalStorageAccount } from "../utils/utils";
import { useApi, useBalance, useLocalStorage } from "../hooks";
const useStyles = makeStyles((theme) => createStyles({
    redButton: {
        backgroundColor: theme.palette.error.main,
        color: "white",
        marginTop: theme.spacing(12),
        "&:hover": {
            backgroundColor: theme.palette.error.light,
        },
    },
}));
const AccountBurn = () => {
    var _a;
    const classes = useStyles();
    const api = useApi();
    const chainTokens = api.registry.chainTokens;
    const [endpoint] = useLocalStorage("endpoint");
    const minEndpoint = (_a = endpoint === null || endpoint === void 0 ? void 0 : endpoint.split("-")[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const [, setLclStorage] = useLocalStorage(minEndpoint);
    const { account, setCurrentAccount } = useContext(AccountContext);
    const balance = useBalance(account.userAddress);
    const burnAndCreate = () => {
        if (!balance[2] &&
            !window.confirm(`Burn keys from account with ${balance[0]} ${chainTokens.join("")}?`)) {
            return;
        }
        localStorage.removeItem(minEndpoint);
        const userTmp = createLocalStorageAccount();
        setLclStorage(JSON.stringify(userTmp));
        setCurrentAccount(userTmp);
    };
    return (_jsx(Grid, Object.assign({ container: true, justify: "center", alignItems: "center" }, { children: _jsx(Grid, Object.assign({ item: true }, { children: _jsx(Button, Object.assign({ variant: "contained", size: "large", className: classes.redButton, startIcon: _jsx(WhatshotIcon, {}), onClick: () => burnAndCreate() }, { children: "Burn" })) })) })));
};
export default AccountBurn;
//# sourceMappingURL=AccountBurn.js.map