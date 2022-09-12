import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, alpha, } from "@material-ui/core";
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
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlzdG9yeVRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSGlzdG9yeVRhYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFxQixVQUFVLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFFckQsT0FBTyxFQUNMLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxRQUFRLEVBRVIsVUFBVSxFQUNWLEtBQUssR0FDTixNQUFNLG1CQUFtQixDQUFBO0FBRTFCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sR0FBRyxDQUFBO0FBRW5DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFckMsTUFBTSxPQUFPLEdBQWE7SUFDeEIsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUN2QyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDOUQsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0NBQzdELENBQUE7QUFFRCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFO1lBQ04sZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUs7WUFDL0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVE7U0FDbkM7UUFDRCxZQUFZLEVBQUU7WUFDWixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDM0IsWUFBWSxFQUFFLGFBQWEsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1NBQy9EO1FBQ0Qsa0NBQWtDLEVBQUU7WUFDbEMsU0FBUyxFQUFFLFFBQVE7U0FDcEI7UUFDRCxZQUFZLEVBQUU7WUFDWixlQUFlLEVBQUUsd0JBQXdCO1lBQ3pDLFVBQVUsRUFBRTtnQkFDVixlQUFlLEVBQUUscUJBQXFCO2FBQ3ZDO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQyxDQUFBO0FBRUgsTUFBTSxZQUFZLEdBQXNCLEdBQUcsRUFBRTtJQUMzQyxNQUFNLE9BQU8sR0FBRyxTQUFTLEVBQUUsQ0FBQTtJQUMzQixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQzlDLE1BQU0sSUFBSSxHQUFXLE9BQU8sQ0FBQyxXQUFXLENBQUE7SUFDeEMsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFdBQVcsS0FBSSxFQUFFLENBQUMsQ0FBQTtJQUN6RCxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFMUIsT0FBTyxDQUNMLE1BQUMsS0FBSyxrQkFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFlBQVksUUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEtBQUssaUJBQ3ZELEtBQUMsU0FBUyxjQUNSLEtBQUMsUUFBUSxjQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQ3ZCLEtBQUMsU0FBUyxrQkFFUixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFDbkIsS0FBSyxFQUFFOzRCQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSzs0QkFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFROzRCQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7eUJBQzFCLGdCQUVBLE1BQU0sQ0FBQyxLQUFLLEtBUlIsTUFBTSxDQUFDLEVBQUUsQ0FTSixDQUNiLENBQUMsR0FDTyxHQUNELEVBQ1osS0FBQyxTQUFTLGNBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbkIsT0FBTyxDQUNMLEtBQUMsZUFBZSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxJQUE3QixDQUFDLENBQWdDLENBQ3BFLENBQUE7Z0JBQ0gsQ0FBQyxDQUFDLEdBQ1EsS0FDTixDQUNULENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLFlBQVksQ0FBQSJ9