import { productList } from "mock/productsList";
import { userList } from "mock/userList";
import styled from "styled-components";
import { primaryFont } from "styles/common";
import MyProfile from "./components/my-profile";

const Mypage = () => {
	const UserList = userList.filter(user => user.id === 0);
	const ProductList = productList?.filter(
		product => product.status === "판매중" && product.user === 9,
	);
	const ProductListStatusEnd = productList?.filter(
		productEnd => productEnd.status === "판매완료" && productEnd.user === 9,
	);
	const ProductListStatusEndUser1 = productList?.filter(
		productEnd => productEnd.status === "판매완료" && productEnd.user === 1,
	);

	if (!UserList) {
		return <EmptyData />;
	}
	return (
		<S.MypageContainer>
			<MyProfile userList={UserList} />
			<S.DivisionLine />

			{/* {ProductList && (
				<>
					<RegisterProduct
						productList={ProductList}
						productListStatusEnd={ProductListStatusEnd}
					/>
					<HouseKeeping />
					<TransactionHistory
						productList={ProductList}
						productListStatusEnd={ProductListStatusEnd}
					/>

					<InterestProduct
						productList={ProductList}
						productListStatusEnd={ProductListStatusEnd}
					/>
				</>
			)}
			{ProductListStatusEndUser1 && (
				<PurchasedItem productList={ProductListStatusEndUser1} />
			)}
			<TransactionHistory />
			<Review /> */}
		</S.MypageContainer>
	);
};

export default Mypage;

const MypageContainer = styled.div`
	width: 962px;
	margin: 0 auto;
	padding: 20px 0;
	${primaryFont}
`;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin: 0 auto;
`;

const S = {
	MypageContainer,
	DivisionLine,
};
