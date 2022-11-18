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
//# sourceMappingURL=LogoSubstrate.js.map