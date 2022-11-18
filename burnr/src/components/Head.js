import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { NodeConnected } from "../components";
const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(7),
        },
    },
}));
const Head = () => {
    const classes = useStyles();
    return (_jsxs(Grid, Object.assign({ container: true, alignItems: "center", className: classes.root }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 6 }, { children: _jsx(Box, Object.assign({ paddingX: 2 }, { children: _jsx(Typography, Object.assign({ variant: "h1" }, { children: "Burnr" })) })) })), _jsx(Grid, Object.assign({ item: true, xs: 6 }, { children: _jsx(NodeConnected, {}) }))] })));
};
export default Head;
//# sourceMappingURL=Head.js.map