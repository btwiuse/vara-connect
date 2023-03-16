var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState } from "react";
import { ApiPromise } from "@polkadot/api";
import { logger } from "@polkadot/util";
import { ScProvider, } from "@polkadot/rpc-provider/substrate-connect";
import { NETWORK, BURNR_WALLET } from "../../utils/constants";
import { useIsMountedRef } from "./useIsMountedRef";
const l = logger(BURNR_WALLET);
export const useApiCreate = () => {
    const [api, setApi] = useState({});
    const [network] = useState(NETWORK.id);
    const mountedRef = useIsMountedRef();
    useEffect(() => {
        const choseSmoldot = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const provider = new ScProvider(endpoint);
                yield provider.connect();
                const api = yield ApiPromise.create({ provider });
                l.log(`Burnr is now connected to ${endpoint}`);
                mountedRef.current && setApi(api);
            }
            catch (err) {
                l.error("Error:", err);
            }
        });
        void choseSmoldot(network);
    }, [mountedRef, network]);
    return api;
};
//# sourceMappingURL=useApiCreate.js.map