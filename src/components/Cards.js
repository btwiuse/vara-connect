import * as React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { IconWeb3 } from ".";
import { substrateGray, substrateGreen } from "./theme";
const useStyles = makeStyles((theme) => ({
    card: {
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        width: `calc(50% - ${theme.spacing(2)}px)`,
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
        padding: theme.spacing(2),
        borderRadius: theme.spacing(),
        justifyContent: "center",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            width: `calc(100% - ${theme.spacing(2)}px)`,
        },
        "&.network": {
            textAlign: "left",
            width: `calc(25% - ${theme.spacing(2)}px)`,
            justifyContent: "start",
            [theme.breakpoints.down("sm")]: {
                width: `calc(50% - ${theme.spacing(2)}px)`,
            },
        },
        "& .subtitle": {
            paddingBottom: theme.spacing(),
            borderBottom: `1px solid ${theme.palette.divider}`,
            "&.placeholder": {
                opacity: 0,
            },
        },
        "& img": {
            width: "100%",
            objectFit: "cover",
            backgroundColor: "whitesmoke",
        },
        "& .content": {
            position: "absolute",
            bottom: theme.spacing(2),
            display: "flex",
            justifyContent: "center",
            width: `calc(100% - ${theme.spacing()}px)`,
        },
    },
    link: {
        position: "absolute",
        width: "calc(100% + 2px)",
        height: "calc(100% + 2px)",
        top: -1,
        left: -1,
        padding: theme.spacing(),
        border: `1px solid transparent`,
        borderRadius: theme.spacing(),
        textAlign: "right",
        color: theme.palette.primary.dark,
        "&:hover": {
            borderColor: theme.palette.primary.main,
        },
        "&:not(:hover) svg": {
            opacity: 0,
        },
    },
    status: {
        display: "inline-flex",
        width: "max-content",
        maxWidth: "100%",
        alignItems: "center",
        marginBottom: theme.spacing(),
        paddingLeft: theme.spacing(0.8),
        paddingRight: theme.spacing(0.8),
        borderRadius: theme.spacing(0.5),
        fontSize: "0.8em",
        lineHeight: "250%",
        background: substrateGray[100],
        "& svg": {
            marginRight: theme.spacing(0.5),
            fontSize: "1em",
            color: substrateGray[400],
        },
        "&.supported svg": {
            color: substrateGreen[400],
        },
        "&.very svg": {
            color: "#EAC920",
        },
    },
}));
const CardLink = ({ href, children, }) => {
    const classes = useStyles();
    return (React.createElement("a", { target: "_blank", rel: "noreferrer", href: href, className: classes.link },
        React.createElement(CallMadeIcon, null),
        React.createElement(Typography, { variant: "subtitle2" }, children)));
};
export const CardProject = ({ children, title, subtitle, linkProps, imageProps, }) => {
    const classes = useStyles();
    return (React.createElement(Grid, { item: true, className: classes.card, style: (imageProps === null || imageProps === void 0 ? void 0 : imageProps.fullWidth) ? { width: "calc(100%)" } : {} },
        linkProps && React.createElement(CardLink, Object.assign({}, linkProps)),
        React.createElement(Typography, { variant: "h3" }, title),
        subtitle ? (React.createElement(Typography, { className: "subtitle", variant: "body2" }, subtitle)) : (React.createElement(Typography, { className: "subtitle placeholder", variant: "body2" })),
        React.createElement("img", { src: (imageProps === null || imageProps === void 0 ? void 0 : imageProps.path) || "", alt: title, style: { objectPosition: imageProps === null || imageProps === void 0 ? void 0 : imageProps.position } }),
        React.createElement("div", { className: "content" }, children)));
};
export const CardStatus = ({ status, }) => {
    const classes = useStyles();
    return (React.createElement("span", { className: `${classes.status} ${status}` },
        React.createElement(FiberManualRecordIcon, null),
        React.createElement(Typography, { variant: "subtitle2" }, status)));
};
export const CardNetwork = ({ children, title, statusProps, linkProps, }) => {
    const classes = useStyles();
    return (React.createElement(Grid, { item: true, className: `${classes.card} network` },
        linkProps && React.createElement(CardLink, Object.assign({}, linkProps)),
        React.createElement(CardStatus, Object.assign({}, statusProps)),
        React.createElement(Box, { mb: true },
            React.createElement(Typography, { variant: "h3" },
                React.createElement(Box, { component: "span", mr: 0.75 },
                    React.createElement(IconWeb3, null, title.toLowerCase())),
                title)),
        children));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DYXJkcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQWEsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQ2hGLE9BQU8sWUFBWSxNQUFNLDZCQUE2QixDQUFBO0FBQ3RELE9BQU8scUJBQXFCLE1BQU0sc0NBQXNDLENBQUE7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsQ0FBQTtBQUM1QixPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUV2RCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLGFBQWE7UUFDdEIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsS0FBSyxFQUFFLGNBQWMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztRQUMxQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0IsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sRUFBRSxhQUFhLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1FBQzVDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6QixZQUFZLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUM3QixjQUFjLEVBQUUsUUFBUTtRQUN4QixTQUFTLEVBQUUsUUFBUTtRQUNuQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxD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