import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatItem from "./Item";
import ChatQueryApi from "apis/chat.api.query";
import getUserData from "utils/getUserData";

const ChatList = ({ setTargetChat, targetChat }) => {
	const { data } = ChatQueryApi.getChatList();
	console.log("chat", data);

	// 로그인한 User의 정보 가져옴
	let nick_name;
	const DATA = getUserData();
	if (DATA) nick_name = DATA.nick_name;

	// 물품 판매자 데이터를 통해 비교
	const sellChat = data?.chats.filter(
		chat => chat.User.nick_name === nick_name,
	);
	const buyChat = data?.chats.filter(chat => chat.User.nick_name !== nick_name);

	// localstorage에는 값이 string으로 저장됨
	const [isSell, SetIsSell] = useState(
		window.localStorage.getItem("isSell") === "true",
	);

	// 새로고침 시 탭 유지되도록 localstorage에 저장
	useEffect(() => {
		window.localStorage.setItem("isSell", isSell);
	}, [isSell]);

	return (
		<S.Container>
			<S.Header>
				<S.Sell isSell={isSell} onClick={() => SetIsSell(true)}>
					판매 내역
				</S.Sell>
				<S.Buy isSell={isSell} onClick={() => SetIsSell(false)}>
					구매 내역
				</S.Buy>
			</S.Header>
			<S.Main>
				{isSell ? (
					<S.Chatlist className="sell">
						{sellChat?.length > 0 ? (
							sellChat.map(chat => (
								<ChatItem
									key={chat.idx}
									chat={chat}
									setTargetChat={setTargetChat}
									targetChat={targetChat}
								/>
							))
						) : (
							<S.NoChat>
								채팅 내역이 없습니다. 새로운 거래를 시작해보세요!
							</S.NoChat>
						)}
					</S.Chatlist>
				) : (
					<S.Chatlist className="buy">
						{buyChat?.length > 0 ? (
							buyChat.map(chat => (
								<ChatItem
									key={chat.idx}
									chat={chat}
									setTargetChat={setTargetChat}
									targetChat={targetChat}
								/>
							))
						) : (
							<S.NoChat>
								채팅 내역이 없습니다. 새로운 거래를 시작해보세요!
							</S.NoChat>
						)}
					</S.Chatlist>
				)}
			</S.Main>
		</S.Container>
	);
};

export default ChatList;

const Container = styled.div`
	width: 450px;
	height: 580px;
	border-left: 1px solid #ebebeb;
	border-bottom: 1px solid #ebebeb;
	border-top: 1px solid #ebebeb;
	margin: 100px auto;
`;

const Header = styled.div`
	width: 450px;
	height: 60px;
	display: flex;
	div {
		cursor: pointer;
		:hover {
			opacity: 0.6;
		}
	}
`;
const Sell = styled.div`
	background-color: ${({ theme, isSell }) =>
		isSell ? theme.PALETTE.primary : theme.PALETTE.gray};
	color: #ffffff;
	width: 225px;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const Buy = styled.div`
	background-color: ${({ theme, isSell }) =>
		!isSell ? theme.PALETTE.primary : theme.PALETTE.gray};
	color: #ffffff;
	width: 225px;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const Main = styled.div`
	width: 900px;
	display: flex;
`;

const Chatlist = styled.div`
	width: 450px;
	height: 520px;
	align-items: center;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const NoChat = styled.div`
	text-align: center;
	color: ${({ theme }) => theme.PALETTE.gray};
	margin-top: 50px;
`;

const S = {
	Container,
	Header,
	Sell,
	Buy,
	Main,
	Chatlist,
	NoChat,
};
