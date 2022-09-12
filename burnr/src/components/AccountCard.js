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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudENhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY2NvdW50Q2FyZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBcUIsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQ25ELE9BQU8sU0FBUyxNQUFNLDJCQUEyQixDQUFBO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQzdELE9BQU8sUUFBd0IsTUFBTSx3QkFBd0IsQ0FBQTtBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFPaEQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFpQixFQUFFLEVBQUU7SUFDbEMsT0FBTyxLQUFDLFFBQVEsa0JBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUMsUUFBUSxJQUFLLEtBQUssRUFBSSxDQUFBO0FBQy9ELENBQUMsQ0FBQTtBQUVELE1BQU0sV0FBVyxHQUE2QixDQUFDLEVBQzdDLE9BQU8sRUFDUCxhQUFhLEdBQ1AsRUFBRSxFQUFFO0lBQ1YsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxRQUFRLENBQVUsS0FBSyxDQUFDLENBQUE7SUFDNUQsT0FBTyxDQUNMLDhCQUNFLEtBQUMsUUFBUSxrQkFDUCxZQUFZLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsRUFDdkQsSUFBSSxFQUFFLFVBQVUsRUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxFQUN0QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxnQkFFbkMsS0FBQyxLQUFLLGtCQUFDLFFBQVEsRUFBQyxTQUFTLDZCQUFnQixJQUNoQyxFQUVYLE1BQUMsR0FBRyxrQkFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLGlCQUNyQyxLQUFDLFNBQVMsSUFDUixJQUFJLEVBQUUsRUFBRSxFQUNSLEtBQUssRUFBQyxVQUFVLEVBQ2hCLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxFQUN0QixNQUFNLEVBQUUsR0FBRyxFQUFFOzRCQUNYLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTs0QkFDbkIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTt3QkFDbEMsQ0FBQyxHQUNELEVBQ0YsTUFBQyxHQUFHLGtCQUNGLE1BQU0sRUFBRSxFQUFFLEVBQ1YsT0FBTyxFQUFDLE1BQU0sRUFDZCxhQUFhLEVBQUMsUUFBUSxFQUN0QixjQUFjLEVBQUMsUUFBUSxFQUN2QixFQUFFLEVBQUUsQ0FBQyxpQkFFSixPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUN0QixLQUFDLFVBQVUsa0JBQUMsT0FBTyxFQUFDLElBQUksZ0JBQUUsT0FBTyxDQUFDLElBQUksSUFBYyxDQUNyRCxFQUNELEtBQUMsVUFBVSxrQkFBQyxPQUFPLEVBQUMsV0FBVyxnQkFDNUIsYUFBYSxLQUFLLE1BQU07b0NBQ3ZCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTztvQ0FDakIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0NBQzNCLEtBQUs7d0NBQ0wsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDMUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ3ZCLElBQ00sS0FDVCxLQUNGLElBQ0wsQ0FDSixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsZUFBZSxXQUFXLENBQUEifQ==