import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";

const Checkout = () => {
	const cartTotal = useSelector((state) => state.cartState.cartTotal);
	if (cartTotal === 0) {
		return <SectionTitle text="Your Cart is empty" />;
	}
	return (
		<>
			<SectionTitle text="Place your Orders" />
			<div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
				<CheckoutForm />
				<CartTotals />
			</div>
		</>
	);
};
export default Checkout;
