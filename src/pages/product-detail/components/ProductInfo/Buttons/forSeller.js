import styled from "styled-components";
import BasicButton from "components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import NoListModal from "../Modals/noList";
import SelectListModal from "../Modals/selectList";
import ProductApi from "apis/product.api";

const ButtonsForSeller = ({ chat, status }) => {
	const navigate = useNavigate();

	const { id } = useParams();

	const deleteProduct = () => {
		console.log(
			ProductApi.deleteProduct(id)
				.then(res => console.log("delete", res))
				.catch(err => console.error(err)),
		);
		navigate("/");
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const onOpenModal = () => {
		setIsModalOpen(true);
	};

	return (
		<>
			<S.ProductButtons>
				{status !== "판매완료" ? (
					<>
						<BasicButton
							color={"white"}
							size={"xxmedium"}
							children={"수정"}
							onClick={() => navigate("/productRegister")}
							style={{ fontSize: "20px", fontWeight: "bold" }}
						/>
						<BasicButton
							color={"black"}
							size={"xxmedium"}
							children={"삭제"}
							onClick={() => deleteProduct()}
							style={{ fontSize: "20px", fontWeight: "bold" }}
						/>
						<BasicButton
							color={"primary"}
							size={"xxmedium"}
							children={"판매중"}
							onClick={onOpenModal}
							style={{ fontSize: "20px", fontWeight: "bold" }}
							disabled
						/>
					</>
				) : (
					<BasicButton
						size={"large"}
						children={"판매완료"}
						style={{ fontSize: "20px", fontWeight: "bold" }}
						disabled
					/>
				)}
			</S.ProductButtons>
			{isModalOpen &&
				(chat.length ? (
					<SelectListModal
						setIsModalOpen={setIsModalOpen}
						chat={chat}
						setIsDealClosed={setIsDealClosed}
						idx={id}
					/>
				) : (
					<NoListModal setIsModalOpen={setIsModalOpen} />
				))}
		</>
	);
};

export default ButtonsForSeller;

const ProductButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px 0;
`;

const S = { ProductButtons };
