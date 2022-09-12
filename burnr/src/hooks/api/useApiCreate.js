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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQXBpQ3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2hvb2tzL2FwaS91c2VBcGlDcmVhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkMsT0FBTyxFQUNMLFVBQVUsR0FFWCxNQUFNLDBDQUEwQyxDQUFBO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRW5ELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUU5QixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsR0FBZSxFQUFFO0lBQzNDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFhLEVBQWdCLENBQUMsQ0FBQTtJQUU1RCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFTLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM5QyxNQUFNLFVBQVUsR0FBRyxlQUFlLEVBQUUsQ0FBQTtJQUVwQyxTQUFTLENBQUMsR0FBUyxFQUFFO1FBQ25CLE1BQU0sWUFBWSxHQUFHLENBQU8sUUFBZ0IsRUFBaUIsRUFBRTtZQUM3RCxJQUFJO2dCQUNGLE1BQU0sUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLFFBQTBCLENBQUMsQ0FBQTtnQkFDM0QsTUFBTSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ3hCLE1BQU0sR0FBRyxHQUFHLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ2pELENBQUMsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQzlDLFVBQVUsQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ2xDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7YUFDdkI7UUFDSCxDQUFDLENBQUEsQ0FBQTtRQUVELEtBQUssWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzVCLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBRXpCLE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQyxDQUFBIn0=