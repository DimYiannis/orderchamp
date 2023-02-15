<template>
    <div class="max-w-screen-desktop h-[fit]">
      <!--top row-->
      <div class="max-w-screen flex h-[4px] mt-[50px] 
      laptop:mt-[40px] 
          invisible tablet:visible text-[15px] ml-14">
          <div class="flex place-self-end mr-2 ">
              <router-link to="/" class="font-semibold text-black bg-white 
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
  
      </div>
  
      <div class="grid left-0 w-screen mt-6 h-[370px] 
            bg-brandpage bg-cover  mx-14">
      
            <div class="bg-white container tablet:w-[600px] h-[200px] 
                place-self-center  rounded-xl grid place-items-center
                mobile:w-[400px] w-[200px]">
                
                <div class="container tablet:inset-fit  grid place-items-center gap-1">

                    <p class="text-xs tablet:text-base">SELL ON ORDERCHAMP FOR WHOLESALE SUCCESS ACROSS EUROPE</p>
                    <h1 class="tablet:text-3xl text-xl font-semibold">Grow your brand beyond borders</h1>
                    <div class="mt-6">
                        <button @click="brands"
                            class=" hover:bg-[#1a1a1a] mobile:text-base  
                            h-fit border-none text-white px-[20px] 
                            py-[10px] uppercase font-bold bg-[#4c685f]
                            text-sm">APPLY TO SELL</button>
                    </div>
                </div>

            </div>
        
      
        </div>
  
      
  
          <Teleport to="#modal">
            <applyasbrand v-show="showbrands"  @close="brands" />
          </Teleport>
    </div>
  
          
                
  
    
</template>
  
  <script>
  import applyasbrand from '../components/applyasbrand.vue'
      export default {
          components: {applyasbrand,},
          data() {
              return {
              showbrands: false,
              
              }
          },
          
          methods: {
              brands() {
                  this.showbrands = !this.showbrands
              },
              
          }
          
      }
  </script>
  
  