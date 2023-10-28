<template>
    <div class="w-screen h-[fit]">
      <!--top row-->
      <div class="w-fit flex h-[4px] mt-[50px] laptop:mt-[40px] 
        invisible laptop:visible text-[15px] ml-14">
        <div class="flex place-self-end mr-2 ">
          <router-link to="/palais" class="font-semibold text-black bg-white 
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
          6V20z"/>
          </svg>
          </a>

          <div class="flex flex-nowrap overflow-hidden text-ellipsis self-end">
            <span class="flex flex-nowrap overflow-hidden gap-2">
              <a href="/home-living" class="cursor-pointer font-semibold">&gt; Home & Living</a>
              <a href="/home-living/home-textiles" class="cursor-pointer font-semibold"> &gt; Home Textiles</a>
              <a href="/home-living/home-textiles/cushions" class="cursor-pointer font-semibold">&gt; Cushions</a>
              <span>&gt; Outdoor Bolster Jackie Bordeaux</span>
            </span>
          </div>
        </div>

    <div class="grid 
      laptop:flex">

      <div class="">
        <div class="photo  h-[600px] w-fit flex tablet:w-400px 
         mt-5 ml-24">
            <Carousel
              @next="next"
              @prev="prev">
              <CarouselSlide v-for="(slide,index) in slides" 
                :key="slide" 
                :index="index"
                :visibleSlide = "visibleSlide"
                :direction ="direction">
                <img :src="slide" class="adjust" />
              </CarouselSlide>
            </Carousel>
        </div>



        <!--info-->
        <div class="mobile:w-[550px] h-[350px] mt-5
          bg-white tablet:ml-[200px] border-solid
          border-slate-200 border-t-[2px] overflow-auto
          container">

         <div class="text-lg flex overflow-hidden ">
          <h1>Information</h1>
         </div>

         <div>
          <div class="container flex">
            <div class="">
              This bolster cushion cover is made of 100% polypropylene. 
              Our custom woven fabric has a soft, luxurious feel and 
              is produced energy-efficiently without harmful coatings. 
              These bolsters are made to keep their quality in sun and 
              the rain. Because the fabric has not been chemically 
              coated, it does absorb water, but then easily dries 
              without any unpleasant smells of discoloring. This 
              bolster keeps its color in the sun, is wrinkle-free 
              and dirt-repellent (cocktails, sunscreen, you name it!). 
              You can leave the bolsters out in the light rain. If you 
              like your bolsters to stay dry, we do recommend bringing 
              them inside during heavy rain.Would you like to use the 
              bolster outdoors and indoors? Then we recommend choosing 
              the outdoor filling. The outdoor filling is made from 
              silicone. The filling is sturdier than an indoor filling, 
              but is still plenty soft to be used indoors as well.Would 
              you like to use the bolster indoors only? We recommend 
              choosing the feather indoor filling. This filling is made 
              from an eco cotton filled with recycled down and feathers.
            </div>
          </div>
         </div>

        </div>

        <div class="w-[550px] h-[350px] mt-10
         bg-white tablet:ml-[200px] border-solid border-t-2 
         border-slate-200">

         <div>
          <h1 class="text-xl my-3">Product specifications</h1>
         </div>

         <div>
          <div class="w-screen tablet:w-fit container">
            <select class=" w-fit appearance-none border-solid 
              border-gray-300 border-[1px] hover:border-black 
              tablet:text-xs text-[10px] mb-3">
              <option value="0">
                45x15 cm - Outdoor Filling - standard piping
              </option>
            <option value="1">
              45x15 cm - Outdoor Filling - contrast piping
            </option>
            <option value="2">
              60x22 cm - Outdoor Filling - standard piping
            </option>
            <option value="3">
              60x22 cm - Outdoor Filling - contrast piping
            </option>
          </select>
          </div>

          <div class="container w-screen tablet:w-fit">
            
              <table class="table-auto font-semibold">
                <tr class="bg-slate-200">
                  <td>Color</td> 
                  <td>Beige, Brown, Pink, Red</td>
                </tr>
                <tr>
                  <td>Material</td> 
                  <td>Grass, Plant, Plastic, Textile</td>
                </tr> 
                <tr class="bg-slate-200">
                  <td>
                  Values
                  </td> 
                  <td>Recycled Materials, Natural Resources, Handmade, Organic, Dutch Design</td>
                </tr>  
                <tr>
                  <td>
                    Made in
                  </td> 
                  <td>
                    Netherlands
                  </td>
                </tr>
                <tr class="bg-slate-200">
                  <td>
                    Brand Location
                  </td> 
                  <td>
                    Netherlands
                  </td>
                </tr>
              </table>
            
          </div>
         </div>

        </div>
      </div> 
        
        <div class="order-first laptop:order-2 w-fit">
          <div class="w-[fit] h-[fit]
            bg-white mt-5 ml-5   ">
            <h1 class="font-bold text-2xl">Outdoor Bolster Jackie Bordeaux</h1>
            <div class="text-xl font-bold m-2"> €72.50</div>
            <button class="bg-[#2b2b2b] hover:bg-[#1a1a1a]  h-fit border-none 
              text-white px-[20px] py-[10px] uppercase font-semibold" 
            @click="signup">Click here to see prices</button>
            
            <Teleport to="#modal">
                <SignupForm v-show="showSignup"  @close="signup" />
            </Teleport>
          </div>
        </div>

      </div>   

    </div>
</template>

<script>
import Carousel from '../components/carousel/Carousel.vue';
import CarouselSlide from '../components/carousel/CarouselSlide.vue';
import SignupForm from '../components/SignupForm.vue';
    export default {
        components: {SignupForm,Carousel,CarouselSlide},
        data() {
            return {
            showSignup: false,
            slides: [
            'https://cdn.orderchamp.com/listings/50b7866b-5a58-498a-83a9-000051e83810_1200x1200_fill.png?20220607083527',
            'https://cdn.orderchamp.com/listings/54688a4a-0db2-4b85-aceb-749af0dd55da_1200x1200_fill.jpg?20220601034939',
            'https://cdn.orderchamp.com/listings/055797af-a4c6-400d-91a2-87a7f9f19406_1200x1200_fill.jpg?20220601034939',
          ],
          visibleSlide : 0,
          direction : 'left'
            }
        },
        //next prev function
        computed: {
            slidesLen() {
                return this.slides.length;
            },
        },
        methods: {
            signup() {
                this.showSignup = !this.showSignup
            },
            // next prev function    
            next() {
                if(this.visibleSlide >= this.slidesLen - 1) {
                this.visibleSlide = 0;
            }else {
                this.visibleSlide++;
              }
            this.direction = "left"
            },
            prev() {
            if(this.visibleSlide <= 0) {
              this.visibleSlide = this.slidesLen - 1;
            }else {
             this.visibleSlide--;
             }
            this.direction = "right"
            },
        }
        
    }
</script>

