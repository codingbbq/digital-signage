import Link from "next/link";
const DashboardPage = () => {
	return (
		<>
			<main className="max-w-screen-xl mx-auto p-4">
				<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
					<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between p-4">
						
						<label htmlFor="table-search" className="sr-only">
							Search
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
								<svg
									className="w-5 h-5 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
							<input
								type="text"
								id="table-search"
								className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search for items"
							/>
						</div>
					</div>
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="p-4">
									<div className="flex items-center">
										<input
											id="checkbox-all-search"
											type="checkbox"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											htmlFor="checkbox-all-search"
											className="sr-only"
										>
											checkbox
										</label>
									</div>
								</th>
								<th scope="col" className="px-6 py-3">
									Dashboard Name
								</th>
								<th scope="col" className="px-6 py-3">
									Created By
								</th>
								<th scope="col" className="px-6 py-3">
									Category
								</th>
								<th scope="col" className="px-6 py-3">
									Date Modified
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td className="w-4 p-4">
									<div className="flex items-center">
										<input
											id="checkbox-table-search-1"
											type="checkbox"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											htmlFor="checkbox-table-search-1"
											className="sr-only"
										>
											checkbox
										</label>
									</div>
								</td>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									Karbala
								</th>
								<td className="px-6 py-4">Admin</td>
								<td className="px-6 py-4">Karbala, Najaf</td>
								<td className="px-6 py-4">07 January 2023</td>
								<td className="px-6 py-4">
                                    <Link
                                        target="_blank"
										href="dashboard/1/view"
										className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
									>
										View

									</Link>

									<Link
										href="dashboard/1/edit"
										className="text-xs text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-3 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
									>
										Edit
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>
		</>
	);
};

export default DashboardPage;
