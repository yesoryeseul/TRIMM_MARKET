import BasicButton from "components/Button";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";

/**
 *
 * 완료 상품 css 적용해야함
 * 호버시 쉐도우 주는거 적용해야함
 *
 */
const InterestEndProductList = ({ product, formatNumber }) => {
	return (
		<S.Container>
			<S.ProductContainer key={product.idx}>
				<img src={product.img_url} alt="판매상품" />
				<div>
					<div>
						<S.Wrapper>
							<S.TextP1>{product.title}</S.TextP1>
							<div>
								<BasicButton
									color={"white"}
									size={"xsmall"}
									children={"수정"}
									style={{
										fontSize: "14px",
										height: "28px",
										borderRadius: "6px",
										fontWeight: "600",
										border: "1px solid #dddddd",
									}}
								/>
								<BasicButton
									color={"primary"}
									size={"xsmall"}
									children={"삭제"}
									style={{
										fontSize: "14px",
										height: "28px",
										borderRadius: "6px",
										fontWeight: "600",
										marginLeft: "10px",
									}}
								/>
							</div>
						</S.Wrapper>
						<S.Wrapper2>
							<S.Wrapper3>
								<div>{product.status}</div>
							</S.Wrapper3>
							<div>
								<p>{formatNumber(product.price)}</p> <p>won</p>
							</div>
						</S.Wrapper2>
					</div>
					<TextBox2>
						<p>상품 보러가기 〉</p>
					</TextBox2>
				</div>
			</S.ProductContainer>
		</S.Container>
	);
};

export default InterestEndProductList;

const Container = styled.div`
	display: flex;
	${flexColumn}
	${flexCenter}
`;

const ProductContainer = styled.div`
	padding: 35px;
	margin-top: 30px;
	width: 962px;
	height: 270px;
	border: 1px solid #b6b6b6;
	border-radius: 6px;
	position: relative;
	${flexRow}
	img {
		width: 200px;
		height: 200px;
		border-radius: 6px;
		overflow: hidden;
		filter: brightness(40%);
	}
`;

const Title = styled.div`
	margin-top: 50px;
	font-size: 24px;
	font-weight: bold;
	color: black;
`;

const TextP1 = styled.p`
	text-decoration: line-through;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	${flexRow}
	display: flex;
	justify-content: space-between;
	width: 660px;
`;
const Wrapper2 = styled.div`
	margin-left: 30px;
	${flexRow}
	width: 660px;
	div {
		${flexRow}
	}
`;
const Wrapper3 = styled.div`
	${flexRow}
	align-items:center;
	width: 90px;
	height: 40px;
	border: 1px solid rgb(221, 221, 221);
	border-radius: 4px;
	padding: 1rem;
	margin-right: 20px;
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
`;

const TextBox2 = styled.div`
	position: absolute;
	left: 825px;
	top: 214px;
`;

const ToggleBox = styled.div`
	margin-top: 50px;
`;
const ToggleBox2 = styled.div`
	width: 105px;
	height: 32px;
`;

const S = {
	Title,
	TextP1,
	Container,
	ProductContainer,
	Wrapper,
	Wrapper2,
	Wrapper3,
	RowBox,
	ToggleBox,
	ToggleBox2,
};
