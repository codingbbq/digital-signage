import { cardData } from "@/app/_constants/card";
import Card from "@/widgets/Card";
import Notifications from "@/widgets/Notifications";
import NotificationCard from "@/widgets/Notifications";
import SalaatTimings from "@/widgets/SalaatTimings";
import Weather from "@/widgets/Weather";

const DashboardViewPage = () => {
	return (
		<main>
			<div className="flex flex-col h-screen">
				<section className="flex flex-col mx-8 my-2 items-center justify-between md:flex-row">
					<h1 className="text-4xl font-bold">
						Karbala - Updates
					</h1>
					<div>
						<h2 className="text-2xl font-bold">11 Jan 2024</h2>
						<h3 className="font-bold">01 Rajab al-Asab 1445H</h3>
					</div>
				</section>

				<div className="flex flex-1 flex-col md:flex-row">
					<div className="md:w-1/3 md:h-full h-1/4 md:order-1 order-2">
						<Weather />
						<SalaatTimings />
					</div>

					<div className="md:w-2/3 flex flex-col md:order-2 order-1">
						<div>
							<h3 className="text-2xl font-bold text-gray-700 px-4">
								Updates
							</h3>
							<div
								className={`m-4 w-f flex gap-4 flex-col md:flex-row`}
							>
								{cardData.map((card) => (
									<Card key={card.id} {...card} />
								))}
							</div>
						</div>

						{/* Notifications */}
						<div className="flex-grow">
							<Notifications />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DashboardViewPage;
