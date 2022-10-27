import { Balance } from "@polkadot/types/interfaces";
declare type State = [string, Balance, boolean, string];
export declare const useBalance: (address: string) => State;
export {};
