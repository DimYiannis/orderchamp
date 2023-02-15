<template>
    <div class="backdroptwo" @mouseover.self="closeHome">
        <div @mouseleave="closeHome" class="modal bg-white place-self-center w-fit
        h-fit inset-x-16 fixed top-28">

        <div class="flex gap-20 m-5 ">
            <div class="">
                <h1 class="font-semibold my-1">Categories</h1>
                <h2 class="hover:underline my-1">Greeting Cards</h2>
                <h2 class="hover:underline my-1">Gift Wrapping</h2>
                <h2 class="hover:underline my-1">Office Supplies</h2>
                <h2 class="hover:underline my-1">Books</h2>
                <h2 class="hover:underline my-1">Calendars</h2>
                <h2 class="hover:underline my-1">Games and Puzzles</h2>
                <h2 class="hover:underline my-1">Envelopes</h2>
                <h2 class="hover:underline my-1">Notes</h2>
                <h2 class="hover:underline my-1">Journals</h2>
                <h2 class="hover:underline my-1">Planners</h2>
                <h2 class="hover:underline my-1">Desk Accessories</h2>
                <h2 class="hover:underline my-1">Craft</h2>
                
            </div>

            <div class=" ">
                
                <div>
                    <h1 class="font-semibold my-1"> Discounts</h1>
                    <h2 class=" hover:underline my-1">Hot Deals</h2>
                    <h2 class="hover:underline my-1">Sale</h2>
                </div>
                   
                <div class="mt-8">
                    <h1 class="font-semibold my-1">Recommended</h1>
                    <h2 class=" hover:underline my-1">New Arrivals</h2>
                    <h2 class="hover:underline my-1">Bestsellers</h2>
                    <h2 class="hover:underline my-1">Hidden Gems</h2>
                    <h2 class="hover:underline my-1">Star Sellers</h2>
                    
                </div>
            </div>
            
            <div class="grid">

                <h1 class="font-semibold my-1">Top Brands</h1>
                <div class="flex ">
                    <span class=" w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/940600161517569/story_128x128_crop.jpg?20200627193737" 
                            class="w-9 h-9">
                        </span>
                        Beezonder
                    </span>

                    
                </div>
                <div class="flex">
                    <span class="flex w-fit items-center gap-2">
                        
                        <span class="oc-image">
                            <span class="preloader"></span>
                            <img src="https://cdn.orderchamp.com/storefronts/490429964812289/story_128x128_crop.jpg?20190815124300"  
                            class="w-12 h-12">
                        </span>
                        <a>Hippekaartjes</a>
                    </span>
 
                </div>
                <div class="flex ">
                    <span class="flex w-fit items-center gap-2">
                        
                    <span class="oc-image">
                        <img src="https://cdn.orderchamp.com/storefronts/2039012233052161/story_128x128_crop.jpg?20220816213834" 
                            class="w-12 h-12">
                        </span>
                        <a> Liefs van Hilde - Deine Hilde</a>
                    </span>

                    
                </div>
                <div class="flex">
                    <span class=" flex w-fit items-center gap-2">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1804094784520194/story_128x128_crop.jpg?20220301163328" 
                            class="w-12 h-12">
                        </span>
                        Fünf vor Zehn

                    </span>

                    
                </div>
                <div class="flex  w-fit items-center gap-2">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1444588454084609/story_128x128_crop.jpg?20210617125158" 
                            class="w-12 h-12">
                        </span>
                        Bow & Hummingbird

                    </span>

                    

                </div>
                
                <div class="flex">
                    <span class="w-fit items-center gap-2 flex ">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/829083619491841/story_128x128_crop.jpg?20200520093332" 
                            class="w-9 h-9">
                        </span>
                        <p class="text-clip">Veer&Moon</p>

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/479267025043457/story_128x128_crop.jpg?20190812083644" 
                            class="w-12 h-12">
                        </span>
                        Studio Hoeked

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/2037554567462913/story_128x128_crop.jpg?20220819102751" 
                            class="w-12 h-12">
                        </span>Studio Kuukeluus


                    </span>

                    
                </div>

            </div>


            <div class="relative z-0 overflow-hidden leading-none hover:rounded hover:bg-grey-300">
                <div class="flex flex-nowrap items-center justify-between laptop:flex-wrap hover:flex-row-reverse">
                    <div class="relative z-0 overflow-hidden">
                    <h2 class="heading-6 pt-1 hover:px-4">Stationery Trends</h2>
                    <span class="">
                        <img src="https://images.prismic.io/orderchampdev/9b27fb2c-f0d1-4198-b5b0-84bb7a6ffd2f_cat_menu_img__0020_cards.jpg?auto=compress,format" 
                        class="desktop:h-[550px] laptop-[350px]">
                    </span>
                </div> 
                
            </div>
        </div>



        </div>

        </div>
    </div>
</template>

<script>
import { KeepAlive } from 'vue';

    export default {
        data() {
            return {

            }
        },
        methods: {
            closeHome() {
           this.$emit('close')
       },
        }
    }
</script>

