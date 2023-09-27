function Page() {
  return ( 
    <>
      <div className="max-w-min flex items-center mb-5">
        <div data-headlessui-state="" id="vtd" className="relative w-full">
          <label className="relative block" id="headlessui-popover-button-11" aria-expanded="false" data-headlessui-state="">
            <div className="flex"><div className="flex-1">
              <button type="button" className="block text-sm w-full bg-white hover:text-gray-900 leading-6 whitespace-nowrap py-[0.43rem] sm:px-6 border border-gray-300 rounded-md items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition ease-out duration-300">
                  <span className="text-gray-500">2023-09-01 до 2023-09-21</span>
              </button>
            </div>
          </div>
         </label>
        </div>
        <button type="button" className="btn btn-default ml-3">Показать</button>
      </div>
      <div className="bg-white mt-5 dark:bg-dark-bgCard rounded-lg px-5 py-5 mb-5 ring-1 ring-slate-900/5 shadow-xl">
        <div className="vue-apexcharts">
          <div id="apexchartschart-earn" className="apexcharts-canvas apexchartschart-earn apexcharts-theme-light"></div>
        </div>
    	</div>
    </>
  );
}

export default Page;