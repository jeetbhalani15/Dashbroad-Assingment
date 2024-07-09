import React from 'react'

const RecentOrders = () => {
  return (
    <>
    <div className='recent-order-box'>
    <h3>Recent Orders</h3>
        <div class="mt-2">
    <div class="flex flex-wrap items-center justify-center flex-col">
      <div class=" px-2 my-2 sm:w-1/2">
        <div class="items-center shadow-md overflow-hidden rounded-lg bg-white hover:shadow-lg">
          <div href="#" class="block">
            <img src="https://i.imgur.com/uzYifbO.jpg" class="w-20 h-20 object-cover block mx-auto"/>
          </div>

          <div href="#" class="text-left text-base font-normal mt-2 ml-4">
            Samsung Z Fold
          </div>
          <div class="font-bold text-left text-lg mb-1 ml-4">$1,799.00 </div>
        </div>
      </div>

      <div class="px-2 my-2 sm:w-1/2">
        <div class="shadow-md overflow-hidden rounded-lg bg-white hover:shadow-lg">
          <a href="#" class="block">
            <img src="https://i.imgur.com/YnGoLpP.jpg" class="w-20 h-20 object-cover block mx-auto"/>
          </a>

          <a href="#" class="block text-left text-base font-normal mt-2 ml-4">
            Huawei Mate 50 Pro 512GB Orange
          </a>

          <h3 class="font-bold text-left text-lg mb-1 ml-4">$1,199.00 </h3>
        </div>
      </div>

      <div class="w-full px-2 my-2 sm:w-1/2">
        <div class="shadow-md overflow-hidden rounded-lg bg-white hover:shadow-lg">
          <a href="#" class="block">
            <img src="https://i.imgur.com/qx7UMAx.jpg" class="w-20 h-20 object-cover block mx-auto"/>
          </a>

          <a href="#" class="block text-left text-base font-normal mt-2 ml-4">
            IPhone 14 pro Max 256GB Rose Gold
          </a>

          <h3 class="font-bold text-left text-lg mb-1 ml-4">$1,199.00 </h3>
        </div>
      </div>
      <div class="w-full px-2 my-2 sm:w-1/2">
        <div class="shadow-md overflow-hidden rounded-lg bg-white hover:shadow-lg">
          <a href="#" class="block">
            <img src="https://i.imgur.com/qx7UMAx.jpg" class="w-20 h-20 object-cover block mx-auto"/>
          </a>

          <a href="#" class="block text-left text-base font-normal mt-2 ml-4">
            IPhone 14 pro Max 256GB Rose Gold
          </a>

          <h3 class="font-bold text-left text-lg mb-1 ml-4">$1,199.00 </h3>
        </div>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default RecentOrders