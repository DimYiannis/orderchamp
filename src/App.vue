<template>
  <header class="navbar">
    
    <!--first row--> 
    <div class="toprowplacement" @mouseover="activeTab=''">
    
       
 
      <div class="laptop:flex  gap-3 place-items-baseline w-fit mr-5">
        <div class="flex gap-2">
          <a href="/">
            <img src="./assets/logo.png"
            class="logo">
          </a>

            <!--category menu-->
          <div class="laptop:hidden flex  items-center">
            <button class="w-10 h-10 rounded-sm bg-white" 
            @click="opencategories">
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="headersvg"
              >
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
              </svg>
            </button>
          
            <!--signup in menu-->
            <button class="w-10 h-10 rounded-sm bg-white" 
            @click="signup">
            <svg xmlns="http://www.w3.org/2000/svg" 
            class="object-center w-6 h-4 text-black " viewBox="0 0 448 512">
            <path fill="currentColor" d="M272 304h-96C78.8 
            304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 
            0 32-14.33 32-32c0-97.2-78.8-176-176-176zM48.99 
            464c7.9-63.1 61.81-112 127.01-112h96c65.16 0 
            119.1 48.95 127 112H48.99zM224 256c70.69 0 
            128-57.31 128-128S294.69 0 224 0S96 57.31 
            96 128c0 70.7 57.3 128 128 128zm0-208c44.11 
            0 80 35.89 80 80s-35.89 80-80 80s-80-35.9-80-80c0-
            44.11 35.9-80 80-80z"/>
            </svg>
            </button>

              <!--log-in-->
            <button class="w-10 h-10 rounded-sm bg-white" 
            @click="login">
            <svg xmlns="http://www.w3.org/2000/svg" 
            class="object-center w-6 h-5 text-black " viewBox="0 0 24 24">
            <path fill="currentColor" 
            d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 
            20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 
            17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 
            18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 
            0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"/>
            </svg>
            </button>
          </div>

      </div>

        <input type="text" v-model="input" placeholder="Search for a brand or product" 
        class="tablet:w-[500px] w-full rounded-sm shrink
        bg-slate-100 shadow-md h-10 appearance-none border-0 
        outline-none flex-wrap">
       
    
      </div> 
      <div class="flex ">
        
          <ul class=" flex items-center gap-4 
          laptop:visible invisible ">
            <li 
            class="btn">
              <a href="/brands">Apply as brand</a>
            </li>
            <li @click="login"
            class="btn" >
             <a>Log in</a>
            </li>

            <li  @click="signup"
            class="buttn">
              <a>SIGN UP TO BUY</a>
            </li> 
                       
          </ul>

            <Teleport to="#modal">
              <SignupForm v-show="showSignup" @close="signup" />            
            </Teleport>

            <Teleport to="#modal">
              <Loginmodal v-show="showLogin" @close="login"/>
            </Teleport>

            <Teleport to="#modal">
              <categoriesmodal v-show="showCategories" @close="opencategories"/>
            </Teleport>

            <Teleport to="#modal">
              <applyasbrand v-show="showbrand" @close="brand"/>
            </Teleport>

           
           
           
      </div>
    </div>

    <!--second row-->
    <div class="flex flex-row w-fit  
    bg-white ml-10 text-black 
    invisible laptop:visible border-b-[1px]
    border-slate-200 border-solid ">
      <div v-for="category in categories" :key="category"
      class="flex items-center relative">
        <button class="btncategories" @mouseover="activeTab=category.name"> {{ category.id }}</button> 
      </div>

        <Teleport to="#modal">
          <component :is="activeTab"   @close="closeTab" />
        </Teleport>

      <a href="/marketplace?fs_campaign=hot-deals-all" class="btncategories">
        <div class="flex w-full flex-nowrap justify-between">Hot Deals -10%</div></a>
      <a href="https://www.orderchamp.com/marketplace?fs_digital-fair=all" class="btncategories">
        <div class="flex w-full flex-nowrap justify-between">
        Digital Fair
      </div></a>

    </div>

  </header>

  <main>
    
    <router-view/>

  </main>

  <footer>
    <div class="w-screen h-[300px] bg-white
      grid mt-10 ml-10">
      
      <div class="laptop:flex grid mobile:grid-cols-2  
        border-y-[1px] border-slate-300 border-solid text-base
        place-content-evenly">
        <div class="">
          <h1 class="font-semibold my-1">Help & Information</h1>
          <h2 class=" hover:underline my-1">All Help Center articles</h2>
          <h2 class="hover:underline my-1">Ordering</h2>
          <h2 class="hover:underline my-1">Shipping & Delivery</h2>
          <h2 class="hover:underline my-1">Buy now, pay later</h2>
          <h2 class="hover:underline my-1">Fulfilment by Orderchamp</h2>
        </div>
        <div class="">
          <h1 class="font-semibold my-1">Marketplace</h1>
          <h2 class="hover:underline my-1">All brands</h2>
          <h2 class="hover:underline my-1">TICA Brands</h2>
          <h2 class="hover:underline my-1">Buy on Orderchamp</h2>
          <h2 class="hover:underline my-1">Sell on Orderchamp</h2>
          <h2 class="hover:underline my-1">Refer your brands</h2>
        </div>
        <div class="">
          <h1 class="font-semibold my-1">Orderchamp</h1>
          <h2 class="text-[13px] hover:underline my-1">About us</h2>
          <h2 class="text-[13px] hover:underline my-1">Careers</h2>
          <h2 class="text-[13px] hover:underline my-1">Blog</h2>
        </div>
        <div class="cursor-text">
          <h1 class="font-semibold my-1">Questions?</h1>
          <h2 class=" my-1">Email us at: <a href="mailto:support@orderchamp.com"  class="underline">support@orderchamp.com</a> </h2>
          <h2 class=" my-1">Call us on: +31 20 308 0808</h2>
          <h2 class=" my-1">Monday till Friday 9.00-18.00</h2>
        </div>
      </div>

      <hr class="m-0 h-px w-screen bg-grey-300">

      <div class="leading-none laptop:leading-normal container">
        <div class="flex place-content-around py-6 laptop:flex-row">
          <div class="mb-6 flex flex-wrap gap-3.5 laptop:mb-0">
            <img 
            src="https://cdn.orderchamp.com/assets/store/images/payment-logos/ideal.svg" 
            class="h-9">
            <img src="https://cdn.orderchamp.com/assets/store/images/payment-logos/creditcard.svg"  class="h-9">
            <img src="https://cdn.orderchamp.com/assets/store/images/payment-logos/paypal.svg"  class="h-9">
            <img src="https://cdn.orderchamp.com/assets/store/images/payment-logos/sofort.svg"  class="h-9">
            <img src="https://cdn.orderchamp.com/assets/store/images/payment-logos/giropay.svg"  class="h-9">
            <img src="https://cdn.orderchamp.com/assets/store/images/payment-logos/cartebancaire.svg" class="h-9">
            <img src="https://cdn.orderchamp.com/assets/store/images/payment-logos/eps.svg" class="h-9">
          </div>

          <div class="flex flex-col items-start space-x-0 text-24 
            no-underline laptop:flex-row laptop:items-stretch 
            laptop:space-x-6">

            <span class="mb-3.5 text-12 font-400 laptop:mb-0 laptop:flex laptop:items-center lg:text-14">
            More inspiration:
            </span>

            <div class="flex space-x-6 laptop:items-center">
              <a aria-label="Instagram" href="https://www.instagram.com/orderchamp/" class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
                viewBox="0 0 1000 1000">
                <path fill="currentColor" 
                d="M749.359 1.095H250.643c-137.4 0-249.186 111.41-249.186 248.348v501.11c0 136.929 111.786 248.351 249.186 248.351h498.716c137.4 0 249.183-111.423 249.183-248.351V249.442c0-136.937-111.783-248.346-249.183-248.346zm156.895 749.456c0 86.214-70.38 156.368-156.894 156.368H250.644c-86.514 0-156.895-70.154-156.895-156.368V426.903h197.146c-14.393 30.443-22.488 64.404-22.488 100.218c0 130.083 106.18 235.897 236.696 235.897c130.513 0 236.695-105.814 236.695-235.897c0-35.814-8.094-69.776-22.49-100.218h186.945v323.648zM406.845 527.123c0-53.99 44.077-97.923 98.259-97.923c54.184 0 98.258 43.934 98.258 97.923c0 54.001-44.074 97.926-98.258 97.926c-54.181-.001-98.259-43.925-98.259-97.926zm499.409-192.199H642.08c-38.701-27.468-85.954-43.695-136.976-43.695c-51.022 0-98.281 16.227-136.973 43.695H93.749v-85.481c0-86.223 70.381-156.367 156.895-156.367H749.36c86.514 0 156.894 70.144 156.894 156.367v85.481h.001zM806.248 148.861h-85.55c-15.232 0-27.687 12.418-27.687 27.594v85.266c0 15.175 12.454 27.594 27.687 27.594h85.55c15.231 0 27.687-12.419 27.687-27.594v-85.266c0-15.176-12.455-27.594-27.687-27.594z"/></svg>
              </a>
              <a aria-label="Facebook" href="https://www.facebook.com/orderchamp/" class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
                viewBox="0 0 1000 1000">
                <path fill="currentColor" 
                d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z"/></svg>
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/orderchamp" class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
                viewBox="0 0 1000 1000"><path fill="currentColor" 
                d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25H196.064zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854V384.193z"/></svg>
              </a>
              <a aria-label="Pinterest" href="https://www.pinterest.com/orderchamp" class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
                viewBox="0 0 24 24"><path fill="currentColor" 
                d="M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306c-.088-.79-.166-2.006.034-2.868c.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425c.853 0 1.264.64 1.264 1.407c0 .858-.546 2.139-.827 3.327c-.235.994.499 1.805 1.479 1.805c1.775 0 3.141-1.872 3.141-4.575c0-2.392-1.719-4.064-4.173-4.064c-2.843 0-4.512 2.132-4.512 4.335c0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133c-.044.183-.145.222-.335.134c-1.247-.581-2.027-2.405-2.027-3.871c0-3.151 2.289-6.045 6.601-6.045c3.466 0 6.159 2.469 6.159 5.77c0 3.444-2.171 6.213-5.184 6.213c-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2"/></svg>
              </a>
            </div>
          </div>

        </div>

        <hr class="m-0 h-px bg-grey-300">

          <div class="flex flex-col pt-6 pb-4 place-content-evenly
            leading-none laptop:flex-row laptop:pb-6 laptop:leading-normal 
            container flex-grow w-screen">
            
            <div class="flex flex-col items-start gap-x-0 gap-y-6 
              text-13 laptop:flex-row laptop:items-start laptop:gap-x-9 laptop:gap-y-0">
              <p>Copyright © 2023 Orderchamp</p>
               <p class="hover:underline">
                Privacy Policy
              </p> 
              <p class="hover:underline">
                Terms of Service</p>
            
            </div> 
            
            <div class="touch:mt-6">
              
              <div class="flex cursor-pointer items-center tablet:text-14 
                tablet:font-400 tablet:leading-none"> 
                <p class="inline-block align-middle">
                  Language &amp; Currency
                </p> 
              </div>

            </div>

          </div>

      </div>

    </div>
  </footer>
  
