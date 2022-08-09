import { uniqueNamesGenerator, starWars } from "unique-names-generator";
import { mnemonicGenerate } from "@polkadot/util-crypto";
import { Keyring } from "@polkadot/api";
import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import { hexToU8a, isHex } from "@polkadot/util";
import { formatBalance } from "@polkadot/util";
import { NETWORK } from "./constants";
const keyring = new Keyring({ type: "sr25519" });
const config = {
    dictionaries: [starWars],
};
export const getName = (account) => `${account.name}`;
export const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow)
        newWindow.opener = null;
};
export const downloadFile = (fileName, data, type) => {
    const anchor = window.document.createElement("a");
    anchor.href = window.URL.createObjectURL(new Blob([data], { type: `application/${type}` }));
    anchor.download = `${type === "txt" ? "seedphrase-" : ""}${fileName}.${type}`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
};
export const createLocalStorageAccount = () => {
    const mnemonic = mnemonicGenerate(12);
    const pair = keyring.addFromMnemonic(mnemonic, { name: uniqueNamesGenerator(config) }, "sr25519");
    return {
        userAddress: pair.address,
        userName: pair.meta.name || "____ _____",
        userSeed: mnemonic,
        userJson: pair.toJson,
        userHistory: [],
    };
};
export const isEmpty = (obj) => typeof obj === "object" &&
    obj !== null &&
    Object.keys(obj).length === 0 &&
    obj.constructor === Object;
export const copyToClipboard = (text) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
};
export const getKeyring = () => keyring;
export const transformCurrency = (currencyLevel, currency) => (currencyLevel !== "-" ? currencyLevel.concat(currency) : currency);
export const isValidAddressPolkadotAddress = (address = "") => {
    try {
        encodeAddress(isHex(address) ? hexToU8a(address.toString()) : decodeAddress(address));
        return true;
    }
    catch (error) {
        return false;
    }
};
/*
 * format once with @polkadot/util formatBalance,
 * then strip the trailing Unit and make it to 2 decimal points
 */
export const prettyBalance = (rawBalance) => {
    if ((typeof rawBalance === "number" && rawBalance === 0) || !rawBalance) {
        return "0";
    }
    else if (rawBalance.toString() === "0") {
        return rawBalance.toString();
    }
    // Use `api.registry.chainDecimals` instead of decimals
    const firstPass = formatBalance(rawBalance, {
        decimals: 12,
        forceUnit: "-",
        withSi: false,
    });
    return firstPass.slice(0, firstPass.length - 1);
};
export const humanReadable = (amnt, api) => (amnt / Math.pow(10, api.registry.chainDecimals[0])).toFixed(4);
export const validateLocalstorage = () => {
    // expected acceptable values of localStorage.
    // Add type info to avoid having to cast
    const expectedValues = {
        theme: ["true", "false"],
        balanceVisibility: ["true", "false"],
        endpoint: [NETWORK.id],
    };
    Object.keys(expectedValues).forEach((key) => {
        if (!Object.keys(localStorage).includes(key)) {
            return;
        }
        if (!expectedValues[key].includes(localStorage[key])) {
            localStorage.removeItem(key);
        }
    });
};
//# sourceMappingURL=utils.js.map