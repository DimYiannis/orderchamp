<template>
    <div class="w-screen h-[fit]">
        <div class="">

            <div class="">
                <div class="flex min-h-[630px] items-center bg-[#324436] py-8 laptop:py-15">
                    <div class=" flex row mx-auto h-full w-full self-center  
                    items-start ml-14 ">
                        
                        <div class=" grid text-white mobile:w-1/2 w-screen ">

                            <h1 class="mb-4 leading-snug text-2xl tablet:text-5xl mobile:text-4xl 
                            laptop:mb-10 mobile:pt-10 text-left place-self-start">
                            The online wholesale marketplace that will make 
                            <i>your</i> store thrive</h1> 
                            
                            <p class="mb-10 "
                            >Set your store up for success</p> 
                            
                            <button class="bg-[#2b2b2b] hover:bg-[#1a1a1a] h-fit
                                 border-none laptop:w-[200px] place-self-start
                                text-white px-[20px] py-[10px] uppercase font-semibold"
                                @click="signup">
                                Sign up for free
                            </button> 

                            <Teleport to="#modal">
                                <SignupForm v-show="showSignup"  @close="signup" />
                            </Teleport>
                            
                            <div class="mt-10 laptop:mt-15">
                                Want to sell via Orderchamp?
                                <router-link to="/brands" class="underline">More info</router-link>
                            </div>
                        </div>

                        <div class="flex self-end">
                            <div class="mx-auto pt-6 text-center laptop:pt-0 laptop:pl-14">
                                <img src="https://images.prismic.io/orderchampdev/89ceec02-4b12-432b-8f7c-4ae32fd24a2f_homepage-intro.png?auto=compress,format" 
                                class="laptop:w-[450px] mobile:w-[300px] mobile:h-[300px] h-[400px] invisible mobile:visible">
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>   

            <div class="grid laptop:flex">

                
                             
                    
                        
                
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

