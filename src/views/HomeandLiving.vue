<template>
    <div class="max-w-screen-desktop h-[fit]">
      <!--top row-->
      <div class="max-w-screen flex h-[4px] mt-[50px] 
      laptop:mt-[40px] 
          invisible tablet:visible text-[15px] ml-14">
          <div class="flex place-self-end mr-2 ">
              <router-link to="/orderchamp" class="font-semibold text-black bg-white 
                  object-center border-solid border-[1px] border-gray-100">
                  &lt; Back 
              </router-link>
          </div>
            <a class="flex place-items-end cursor pointer">
              <svg xmlns="http://www.w3.org/2000/svg" 
            class="object-end w-6 h-6 text-black cursor-pointer " 
            viewBox="0 0 24 24">
            <path fill="currentColor" 
            d="M12.71 2.29a1 1 0 0 0-1.42 
            0l-9 9a1 1 0 0 0 0 1.42A1 1 0 
            0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 
            2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1a1
            1 0 0 0-.29-.71zM6 20v-9.59l6-6l6 
              6V20z"/></svg>
            </a>
  
            <div class="flex flex-nowrap self-end">
              <span class="flex flex-nowrap overflow-hidden gap-2">
                <a class="cursor-text">&gt; Home and Living</a>
              </span>
            </div>
      </div>
  
      
    </div>
  
          
     
    <div class="grid gap-4 ml-10 mt-5">
      <h1 class="font-bold text-4xl">
        Home & Living Wholesale
      </h1>
      <div class="grid gap-2">
        <h1 class="font-semibold ">
          Buy wholesale home & living products at Orderchamp
        </h1>     
        <h2>Are you looking for home & living products to buy 
          for your store or webshop? You will find them at 
          wholesale marketplace Orderchamp. Find wholesale 
          home & living products that match the latest trends 
          from the collection of online wholesalers. Wholesaler 
          Orderchamp offers good margins and a low minimum 
          order value with an extensive range of different 
          brands. Within the home & living category, there 
          are various wholesale suppliers that offer pillows 
          & plaids, candles, home fresheners, bath & bedding 
          products, garden products, plants, lighting, wall 
          art, home decor and party decoration. Get inspired 
          at Orderchamp where you can buy wholesale home & 
          living products from brands that suit your 
          customers best.
        </h2>
      </div>
    </div>           
  
    
</template>
  
  <script>
  import applyasbrand from '../components/applyasbrand.vue'
      export default {
          components: {applyasbrand,},
          data() {
              return {
             
              }
          },
          
          methods: {
              
              
          }
          
      }
  </script>
  
  