import { FlatList } from "react-native";
import { useUserContext } from "../../services/userContextProvider";
import RecentTokenItem from "./RecentTokenItem";

export default function RecentTokenList() {
	const { user } = useUserContext()
	if (!user) return <></>
	return (
		<FlatList 
			contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 24, paddingBottom: 48 }} 
			horizontal 
			data={user.ownedTokens.slice(0, 3)} 
			renderItem={({ item }) => <RecentTokenItem token={item}/>}
			keyExtractor={i => i.hash}
			style={{ maxHeight: 210 }}
			showsHorizontalScrollIndicator={false}
		/>
	)
}