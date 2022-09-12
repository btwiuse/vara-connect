import colors from "./colors";
import typography from "./typography";
import shadows from "./shadows";
import { grey } from "@material-ui/core/colors";
const dark = {
    typography: typography.typography,
    shadows: shadows.shadows,
    palette: {
        type: "dark",
        common: {
            black: colors.black,
            white: colors.white,
        },
        background: {
            paper: "#21262A",
            default: colors.dark.dark,
        },
        primary: {
            light: colors.substrate.dark,
            main: colors.cyan.main,
            dark: colors.cyan.dark,
            contrastText: colors.black,
        },
        secondary: {
            light: colors.pink.light,
            main: "#FFFFFF",
            dark: "#FF3014",
            contrastText: colors.white,
        },
        error: {
            light: "rgba(247, 4, 7, 1)",
            main: "rgba(235, 4, 7, 1)",
            dark: "rgba(197, 5, 8, 1)",
            contrastText: colors.paper,
        },
        text: {
            primary: colors.white,
            secondary: colors.light.main,
            disabled: colors.dark.light,
            hint: colors.yellow.main,
        },
        divider: grey[800],
    },
};
export default dark;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90aGVtZXMvc3Vic3RyYXRlL2RhcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFBO0FBQzdCLE9BQU8sVUFBVSxNQUFNLGNBQWMsQ0FBQTtBQUNyQyxPQUFPLE9BQU8sTUFBTSxXQUFXLENBQUE7QUFDL0IsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBCQUEwQixDQUFBO0FBRS9DLE1BQU0sSUFBSSxHQUFpQjtJQUN6QixVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7SUFDakMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO0lBQ3hCLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztTQUNwQjtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7U0FDMUI7UUFDRCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJO1lBQzVCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDdEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUN0QixZQUFZLEVBQUUsTUFBTSxDQUFDLEtBQUs7U0FDM0I7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3hCLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFFLFNBQVM7WUFDZixZQUFZLEVBQUUsTUFBTSxDQUFDLEtBQUs7U0FDM0I7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixZQUFZLEVBQUUsTUFBTSxDQUFDLEtBQUs7U0FDM0I7UUFDRCxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDckIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQzNCLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7U0FDekI7UUFDRCxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUNuQjtDQUNGLENBQUE7QUFFRCxlQUFlLElBQUksQ0FBQSJ9