var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useState, useEffect, } from "react";
import BN from "bn.js";
import { makeStyles, Button, Typography, LinearProgress, Table, Grid, Box, } from "@material-ui/core";
import { Keyring } from "@polkadot/api";
import { AccountContext } from "../utils/contexts";
import { InputAddress, InputFunds } from "../components";
import { useBalance, useApi, useLocalStorage } from "../hooks";
import { HistoryTableRow } from ".";
import { isValidAddressPolkadotAddress, prettyBalance } from "../utils/utils";
import { NETWORK } from "../utils/constants";
const useStyles = makeStyles((theme) => ({
    errorMessage: {
        marginBottom: theme.spacing(),
        textAlign: "center",
    },
    button: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        "&:hover": {
            color: theme.palette.getContrastText(theme.palette.secondary.dark),
        },
        display: "block",
        margin: "10px auto",
    },
    transferInfoMessage: {
        overflowWrap: "break-word",
        padding: "30px",
    },
    infoRow: {
        margin: "30px 0",
    },
    feePriceAndBalance: {
        height: "55px",
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "baseline",
    },
    title: {
        paddingRight: "30px",
        opacity: 1,
    },
    priceBalance: {
        backgroundColor: "#E7FAEC",
    },
    priceFee: {
        backgroundColor: "#FFE0DC",
    },
    price: {
        padding: "0 10px",
        borderRadius: "2px",
        color: "#1E1E1E",
        fontWeight: 90,
        opacity: 1,
    },
    opacityNone: {
        opacity: 0,
    },
}));
const columns = [
    { id: "withWhom", label: "", width: 160 },
    { id: "extrinsic", label: "Extrinsic" },
    { id: "value", label: "Value", minWidth: 170, align: "right" },
    { id: "status", label: "Status", width: 40, align: "right" },
];
const Structure = ({ name, rest, fee }) => {
    const { feePriceAndBalance, opacityNone, title, price, priceBalance, priceFee, } = useStyles();
    return (_jsxs("div", Object.assign({ className: feePriceAndBalance }, { children: [_jsx("div", Object.assign({ className: !fee ? opacityNone : title }, { children: name })), _jsx("div", Object.assign({ className: !fee
                    ? opacityNone
                    : name === "Fees"
                        ? `${price} ${priceFee}`
                        : `${price} ${priceBalance}` }, { children: _jsx(Typography, Object.assign({ variant: "subtitle1" }, { children: rest })) }))] })));
};
const SendFundsForm = () => {
    var _a;
    const classes = useStyles();
    const { account, setCurrentAccount } = useContext(AccountContext);
    const balanceArr = useBalance(account.userAddress);
    const api = useApi();
    const maxAmountFull = balanceArr[1];
    const unit = balanceArr[3];
    // TODO: This must be prettier and reusable (exists already on App)
    const [endpoint, setEndpoint] = useLocalStorage("endpoint");
    if (!endpoint) {
        setEndpoint(Object.keys(NETWORK)[0]);
    }
    const [, setLocalStorageAccount] = useLocalStorage((_a = endpoint.split("-")[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase());
    // TODO END: This must be prettier and reusable (exists already on App)
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("0");
    const [fundsIssue, setFundsIssue] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [countdownNo, setCountdownNo] = useState(0);
    const [rowStatus, setRowStatus] = useState(0);
    const [fee, setFee] = useState();
    const [errorMsg, setErrorMsg] = useState("");
    useEffect(() => {
        const calcFee = () => __awaiter(void 0, void 0, void 0, function* () {
            const keyring = new Keyring({ type: "sr25519" });
            const sender = keyring.addFromUri(account.userSeed);
            const fee = yield api.tx.balances
                .transfer(address, new BN(amount))
                .paymentInfo(sender);
            setFee(fee.partialFee);
        });
        !amount ||
            amount === "0" ||
            !isValidAddressPolkadotAddress(address) ||
            !account.userSeed
            ? setFee(undefined)
            : void calcFee();
    }, [amount, account.userSeed, address, api.tx.balances]);
    useEffect(() => {
        let countdown;
        if (!loading) {
            if (message !== "") {
                countdown = setInterval(() => {
                    setCountdownNo((oldCountdownNo) => {
                        if (oldCountdownNo === 0) {
                            setMessage("");
                            return 0;
                        }
                        else {
                            return oldCountdownNo - 1;
                        }
                    });
                }, 100);
            }
        }
        return () => {
            clearInterval(countdown);
        };
    }, [loading, message, setMessage]);
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            e.preventDefault();
            setLoading(true);
            setCountdownNo(100);
            setRowStatus(3);
            const keyring = new Keyring({ type: "sr25519" });
            const sender = keyring.addFromUri(account.userSeed);
            yield api.tx.balances
                .transfer(address, new BN(amount))
                .signAndSend(sender, (result) => {
                setMessage(`Current transaction status ${result.status}`);
                if (result.status.isInBlock) {
                    setMessage(`Transaction Block hash: ${result.status.asInBlock}`);
                }
                else if (result.status.isFinalized) {
                    setRowStatus(1);
                    setMessage(`Block hash:: ${result.status.asFinalized}.`);
                    account.userHistory.unshift({
                        withWhom: address,
                        extrinsic: "Transfer",
                        value: amount,
                        status: 1,
                    });
                    setCurrentAccount(account);
                    setLocalStorageAccount(JSON.stringify(account));
                }
            });
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
            setRowStatus(2);
            setMessage(`😞 Error: ${err}`);
            account.userHistory.unshift({
                withWhom: address,
                extrinsic: "Transfer",
                value: amount,
                status: 2,
            });
            setCurrentAccount(account);
            setLocalStorageAccount(JSON.stringify(account));
        }
    });
    useEffect(() => {
        maxAmountFull &&
            amount &&
            fee &&
            setFundsIssue(new BN(maxAmountFull).sub(new BN(amount)).sub(fee).isNeg());
    }, [amount, fee, maxAmountFull]);
    useEffect(() => {
        if (!isValidAddressPolkadotAddress(address)) {
            setErrorMsg("Add a valid address");
        }
        else if (!parseInt(amount)) {
            setErrorMsg("Add some amount");
        }
        else if (fundsIssue) {
            setErrorMsg("Insufficient funds");
        }
        else {
            setErrorMsg("");
        }
    }, [address, amount, fundsIssue]);
    return (_jsxs(_Fragment, { children: [_jsx(InputAddress, { setAddress: setAddress }), _jsx(InputFunds, { hidePercentages: true, total: maxAmountFull, currency: unit, setAmount: setAmount }), _jsxs(Grid, Object.assign({ item: true, xs: 12, className: classes.infoRow }, { children: [_jsx(Structure, { fee: fee, name: "Fees", rest: fee ? `${prettyBalance(fee)} ${unit}` : "" }), _jsx(Structure, { fee: fee, name: "Balance after transaction", rest: fee
                            ? `${prettyBalance(new BN(maxAmountFull).sub(new BN(amount)).sub(fee))} ${unit}`
                            : "" })] })), _jsx(Button, Object.assign({ type: "submit", variant: "contained", size: "large", color: "secondary", disabled: loading ||
                    !parseInt(amount) ||
                    !isValidAddressPolkadotAddress(address) ||
                    account.userAddress === address ||
                    fundsIssue, onClick: handleSubmit, className: classes.button }, { children: "Send" })), errorMsg && (_jsx(Typography, Object.assign({ variant: "body2", color: "error", className: classes.errorMessage }, { children: errorMsg }))), _jsxs(Box, Object.assign({ mt: 3 }, { children: [countdownNo !== 0 && (_jsx(Table, Object.assign({ size: "small" }, { children: _jsx(HistoryTableRow, { row: {
                                withWhom: address,
                                extrinsic: "Transfer",
                                value: amount,
                                status: rowStatus,
                            }, unit: unit, columns: columns }) }))), _jsx(Typography, Object.assign({ variant: "subtitle2", className: classes.transferInfoMessage }, { children: message })), !loading && countdownNo !== 0 && (_jsx(LinearProgress, { variant: "determinate", value: countdownNo }))] }))] }));
};
export default SendFundsForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZEZ1bmRzRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlbmRGdW5kc0Zvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUNWLFFBQVEsRUFDUixTQUFTLEdBRVYsTUFBTSxPQUFPLENBQUE7QUFDZCxPQUFPLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDdEIsT0FBTyxFQUNMLFVBQVUsRUFFVixNQUFNLEVBQ04sVUFBVSxFQUNWLGNBQWMsRUFDZCxLQUFLLEVBQ0wsSUFBSSxFQUNKLEdBQUcsR0FDSixNQUFNLG1CQUFtQixDQUFBO0FBRTFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sR0FBRyxDQUFBO0FBQ25DLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUU3RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFFNUMsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLFlBQVksRUFBRTtRQUNaLFlBQVksRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQzdCLFNBQVMsRUFBRSxRQUFRO0tBQ3BCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFD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