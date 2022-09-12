import * as React from "react";
import { BoxProps, ButtonProps } from "@material-ui/core";
export declare const Section: React.FunctionComponent<BoxProps>;
interface HeadingProps {
    children: React.ReactNode;
    prefix?: string | number;
    id?: string;
}
export declare const SectionHeading: React.FunctionComponent<HeadingProps>;
export declare const SectionText: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const SectionHeroText: ({ children, }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const SectionRef: React.FunctionComponent<ButtonProps>;
export {};
