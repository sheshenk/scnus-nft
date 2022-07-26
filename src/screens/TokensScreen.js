import { useNavigation } from "@react-navigation/native";
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import back from '../../assets/icons/back.png'
import { SAMPLE_TOKENS } from "../constants/sampleData";

const TokenItem = (props) => {
	const viewportWidth = Dimensions.get('window').width
	const navigation = useNavigation()
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Token', { token: props.token })} activeOpacity={0.8} style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 12 }}>
			<View style={{ width: 100, height: 100, shadowColor: '#000', shadowOffset: { width: 0, height: 4}, shadowOpacity: 0.3, shadowRadius: 10}}>
				<Image source={{ uri: props.token.image }} style={{ width: 100, height: 100, borderRadius: 8 }}/>
			</View>
			<View style={{ paddingVertical: 10, paddingHorizontal: 20, width: viewportWidth - 140 }}>
				<Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.token.name}</Text>
				<Text style={{ marginTop: 8 }} numberOfLines={3}>{props.token.description}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default function TokensScreen() {
	const navigation = useNavigation()
	return (
		<>
			<SafeAreaView style={{ backgroundColor: '#ecf0f1' }}>
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
					<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
						<Image source={back} style={{ width: 30, height: 30 }}/>
					</TouchableOpacity>
					<Text style={{ marginLeft: 12, fontSize: 20, fontWeight: 'bold'}}>Your Tokens</Text>
				</View>
			</SafeAreaView>
			<FlatList
				contentContainerStyle={{ paddingVertical: 12, paddingBottom: 48 }} 
				data={SAMPLE_TOKENS}
				renderItem={({ item }) => <TokenItem token={item}/>}
				keyExtractor={i => i.hash}
				showsVerticalScrollIndicator={false}
			/>
		</>
	)
}