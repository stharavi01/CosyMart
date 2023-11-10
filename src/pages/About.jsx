const About = () => {
	return (
		<>
			<div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
				<h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
					We love
				</h1>
				<div className="stats bg-primary shadow">
					<div className="stat">
						<div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
							Comfy
						</div>
					</div>
				</div>
			</div>
			<p className="mt-10 text-lg leading-8 max-w-2xl mx-auto">
				Welcome to Cozy Mart, where we redefine the art of living with our
				curated selection of exquisite home furnishings. Our diverse range
				includes everything from stylish chairs and innovative lamps to
				luxurious beds, functional shelves, and comfortable sofas, sourced from
				renowned companies. At Cozy Mart, we prioritize not only aesthetics but
				also quality and comfort, ensuring that every piece reflects our
				commitment to enhancing your home ambiance. Explore our collection and
				embark on a journey to transform your living spaces into havens of
				comfort and style.
			</p>
		</>
	);
};
export default About;
