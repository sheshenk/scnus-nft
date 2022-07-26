import { NavigationContainer } from "@react-navigation/native";
import WalletConnectProvider from "react-native-walletconnect";
import AppWrapper from "./AppWrapper";
import UserContextProvider from "./src/services/userContextProvider";

export default function App() {
	return (
		<WalletConnectProvider>
				<NavigationContainer>
					<UserContextProvider>
						<AppWrapper/>
					</UserContextProvider>
				</NavigationContainer>
		</WalletConnectProvider>
	)
}