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
import { Box, Button, makeStyles, Typography, } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { substrateGreen } from "./theme";
const useStyles = makeStyles((theme) => ({
    section: {
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        paddingBottom: theme.spacing(5),
        "&:after": {
            content: "' '",
            position: "absolute",
            top: 0,
            left: `calc(${theme.breakpoints.values.lg / 2}px - 50vw - ${theme.spacing(5)}px)`,
            height: "100%",
            width: "100vw",
            zIndex: "-1",
            background: theme.palette.background.default,
            [theme.breakpoints.down("md")]: {
                left: theme.spacing(-5),
            },
        },
        "& h1, & h2, & h3, & h4, & h5, & p": {
            maxWidth: "624px",
        },
    },
    heading: {
        marginBottom: theme.spacing(1),
        "& sup": {
            marginRight: theme.spacing(1.2),
        },
    },
    hero: {
        fontSize: "80px",
        marginTop: "0.2em",
        marginBottom: "0.2em",
        [theme.breakpoints.down("xs")]: {
            fontSize: "10vw",
        },
    },
    ref: {
        display: "block",
        width: "fit-content",
        marginLeft: "-0.5em",
        textDecoration: "none",
        "&:first-of-type": {
            marginTop: theme.spacing(),
        },
        "& button": {
            textAlign: "left",
            color: substrateGreen[600],
        },
    },
}));
export const Section = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const classes = useStyles();
    return (React.createElement(Box, Object.assign({ className: classes.section }, props), children));
};
export const SectionHeading = ({ children, prefix, id, }) => {
    const classes = useStyles();
    return (React.createElement(Typography, { id: id, variant: "h2", className: classes.heading },
        prefix && (React.createElement(Typography, { variant: "h4", component: "sup" }, prefix)),
        children));
};
export const SectionText = ({ children }) => (React.createElement(Typography, { variant: "body1" }, children));
export const SectionHeroText = ({ children, }) => {
    const classes = useStyles();
    return (React.createElement(Typography, { component: "div", color: "primary", variant: "h1", className: classes.hero }, children));
};
export const SectionRef = (_a) => {
    var { children, href, startIcon = React.createElement(ArrowForwardIcon, null) } = _a, props = __rest(_a, ["children", "href", "startIcon"]);
    const classes = useStyles();
    return (React.createElement("a", { target: "_blank", rel: "noreferrer", href: href, className: classes.ref },
        React.createElement(Button, Object.assign({ color: "secondary", startIcon: startIcon }, props), children)));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDOUIsT0FBTyxFQUNMLEdBQUcsRUFFSCxNQUFNLEVBRU4sVUFBVSxFQUNWLFVBQVUsR0FDWCxNQUFNLG1CQUFtQixDQUFBO0FBQzFCLE9BQU8sZ0JBQWdCLE1BQU0saUNBQWlDLENBQUE7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUV4QyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsT0FBTyxFQUFFO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsUUFBUTtRQUNsQixhQUFhLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0IsU0FBUyxFQUFFO1lBQ1QsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxRQUFRLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLGVBQWUsS0FBSyxDQUFDLE9BQU8sQ0FDdkUsQ0FBQyxDQUNGLEtBQUs7WUFDTixNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTztZQUM1QyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FB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