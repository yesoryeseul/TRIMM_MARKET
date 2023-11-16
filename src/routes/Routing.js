import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const Main = lazy(() => import("pages/main"));
const MakeScrollToTop = lazy(() => import("components/MakeScrollToTop"));
const SignIn = React.lazy(() => import("pages/sign/sign-in"));
const Signup = React.lazy(() => import("pages/sign/sign-up"));
const ProductDetailPage = React.lazy(() => import("pages/product-detail"));
const MarketPrice = React.lazy(() => import("pages/market-price"));
const ProductRegister = React.lazy(() => import("pages/product-register"));
const UsedTransaction = React.lazy(() =>
	import("pages/transaction/used-transaction"),
);
const FreeTransaction = React.lazy(() =>
	import("pages/transaction/free-transaction"),
);
const SearchPage = React.lazy(() => import("pages/search-page"));
const MypageLayout = React.lazy(() =>
	import("pages/my-page/layout/mypage-layout"),
);
const RegisterProduct = React.lazy(() =>
	import("pages/my-page/components/RegisterProducts"),
);
const HouseKeeping = React.lazy(() =>
	import("pages/my-page/components/HousekeepingBook"),
);
const PurchasedItem = React.lazy(() =>
	import("pages/my-page/components/PurchasedItem"),
);
const InterestProduct = React.lazy(() =>
	import("pages/my-page/components/InterestProduct"),
);
const Review = React.lazy(() => import("pages/my-page/components/Review"));
const Chat = React.lazy(() => import("pages/Chat"));
const PwChange = React.lazy(() =>
	import("pages/account-management/components/PwChange"),
);
const AccoutLayout = React.lazy(() =>
	import("pages/account-management/layout/account-layout"),
);
const AccountPrivacy = React.lazy(() =>
	import("pages/account-management/components/ModifyInfo"),
);
const ErrorPage = React.lazy(() => import("pages/error-page"));
const Intro = React.lazy(() => import("pages/Intro"));
import PrivateRouter from "./PrivateRoute";

const router = createBrowserRouter([
	{
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<>
					<PrivateRouter>
						<MakeScrollToTop />
					</PrivateRouter>
				</>
			</Suspense>
		),
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "/account",
				element: <AccoutLayout />,
				children: [
					{
						path: "management",
						element: <AccountPrivacy />,
					},
					{
						path: "pwchange",
						element: <PwChange />,
					},
				],
			},
			{
				path: "/product/:id",
				element: <ProductDetailPage />,
			},
			{
				path: "/MarketPrice",
				element: <MarketPrice />,
			},
			{
				path: "/MarketPrice/:keyword",
				element: <MarketPrice />,
			},
			{ path: "/productRegister", element: <ProductRegister /> },
			{
				path: "/used-transaction",
				element: <UsedTransaction />,
			},
			{
				path: "/free-transaction",
				element: <FreeTransaction />,
			},
			{
				path: "/Chat",
				element: <Chat />,
			},
			{
				path: "/search/:keyword",
				element: <SearchPage />,
			},
			{
				path: "/wrong-access",
				element: <ErrorPage />,
			},
			{
				path: "/mypage",
				element: <MypageLayout />,
				children: [
					{
						path: "/mypage/:category",
						element: <RegisterProduct />,
					},
					{
						path: "house-keeping",
						element: <HouseKeeping />,
					},
					{
						path: "purchased-item",
						element: <PurchasedItem />,
					},
					{
						path: "interest-product",
						element: <InterestProduct />,
					},
					{
						path: "review",
						element: <Review />,
					},
				],
			},
		],
	},
	{
		path: "intro",
		element: <Intro />,
	},
	{
		path: "/Signin",
		element: <SignIn />,
	},
	{
		path: "/Signup",
		element: <Signup />,
	},
]);

export default router;
