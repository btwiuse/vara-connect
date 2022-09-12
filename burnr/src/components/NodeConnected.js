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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZUNvbm5lY3RlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05vZGVDb25uZWN0ZWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxPQUFPLENBQUE7QUFFekQsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQVMsTUFBTSwwQkFBMEIsQ0FBQTtBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBR25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFdkMsT0FBTyxxQkFBcUIsTUFBTSxzQ0FBc0MsQ0FBQTtBQUV4RSxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUM1QyxZQUFZLENBQUM7SUFDWCxnQkFBZ0IsRUFBRTtRQUNoQixRQUFRLEVBQUUsVUFBVTtRQUNwQixNQUFNLEVBQUUsTUFBTTtRQUNkLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3hDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLO0tBQ2hEO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztRQUMxQixLQUFLLEVBQUUsTUFBTTtRQUNiLFlBQVksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSztRQUMvQyxRQUFRLEVBQUU7WUFDUixTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDNUI7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUM5QjtDQUNGLENBQUMsQ0FDSCxDQUFBO0FBZ0JELE1BQU0sQ0FBQyxPQUFPLFVBQVUsYUFBYTtJQUNuQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDOUIsTUFBTSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUE7SUFDM0IsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUE7SUFDcEIsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxRQUFRLENBQVksT0FBTyxDQUFDLENBQUE7SUFFaEUsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE1BQU0sUUFBUSxHQUFHLENBQU8sR0FBZSxFQUFFLEVBQUU7WUFDekMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDOUIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUN4QixDQUFDLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUN4RDtRQUNILENBQUMsQ0FBQSxDQUFBO1FBRUQsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVaLE9BQU8sQ0FDTCw0QkFBSyxTQUFTLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixnQkFDdEMsNEJBQUssU0FBUyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsZ0JBQ3ZDLE1BQUMsR0FBRyxrQkFDRixPQUFPLEVBQUMsTUFBTSxFQUNkLFVBQVUsRUFBQyxRQUFRLEVBQ25CLEVBQUUsRUFBRSxHQUFHLEVBQ1AsRUFBRSxFQUFFLEdBQUcsRUFDUCxFQUFFLEVBQUUsR0FBRyxFQUNQLEVBQUUsRUFBRSxHQUFHLGlCQUVQLEtBQUMscUJBQXFCLElBQ3BCLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUMzQyxLQUFLLEVBQUUsVUFBVSxHQUNqQixFQUNGLE1BQUMsR0FBRyxrQkFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFVBQVUsaUJBQ3BELEtBQUMsVUFBVSxrQkFBQyxPQUFPLEVBQUMsSUFBSSxnQkFBRSxPQUFPLENBQUMsSUFBSSxJQUFjLEVBQ3BELEtBQUMsVUFBVSxrQkFDVCxPQUFPLEVBQUMsT0FBTyxFQUNmLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUMzQixLQUFLLEVBQUMsZUFBZSxnQkFFcEIsT0FBTyxDQUFDLE1BQU0sSUFDSixLQUNULEtBQ0YsSUFDRixJQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMifQ==