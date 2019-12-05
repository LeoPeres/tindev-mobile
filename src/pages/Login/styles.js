import styled from 'styled-components';

export const Container = styled.View`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
    max-width: 95%;
    width: 100%;
    margin: 0 auto;
`;

export const Logo = styled.Image`

`;


export const Input = styled.TextInput`
    align-self: stretch;
	margin-top: 20px;
	border: 1px solid #ddd;
	border-radius: 4px;
	height: 48px;
	padding: 0 20px;
	font-size: 16px;
	color: #666;
	::placeholder {
		color: #999;
	}
`;

export const Button = styled.TouchableOpacity`
    align-self: stretch;
	margin-top: 10px;
	border: 0;
	border-radius: 4px;
	height: 48px;
	background: #df4723;
    align-content: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
	color: #fff;
    text-align: center;
`;
