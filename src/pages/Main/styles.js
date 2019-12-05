import styled from 'styled-components';

export const Container = styled.View`
	flex: 1;
	background-color: #f5f5f5;
	align-items: center;
	position: relative;
`;

export const ListContainer = styled.View`
	flex: 1;
	align-self: stretch;
	justify-content: space-between;
	align-content: center;
	max-height: 500;
`;

export const ListItem = styled.View`
	margin: 30px;
	position: absolute;
	flex: 1;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	${props =>
		props.priority &&
		`
		z-index: ${props.priority};
	`}
`;

export const Avatar = styled.Image`
	width: 300;
	height: 300;
	border-top-right-radius: 5;
	border-top-left-radius: 5;
`;

export const Footer = styled.View`
	background: #fff;
	border: 1px solid #eee;
	padding: 15px 20px;
	text-align: center;
	height: 120px;
	border-bottom-right-radius: 5;
	border-bottom-left-radius: 5;
`;

export const Name = styled.Text`
	font-size: 16px;
	color: #333;
`;

export const Bio = styled.Text`
	font-size: 14px;
	line-height: 20px;
	color: #999;
	margin-top: 5px;
`;

export const ButtonsContainer = styled.View`
	margin-top: 10px;
	align-items: center;
	justify-content: space-around;
	flex-direction: row;
	flex: 1;
`;

export const Button = styled.TouchableOpacity`
	border: 0;
	background: #fff;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 50px;
	border-radius: 25;
`;

export const Empty = styled.Text`
	font-size: 32px;
	color: #999;
	margin-top: 200px;
`;

export const MatchContainer = styled.View`
	position: absolute;
	z-index: 999;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.8);
`;

export const MatchAvatar = styled.Image`
	width: 200px;
	height: 200px;
	border-radius: 100;
	border: 2px solid #fff;
`;

export const MatchName = styled.Text`
	font-size: 32px;
	color: #fff;
`;

export const MatchBio = styled.Text`
	margin-top: 20px;
	font-size: 20px;
	line-height: 30px;
	max-width: 400px;
	color: rgba(255, 255, 255, 0.8);
`;

export const MatchClose = styled.TouchableOpacity`
	border: 0;
`;

export const MatchCloseText = styled.Text`
	color: rgba(255, 255, 255, 0.8);
	font-size: 18px;
	margin-top: 30px;
`;
