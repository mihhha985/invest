function Page() {
  return ( 
      <>
    
        <div className="border-gray-200">
          <div className="mb-5 bg-white p-3 dark:bg-dark-bgCard">
            <nav className="flex space-x-4" aria-label="Tabs">
              <div className="cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-100 px-3 py-2 font-medium text-sm rounded-md">Топ трейдеров</div>
              <div className="cursor-pointer bg-gray-200 text-gray-800 px-3 py-2 font-medium text-sm rounded-md" aria-current="page">Топ наставников</div>
            </nav>
          </div>
        </div>

        
        <div className="mb-5 hidden">
          <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
            <li className="overflow-hidden rounded-xl border border-gray-200 dark:border-dark-border bg-white shadow dark:bg-dark-bgCard">
              <div className="flex items-center gap-x-4 border-b border-gray-900/5 dark:border-dark-border bg-gray-50 dark:bg-dark-tableAccentRow px-6 py-3">
                <div className="text-sm font-medium text-gray-500">Акции</div>
              </div>
              <dl className="-my-3 divide-y divide-gray-100 px-6 py-3 text-sm leading-6">
                <div className="flex justify-between gap-x-4 py-2">
                  <dt className="text-gray-500 dark:text-white">Эх... Luna, эх... ностальгия</dt>
                  <dd className="text-gray-700 dark:text-white">52&nbsp;488,09&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2">
                  <dt className="text-gray-500 dark:text-white">Д****** Е****** В*********</dt>
                  <dd className="text-gray-700 dark:text-white">48&nbsp;461,1&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2">
                  <dt className="text-gray-500 dark:text-white">Щ******* С*****</dt>
                  <dd className="text-gray-700 dark:text-white">47&nbsp;224,36&nbsp;₽</dd>
                </div>
              </dl>
            </li>
            <li className="overflow-hidden rounded-xl border border-gray-200 dark:border-dark-border bg-white shadow dark:bg-dark-bgCard">
              <div className="flex items-center gap-x-4 border-b border-gray-900/5 dark:border-dark-border bg-gray-50 dark:bg-dark-tableAccentRow px-6 py-3">
                <div className="text-sm font-medium text-gray-500">Фьючерсы</div>
              </div>
              <dl className="-my-3 divide-y divide-gray-100 px-6 py-3 text-sm leading-6">
                <div className="flex justify-between gap-x-4 py-2">
                  <dt className="text-gray-500 dark:text-white">Иван Попов</dt>
                  <dd className="text-gray-700 dark:text-white">13&nbsp;716&nbsp;515,9&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2">
                  <dt className="text-gray-500 dark:text-white">Fat Camel(1)</dt>
                  <dd className="text-gray-700 dark:text-white">1&nbsp;879&nbsp;903,89&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2">
                  <dt className="text-gray-500 dark:text-white">Руслан Пименов</dt>
                  <dd className="text-gray-700 dark:text-white">1&nbsp;720&nbsp;327,67&nbsp;₽</dd>
                </div>
              </dl>
            </li>
            <li className="overflow-hidden rounded-xl border border-gray-200 dark:border-dark-border bg-white shadow dark:bg-dark-bgCard">
              <div className="flex items-center gap-x-4 border-b border-gray-900/5 dark:border-dark-border bg-gray-50 dark:bg-dark-tableAccentRow px-6 py-3">
                <div className="text-sm font-medium text-gray-500">Валюта</div>
              </div>
              <dl className="-my-3 divide-y divide-gray-100 px-6 py-3 text-sm leading-6">
                <div className="flex justify-between gap-x-4 py-2">
                  <dt className="text-gray-500 dark:text-white">Иван Попов</dt>
                  <dd className="text-gray-700 dark:text-white">291&nbsp;167,02&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2">
                  <dt className="text-gray-500 dark:text-white">ваня</dt>
                  <dd className="text-gray-700 dark:text-white">287&nbsp;932,07&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2">
                  <dt className="text-gray-500 dark:text-white">Клевцов Антон</dt>
                  <dd className="text-gray-700 dark:text-white">251&nbsp;561,77&nbsp;₽</dd>
                </div>
              </dl>
            </li>
          </ul>
        </div>

        
        <div className="mb-5">
          <ul role="list">
            <li className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-dark-border bg-white shadow dark:bg-dark-bgCard">
              <dl className="-my-3 px-6 py-3 text-sm leading-6 grid lg:grid-flow-col lg:grid-rows-3 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                <div className="flex justify-between gap-x-4 py-2 border-b">
                  <dt className="text-gray-500 dark:text-white truncate"><span className="text-gray-400">10.</span> Вай</dt>
                    <dd className="text-gray-700 dark:text-white">27&nbsp;561,85&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2 border-b">
                  <dt className="text-gray-500 dark:text-white truncate"><span className="text-gray-400">11.</span> Артём Максимов</dt>
                  <dd className="text-gray-700 dark:text-white">26&nbsp;827,19&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2 border-b lg:border-b-0">
                  <dt className="text-gray-500 dark:text-white truncate"><span className="text-gray-400">12.</span> Rich Rabbit</dt>
                  <dd className="text-gray-700 dark:text-white">23&nbsp;239,82&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2 border-b">
                  <dt className="text-gray-500 dark:text-white truncate"><span className="text-gray-400">13.</span> Александр Сурков</dt>
                  <dd className="text-gray-700 dark:text-white">22&nbsp;236,04&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2 border-b">
                  <dt className="text-gray-500 dark:text-white truncate"><span className="text-gray-400">14.</span> Пабло Эскобар</dt>
                  <dd className="text-gray-700 dark:text-white">21&nbsp;252,81&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2 border-b lg:border-b-0">
                  <dt className="text-gray-500 dark:text-white truncate">
                    <span className="text-gray-400">15.</span> G_Trader</dt>
                    <dd className="text-gray-700 dark:text-white">21&nbsp;126,39&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2 border-b">
                  <dt className="text-gray-500 dark:text-white truncate"><span className="text-gray-400">16.</span> Мария DG</dt>
                  <dd className="text-gray-700 dark:text-white">12&nbsp;973,86&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2 border-b">
                  <dt className="text-gray-500 dark:text-white truncate"><span className="text-gray-400">17.</span> НОХЧО</dt>
                  <dd className="text-gray-700 dark:text-white">12&nbsp;896,43&nbsp;₽</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-2">
                  <dt className="text-gray-500 dark:text-white truncate"><span className="text-gray-400">18.</span> Ш****** М******* З********</dt>
                  <dd className="text-gray-700 dark:text-white">12&nbsp;375,54&nbsp;₽</dd>
                </div>
              </dl>
            </li>
            </ul>
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-2">
                <button className="month">август</button>
                <button className="month active">сентябрь</button>
              </div>
              <div className="flex gap-2">
                <button className="nav-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                  </svg>
                </button>
                <button className="nav-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                  </svg>
                </button>
              </div>
            </div>
        </div>
        
        
        <div className="bg-white dark:bg-dark-bgCard rounded-lg px-5 py-5 mb-5 ring-1 ring-slate-900/5 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">Акции</h3>
          </div>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="li-table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Инструмент</th>
                        <th scope="col">Обновление</th>
                        <th scope="col">Позиция</th>
                        <th scope="col">Комиссия</th>
                        <th scope="col">Фин.рез.</th>
                        <th scope="col">Просадка</th>
                        <th scope="col">Плечо</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                    <tfoot>
                      <tr>
                        <td>ИТОГО</td>
                        <td colSpan={2}></td>
                        <td className="price">0&nbsp;₽</td>
                        <td className="price bg-good">0&nbsp;₽</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
        </div>

        <div className="bg-white dark:bg-dark-bgCard rounded-lg px-5 py-5 mb-5 ring-1 ring-slate-900/5 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">Фьючерсы</h3>
          </div>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="li-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Инструмент</th>
                      <th scope="col">Обновление</th>
                      <th scope="col">Позиция</th>
                      <th scope="col">Комиссия</th>
                      <th scope="col">Фин.рез.</th>
                      <th scope="col">Просадка</th>
                      <th scope="col">Плечо</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <tfoot>
                    <tr>
                      <td>ИТОГО</td>
                      <td colSpan={2}></td>
                      <td className="price">0&nbsp;₽</td>
                      <td className="price bg-good">0&nbsp;₽</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-dark-bgCard rounded-lg px-5 py-5 mb-5 ring-1 ring-slate-900/5 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">Валюта</h3>
          </div>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="li-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Инструмент</th>
                      <th scope="col">Обновление</th>
                      <th scope="col">Позиция</th>
                      <th scope="col">Комиссия</th>
                      <th scope="col">Фин.рез.</th>
                      <th scope="col">Просадка</th>
                      <th scope="col">Плечо</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <tfoot>
                    <tr>
                      <td>ИТОГО</td>
                      <td colSpan={2}></td>
                      <td className="price">0&nbsp;₽</td>
                      <td className="price bg-good">0&nbsp;₽</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
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
                      <td className="">0&nbsp;₽</td>
                      <td className="">0&nbsp;₽</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
  
    
        <div className="text-base mb-3">Поделиться результатом</div><div className="mb-5">
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-rose-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "0%"}}>0.00% </div>
          </div>
        </div>

        <div className="flex mb-10">

          <div className="flex-auto">
            <button type="button" className="btn btn-default">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path>
              </svg> 
              Поделиться 
            </button>
          </div>

          <div className="flex-none">
            <div className="flex gap-3">
              <div className="flex gap-1 items-center">😔<span className="text-sm">0 за месяц</span></div>
              <div className="flex gap-1 items-center">😔<span className="text-sm">0 за год</span></div>
            </div>
          </div>

        </div>
    </>
  );
}

export default Page;