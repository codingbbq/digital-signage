import { notifications } from "@/app/_constants/notifications";

const Notifications = () => {
	const information = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
	const important = 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
	return (
		<>
			<h3 className="text-2xl font-bold text-gray-700 px-4 pt-2">
				Notifications
			</h3>
			{notifications.map((notification) => (
				<section key={notification.id} className="bg-white mx-4 mt-4 mb-6 relative">
				<div className="relative rounded border overflow-hidden shadow-lg">
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">
							{notification.title}
						</div>
						<p className="text-gray-700 text-base pb-6">
							{notification.description}
						</p>
					</div>
				</div>

				{/* Post date */}
				<div className="absolute bottom-0 right-0 p-2">
					<span className={`${notification.type === 0 ? important : information} text-sm font-medium me-2 px-2.5 py-0.5 rounded`}>
						{notification.updated.toISOString()}
					</span>
				</div>
			</section>
			))}
			
		</>
	);
};

export default Notifications;
