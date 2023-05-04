import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useContext } from "react";
import { grey } from "@material-ui/core/colors";
import { Typography, makeStyles, createStyles, IconButton, ListItem, Menu, MenuItem, } from "@material-ui/core";
import { BurnrDivider } from "../components";
import { AccountContext } from "../utils/contexts";
import { openInNewTab, downloadFile } from "../utils/utils";
import { POLKA_ACCOUNT_ENDPOINTS } from "../utils/constants";
import { useLocalStorage } from "../hooks";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => createStyles({
    menu: {
        "& .MuiListItem-dense:focus": {
            outline: "transparent !important",
        },
        "& hr": {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            backgroundColor: theme.palette.grey[200],
        },
    },
}));
const { polkastats, polkascan } = POLKA_ACCOUNT_ENDPOINTS;
const AccountMenu = () => {
    var _a;
    const classes = useStyles();
    const [endpoint] = useLocalStorage("endpoint");
    const minEndpoint = (_a = endpoint === null || endpoint === void 0 ? void 0 : endpoint.split("-")[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const [polkastatsUri] = useState(`https://${minEndpoint}.${polkastats}`);
    const [polkascanUri] = useState(`https://${polkascan}/${minEndpoint}`);
    const { account } = useContext(AccountContext);
    const { userAddress, userJson, userSeed } = account;
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, Object.assign({ onClick: handleClick }, { children: _jsx(ExpandMoreIcon, { style: { color: grey[500] } }) })), _jsxs(Menu, Object.assign({ transformOrigin: { vertical: -40, horizontal: "left" }, anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: () => setAnchorEl(null), className: classes.menu }, { children: [_jsx(ListItem, Object.assign({ dense: true, autoFocus: false, selected: false }, { children: _jsx(Typography, Object.assign({ variant: "overline" }, { children: "Block explorers" })) })), _jsx(MenuItem, Object.assign({ onClick: () => openInNewTab(polkascanUri) }, { children: "Polkascan" })), _jsx(MenuItem, Object.assign({ onClick: () => openInNewTab(polkastatsUri) }, { children: "Polkastats" })), _jsx(BurnrDivider, {}), _jsx(ListItem, Object.assign({ dense: true }, { children: _jsx(Typography, Object.assign({ variant: "overline" }, { children: "Export" })) })), _jsx(MenuItem, Object.assign({ onClick: () => downloadFile(userAddress, JSON.stringify(userJson), "json") }, { children: "JSON file" })), _jsx(MenuItem, Object.assign({ onClick: () => downloadFile(userAddress, userSeed, "txt") }, { children: "Seed Phrase" }))] }))] }));
};
export default AccountMenu;
//# sourceMappingURL=AccountMenu.js.map