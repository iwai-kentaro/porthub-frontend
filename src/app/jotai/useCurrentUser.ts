import { atom, useAtom } from "jotai";

export const currentUserState = atom()

export const useCurrentUserState = () => {
    const [state, setState] = useAtom(currentUserState)

    return {
        setCurrentUser: setState,
        currentUser: state
    }
}