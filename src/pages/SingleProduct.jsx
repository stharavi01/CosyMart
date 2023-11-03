import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export const loader = async ({ params }) => {
	const response = await customFetch(`/products/${params.id}`);
	return { product: response.data.data };
};

const SingleProduct = () => {
	const { product } = useLoaderData();
	const { image, title, price, description, colors, company } =
		product.attributes;
	const dollarAmount = formatPrice(price);
	return <div className="grid "></div>;
};
export default SingleProduct;
