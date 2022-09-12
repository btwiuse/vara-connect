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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbWVCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UaGVtZUJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBbUIsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFM0UsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUE7QUFDNUQsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUE7QUFNNUQsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJO0tBQ2xDO0NBQ0YsQ0FBQyxDQUFDLENBQUE7QUFFSCxNQUFNLFdBQVcsR0FBNkIsQ0FBQyxFQUEwQixFQUFFLEVBQUU7UUFBOUIsRUFBRSxLQUFLLE9BQW1CLEVBQWQsS0FBSyxjQUFqQixTQUFtQixDQUFGO0lBQzlELE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFBO0lBQzNCLE9BQU8sQ0FDTCxLQUFDLFVBQVUsb0JBQUssS0FBSyxJQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxnQkFDM0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFDLGVBQWUsS0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFDLGVBQWUsS0FBRyxJQUN2QyxDQUNkLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLFdBQVcsQ0FBQSJ9