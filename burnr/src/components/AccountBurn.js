import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { Grid, Button, makeStyles, createStyles, } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { AccountContext } from "../utils/contexts";
import { createLocalStorageAccount } from "../utils/utils";
import { useApi, useBalance, useLocalStorage } from "../hooks";
const useStyles = makeStyles((theme) => createStyles({
    redButton: {
        backgroundColor: theme.palette.error.main,
        color: "white",
        marginTop: theme.spacing(12),
        "&:hover": {
            backgroundColor: theme.palette.error.light,
        },
    },
}));
const AccountBurn = () => {
    var _a;
    const classes = useStyles();
    const api = useApi();
    const chainTokens = api.registry.chainTokens;
    const [endpoint] = useLocalStorage("endpoint");
    const minEndpoint = (_a = endpoint === null || endpoint === void 0 ? void 0 : endpoint.split("-")[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const [, setLclStorage] = useLocalStorage(minEndpoint);
    const { account, setCurrentAccount } = useContext(AccountContext);
    const balance = useBalance(account.userAddress);
    const burnAndCreate = () => {
        if (!balance[2] &&
            !window.confirm(`Burn keys from account with ${balance[0]} ${chainTokens.join("")}?`)) {
            return;
        }
        localStorage.removeItem(minEndpoint);
        const userTmp = createLocalStorageAccount();
        setLclStorage(JSON.stringify(userTmp));
        setCurrentAccount(userTmp);
    };
    return (_jsx(Grid, Object.assign({ container: true, justify: "center", alignItems: "center" }, { children: _jsx(Grid, Object.assign({ item: true }, { children: _jsx(Button, Object.assign({ variant: "contained", size: "large", className: classes.redButton, startIcon: _jsx(WhatshotIcon, {}), onClick: () => burnAndCreate() }, { children: "Burn" })) })) })));
};
export default AccountBurn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudEJ1cm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY2NvdW50QnVybi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBcUIsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBRXJELE9BQU8sRUFDTCxJQUFJLEVBQ0osTUFBTSxFQUNOLFVBQVUsRUFFVixZQUFZLEdBQ2IsTUFBTSxtQkFBbUIsQ0FBQTtBQUMxQixPQUFPLFlBQVksTUFBTSw2QkFBNkIsQ0FBQTtBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBRTlELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQzVDLFlBQVksQ0FBQztJQUNYLFNBQVMsRUFBRTtRQUNULGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ3pDLEtBQUssRUFBRSxPQUFPO1FBQ2QsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzVCLFNBQVMsRUFBRTtZQUNULGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLO1NBQzNDO0tBQ0Y7Q0FDRixDQUFDLENBQ0gsQ0FBQTtBQUVELE1BQU0sV0FBVyxHQUFzQixHQUFHLEVBQUU7O0lBQzFDLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFBO0lBRTNCLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFBO0lBQ3BCLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFBO0lBRTVDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDOUMsTUFBTSxXQUFXLEdBQUcsTUFBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsMENBQUUsV0FBVyxFQUFFLENBQUE7SUFDMUQsTUFBTSxDQUFDLEVBQUUsYUFBYSxDQUFDLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBRXRELE1BQU0sRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7SUFFakUsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUUvQyxNQUFNLGFBQWEsR0FBRyxHQUFTLEVBQUU7UUFDL0IsSUFDRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ2IsK0JBQStCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQ3JFLEVBQ0Q7WUFDQSxPQUFNO1NBQ1A7UUFDRCxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLHlCQUF5QixFQUFFLENBQUE7UUFDM0MsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM1QixDQUFDLENBQUE7SUFFRCxPQUFPLENBQ0wsS0FBQyxJQUFJLGtCQUFDLFNBQVMsUUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxRQUFRLGdCQUNsRCxLQUFDLElBQUksa0JBQUMsSUFBSSxzQkFDUixLQUFDLE1BQU0sa0JBQ0wsT0FBTyxFQUFDLFdBQVcsRUFDbkIsSUFBSSxFQUFDLE9BQU8sRUFDWixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFDNUIsU0FBUyxFQUFFLEtBQUMsWUFBWSxLQUFHLEVBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsMEJBR3ZCLElBQ0osSUFDRixDQUNSLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLFdBQVcsQ0FBQSJ9