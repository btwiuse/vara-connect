import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Typography, Box, Link, Grid } from "@material-ui/core";
const AppFooter = () => (_jsx(Box, { paddingBottom: 2, children: _jsx(Typography, { variant: "body2", component: "div", children: _jsxs(Grid, { container: true, spacing: 1, children: [_jsx(Grid, { item: true, children: _jsxs(Link, { href: "https://www.parity.io/", underline: "hover", color: "textPrimary", children: ["\u00A9 ", new Date().getFullYear(), " Parity Technologies"] }) }), _jsx(Grid, { item: true, children: _jsx(Link, { href: "https://substrate.dev/terms", underline: "hover", target: "_blank", rel: "noreferrer", color: "textPrimary", children: "Terms & conditions" }) }), _jsx(Grid, { item: true, children: _jsx(Link, { href: "https://www.parity.io/privacy/", underline: "hover", target: "_blank", rel: "noreferrer", color: "textPrimary", children: "Privacy policy" }) }), _jsx(Grid, { item: true, children: _jsx(Link, { href: "https://github.com/paritytech/substrate-connect/issues", underline: "hover", target: "_blank", rel: "noreferrer", color: "textPrimary", children: "Report an issue" }) })] }) }) }));
export default AppFooter;
//# sourceMappingURL=NavFooter.js.map