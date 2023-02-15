<template>
    <div class="backdroptwo" @mouseover.self="closeHome">
        <div @mouseleave="closeHome" class="modal bg-white place-self-center w-fit
        h-fit inset-x-16 fixed top-28">

        <div class="flex gap-20 m-5 ">
            <div class="">
                <h1 class="font-semibold my-1">Food</h1>
                <h2 class="hover:underline my-1">Grains</h2>
                <h2 class="hover:underline my-1">Condiments </h2>
                <h2 class="hover:underline my-1">Cheese</h2>
                <h2 class="hover:underline my-1">Seasoning</h2>
                <h2 class="hover:underline my-1"> Cooking Oils</h2>
                <h2 class="hover:underline my-1"> Spreads</h2>
                <h2 class="hover:underline my-1">Chocolate</h2>
                <h2 class="hover:underline my-1"> Snacks</h2>
                <h2 class="hover:underline my-1">Shop all</h2>
                
                <h1 class="hover:underline mt-5 font-semibold"> Beverages</h1>
                <h2 class="hover:underline my-1"> Juices</h2>
                <h2 class="hover:underline my-1"> Alcohol</h2>
                <h2 class="hover:underline my-1"> Tea</h2>
                <h2 class="hover:underline my-1"> Coffee</h2>
                <h2 class="hover:underline my-1"> Milk</h2>
                <h2 class="hover:underline my-1"> Non-Alcoholic Drinks</h2>
                <h2 class="hover:underline my-1"> Soft Drinks</h2>
                



            </div>






 



            

            <div class="grid ">
                <div class=" ">
                    <h1 class="font-semibold my-1">Categories</h1>
                    <h2 class=" hover:underline my-1">Pet Supplies</h2>
                    <h2 class="hover:underline my-1">Household Supplies</h2>
                    <h2 class="hover:underline my-1">Bedding</h2>
                    <h2 class="hover:underline my-1">Home Fragrance </h2>
                </div>
                    

                <div>
                    <h1 class="font-semibold my-1"> Discounts</h1>
                    <h2 class=" hover:underline my-1">Hot Deals</h2>
                    <h2 class="hover:underline my-1">Sale</h2>
                </div>
                   


                <div>
                    <h1 class="font-semibold my-1">Recommended</h1>
                    <h2 class=" hover:underline my-1">New Arrivals</h2>
                    <h2 class="hover:underline my-1">Bestsellers</h2>
                    <h2 class="hover:underline my-1">Hidden Gems</h2>
                    <h2 class="hover:underline my-1">Star Sellers</h2>
                    
                </div>
            </div>
            
            <div class="grid">

                <h1 class="font-semibold my-1">Top Brands</h1>
                <div class="flex">
                    <span class="flex w-fit items-center gap-2">
                        
                        <span class="oc-image">
                            <span class="preloader"></span>
                            <img src="https://cdn.orderchamp.com/storefronts/1306174919786497/story_128x128_crop.jpg?20210312132804"  
                            class="w-12 h-12">
                        </span>
                        <a>Klepper &amp; Klepper</a>
                    </span>
 
                </div>
                <div class="flex ">
                    <span class="flex w-fit items-center gap-2">
                        
                    <span class="oc-image">
                        <img src="https://cdn.orderchamp.com/storefronts/1541101855571969/story_128x128_crop.jpg?20210824152644" 
                            class="w-12 h-12">
                        </span>
                        <a>Smaakje </a>
                    </span>

                    
                </div>
                <div class="flex">
                    <span class=" flex w-fit items-center gap-2">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1693761798537217/story_128x128_crop.jpg?20220110103504" 
                            class="w-12 h-12">
                        </span>
                        The Great British Bakery

                    </span>

                    
                </div>
                <div class="flex  w-fit items-center gap-2">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1545174305718273/story_128x128_crop.jpg?20210827143151" 
                            class="w-12 h-12">
                        </span>
                        Wholy Greens

                    </span>

                    

                </div>
                <div class="flex ">
                    <span class=" w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1273390897528833/story_128x128_crop.jpg?20210216232506" 
                            class="w-9 h-9">
                        </span>
                        Popkornditorei Knalle

                    </span>

                    
                </div>
                <div class="flex">
                    <span class="w-fit items-center gap-2 flex ">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/2039121644568577/story_128x128_crop.jpg?20220812121436" 
                            class="w-9 h-9">
                        </span>
                        <p class="text-clip">d'Hala Delikatessen Manufaktur</p>

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1936090532331521/story_128x128_crop.jpg?20220704112705" 
                            class="w-12 h-12">
                        </span>
                        Marcinto Portugal

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1770682074382337/story_128x128_crop.jpg?20220203140307" 
                            class="w-12 h-12">
                        </span>Ravellis


                    </span>

                    
                </div>

            </div>


            <div class="relative z-0 overflow-hidden leading-none hover:rounded hover:bg-grey-300">
                <div class="flex flex-nowrap items-center justify-between laptop:flex-wrap hover:flex-row-reverse">
                    <div class="relative z-0 overflow-hidden">
                    <h2 class="heading-6 pt-1 hover:px-4">Food &amp; Beverage Trends</h2>
                    <span class="">
                        <img src="https://images.prismic.io/orderchampdev/68ff484d-0968-476b-baef-4d734b51f055_cat_menu_img__0040_chocolates+candies.jpg?auto=compress,format" 
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

