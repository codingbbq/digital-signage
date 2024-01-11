const NotificationCard = () => {
	return (
		<>
			<section className="bg-white m-4">
				<div className="relative rounded border border-b-gray-400 overflow-hidden shadow-lg">
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">
                            Lorem ipsum dolor sit amet
						</div>
						<p className="text-gray-700 text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Voluptatibus quia, nulla! Maiores et
							perferendis eaque, exercitationem praesentium nihil.
						</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							Photography
						</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							Travel
						</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							Winter
						</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default NotificationCard;
