import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, memo, } from "react";
import { FormControl, TextField, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Identicon from "@polkadot/react-identicon";
const InputAddress = ({ setAddress }) => {
    const [value, setValue] = useState("");
    useEffect(() => {
        setAddress(value);
    }, [value, setAddress]);
    const handleChangeButton = (e) => {
        const val = e.currentTarget.value;
        setValue(val);
    };
    return (_jsx(_Fragment, { children: _jsx(Box, Object.assign({ marginY: 1 }, { children: _jsx(FormControl, Object.assign({ required: true, fullWidth: true }, { children: _jsx(TextField, { label: "Receiver", onChange: handleChangeButton, onFocus: handleChangeButton, onBlur: handleChangeButton, value: value, placeholder: "Westend Address", variant: "outlined", fullWidth: true, InputProps: {
                        spellCheck: "false",
                        startAdornment: (_jsx(Box, Object.assign({ marginRight: 1 }, { children: !value || value === "" ? (_jsx(Skeleton, { variant: "circle", width: 32, height: 32 })) : (_jsx(Identicon, { size: 32, theme: "polkadot", value: value })) }))),
                    } }) })) })) }));
};
export default memo(InputAddress);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXRBZGRyZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSW5wdXRBZGRyZXNzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxRQUFRLEVBR1IsSUFBSSxHQUNMLE1BQU0sT0FBTyxDQUFBO0FBRWQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDL0QsT0FBTyxRQUFRLE1BQU0sMkJBQTJCLENBQUE7QUFFaEQsT0FBTyxTQUFTLE1BQU0sMkJBQTJCLENBQUE7QUFNakQsTUFBTSxZQUFZLEdBQTZCLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFO0lBQ2hFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFTLEVBQUUsQ0FBQyxDQUFBO0lBRTlDLFNBQVMsQ0FBQyxHQUFTLEVBQUU7UUFDbkIsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBRXZCLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFjLEVBQUUsRUFBRTtRQUM1QyxNQUFNLEdBQUcsR0FBSSxDQUFDLENBQUMsYUFBcUMsQ0FBQyxLQUFLLENBQUE7UUFDMUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2YsQ0FBQyxDQUFBO0lBRUQsT0FBTyxDQUNMLDRCQUNFLEtBQUMsR0FBRyxrQkFBQyxPQUFPLEVBQUUsQ0FBQyxnQkFDYixLQUFDLFdBQVcsa0JBQUMsUUFBUSxRQUFDLFNBQVMsc0JBQzdCLEtBQUMsU0FBUyxJQUNSLEtBQUssRUFBQyxVQUFVLEVBQ2hCLFFBQVEsRUFBRSxrQkFBa0IsRUFDNUIsT0FBTyxFQUFFLGtCQUFrQixFQUMzQixNQUFNLEVBQUUsa0JBQWtCLEVBQzFCLEtBQUssRUFBRSxLQUFLLEVBQ1osV0FBVyxFQUFDLGlCQUFpQixFQUM3QixPQUFPLEVBQUMsVUFBVSxFQUNsQixTQUFTLFFBQ1QsVUFBVSxFQUFFO3dCQUNWLFVBQVUsRUFBRSxPQUFPO3dCQUNuQixjQUFjLEVBQUUsQ0FDZCxLQUFDLEdBQUcsa0JBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQ2hCLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3hCLEtBQUMsUUFBUSxJQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFJLENBQ3JELENBQUMsQ0FBQyxDQUFDLENBQ0YsS0FBQyxTQUFTLElBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FDdkQsSUFDRyxDQUNQO3FCQUNGLEdBQ0QsSUFDVSxJQUNWLEdBQ0wsQ0FDSixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsZUFBZSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEifQ==