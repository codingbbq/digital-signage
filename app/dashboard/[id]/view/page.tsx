import { cardData } from "@/app/_constants/card";
import Card from "@/widgets/Card";
import SalaatTimings from "@/widgets/SalaatTimings";
import Weather from "@/widgets/Weather";

const DashboardViewPage = () => {
	return (
		<main>
			<div className="flex flex-col h-screen">
				<h1 className="text-5xl font-bold p-4 ml-5">Karbala - Updates</h1>

				<div className="flex flex-1 flex-col md:flex-row">
					<div className="md:w-1/3 bg-gray-200 md:h-full h-1/4 md:order-1 order-2">
						<Weather />
						<SalaatTimings />
					</div>

					<div className="md:w-2/3 flex flex-col md:order-2 order-1">
						<div className="bg-gray-300 h-1/3">
							<div className="m-4 overflow-hidden">
								<div
									className={`flex gap-4 flex-col md:flex-row`}
								>
									{cardData.map((card) => (
										<Card key={card.id} {...card} />
									))}
								</div>
							</div>
						</div>

						<div className="bg-gray-400 flex-grow"></div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DashboardViewPage;
