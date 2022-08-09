import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, fade, } from "@material-ui/core";
import { AccountContext } from "../utils/contexts";
import { HistoryTableRow } from ".";
import { useBalance } from "../hooks";
const columns = [
    { id: "withWhom", label: "", width: 160 },
    { id: "extrinsic", label: "Extrinsic" },
    { id: "value", label: "Value", minWidth: 170, align: "right" },
    { id: "status", label: "Status", width: 40, align: "right" },
];
const useStyles = makeStyles((theme) => ({
    table: {
        "& th": {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.disabled,
        },
        "& td, & th": {
            padding: theme.spacing(0.5),
            borderBottom: `1px solid ${fade(theme.palette.divider, 0.5)}`,
        },
        "& td:last-child, & th:last-child": {
            textAlign: "center",
        },
        "& tr:hover": {
            backgroundColor: "transparent !important",
            "& button": {
                backgroundColor: "rgba(0, 0, 0, 0.03)",
            },
        },
    },
}));
const HistoryTable = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    const rows = account.userHistory;
    const balanceArr = useBalance((account === null || account === void 0 ? void 0 : account.userAddress) || "");
    const unit = balanceArr[3];
    return (_jsxs(Table, Object.assign({ size: "small", stickyHeader: true, className: classes.table }, { children: [_jsx(TableHead, { children: _jsx(TableRow, { children: columns.map((column) => (_jsx(TableCell, Object.assign({ align: column.align, style: {
                            width: column.width,
                            minWidth: column.minWidth,
                            maxWidth: column.maxWidth,
                        } }, { children: column.label }), column.id))) }) }), _jsx(TableBody, { children: rows.map((row, i) => {
                    return (_jsx(HistoryTableRow, { unit: unit, row: row, columns: columns }, i));
                }) })] })));
};
export default HistoryTable;
//# sourceMappingURL=HistoryTable.js.map