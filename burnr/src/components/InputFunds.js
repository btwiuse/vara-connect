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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXRGdW5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0lucHV0RnVuZHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsUUFBUSxHQUtULE1BQU0sT0FBTyxDQUFBO0FBQ2QsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUNoRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQVN0QixNQUFNLFVBQVUsR0FBNkIsQ0FBQyxFQUM1QyxLQUFLLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEdBQUcsS0FBSyxHQUNqQixFQUFFLEVBQUU7SUFDVixNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtJQUNwQixNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBUyxFQUFFLENBQUMsQ0FBQTtJQUV0RCxNQUFNLFlBQVksR0FBRyxDQUFDLENBQTJCLEVBQUUsV0FBVyxHQUFHLEtBQUssRUFBRSxFQUFFOztRQUN4RSxJQUFJLENBQUEsTUFBQyxDQUFDLENBQUMsYUFBbUMsQ0FBQyxLQUFLLDBDQUFFLE1BQU0sSUFBRyxDQUFDO1lBQUUsT0FBTTtRQUNwRSxJQUFJLFdBQVcsRUFBRTtZQUNmLE1BQU0sWUFBWSxHQUNoQixVQUFVLENBQUUsQ0FBQyxDQUFDLGFBQW1DLENBQUMsS0FBSyxDQUFDO2dCQUN4RCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNwQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3pDLFlBQVksQ0FDVixZQUFZLENBQUMsUUFBUSxFQUFF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