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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY2NvdW50TWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBcUIsUUFBUSxFQUFFLFVBQVUsRUFBYyxNQUFNLE9BQU8sQ0FBQTtBQUUzRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMEJBQTBCLENBQUE7QUFDL0MsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBRVYsWUFBWSxFQUNaLFVBQVUsRUFDVixRQUFRLEVBQ1IsSUFBSSxFQUNKLFFBQVEsR0FDVCxNQUFNLG1CQUFtQixDQUFBO0FBQzFCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUUxQyxPQUFPLGNBQWMsTUFBTSwrQkFBK0IsQ0FBQTtBQUUxRCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUM1QyxZQUFZLENBQUM7SUFDWCxJQUFJLEVBQUU7UUFDSiw0QkFBNEIsRUFBRTtZQUM1QixPQUFPLEVBQUUsd0JBQXdCO1NBQ2xDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLFlBQVksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5QixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3pDO0tBQ0Y7Q0FDRixDQUFDLENBQ0gs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