import * as React from "react";
import { GridProps } from "@material-ui/core";
interface CardLinkProps {
    href: string;
    children?: React.ReactNode;
}
interface CardProjectProps extends GridProps {
    children?: React.ReactNode;
    title?: string;
    subtitle?: string;
    imageProps?: {
        children?: React.ReactNode;
        path: string;
        position?: string;
        fullWidth?: boolean;
    };
    linkProps?: CardLinkProps;
}
export declare const CardProject: React.FunctionComponent<CardProjectProps>;
interface CardStatusProps {
    status: "supported" | "soon" | "very soon";
}
export declare const CardStatus: React.FunctionComponent<CardStatusProps>;
interface CardNetworkProps {
    children: React.ReactNode;
    title: string;
    statusProps: CardStatusProps;
    linkProps?: CardLinkProps;
}
export declare const CardNetwork: React.FunctionComponent<CardNetworkProps>;
export {};
//# sourceMappingURL=Cards.d.ts.map