import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { Box } from "@material-ui/core";
import QRCode from "qrcode.react";
import { AccountContext } from "../utils/contexts";
const ReceiveFundsForm = () => {
    const { account } = useContext(AccountContext);
    return (_jsx(Box, { display: "flex", justifyContent: "center", children: _jsx(QRCode, { value: account.userAddress, size: 400, includeMargin: true }) }));
};
export default ReceiveFundsForm;
//# sourceMappingURL=ReceiveFundsForm.js.map