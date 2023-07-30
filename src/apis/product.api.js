import axios from "axios";

const PATH = "/api/product";

const ProductApi = {
	getProductList: async () => await axios.get(PATH),
	getProductDetail: async id =>
		await axios.get(PATH + `/detail?prod_idx=${id}`),
	deleteProduct: async id => await axios.delete(PATH + `?prod_idx=${id}`),
	updateProductStatus: async id =>
		await axios.post(PATH + `/sale-complete?prod_idx=${id}`),
	registerLikedProduct: () => {},
	deleteLikedProduct: () => {},
	getChatListForSpecificProduct: () => {},
};

export default ProductApi;
