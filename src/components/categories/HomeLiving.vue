<template>
    <div class="backdroptwo" @mouseover.self="closeHome">
        <div @mouseleave="closeHome" class="modal bg-white place-self-center w-fit
        h-fit inset-x-16 fixed top-28">

        <div class="flex gap-20 m-5 ">
            <div class="grid gap-1">
                <h1 class="font-semibold my-1">Categories</h1>
                <h2 class="hover:underline my-1">Candles</h2>
                <h2 class="hover:underline my-1">Home Decoration</h2>
                <h2 class="hover:underline my-1">Lighting</h2>
                <h2 class="hover:underline my-1">Furniture</h2>
                <h2 class="hover:underline my-1">Seasonal Decoration</h2>
                <h2 class="hover:underline my-1">Home Textiles</h2>
                <h2 class="hover:underline my-1">Vases</h2>
                <h2 class="hover:underline my-1">Plants & Pots</h2>
                <h2 class="hover:underline my-1">Garden</h2>
                <h2 class="hover:underline my-1">Bathroom Products</h2>
                <h2 class="hover:underline my-1">Storage Units</h2>
                <h2 class="hover:underline my-1">Dried Flowers</h2>
                <h2 class="hover:underline my-1">Rugs</h2>
                <h2 class="hover:underline my-1">Party Decoration</h2>
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
                            <img src="https://cdn.orderchamp.com/storefronts/1460051591266305/story_128x128_crop.jpg?20210629000054"  
                            class="w-12 h-12">
                        </span>
                        <a>Lumiz</a>
                    </span>
 
                </div>
                <div class="flex ">
                    <span class="flex w-fit items-center gap-2">
                        
                    <span class="oc-image">
                        <img src="https://cdn.orderchamp.com/storefronts/633465890979841/story_128x128_crop.jpg?20191219123802" 
                            class="w-12 h-12">
                        </span>
                        <a>ANNA NERA</a>
                    </span>

                    
                </div>
                <div class="flex">
                    <span class=" flex w-fit items-center gap-2">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/452395495948289/story_128x128_crop.jpg?20200728075529" 
                            class="w-12 h-12">
                        </span>
                        Palais

                    </span>

                    
                </div>
                <div class="flex  w-fit items-center gap-2">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/306420211204097/story_128x128_crop.jpg?20190528132809" 
                            class="w-12 h-12">
                        </span>
                        Kop op!

                    </span>

                    

                </div>
                <div class="flex ">
                    <span class=" w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/2118228282310657/story_128x128_crop.jpg?20221006070847" 
                            class="w-9 h-9">
                        </span>
                        Ten Cate Premium

                    </span>

                    
                </div>
                <div class="flex">
                    <span class="w-fit items-center gap-2 flex ">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/536413133766657/story_128x128_crop.jpg?20220926122319" 
                            class="w-9 h-9">
                        </span>
                        <p class="text-clip">SlowBeauty #Moments - to nourish the body and feed the soul.</p>

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1460066744532993/story_128x128_crop.jpg?20210629002002" 
                            class="w-12 h-12">
                        </span>
                        Ten Cate

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1460058181468161/story_128x128_crop.jpg?20210701145747" 
                            class="w-12 h-12">
                        </span>Jet Originals


                    </span>

                    
                </div>

            </div>


            <div class="relative z-0 overflow-hidden leading-none hover:rounded hover:bg-grey-300">
                <div class="flex flex-nowrap items-center justify-between laptop:flex-wrap hover:flex-row-reverse">
                    <div class="relative z-0 overflow-hidden">
                    <h2 class="heading-6 pt-1 hover:px-4">Home and Living Trends</h2>
                    <span class="">
                        <img src="https://images.prismic.io/orderchampdev/628df4b5-c93f-4e20-ab73-84975fe3b790_cat_menu_img__0051_bedding+bath.jpg?auto=compress,format" 
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

