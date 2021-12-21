import {createContext} from "react";
import {List} from "../lib/classes/List";

export const AppContext = createContext({
    user: {},
    userLists: [new List()],
    currentList: new List(),
});