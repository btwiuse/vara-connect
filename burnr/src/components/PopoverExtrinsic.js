import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { IconButton, Typography, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import CachedIcon from "@material-ui/icons/Cached";
import CheckIcon from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error";
const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: "none",
    },
    paper: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(-0.5),
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}));
const PopoverExtrinsic = ({ status, }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (_jsxs(_Fragment, { children: [_jsxs(IconButton, Object.assign({ onMouseEnter: handlePopoverOpen, onMouseLeave: handlePopoverClose }, { children: [status === 0 && _jsx(CachedIcon, { color: "disabled" }), status === 1 && _jsx(CheckIcon, { color: "action" }), status === 2 && _jsx(ErrorIcon, { color: "error" }), status === 3 && _jsx(CircularProgress, {})] })), _jsx(Popover, Object.assign({ elevation: 2, transitionDuration: 0, id: "mouse-over-popover", className: classes.popover, classes: {
                    paper: classes.paper,
                }, open: open, anchorEl: anchorEl, anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                }, transformOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                }, onClose: handlePopoverClose, disableRestoreFocus: true }, { children: _jsx(Typography, Object.assign({ variant: "body2" }, { children: "The content of the Popover, link to BlockExplorers" })) }))] }));
};
export default PopoverExtrinsic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wb3ZlckV4dHJpbnNpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BvcG92ZXJFeHRyaW5zaWMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXFCLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQVMsTUFBTSwwQkFBMEIsQ0FBQTtBQUM1RCxPQUFPLE9BQU8sTUFBTSwyQkFBMkIsQ0FBQTtBQUMvQyxPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQTtBQUNsRCxPQUFPLFNBQVMsTUFBTSwwQkFBMEIsQ0FBQTtBQUNoRCxPQUFPLFNBQVMsTUFBTSwwQkFBMEIsQ0FBQTtBQUloRCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFFLE1BQU07S0FDdEI7SUFDRCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekIsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDM0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUs7S0FDbEM7Q0FDRixDQUFDLENBQUMsQ0FBQTtBQUVILE1BQU0sZ0JBQWdCLEdBQXFDLENBQUMsRUFDMUQsTUFBTSxHQUNRLEVBQUUsRUFBRTtJQUNsQixNQUFNLE9BQU8sR0FBRyxTQUFTLEVBQUUsQ0FBQTtJQUMzQixNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBcUIsSUFBSSxDQUFDLENBQUE7SUFFbEUsTUFBTSxpQkFBaUIsR0FBRyxDQUN4QixLQUFnRCxFQUNoRCxFQUFFO1FBQ0YsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNsQyxDQUFDLENBQUE7SUFFRCxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtRQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkIsQ0FBQyxDQUFBO0lBRUQsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRTlCLE9BQU8sQ0FDTCw4QkFDRSxNQUFDLFVBQVUsa0JBQ1QsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsa0JBQWtCLGlCQUUvQixNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxVQUFVLEdBQUcsRUFDL0MsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFDLFNBQVMsSUFBQyxLQUFLLEVBQUMsUUFBUSxHQUFHLEVBQzVDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBQyxTQUFTLElBQUMsS0FBSyxFQUFDLE9BQU8sR0FBRyxFQUMzQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUMsZ0JBQWdCLEtBQUcsS0FDMUIsRUFDYixLQUFDLE9BQU8sa0JBQ04sU0FBUyxFQUFFLENBQUMsRUFDWixrQkFBa0IsRUFBRSxDQUFDLEVBQ3JCLEVBQUUsRUFBQyxvQkFBb0IsRUFDdkIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQzFCLE9BQU8sRUFBRTtvQkFDUCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7aUJBQ3JCLEVBQ0QsSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsUUFBUSxFQUNsQixZQUFZLEVBQUU7b0JBQ1osUUFBUSxFQUFFLEtBQUs7b0JBQ2YsVUFBVSxFQUFFLFFBQVE7aUJBQ3JCLEVBQ0QsZUFBZSxFQUFFO29CQUNmLFFBQVEsRUFBRSxRQUFRO29CQUNsQixVQUFVLEVBQUUsUUFBUTtpQkFDckIsRUFDRCxPQUFPLEVBQUUsa0JBQWtCLEVBQzNCLG1CQUFtQixzQkFFbkIsS0FBQyxVQUFVLGtCQUFDLE9BQU8sRUFBQyxPQUFPLHdFQUVkLElBQ0wsSUFDVCxDQUNKLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLGdCQUFnQixDQUFBIn0=