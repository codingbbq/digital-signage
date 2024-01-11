import { cardData } from "@/app/_constants/card";
import Card from "@/widgets/Card";
import NotificationCard from "@/widgets/NotificationCard";
import SalaatTimings from "@/widgets/SalaatTimings";
import Weather from "@/widgets/Weather";

const DashboardViewPage = () => {
	return (
		<main>
			<div className="flex flex-col h-screen">
				<h1 className="text-4xl font-bold p-4 ml-5">
					Karbala - Updates
				</h1>

				<div className="flex flex-1 flex-col md:flex-row">
					<div className="md:w-1/3 md:h-full h-1/4 md:order-1 order-2">
						<Weather />
						<SalaatTimings />
					</div>

					<div className="md:w-2/3 flex flex-col md:order-2 order-1">
						<div>
							<h3 className="text-2xl font-bold text-gray-700 px-4 pt-2">
								Updates
							</h3>
							<div
								className={`m-4 flex gap-4 flex-col md:flex-row`}
							>
								{cardData.map((card) => (
									<Card key={card.id} {...card} />
								))}
							</div>
						</div>

						{/* Notifications */}
						<div className="flex-grow">
							<h3 className="text-2xl font-bold text-gray-700 px-4 pt-2">
								Notifications
							</h3>
							<NotificationCard />
							<NotificationCard />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DashboardViewPage;
