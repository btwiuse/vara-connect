import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { substrateGreen } from "./theme";
const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(7),
        fontWeight: 600,
        lineHeight: 1,
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(),
        },
        "& .green": {
            color: substrateGreen[300],
        },
        "& .lighter": {
            fontWeight: 400,
        },
    },
}));
const Logo = () => {
    const classes = useStyles();
    return (React.createElement(Typography, { variant: "h3", className: classes.root },
        "substrate",
        React.createElement("span", { className: "green" }, "_"),
        React.createElement("br", null),
        React.createElement("span", { className: "lighter" }, "connect")));
};
export default Logo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ28udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUV4QyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlCLFVBQVUsRUFBRSxHQUFHO1FBQ2YsVUFBVSxFQUFFLENBQUM7UUFDYixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDOUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUU7U0FDOUI7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsY0FBYyxDQUFDLEdBQUcsQ0FBQztTQUMzQjtRQUNELFlBQVksRUFBRTtZQUNaLFVBQVUsRUFBRSxHQUFHO1NBQ2hCO0tBQ0Y7Q0FDRixDQUFDLENBQUMsQ0FBQTtBQUVILE1BQU0sSUFBSSxHQUE0QixHQUFHLEVBQUU7SUFDekMsTUFBTSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUE7SUFFM0IsT0FBTyxDQUNMLG9CQUFDLFVBQVUsSUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSTs7UUFFOUMsOEJBQU0sU0FBUyxFQUFDLE9BQU8sUUFBUztRQUNoQywrQkFBTTtRQUNOLDhCQUFNLFNBQVMsRUFBQyxTQUFTLGNBQWUsQ0FDN0IsQ0FDZCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsZUFBZSxJQUFJLENBQUEifQ==