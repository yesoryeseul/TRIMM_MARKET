import BasicButton from "components/Button";
import ProductList from "components/ProductList";
import RecentlyClicked from "components/RecentlyClicked/RecentlyClicked";
import BasicSelect from "components/Select";
import { productList } from "mock/productsList";
import { useState } from "react";
import styled from "styled-components";
import { primaryFont } from "styles/common";

const FreeTransaction = () => {
	const PRODUCTLIST = productList.filter(
		product => product.status !== "판매완료" && !product.category,
	);
	const [filterdProducts, setFilterdProducts] = useState(PRODUCTLIST);

	const onFiltering = value => {
		let filteredList = [...PRODUCTLIST];

		if (value === "등록순") {
			filteredList.sort((a, b) => a.date - b.date);
		} else if (value === "인기순") {
			filteredList.sort((a, b) => b.bookmarkCount - a.bookmarkCount);
		}

		setFilterdProducts(filteredList);
	};

	const options = [
		{ value: "등록순", label: "등록순" },
		{ value: "인기순", label: "인기순" },
	];

	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>
					우리 동네 <span>무료</span> 나눔
				</S.Title>
				<S.Address>
					<div>
						서울시 성동구 성수동{" "}
						<BasicButton
							color={"primary"}
							size={"xsmall"}
							children={"변경"}
							style={{ fontSize: "14px", marginLeft: "15px" }}
						/>
					</div>
					<BasicSelect
						variant={"primary"}
						options={options}
						selectedValue={"등록순"}
						onChange={onFiltering}
					/>
				</S.Address>
				<ProductList productList={filterdProducts} />
				<RecentlyClicked />
			</S.Wrapper>
		</S.Container>
	);
};
export default FreeTransaction;

const Container = styled.div`
	width: 100%;
	* {
		${primaryFont}
	}
`;

const Wrapper = styled.div`
	margin: 50px auto;
	max-width: 1060px;
`;

const Title = styled.p`
	text-align: center;
	margin-bottom: 50px;
	font-size: ${({ theme }) => theme.FONT_SIZE.mmlarge};
	& span {
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
	}
`;

const Address = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 12px;
	margin: 12px 0;
	& button {
		color: ${({ theme }) => theme.PALETTE.white};
	}
`;

const S = {
	Container,
	Wrapper,
	Title,
	Address,
};
