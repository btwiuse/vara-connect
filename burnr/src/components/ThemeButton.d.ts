import { FunctionComponent } from "react";
import { IconButtonProps } from "@material-ui/core";
interface Props extends IconButtonProps {
    theme: boolean;
}
declare const ThemeButton: FunctionComponent<Props>;
export default ThemeButton;
