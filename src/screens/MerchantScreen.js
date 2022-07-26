import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import back from '../../assets/icons/back.png'

export default function MerchantScreen({ route }) {
	const { merchant } = route.params
	const navigation = useNavigation()
	return (
		<>
			<StatusBar barStyle='dark-content'/>
			<SafeAreaView>
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 10 }}>
					<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
						<Image source={back} style={{ width: 30, height: 30 }}/>
					</TouchableOpacity>
				</View>
				<View style={{ paddingHorizontal: 30 }}>
					<Image source={{ uri: merchant.logo }} style={{ width: 120, height: 120}}/>
					<Text style={{ fontSize: 32, fontWeight: 'bold', marginTop: 36}}>{merchant.name}</Text>
					<Text style={{ fontSize: 24, marginTop: 6, opacity: 0.6 }}>{merchant.location}</Text>
					<Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 36, opacity: 0.6 }}>Discounts</Text>
					<View style={{ width: '100%', height: 60, backgroundColor: '#666', marginTop: 16, borderRadius: 12, display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
						<View style={{ width: '33.33333%', height: 60, backgroundColor: '#cd7f32', justifyContent: 'center', paddingHorizontal: 15 }}>
							<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff'}}>{merchant.discounts[1]}%</Text>
						</View>
						<View style={{ width: '33.33333%', height: 60, backgroundColor: '#c3c7c7', justifyContent: 'center', paddingHorizontal: 15 }}>
							<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000'}}>{merchant.discounts[2]}%</Text>
						</View>
						<View style={{ width: '33.33333%', height: 60, backgroundColor: '#ffba15', justifyContent: 'center', paddingHorizontal: 15 }}>
							<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000'}}>{merchant.discounts[3]}%</Text>
						</View>
					</View>
					<Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 36, opacity: 0.6 }}>Terms</Text>
					{
						merchant.terms.map((t, i) => (
							<Text key={i} style={{ fontSize: 18, lineHeight: 16*1.618, marginTop: 12 }}>{i+1}. {t}</Text>
						))
					}
				</View>
			</SafeAreaView>
		</>
	)
}