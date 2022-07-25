import { FlatList } from "react-native";
import RecentTokenItem from "./RecentTokenItem";

const images = [
	"https://picsum.photos/seed/abc/200",
	"https://picsum.photos/seed/def/200",
	"https://picsum.photos/seed/ghi/200",
	"https://picsum.photos/seed/jkl/200"
]

export default function RecentTokenList() {
	return (
		<FlatList 
			contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 24 }} 
			horizontal 
			data={images} 
			renderItem={({ item }) => <RecentTokenItem token={item}/>}
			keyExtractor={i => i}
			style={{ maxHeight: 210 }}
			showsHorizontalScrollIndicator={false}
		/>
	)
}