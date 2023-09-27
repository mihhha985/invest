function Page() {
  return (  
    <div className="shadow sm:rounded-md sm:overflow-hidden bg-white dark:bg-dark-bgCard">

      <div className="py-6 px-4">
        <div className="min-w-0">
          <h2 className="text-xl font-bold leading-7 text-gray-900 dark:text-white sm:text-2xl sm:truncate flex items-center">
            Захаров Артём Дмитриевич <span className="block px-2.5 py-0.5 mt-1 ml-3 rounded-md text-sm font-medium bg-primary text-white">Физ.лицо</span>
          </h2>
        </div>
      </div>

      <form action="#" method="POST">       
        <div className="border-t dark:border-t-dark-border py-6 px-4">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-3">

            <div className="col-span-6 md:col-span-3 xl:col-span-2">
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Паспорт</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input inputMode="text" type="text" name="passport" id="passport" className="input" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-6 md:col-span-4 xl:col-span-3">
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Никнейм</label>
              <div className="relative rounded-md shadow-sm">
                <input inputMode="text" type="text" name="nickname" id="nickname" className="input" data-eager="" data-maska-tokens="{&quot;0&quot;:{&quot;pattern&quot;:&quot;[0-9]&quot;,&quot;multiple&quot;:true}}" autoComplete=""/>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"></div>
              </div>
              <div className="text-sm text-gray-500">Используется в Топ-3</div>
            </div>
            
            <div className="col-span-6 md:col-span-5 xl:col-span-4">
              <div className="flex items-center mt-5">
                <button className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" id="headlessui-switch-11" role="switch" type="button" tabIndex={0} aria-checked="false" data-headlessui-state="" aria-labelledby="headlessui-label-12">
                  <span aria-hidden="true" className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                </button>
                <span id="headlessui-label-12" className="ml-3 cursor-pointer">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-400">Разрешить наставнику видеть мой финансовый результат</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-3 mt-10">
            
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              </div>
                
              <div className="mt-1 relative rounded-md shadow-sm">
                <input inputMode="text" type="email" name="email" id="email" className="input" data-eager="" data-maska-tokens="{&quot;0&quot;:{&quot;pattern&quot;:&quot;[0-9]&quot;,&quot;multiple&quot;:true}}" autoComplete="" data-maska-value="artem.zakharov78@mail.ru"/>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"></div>
              </div>
            </div>
          
            <div className="col-span-6 sm:col-span-2 lg:col-span-1">

              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Телефон</label>
              </div>

              <div className="mt-1 relative rounded-md shadow-sm">
                <input inputMode="text" type="tel" name="phone" id="phone" className="input" data-eager="" data-maska-tokens="{&quot;0&quot;:{&quot;pattern&quot;:&quot;[0-9]&quot;,&quot;multiple&quot;:true}}" autoComplete="" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"></div>
              </div> 

            </div>

          </div>

          <div className="mt-6 max-w-5xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 51" className="h-8 w-auto block mr-auto mb-5">
              <path fill="#ff0508" d="m153.2 31.3 1.5.2c-1.1 4.2-7.9 2.7-7.3-1.4s5.7-5.6 7.3-1.9l-1.5.6a2.2 2.2 0 0 0-4.2 1.3c-.4 2.4 3.4 3.8 4.2 1.2ZM98.5 42.7c1-.1 3.4.4 3.3-1.1s-2.3-1-3.3-1.1ZM97 44v-7.6h6v1.3h-4.5v1.5h2.2c3.6-.3 3.5 5.1 0 4.8Zm7.3 0v-7.6h1.6v6.3h.2l2.1-6.3h2.9V44h-1.6v-6.3h-.2l-2.1 6.3Zm9.7-3.7c1.2 0 3.4.3 3.3-1.3s-2.2-1.2-3.3-1.3Zm-1.5 3.7v-7.6h3.4c4.2.1 4.3 6-1.9 5.1V44Zm6.4 0 2.5-4-2.5-3.6h1.9l1.9 3h.6v-3h1.5v3h.7l1.8-3h1.9l-2.5 3.6 2.6 4h-1.8l-2-3.3h-.7V44h-1.5v-3.3h-.6l-2 3.3Zm13.3-3.2h2.4l-1-3.1h-.4Zm-2.6 3.2 2.7-7.6h2.3l2.7 7.6h-1.6l-.7-1.9h-3.2l-.7 1.9ZM96.9 33.9v-7.6h3l1.4 6.3h.2l1.3-6.3h2.9v7.6h-1.5v-6.3h-.2l-1.3 6.3h-2.6l-1.4-6.3h-.2v6.3Zm13.9-1.2c3.3.1 3.2-5.4-.1-5.3s-3.2 5.4.1 5.3Zm0 1.3c-5.4.2-5.4-8.1 0-7.9s5.3 8.1 0 7.9Zm10.6-2.7 1.6.2c-1.1 4.2-7.9 2.7-7.3-1.4s5.7-5.6 7.2-1.9l-1.5.6c-1-2.5-4.5-1.2-4.1 1.3s3.3 3.8 4.1 1.2Zm2.7 2.6v-7.6h1.6v2.9h.8l2.5-2.9h1.9l-3 3.5 3.2 4.1h-1.9l-2.7-3.4h-.8v3.4Zm11-1.2c3.3.1 3.2-5.4-.1-5.3s-3.2 5.4.1 5.3Zm0 1.3c-5.3.2-5.4-8.1 0-7.9s5.3 8.1 0 7.9Zm6.6-4.6c.9-.1 3.2.4 3.2-.9s-2.3-.8-3.2-.9Zm0 3.2c.9-.2 3.4.5 3.4-1s-2.5-.9-3.4-1Zm-1.5 1.3v-7.6h3.7c2.5-.4 3.4 2.9 1.2 3.7 2.5.7 1.4 4.2-1.1 3.9Zm15.7 0v-7.6h1.6v2.9h.8l2.5-2.9h1.9l-3.1 3.5 3.2 4.1h-1.9l-2.6-3.4h-.8v3.4Zm9.8-3.3h2.4l-1-3h-.3Zm-2.6 3.3 2.7-7.6h2.3l2.8 7.6h-1.7l-.6-2h-3.3l-.7 2Zm13.4-4.2v-2.1c-1 .1-3.3-.5-3.2 1s2.2 1 3.2 1.1Zm-4.9 4.2c.3-1.1.1-3.1 1.5-3.5-2.5-1.1-1.2-4.4 1.4-4.1h3.5v7.6h-1.5V31c-3.4-.2-2.8.1-3.3 2.9ZM0 51V19.1h34.5V0h55v51Z"></path><path fill="#fff" d="M18.7 40.9H18l-3.5-14.6H7.9V44h3.4V29.4h.7L15.5 44h5.8l3.5-14.6h.7V44h3.4V26.3h-6.6ZM53.4 44h12.1v-3.1h-8.6v-4.4h7.4v-3h-7.4v-4.1h8.6v-3.1H53.4Zm-12.2-2.6c-3.9 0-5.7-2.7-5.7-6.3s1.8-6.2 5.7-6.2 5.7 2.7 5.7 6.2-1.8 6.3-5.7 6.3Zm0-15.6c-5.9 0-9.3 3.8-9.3 9.3s3.4 9.4 9.3 9.4 9.3-3.9 9.3-9.4-3.4-9.3-9.3-9.3ZM67.9 44h3.7l4.1-7 4.5 7h3.7L78 34.7l5.6-8.4h-3.8l-3.9 6.3-3.9-6.3h-3.8l5.4 8.3Z"></path>
            </svg>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Баланс</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>6&nbsp;979,49&nbsp;₽</span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Собственные средства</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>4&nbsp;479,49&nbsp;₽</span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Капитальный счёт</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>P2577</span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Возраст трейдера</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>1 год, 5 месяцев и 22 дня</span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Ф.И.О.</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>Захаров Артём Дмитриевич </span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Skype</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span></span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Email</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>artem.zakharov78@mail.ru </span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Телефон</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span></span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Местоположение</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>Россия, </span>
                </dd>
              </div>
            </dl>
          </div>
          
          <div className="px-4 py-3 bg-gray-50 dark:bg-dark-bgCard dark:border-t-2 dark:border-t-dark-border text-right sm:px-6">
            <button type="submit" className="btn btn-primary"> Сохранить </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page;