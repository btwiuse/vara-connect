import { jsx as _jsx } from "react/jsx-runtime";
import { Link, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        display: "block",
        width: "120px",
        "& img": {
            maxWidth: "100%",
        },
    },
});
const LogoSubstrate = ({ theme }) => {
    const classes = useStyles();
    return (_jsx(Link, Object.assign({ href: "http://substrate.io/", target: "_blank", className: classes.root }, { children: _jsx("img", { alt: "Substrate's Logo", src: theme
                ? "./assets/images/logo_substrate.svg"
                : "./assets/images/logo_substrate_onDark.svg" }) })));
};
export default LogoSubstrate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nb1N1YnN0cmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29TdWJzdHJhdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBTXBELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUMzQixJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztRQUNoQixLQUFLLEVBQUUsT0FBTztRQUNkLE9BQU8sRUFBRTtZQUNQLFFBQVEsRUFBRSxNQUFNO1NBQ2pCO0tBQ0Y7Q0FDRixDQUFDLENBQUE7QUFFRixNQUFNLGFBQWEsR0FBNkIsQ0FBQyxFQUFFLEtBQUssRUFBUyxFQUFFLEVBQUU7SUFDbkUsTUFBTSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUE7SUFDM0IsT0FBTyxDQUNMLEtBQUMsSUFBSSxrQkFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksZ0JBQ3ZFLGNBQ0UsR0FBRyxFQUFDLGtCQUFrQixFQUN0QixHQUFHLEVBQ0QsS0FBSztnQkFDSCxDQUFDLENBQUMsb0NBQW9DO2dCQUN0QyxDQUFDLENBQUMsMkNBQTJDLEdBRWpELElBQ0csQ0FDUixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsZUFBZSxhQUFhLENBQUEifQ==