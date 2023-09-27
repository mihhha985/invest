function Page() {
  return (  
      <>
        <div className="rounded-lg ring-1 ring-slate-900/5 shadow-xl">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="li-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th className="cursor-pointer" scope="col">
                        <div className="flex items-center">
                          <div className="flex-auto">Капитальный счет</div>
                        </div>
                      </th>
                      <th className="cursor-pointer" scope="col">
                        <div className="flex items-center">
                          <div className="flex-auto">Имя</div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-[10px] flex-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
                          </svg>
                        </div>
                      </th>
                      <th className="cursor-pointer" scope="col">
                        <div className="flex items-center">
                          <div className="flex-auto">Вчера</div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-[15px] flex-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                          </svg>
                        </div>
                      </th>
                      <th className="cursor-pointer" scope="col">
                        <div className="flex items-center">
                          <div className="flex-auto">Неделя</div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-[15px] flex-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                          </svg>
                        </div>
                      </th>
                      <th className="cursor-pointer" scope="col">
                        <div className="flex items-center">
                          <div className="flex-auto">Месяц</div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-[15px] flex-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                          </svg>
                        </div>
                      </th>
                      <th className="cursor-pointer" scope="col">
                        <div className="flex items-center">
                          <div className="flex-auto">Всё время</div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-[15px] flex-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                          </svg>
                        </div>
                      </th>
                      <th className="!px-0"></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <tfoot>
                    <tr>
                      <th scope="row" colSpan={2}>Итого</th>
                      <td className="price bg-good">0&nbsp;₽</td>
                      <td className="price bg-good">0&nbsp;₽</td>
                      <td className="price bg-good">0&nbsp;₽</td>
                      <td className="price bg-good">0&nbsp;₽</td>
                      <td></td>
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