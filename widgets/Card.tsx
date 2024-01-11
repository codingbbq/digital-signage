const Card = ({ id, title, description }: { id: number, title: string, description: string }) => {
	return (
		<>
			<section className="relative block p-6 bg-white border border-gray-200 rounded shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h2 className="absolute top-0 right-0 text-gray-200 text-5xl font-bold px-2">{id}</h2>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					{description}
				</p>
			</section>
		</>
	);
};

export default Card;
