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
import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton, makeStyles } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.main,
    },
}));
const ThemeButton = (_a) => {
    var { theme } = _a, props = __rest(_a, ["theme"]);
    const classes = useStyles();
    return (_jsx(IconButton, Object.assign({}, props, { className: classes.root }, { children: theme ? _jsx(Brightness3Icon, {}) : _jsx(Brightness7Icon, {}) })));
};
export default ThemeButton;
//# sourceMappingURL=ThemeButton.js.map