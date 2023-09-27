function Page() {
  return ( 
    <>
      <div className="flex items-center gap-4">
        <div data-headlessui-state="" id="vtd" className="relative w-full">
          <label className="relative block" id="headlessui-popover-button-6" aria-expanded="false" data-headlessui-state="">
            <input type="text" 
              className="relative block w-full opacity-100 pl-3 pr-12 py-2 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20" 
              autoComplete="off" data-lpignore="true" data-form-type="other" placeholder="Выберите даты" 
            />
            <div className="absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden">
              <button type="button" className="opacity-100 px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </label>
        </div>
        <div style={{position:'relative', bottom:'1px'}}>
          <div className="relative mt-1">
            <input aria-expanded="false" aria-autocomplete="list" id="headlessui-combobox-input-3" role="combobox" type="text" data-headlessui-state="" 
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-bgInput dark:text-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-slate-400 focus:border-slate-500 sm:text-sm" 
              placeholder="Площадка" aria-labelledby="headlessui-combobox-button-4"
            />
            <button id="headlessui-combobox-button-4" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>
            </button>
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-md"> Показать </button>
      </div>
      <div className="bg-white mt-5 dark:bg-dark-bgCard rounded-lg px-5 py-5 mb-5 ring-1 ring-slate-900/5 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">ОБЩИЙ ИТОГ ПО ВСЕМ ПЛОЩАДКАМ</h3>
        </div>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="li-table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Фин.рез.</th>
                    <th scope="col">Маржа</th>
                    <th scope="col">Комиссия</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <td className="bg-good">0&nbsp;₽</td>
                    <td>0&nbsp;₽</td>
                    <td>0&nbsp;₽</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;