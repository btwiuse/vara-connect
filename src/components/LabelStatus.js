import * as React from "react";
import { Button, makeStyles } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const useStyles = makeStyles((theme) => ({
    root: {
        width: "345px !important",
        paddingLeft: theme.spacing(10),
    },
}));
const LabelStatus = ({ status }) => {
    const classes = useStyles();
    return (React.createElement(Button, { className: `${classes.root} ${status}`, variant: "contained", disabled: true, startIcon: React.createElement(FiberManualRecordIcon, null) }, status));
};
export default LabelStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFiZWxTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9MYWJlbFN0YXR1cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDOUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUN0RCxPQUFPLHFCQUFxQixNQUFNLHNDQUFzQyxDQUFBO0FBRXhFLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUMvQjtDQUNGLENBQUMsQ0FBQyxDQUFBO0FBS0gsTUFBTSxXQUFXLEdBQXlDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFBO0lBQzNCLE9BQU8sQ0FDTCxvQkFBQyxNQUFNLElBQ0wsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUUsRUFDdEMsT0FBTyxFQUFDLFdBQVcsRUFDbkIsUUFBUSxRQUNSLFNBQVMsRUFBRSxvQkFBQyxxQkFBcUIsT0FBRyxJQUVuQyxNQUFNLENBQ0EsQ0FDVixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsZUFBZSxXQUFXLENBQUEifQ==