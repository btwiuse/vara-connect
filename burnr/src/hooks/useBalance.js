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
//# sourceMappingURL=useBalance.js.map