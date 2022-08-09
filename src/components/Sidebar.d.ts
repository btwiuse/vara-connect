import * as React from "react";
import { LinkProps } from "@material-ui/core";
interface SidebarLinkProps extends LinkProps {
    children?: React.ReactNode;
    href?: string;
}
export declare const Sidebar: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const SidebarLink: React.FunctionComponent<SidebarLinkProps>;
export {};
//# sourceMappingURL=Sidebar.d.ts.map