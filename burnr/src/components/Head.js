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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQVMsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUU3QyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsSUFBSSxFQUFFO1FBQ0osQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUM3QjtLQUNGO0NBQ0YsQ0FBQyxDQUFDLENBQUE7QUFFSCxNQUFNLElBQUksR0FBc0IsR0FBRyxFQUFFO0lBQ25DLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFBO0lBRTNCLE9BQU8sQ0FDTCxNQUFDLElBQUksa0JBQUMsU0FBUyxRQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLGlCQUN6RCxLQUFDLElBQUksa0JBQUMsSUFBSSxRQUFDLEVBQUUsRUFBRSxDQUFDLGdCQUNkLEtBQUMsR0FBRyxrQkFBQyxRQUFRLEVBQUUsQ0FBQyxnQkFDZCxLQUFDLFVBQVUsa0JBQUMsT0FBTyxFQUFDLElBQUksMkJBQW1CLElBQ3ZDLElBQ0QsRUFDUCxLQUFDLElBQUksa0JBQUMsSUFBSSxRQUFDLEVBQUUsRUFBRSxDQUFDLGdCQUNkLEtBQUMsYUFBYSxLQUFHLElBQ1osS0FDRixDQUNSLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLElBQUksQ0FBQSJ9