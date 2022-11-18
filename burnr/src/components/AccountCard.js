import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Identicon from "@polkadot/react-identicon";
import { Typography, Snackbar, Box } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { copyToClipboard } from "../utils/utils";
const Alert = (props) => {
    return _jsx(MuiAlert, Object.assign({ elevation: 6, variant: "filled" }, props));
};
const AccountCard = ({ account, addressFormat, }) => {
    const [showCopied, setShowCopied] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(Snackbar, Object.assign({ anchorOrigin: { vertical: "top", horizontal: "center" }, open: showCopied, autoHideDuration: 2000, onClose: () => setShowCopied(false) }, { children: _jsx(Alert, Object.assign({ severity: "success" }, { children: "Copied!" })) })), _jsxs(Box, Object.assign({ display: "flex", alignItems: "center" }, { children: [_jsx(Identicon, { size: 32, theme: "polkadot", value: account.address, onCopy: () => {
                            setShowCopied(true);
                            copyToClipboard(account.address);
                        } }), _jsxs(Box, Object.assign({ height: 32, display: "flex", flexDirection: "column", justifyContent: "center", ml: 1 }, { children: [account.name !== "" && (_jsx(Typography, Object.assign({ variant: "h4" }, { children: account.name }))), _jsx(Typography, Object.assign({ variant: "subtitle2" }, { children: addressFormat === "Full"
                                    ? account.address
                                    : account.address.slice(0, 4) +
                                        "..." +
                                        account.address.slice(account.address.length - 4, account.address.length) }))] }))] }))] }));
};
export default AccountCard;
//# sourceMappingURL=AccountCard.js.map