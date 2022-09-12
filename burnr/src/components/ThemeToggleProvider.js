import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, makeStyles, } from "@material-ui/core";
import { SubstrateLight, SubstrateDark } from "./../themes";
import { useLocalStorage } from "../hooks";
import { LogoSubstrate, ThemeButton } from "../components";
const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100vw",
        maxWidth: "1330px",
        padding: theme.spacing(2),
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(1),
        },
    },
}));
const ThemeToggleProvider = ({ children }) => {
    const classes = useStyles();
    const [localTheme, setLocalTheme] = useLocalStorage("theme");
    const [theme, setTheme] = useState(localTheme === "false" ? false : true);
    const appliedTheme = createTheme(theme ? SubstrateLight : SubstrateDark);
    const selectTheme = (selected) => {
        setLocalTheme(selected.toString());
        setTheme(selected);
    };
    return (_jsxs(ThemeProvider, Object.assign({ theme: appliedTheme }, { children: [_jsx(CssBaseline, {}), _jsxs("div", Object.assign({ className: classes.root }, { children: [_jsx(LogoSubstrate, { theme: theme }), _jsx(ThemeButton, { theme: theme, onClick: () => selectTheme(!theme) })] })), children] })));
};
export default ThemeToggleProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbWVUb2dnbGVQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RoZW1lVG9nZ2xlUHJvdmlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQ2hDLE9BQU8sRUFDTCxhQUFhLEVBQ2IsV0FBVyxFQUNYLFdBQVcsRUFDWCxVQUFVLEdBQ1gsTUFBTSxtQkFBbUIsQ0FBQTtBQUMxQixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsT0FBTztRQUNqQixPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGNBQWMsRUFBRSxlQUFlO1FBQy9CLEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLFlBQVksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU5QixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDOUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0tBQ0Y7Q0FDRixDQUFDLENBQUMsQ0FBQTtBQUVILE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBaUMsRUFBRSxFQUFFO0lBQzFFLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFBO0lBQzNCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzVELE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDekUsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUV4RSxNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQWlCLEVBQUUsRUFBRTtRQUN4QyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDbEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3BCLENBQUMsQ0FBQTtJQUVELE9BQU8sQ0FDTCxNQUFDLGFBQWEsa0JBQUMsS0FBSyxFQUFFLFlBQVksaUJBQ2hDLEtBQUMsV0FBVyxLQUFHLEVBQ2YsNkJBQUssU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLGlCQUMxQixLQUFDLGFBQWEsSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLEVBQy9CLEtBQUMsV0FBVyxJQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFJLEtBQzdELEVBQ0wsUUFBUSxLQUNLLENBQ2pCLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLG1CQUFtQixDQUFBIn0=