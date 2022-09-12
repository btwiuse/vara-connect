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
import { Box, Link, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("xs")]: {
            display: "block",
            marginBottom: theme.spacing(),
        },
    },
}));
const FooterLink = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const classes = useStyles();
    return (React.createElement(Box, { component: "span", mr: 4, className: classes.root },
        React.createElement(Link, Object.assign({ color: "textSecondary", variant: "body2", target: "_blank", rel: "noreferrer" }, props), children)));
};
export default FooterLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vdGVyTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvb3RlckxpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQWEsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFcEUsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksRUFBRTtRQUNKLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUM5QixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtTQUM5QjtLQUNGO0NBQ0YsQ0FBQyxDQUFDLENBQUE7QUFFSCxNQUFNLFVBQVUsR0FBdUMsQ0FBQyxFQUd2RCxFQUFFLEVBQUU7UUFIbUQsRUFDdEQsUUFBUSxPQUVULEVBREksS0FBSyxjQUY4QyxZQUd2RCxDQURTO0lBRVIsTUFBTSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUE7SUFFM0IsT0FBTyxDQUNMLG9CQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1FBQ2xELG9CQUFDLElBQUksa0JBQ0gsS0FBSyxFQUFDLGVBQWUsRUFDckIsT0FBTyxFQUFDLE9BQU8sRUFDZixNQUFNLEVBQUMsUUFBUSxFQUNmLEdBQUcsRUFBQyxZQUFZLElBQ1osS0FBSyxHQUVSLFFBQVEsQ0FDSixDQUNILENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUNELGVBQWUsVUFBVSxDQUFBIn0=