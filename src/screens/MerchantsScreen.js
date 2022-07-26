import { useNavigation } from "@react-navigation/native"
import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import back from '../../assets/icons/back.png'
import { SAMPLE_MERCHANTS } from "../constants/sampleMerchants"

const MerchantItem = (props) => {
	const viewportWidth = Dimensions.get('window').width
	const navigation = useNavigation()
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Merchant', { merchant: props.merchant })} activeOpacity={0.8} style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 12 }}>
			<View style={{ width: 70, height: 70, shadowColor: '#000', shadowOffset: { width: 0, height: 4}, shadowOpacity: 0.3, shadowRadius: 10}}>
				<Image source={{ uri: props.merchant.logo }} style={{ width: 70, height: 70, borderRadius: 8 }}/>
			</View>
			<View style={{ paddingVertical: 10, paddingHorizontal: 30, width: viewportWidth - 110 }}>
				<Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.merchant.name}</Text>
				<Text style={{ marginTop: 4 }}>{props.merchant.location}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default function MerchantsScreen() {
	const navigation = useNavigation()
	return (
		<>
			<StatusBar barStyle='dark-content'/>
			<SafeAreaView style={{ backgroundColor: '#ecf0f1' }}>
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
					<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
						<Image source={back} style={{ width: 30, height: 30 }}/>
					</TouchableOpacity>
					<Text style={{ marginLeft: 12, fontSize: 20, fontWeight: 'bold'}}>Participating Merchants</Text>
				</View>
			</SafeAreaView>
			<FlatList
				contentContainerStyle={{ paddingVertical: 12, paddingBottom: 48 }} 
				data={SAMPLE_MERCHANTS}
				renderItem={({ item }) => <MerchantItem merchant={item}/>}
				keyExtractor={i => i.logo}
				showsVerticalScrollIndicator={false}
			/>
		</>
	)
}