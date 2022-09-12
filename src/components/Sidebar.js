var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { Link, makeStyles, Typography } from "@material-ui/core";
import { substrateGray } from "./theme";
import { alpha } from "@material-ui/core/styles/colorManipulator";
const useStyles = makeStyles((theme) => ({
    sidebar: {
        width: "345px",
        maxWidth: "345px",
        paddingLeft: theme.spacing(10),
        "& .fixed": {
            position: "fixed",
        },
        [theme.breakpoints.down("md")]: {
            "& .fixed": {
                width: "100%",
                maxWidth: "none",
                left: 0,
                top: theme.spacing(0.5),
                padding: theme.spacing(),
                paddingLeft: theme.spacing(5),
                backgroundColor: alpha(theme.palette.background.default, 0.95),
                borderBottom: `1px solid ${substrateGray[200]}`,
            },
        },
    },
    link: {
        display: "block",
        marginBottom: theme.spacing(0.5),
        color: substrateGray[600],
        "&:hover": {
            color: substrateGray[900],
            textDecoration: "none",
        },
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
        "& *": {
            color: "inherit",
        },
    },
}));
export const Sidebar = ({ children }) => {
    const classes = useStyles();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.sidebar },
            React.createElement("div", { className: "fixed" }, children))));
};
export const SidebarLink = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const classes = useStyles();
    return (React.createElement(Link, Object.assign({ className: classes.link }, props),
        React.createElement(Typography, { component: "span", variant: "subtitle2" }, children)));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NpZGViYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDOUIsT0FBTyxFQUFFLElBQUksRUFBYSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkNBQTJDLENBQUE7QUFPakUsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzlCLFVBQVUsRUFBRTtZQUNWLFFBQVEsRUFBRSxPQUFPO1NBQ2xCO1FBQ0QsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQzlCLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUN2QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixlQUFlLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7Z0JBQzlELFlBQVksRUFBRSxhQUFhLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTthQUNoRDtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztRQUNoQixZQUFZLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDaEMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDekIsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFDekIsY0FBYyxFQUFFLE1BQU07U0FDdkI7UUFDRCxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxFQUFFLE1BQU07U0FDaEI7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsU0FBUztTQUNqQjtLQUNGO0NBQ0YsQ0FBQyxDQUFDLENBQUE7QUFFSCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBaUMsRUFBRSxFQUFFO0lBQ3JFLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFBO0lBQzNCLE9BQU8sQ0FDTDtRQUNFLDZCQUFLLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTztZQUM3Qiw2QkFBSyxTQUFTLEVBQUMsT0FBTyxJQUFFLFFBQVEsQ0FBTyxDQUNuQyxDQUNMLENBQ0osQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBOEMsQ0FBQyxFQUd0RSxFQUFFLEVBQUU7UUFIa0UsRUFDckUsUUFBUSxPQUVULEVBREksS0FBSyxjQUY2RCxZQUd0RSxDQURTO0lBRVIsTUFBTSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUE7SUFDM0IsT0FBTyxDQUNMLG9CQUFDLElBQUksa0JBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQU0sS0FBSztRQUN0QyxvQkFBQyxVQUFVLElBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsV0FBVyxJQUM3QyxRQUFRLENBQ0UsQ0FDUixDQUNSLENBQUE7QUFDSCxDQUFDLENBQUEifQ==