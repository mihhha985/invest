function Page() {
  return ( 
    <div className="shadow sm:rounded-md sm:overflow-hidden">
      
      <div className="bg-white dark:bg-dark-bgCard py-6 px-4 space-y-6 sm:p-6 sm:pb-8">

        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Безопасность</h3>
          <div className="border-b border-gray-200">
            <div className="mb-5 bg-white p-3 dark:bg-dark-bgCard">
              <nav className="flex space-x-4" aria-label="Tabs">
                <div className="cursor-pointer bg-gray-200 text-gray-800 px-3 py-2 font-medium text-sm rounded-md" aria-current="page">Многофакторная аутентификация</div>
                <div className="cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-100 px-3 py-2 font-medium text-sm rounded-md">Изменить пароль</div>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <div className="flex items-center">

              <button className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="headlessui-switch-13" role="switch" type="button" tabIndex={0} aria-checked="false" data-headlessui-state="" aria-labelledby="headlessui-label-14">
                <span className="sr-only">Use setting</span>
                <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200">
                  <span className="opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                    </svg>
                  </span>
                  <span className="opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                    </svg>
                  </span>
                </span>
              </button>
              
              <span id="headlessui-label-14" className="ml-3">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Двухфакторная аутентификация </span>
                <span className="text-sm text-gray-500">(выключена)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;