</template>


<script>
import Loginmodal from './components/Loginmodal.vue';
import applyasbrand from './components/applyasbrand.vue';
import categoriesmodal from './components/mobile/categoriesmodal.vue';
import SignupForm from './components/SignupForm.vue';
import HomeLiving from './components/categories/HomeLiving.vue';
import Stationery from './components/categories/Stationery.vue';
import FoodBeverages from './components/categories/FoodBeverages.vue';
import KitchenDining from './components/categories/KitchenDining.vue';
import HealthBeauty from './components/categories/HealthBeauty.vue';
import JewleryAccessories from './components/categories/JewleryAccessories.vue';
import KidsBaby from './components/categories/KidsBaby.vue';
import palais from './views/palais.vue';

export default {
  components: {SignupForm,palais,Loginmodal,
    HomeLiving,Stationery,FoodBeverages,
    KitchenDining,HealthBeauty,JewleryAccessories,KidsBaby,
    categoriesmodal,applyasbrand},
  data() {
    return {
      activeTab: '',
      showbrand: false,
      showSignup: false,
      showLogin: false,
      showHome: false,
      showCategories: false,
      categories: [
        {id:'Home & Living',
         name: 'HomeLiving',},
        {id:'Kitchen & Dining',
        name: 'KitchenDining', },
        {id:'Food & Beverages',
        name: 'FoodBeverages',},
        {id:'Kids & Baby',
        name: 'KidsBaby',},
        {id:'Health & Beauty',
        name: 'HealthBeauty',},
        {id:'Jewlery & Accessories',
        name: 'JewleryAccessories',},
        {id:'Stationery',
        name: 'Stationery',},
      ],
      
    } 
  },
     
  methods: {
    signup() {
      this.showSignup = !this.showSignup
    },
    login() {
      this.showLogin = !this.showLogin
    },
    closeTab() {
      this.activeTab=''
    },
    opencategories() {
      this.showCategories = !this.showCategories
    },
    brand() {
      this.showbrand = !this.showbrand
    },
    
  }
}

</script>