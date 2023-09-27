

function Page() {
  return (
    <>
      <div className="flex items-center gap-4">
        <div data-headlessui-state="" id="vtd" className="relative w-full">
          <label className="relative block" id="headlessui-popover-button-1" aria-expanded="false" data-headlessui-state="">
            <input type="text" className="relative block w-full opacity-100 pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20" autoComplete="off" data-lpignore="true" data-form-type="other" placeholder="Выберите даты" />
            <div className="absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden">
              <button type="button" className="opacity-100 px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </label>
        </div>
        <button type="button" className="btn btn-primary">Показать</button>
      </div>
      <div className="bg-white mt-5 dark:bg-dark-bgCard rounded-lg px-5 py-5 mb-5 ring-1 ring-slate-900/5 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">Номер торгового счёта: 02578</h3>
        </div>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="bg-gray-50 text-center text-gray-600 text-xs uppercase rounded-md shadow-md py-1">
              <table>
                <thead>
                  <tr>
                    <td scope="col">Время операции</td>
                    <td scope="col">Описание</td>
                    <td scope="col">Сумма</td>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;