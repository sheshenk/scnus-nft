import { FlatList } from "react-native";
import { SAMPLE_TOKENS } from "../../constants/sampleData";
import RecentTokenItem from "./RecentTokenItem";

export default function RecentTokenList() {
	return (
		<FlatList 
			contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 24, paddingBottom: 48 }} 
			horizontal 
			data={SAMPLE_TOKENS.slice(0, 3)} 
			renderItem={({ item }) => <RecentTokenItem token={item}/>}
			keyExtractor={i => i.hash}
			style={{ maxHeight: 210 }}
			showsHorizontalScrollIndicator={false}
		/>
	)
}