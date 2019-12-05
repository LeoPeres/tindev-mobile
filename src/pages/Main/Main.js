import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Image } from 'react-native';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import itsamatch from '../../assets/itsamatch.png';

import {
	Container,
	ListContainer,
	ListItem,
	Avatar,
	Footer,
	Name,
	Bio,
	ButtonsContainer,
	Button,
	Empty,
	MatchContainer,
	MatchAvatar,
	MatchName,
	MatchBio,
	MatchClose,
	MatchCloseText
} from './styles';

export default function Main({ navigation }) {
	const [devs, setDevs] = useState([]);
	const [matchDev, setMatchDev] = useState(false);
	const _id = navigation.getParam('_id');

	useEffect(() => {
		async function loadUsers() {
			const response = await api.get('/devs', {
				headers: {
					user: _id
				}
			});

			setDevs(response.data);
		}

		loadUsers();
	}, [_id]);

	useEffect(() => {
		const socket = io('http://10.0.3.2:3333', {
			query: { user: _id }
		});

		socket.on('match', dev => {
			setMatchDev(dev);
		});
	}, [_id]);

	async function handleLogout() {
		await AsyncStorage.clear();

		navigation.navigate('Login');
	}

	async function handleLike(id) {
		await api.post(`/devs/${id}/likes`, null, {
			headers: {
				user: _id
			}
		});

		setDevs(prevDevs => prevDevs.filter(dev => dev._id !== id));
	}

	async function handleDislike(id) {
		await api.post(`/devs/${id}/dislikes`, null, {
			headers: {
				user: _id
			}
		});

		setDevs(prevDevs => prevDevs.filter(dev => dev._id !== id));
	}

	return (
		<Container>
			<TouchableOpacity onPress={handleLogout}>
				<Image source={logo} />
			</TouchableOpacity>

			{devs.length > 0 ? (
				<ListContainer>
					{devs.map((dev, index) => (
						<ListItem key={dev._id} priority={devs.length - index}>
							<Avatar source={{ uri: dev.avatar }} />
							<Footer>
								<Name>{dev.name}</Name>
								<Bio numberOfLines={3}>{dev.bio}</Bio>
							</Footer>

							<ButtonsContainer>
								<Button onPress={() => handleLike(dev._id)}>
									<Image source={like} />
								</Button>
								<Button onPress={() => handleDislike(dev._id)}>
									<Image source={dislike} />
								</Button>
							</ButtonsContainer>
						</ListItem>
					))}
				</ListContainer>
			) : (
				<Empty>Acabou :(</Empty>
			)}

			{matchDev && (
				<MatchContainer>
					<Image source={itsamatch} alt="match" />
					<MatchAvatar source={{ uri: matchDev.avatar }} />
					<MatchName>{matchDev.name}</MatchName>
					<MatchBio>{matchDev.bio}</MatchBio>
					<MatchClose type="button" onPress={() => setMatchDev(null)}>
						<MatchCloseText>Fechar</MatchCloseText>
					</MatchClose>
				</MatchContainer>
			)}
		</Container>
	);
}
