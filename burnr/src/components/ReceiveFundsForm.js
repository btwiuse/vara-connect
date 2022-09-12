import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { Box } from "@material-ui/core";
import QRCode from "qrcode.react";
import { AccountContext } from "../utils/contexts";
const ReceiveFundsForm = () => {
    const { account } = useContext(AccountContext);
    return (_jsx(Box, Object.assign({ display: "flex", justifyContent: "center" }, { children: _jsx(QRCode, { value: account.userAddress, size: 400, includeMargin: true }) })));
};
export default ReceiveFundsForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjZWl2ZUZ1bmRzRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1JlY2VpdmVGdW5kc0Zvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXFCLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUVyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDdkMsT0FBTyxNQUFNLE1BQU0sY0FBYyxDQUFBO0FBQ2pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUVsRCxNQUFNLGdCQUFnQixHQUFzQixHQUFHLEVBQUU7SUFDL0MsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUM5QyxPQUFPLENBQ0wsS0FBQyxHQUFHLGtCQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLFFBQVEsZ0JBQ3pDLEtBQUMsTUFBTSxJQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLElBQUksR0FBSSxJQUNsRSxDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLGdCQUFnQixDQUFBIn0=