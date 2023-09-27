function Page() {
  return ( 
      <>
        <div className="pb-5 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-7 md:grid-rows-1 gap-5 md:gap-2">

          <div className="col-span-2 sm:w-1/2 md:w-full">
            <label id="headlessui-listbox-label-18" data-headlessui-state="" className="block text-sm font-medium text-gray-700 dark:text-white">Cтатус</label>
            <div className="mt-1 relative">
              <button id="headlessui-listbox-button-19" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" 
                className="bg-white dark:bg-dark-bgInput relative w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-slate-400 focus:border-slate-500 sm:text-sm" 
                aria-labelledby="headlessui-listbox-label-18 headlessui-listbox-button-19"
              >
                <span className="w-full inline-flex truncate">
                  <span className="truncate">В обработке</span>
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col col-span-2 sm:w-1/2 md:w-full">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Выберите даты</label>
            <div data-headlessui-state="" id="vtd" className="relative w-full">
              <label className="relative block" id="headlessui-popover-button-21" aria-expanded="false" data-headlessui-state="">
                <div className="flex">
                  <div className="flex-1">
                    <button type="button" 
                      className="block text-sm w-full bg-white hover:text-gray-900 leading-6 whitespace-nowrap py-[0.43rem] sm:px-6 border border-gray-300 rounded-md items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition ease-out duration-300"
                    >
                      <span className="text-gray-500">2023-08-21 до 2023-09-21</span>
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="col-span-2 sm:w-1/2 md:w-full">
            <label id="headlessui-listbox-label-21" data-headlessui-state="" className="block text-sm font-medium text-gray-700 dark:text-white">Заявок на странице</label>
            <div className="mt-1 relative">
              <button id="headlessui-listbox-button-22" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" 
                className="bg-white dark:bg-dark-bgInput relative w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-slate-400 focus:border-slate-500 sm:text-sm" aria-labelledby="headlessui-listbox-label-21 headlessui-listbox-button-22">
                  <span className="w-full inline-flex truncate">
                    <span className="truncate">20</span>
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                    </svg>
                  </span>
              </button>
            </div>
          </div>

          <div className="col-span-1 self-end justify-self-start md:justify-self-end">
            <span className="isolate inline-flex rounded-md shadow-sm">
              <button type="button" className="btn btn-primary">Показать </button>
            </span>
          </div>

        </div>

        <div className="flex flex-col">
          <div className="-my-2 sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow-md dark:shadow-slate-900 border-b border-gray-200 dark:border-none sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="table-header">Статус</th>
                      <th scope="col" className="table-header">Время</th>
                      <th scope="col" className="table-header">Сумма</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-xs text-center text-gray-900 dark:text-gray-200" colSpan={4}>Ничего не найдено</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Page;