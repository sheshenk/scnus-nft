import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useWalletConnect } from "react-native-walletconnect";
import { SAMPLE_USER } from "../constants/sampleUser";

export const UserContext = createContext({ 
	user: undefined, 
	setUser: (user) => user, 
	login: () => {} ,
	logout: () => {}
})

export default function UserContextProvider(props) {
	const [user, setUser] = useState(undefined)
	const { session, createSession, killSession } = useWalletConnect()
	const value = useMemo(() => (
		{ user, setUser, login: createSession, logout: killSession }
	), [user])
	useEffect(() => {
		if (session && !!session.length && !!session[0].accounts.length) {
			const address = session[0].accounts[0]
			setUser({...SAMPLE_USER, address})
		}
	}, [session, SAMPLE_USER, setUser])
	return (
		<UserContext.Provider value={value}>
			{props.children}
		</UserContext.Provider>
	)
}

export function useUserContext() {
	return useContext(UserContext)
}