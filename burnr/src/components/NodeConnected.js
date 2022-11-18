var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { NETWORK, BURNR_WALLET } from "../utils/constants";
import { useApi } from "../hooks";
import { logger } from "@polkadot/util";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const useStyles = makeStyles((theme) => createStyles({
    nodeSelectorWrap: {
        position: "relative",
        height: "60px",
        borderTopRightRadius: theme.spacing(0.5),
        borderTopLeftRadius: theme.spacing(0.5),
        backgroundColor: theme.palette.background.paper,
    },
    nodeSelectorInner: {
        position: "absolute",
        zIndex: theme.zIndex.modal,
        width: "100%",
        borderRadius: theme.spacing(0.5),
        backgroundColor: theme.palette.background.paper,
        "&.open": {
            boxShadow: theme.shadows[2],
        },
    },
    nodeDesc: {
        paddingLeft: theme.spacing(1),
    },
}));
export default function NodeConnected() {
    const l = logger(BURNR_WALLET);
    const classes = useStyles();
    const api = useApi();
    const [fiberColor, setFiberColor] = useState("error");
    useEffect(() => {
        const getColor = (api) => __awaiter(this, void 0, void 0, function* () {
            if (api && (yield api.isReady)) {
                setFiberColor("primary");
                l.log("Burnr wallet is now connected to", NETWORK.name);
            }
        });
        api && getColor(api);
    }, [api, l]);
    return (_jsx("div", Object.assign({ className: classes.nodeSelectorWrap }, { children: _jsx("div", Object.assign({ className: classes.nodeSelectorInner }, { children: _jsxs(Box, Object.assign({ display: "flex", alignItems: "center", pt: 2.5, pb: 2.5, pl: 2.5, pr: 2.5 }, { children: [_jsx(FiberManualRecordIcon, { style: { fontSize: "16px", marginRight: 4 }, color: fiberColor }), _jsxs(Box, Object.assign({ width: "100%", display: "flex", alignItems: "baseline" }, { children: [_jsx(Typography, Object.assign({ variant: "h4" }, { children: NETWORK.name })), _jsx(Typography, Object.assign({ variant: "body2", className: classes.nodeDesc, color: "textSecondary" }, { children: NETWORK.client }))] }))] })) })) })));
}
//# sourceMappingURL=NodeConnected.js.map