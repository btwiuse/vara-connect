import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, } from "react";
import { Button, Grid, TextField, Box, InputAdornment } from "@material-ui/core";
import { useApi } from "../hooks";
import BN from "bn.js";
const InputFunds = ({ total, setAmount, currency, hidePercentages = false, }) => {
    const api = useApi();
    const [showValue, setShowValue] = useState("");
    const handleChange = (e, fromButtons = false) => {
        var _a, _b;
        if (((_a = e.currentTarget.value) === null || _a === void 0 ? void 0 : _a.length) > 6)
            return;
        if (fromButtons) {
            const calcNewTotal = parseFloat(e.currentTarget.value) *
                parseInt(new BN(total).toString());
            const truncDec = Math.trunc(calcNewTotal);
            setShowValue(calcNewTotal.toString() !== ""
                ? (truncDec / Math.pow(10, api.registry.chainDecimals[0])).toFixed(4)
                : "");
            setAmount(truncDec.toString());
            (_b = document.getElementById("SendFundsAmountField")) === null || _b === void 0 ? void 0 : _b.focus();
        }
        else {
            const value = e.currentTarget.value;
            const v = parseFloat(value) * Math.pow(10, api.registry.chainDecimals[0]);
            setShowValue(value !== "" ? value : "");
            setAmount(value !== "" ? v.toString() : "0");
        }
    };
    // @TODO focus/blur TextField and %Buttons at the same time in a React way
    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        setFocus(!focus);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Box, Object.assign({ marginBottom: 1 }, { children: _jsx(TextField, { id: "SendFundsAmountField", value: showValue, label: "Amount", fullWidth: true, type: "number", placeholder: "0", variant: "outlined", onChange: handleChange, onFocus: handleFocus, onBlur: handleFocus, InputProps: {
                        fullWidth: true,
                        startAdornment: (_jsx(InputAdornment, Object.assign({ position: "start" }, { children: currency }))),
                    } }) })), !hidePercentages && (_jsx(Grid, Object.assign({ container: true, spacing: 1 }, { children: [
                    { label: "25%", value: 0.25 },
                    { label: "50%", value: 0.5 },
                    { label: "75%", value: 0.75 },
                    { label: "100%", value: 1 },
                ].map((item, index) => {
                    return (_jsx(Grid, Object.assign({ item: true }, { children: _jsx(Button, Object.assign({ onClick: (e) => handleChange(e, true), variant: "outlined", color: focus ? "primary" : "default", size: "small", value: item.value }, { children: item.label })) }), index));
                }) })))] }));
};
export default InputFunds;
//# sourceMappingURL=InputFunds.js.map