import { Dispatch, SetStateAction } from "react";
export declare const useLocalStorage: (localStorageKey: string) => [string, Dispatch<SetStateAction<string>>];