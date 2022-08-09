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
//# sourceMappingURL=SendFundsForm.js.map