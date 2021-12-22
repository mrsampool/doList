import {createContext} from "react";
import {ListInterface} from '../lib/interfaces/ListInterface';
import {UserInterface} from '../lib/interfaces/User';
import {List}  from '../lib/classes/List';
import {User}  from '../lib/classes/User';

export type AppContext = {
    user: UserInterface,
    userLists: ListInterface[]
    currentList: ListInterface
    setCurrentList:(list:ListInterface) => void
}

export const AppContext = createContext<AppContext>({
    user: new User(),
    userLists: [new List()],
    currentList: new List(),
    setCurrentList(){}
});