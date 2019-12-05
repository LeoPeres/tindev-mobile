import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage' 

import { Container, Logo, Input, Button, ButtonText } from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';

export default function Login({ navigation }) {
	const [user, setUser] = useState('');

	useEffect(()=>{
		AsyncStorage.getItem('_id').then(_id=>{
			if(_id){
				navigation.navigate("Main", {_id});
			}
		})
	},[]);

	async function handleLogin(){
		const response = await api.post("/devs", {
			user
		});

		const {_id} = response.data;
		
		await AsyncStorage.setItem('_id', _id);

		navigation.navigate("Main", {_id});
	}

	return(
		<Container>
			<Logo source={logo} /> 
			<Input 
				autoCapitalize="none" 
				autoCorrect={false}
				placeholder="Digite seu usuário do Github" 
				value={user}
				onChangeText={setUser}
			/>
			<Button onPress={handleLogin}>
				<ButtonText>Entrar</ButtonText>
			</Button>
		</Container>
	)
}
