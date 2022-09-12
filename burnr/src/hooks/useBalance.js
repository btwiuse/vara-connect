import BN from "bn.js";
import { useEffect, useState } from "react";
import { formatBalance, logger } from "@polkadot/util";
import { BURNR_WALLET } from "../utils/constants";
import { useApi } from "./api/useApi";
import { useIsMountedRef } from "./api/useIsMountedRef";
const ZERO = new BN(0);
export const useBalance = (address) => {
    const api = useApi();
    const [state, setState] = useState([
        "0",
        new BN(ZERO),
        true,
        "-",
    ]);
    const mountedRef = useIsMountedRef();
    useEffect(() => {
        const l = logger(BURNR_WALLET);
        let unsubscribe = null;
        address &&
            api.query.system
                .account(address, ({ data }) => {
                mountedRef.current &&
                    setState([
                        formatBalance(data.free, {
                            decimals: api.registry.chainDecimals[0],
                            forceUnit: "-",
                            withSi: false,
                        }),
                        data.free,
                        data.free.isZero(),
                        data.free.registry.chainTokens[0],
                    ]);
            })
                .then((u) => {
                unsubscribe = u;
            })
                .catch(l.error);
        return () => {
            unsubscribe && unsubscribe();
        };
    }, [address, api, mountedRef]);
    return state;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQmFsYW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob29rcy91c2VCYWxhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUN0QixPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBR3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFBO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUl2RCxNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUV0QixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFlLEVBQVMsRUFBRTtJQUNuRCxNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtJQUNwQixNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBUTtRQUN4QyxHQUFHO1FBQ0gsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFZO1FBQ3ZCLElBQUk7UUFDSixHQUFHO0tBQ0osQ0FBQyxDQUFBO0lBQ0YsTUFBTSxVQUFVLEdBQUcsZUFBZSxFQUFFLENBQUE7SUFDcEMsU0FBUyxDQUFDLEdBQWlCLEVBQUU7UUFDM0IsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzlCLElBQUksV0FBVyxHQUF3QixJQUFJLENBQUE7UUFDM0MsT0FBTztZQUNMLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTTtpQkFDYixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQWUsRUFBUSxFQUFFO2dCQUNoRCxVQUFVLENBQUMsT0FBTztvQkFDaEIsUUFBUSxDQUFDO3dCQUNQLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUN2QixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxTQUFTLEVBQUUsR0FBRzs0QkFDZCxNQUFNLEVBQUUsS0FBSzt5QkFDZCxDQUFDO3dCQUNGLElBQUksQ0FBQyxJQUFJO3dCQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3FCQUNsQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFRLEVBQUU7Z0JBQ2hCLFdBQVcsR0FBRyxDQUFDLENBQUE7WUFDakIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFbkIsT0FBTyxHQUFTLEVBQUU7WUFDaEIsV0FBVyxJQUFJLFdBQVcsRUFBRSxDQUFBO1FBQzlCLENBQUMsQ0FBQTtJQUNILENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUU5QixPQUFPLEtBQUssQ0FBQTtBQUNkLENBQUMsQ0FBQSJ9