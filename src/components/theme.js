import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";
// TODO this can be less lines
export const substrateGreen = {
    100: "#7E8D96",
    200: "#5CFFC8",
    300: "#18FFB2",
    400: "#16DB9A",
    500: "#11B37C",
    600: "#1A9A6C",
};
export const substrateGray = {
    100: "#F5F8FA",
    200: "#EAEEF1",
    400: "#C6D0D7",
    500: "#ABB8BF",
    600: "#7E8D95",
    800: "#323F47",
    900: "#202B33",
};
const paletteLight = {
    type: "light",
    common: {
        black: "black",
        white: "#FFFFFF",
    },
    background: {
        paper: "#FFFFFF",
        default: "#FFFFFF",
    },
    primary: {
        light: substrateGreen[100],
        main: substrateGreen[400],
        dark: substrateGreen[500],
        contrastText: "black",
    },
    secondary: {
        light: substrateGreen[100],
        main: substrateGreen[400],
        dark: substrateGreen[500],
        contrastText: "black",
    },
    error: {
        light: red[100],
        main: "#FF3014",
        dark: red[500],
        contrastText: "black",
    },
    text: {
        primary: substrateGray[900],
        secondary: "#fff",
        disabled: grey[300],
        hint: grey[700],
    },
    action: {
        active: substrateGreen[300],
    },
    divider: grey[300],
};
const paletteDark = {
    type: "dark",
    common: {
        black: "black",
        white: "#FFFFFF",
    },
    background: {
        paper: substrateGray[800],
        default: "black",
    },
    primary: {
        light: substrateGreen[100],
        main: substrateGreen[400],
        dark: substrateGreen[500],
        contrastText: "black",
    },
    secondary: {
        light: substrateGreen[100],
        main: substrateGreen[400],
        dark: substrateGreen[500],
        contrastText: "black",
    },
    error: {
        light: red[100],
        main: "#FF3014",
        dark: red[500],
        contrastText: "black",
    },
    text: {
        primary: substrateGray[200],
        secondary: substrateGray[600],
        disabled: grey[300],
        hint: grey[300],
    },
    action: {
        active: substrateGreen[300],
    },
    divider: grey[600],
};
const light = {
    typography: {
        allVariants: {
            color: paletteLight.text && paletteLight.text.primary,
        },
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, Segoe UI, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Web3-Regular"',
        h1: {
            fontWeight: 500,
            fontSize: 30,
            lineHeight: "115%",
            letterSpacing: "-0.02em",
        },
        h2: {
            fontWeight: 600,
            fontSize: 21,
            lineHeight: "120%",
        },
        h3: {
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "120%",
        },
        h4: {
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "120%",
            color: grey[800],
        },
        body1: {
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "140%",
            color: grey[800],
        },
        body2: {
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "135%",
            letterSpacing: 0.25,
        },
        button: {
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "120%",
            letterSpacing: 0.2,
            textTransform: "none",
        },
        subtitle1: {
            fontFamily: "SFMono-Regular, Consolas , Liberation Mono, Menlo, monospace",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "120%",
        },
        subtitle2: {
            fontFamily: "SFMono-Regular, Consolas , Liberation Mono, Menlo, monospace",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "135%",
            color: grey[700],
            letterSpacing: 0.1,
        },
        overline: {
            fontSize: 11,
            lineHeight: "120%",
            letterSpacing: 0.7,
        },
    },
    palette: paletteLight,
};
export default light;
export const dark = {
    typography: {
        allVariants: {
            color: paletteDark.text && paletteDark.text.primary,
        },
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, Segoe UI, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Web3-Regular"',
        h1: {
            fontWeight: 500,
            fontSize: 30,
            lineHeight: "115%",
            letterSpacing: "-0.02em",
        },
        h2: {
            fontWeight: 600,
            fontSize: 21,
            lineHeight: "120%",
            color: grey[200],
        },
        h3: {
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "120%",
        },
        h4: {
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "120%",
            color: grey[400],
        },
        body1: {
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "140%",
            color: grey[200],
        },
        body2: {
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "135%",
            letterSpacing: 0.25,
        },
        button: {
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "120%",
            letterSpacing: 0.2,
            textTransform: "none",
        },
        subtitle1: {
            fontFamily: "SFMono-Regular, Consolas , Liberation Mono, Menlo, monospace",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "120%",
        },
        subtitle2: {
            fontFamily: "SFMono-Regular, Consolas , Liberation Mono, Menlo, monospace",
            fontWeight: 400,
            fontSize: 13,
            lineHeight: "135%",
            letterSpacing: 0.1,
        },
        overline: {
            fontSize: 11,
            lineHeight: "120%",
            letterSpacing: 0.7,
        },
    },
    palette: paletteDark,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy90aGVtZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxJQUFJLE1BQU0sK0JBQStCLENBQUE7QUFDaEQsT0FBTyxHQUFHLE1BQU0sOEJBQThCLENBQUE7QUFFOUMsOEJBQThCO0FBRTlCLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRztJQUM1QixHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLFNBQVM7SUFDZCxHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLFNBQVM7Q0FDZixDQUFBO0FBQ0QsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBQzNCLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLFNBQVM7SUFDZCxHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLFNBQVM7SUFDZCxHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRSxTQUFTO0NBQ2YsQ0FBQTtBQUVELE1BQU0sWUFBWSxHQUFtQjtJQUNuQyxJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRTtRQUNOLEtBQUssRUFBRSxPQUFPO1FBQ2QsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsU0FBUztRQUNoQixPQUFPLEVBQUUsU0FBUztLQUNuQjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDO1FBQzFCLElBQUksRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQUksRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDO1FBQ3pCLFlBQVksRUFBRSxPQUFPO0tBQ3RCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsS0FBSyxFQUFFLGNBQWMsQ0FBQyxHQUFHLENB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