function Page() {
  return ( 
    <div className="shadow sm:rounded-md sm:overflow-hidden">
      <div className="bg-white dark:bg-dark-bgCard py-6 px-4 space-y-6 sm:p-6 sm:pb-8">
        <div className="py-6 space-y-6">
          <form action="#" method="POST" className="flex">
            <div className="mb-5 flex-auto">
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Промокод</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input inputMode="text" type="text" name="promo" id="promo" className="input"/>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"></div>
              </div>
            </div>
            <button type="submit" disabled={true} className="btn btn-primary h-min mt-6 ml-3 flex-none"> Сохранить </button>
          </form>
          
          <div className="mt-6 max-w-5xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 51" className="h-8 w-auto block mr-auto mb-5">
              <path fill="#ff0508" d="m153.2 31.3 1.5.2c-1.1 4.2-7.9 2.7-7.3-1.4s5.7-5.6 7.3-1.9l-1.5.6a2.2 2.2 0 0 0-4.2 1.3c-.4 2.4 3.4 3.8 4.2 1.2ZM98.5 42.7c1-.1 3.4.4 3.3-1.1s-2.3-1-3.3-1.1ZM97 44v-7.6h6v1.3h-4.5v1.5h2.2c3.6-.3 3.5 5.1 0 4.8Zm7.3 0v-7.6h1.6v6.3h.2l2.1-6.3h2.9V44h-1.6v-6.3h-.2l-2.1 6.3Zm9.7-3.7c1.2 0 3.4.3 3.3-1.3s-2.2-1.2-3.3-1.3Zm-1.5 3.7v-7.6h3.4c4.2.1 4.3 6-1.9 5.1V44Zm6.4 0 2.5-4-2.5-3.6h1.9l1.9 3h.6v-3h1.5v3h.7l1.8-3h1.9l-2.5 3.6 2.6 4h-1.8l-2-3.3h-.7V44h-1.5v-3.3h-.6l-2 3.3Zm13.3-3.2h2.4l-1-3.1h-.4Zm-2.6 3.2 2.7-7.6h2.3l2.7 7.6h-1.6l-.7-1.9h-3.2l-.7 1.9ZM96.9 33.9v-7.6h3l1.4 6.3h.2l1.3-6.3h2.9v7.6h-1.5v-6.3h-.2l-1.3 6.3h-2.6l-1.4-6.3h-.2v6.3Zm13.9-1.2c3.3.1 3.2-5.4-.1-5.3s-3.2 5.4.1 5.3Zm0 1.3c-5.4.2-5.4-8.1 0-7.9s5.3 8.1 0 7.9Zm10.6-2.7 1.6.2c-1.1 4.2-7.9 2.7-7.3-1.4s5.7-5.6 7.2-1.9l-1.5.6c-1-2.5-4.5-1.2-4.1 1.3s3.3 3.8 4.1 1.2Zm2.7 2.6v-7.6h1.6v2.9h.8l2.5-2.9h1.9l-3 3.5 3.2 4.1h-1.9l-2.7-3.4h-.8v3.4Zm11-1.2c3.3.1 3.2-5.4-.1-5.3s-3.2 5.4.1 5.3Zm0 1.3c-5.3.2-5.4-8.1 0-7.9s5.3 8.1 0 7.9Zm6.6-4.6c.9-.1 3.2.4 3.2-.9s-2.3-.8-3.2-.9Zm0 3.2c.9-.2 3.4.5 3.4-1s-2.5-.9-3.4-1Zm-1.5 1.3v-7.6h3.7c2.5-.4 3.4 2.9 1.2 3.7 2.5.7 1.4 4.2-1.1 3.9Zm15.7 0v-7.6h1.6v2.9h.8l2.5-2.9h1.9l-3.1 3.5 3.2 4.1h-1.9l-2.6-3.4h-.8v3.4Zm9.8-3.3h2.4l-1-3h-.3Zm-2.6 3.3 2.7-7.6h2.3l2.8 7.6h-1.7l-.6-2h-3.3l-.7 2Zm13.4-4.2v-2.1c-1 .1-3.3-.5-3.2 1s2.2 1 3.2 1.1Zm-4.9 4.2c.3-1.1.1-3.1 1.5-3.5-2.5-1.1-1.2-4.4 1.4-4.1h3.5v7.6h-1.5V31c-3.4-.2-2.8.1-3.3 2.9ZM0 51V19.1h34.5V0h55v51Z"></path>
              <path fill="#fff" d="M18.7 40.9H18l-3.5-14.6H7.9V44h3.4V29.4h.7L15.5 44h5.8l3.5-14.6h.7V44h3.4V26.3h-6.6ZM53.4 44h12.1v-3.1h-8.6v-4.4h7.4v-3h-7.4v-4.1h8.6v-3.1H53.4Zm-12.2-2.6c-3.9 0-5.7-2.7-5.7-6.3s1.8-6.2 5.7-6.2 5.7 2.7 5.7 6.2-1.8 6.3-5.7 6.3Zm0-15.6c-5.9 0-9.3 3.8-9.3 9.3s3.4 9.4 9.3 9.4 9.3-3.9 9.3-9.4-3.4-9.3-9.3-9.3ZM67.9 44h3.7l4.1-7 4.5 7h3.7L78 34.7l5.6-8.4h-3.8l-3.9 6.3-3.9-6.3h-3.8l5.4 8.3Z"></path>
            </svg>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 mb-10 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Реферальная ссылка</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                    <div>Укажите промокод</div>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Переходы</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>0</span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Заполненные анкеты</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>0</span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Открыли счет</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>0</span>
                </dd>
              </div>
            </dl>
            <svg className="fill-[#F0B90B] h-6 w-auto block mr-auto mb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5120 1024" fill="currentColor">
              <path d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"></path>
            </svg>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Реферальная ссылка</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <div>Укажите промокод</div>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Переходы</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>0</span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium">Открыли счет</dt>
                <dd className="mt-1 text-sm dark:text-dark-bodyText">
                  <span>0</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;