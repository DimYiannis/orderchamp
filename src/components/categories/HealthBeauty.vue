<template>
    <div class="backdroptwo" @mouseover.self="closeHome">
        <div @mouseleave="closeHome" class="modal bg-white place-self-center w-fit
        h-fit inset-x-16 fixed top-28">

        <div class="flex gap-20 m-5 ">
            <div class="grid gap-1">
                <h1 class="font-semibold my-1">Categories</h1>
                <h2 class="hover:underline my-1">Body Care</h2>
                <h2 class="hover:underline my-1">Skin Care</h2>
                <h2 class="hover:underline my-1">Toiletries</h2>
                <h2 class="hover:underline my-1">Oral Care</h2>
                <h2 class="hover:underline my-1">Makeup</h2>
                <h2 class="hover:underline my-1">Hair Care</h2>
                <h2 class="hover:underline my-1">Men's Grooming</h2>
                <h2 class="hover:underline my-1">Sun Care</h2>
                <h2 class="hover:underline my-1">Bath Care</h2>
                <h2 class="hover:underline my-1">Hand Care</h2>
                <h2 class="hover:underline my-1">Foot Care</h2>
                <h2 class="hover:underline my-1"> Wellness</h2>
                <h2 class="hover:underline my-1">Sports Equipment</h2>
                <h2 class="hover:underline my-1"> Beauty Gift Sets</h2>

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
                <div class="flex">
                    <span class="flex w-fit items-center gap-2">
                        
                        <span class="oc-image">
                            <span class="preloader"></span>
                            <img src="https://cdn.orderchamp.com/storefronts/1315700700217345/story_128x128_crop.jpg?20210401235302"  
                            class="w-12 h-12">
                        </span>
                        <a>Pure White Cosmetics</a>
                    </span>
 
                </div>
                <div class="flex ">
                    <span class="flex w-fit items-center gap-2">
                        
                    <span class="oc-image">
                        <img src="https://cdn.orderchamp.com/storefronts/752658194939905/story_128x128_crop.jpg?20200224101005" 
                            class="w-12 h-12">
                        </span>
                        <a> The Lekker Company</a>
                    </span>

                    
                </div>
                <div class="flex">
                    <span class=" flex w-fit items-center gap-2">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1604708275798017/story_128x128_crop.jpg?20211021153110" 
                            class="w-12 h-12">
                        </span>
                        Golden Rose Cosmetics

                    </span>

                    
                </div>
                <div class="flex  w-fit items-center gap-2">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/940600161517569/story_128x128_crop.jpg?20200627193737" 
                            class="w-12 h-12">
                        </span>
                        Beezonder

                    </span>

                    

                </div>
                <div class="flex ">
                    <span class=" w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/748498820464641/story_128x128_crop.jpg?20200828142312" 
                            class="w-9 h-9">
                        </span>
                        RevitalTrax

                    </span>

                    
                </div>
                <div class="flex">
                    <span class="w-fit items-center gap-2 flex ">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1519738515668993/story_128x128_crop.jpg?20221014105724" 
                            class="w-9 h-9">
                        </span>
                        <p class="text-clip">Korean Skincare Supply</p>

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1232378510344193/story_128x128_crop.jpg?20220812093151" 
                            class="w-12 h-12">
                        </span>
                        FOOD for SKIN (clean &amp; green skincare, made in NL)

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/703157586755585/story_128x128_crop.jpg?20210301220846" 
                            class="w-12 h-12">
                        </span>Rebel.Care


                    </span>

                    
                </div>

            </div>


            <div class="relative z-0 overflow-hidden leading-none hover:rounded hover:bg-grey-300">
                <div class="flex flex-nowrap items-center justify-between laptop:flex-wrap hover:flex-row-reverse">
                    <div class="relative z-0 overflow-hidden">
                    <h2 class="heading-6 pt-1 hover:px-4">Health &amp; Beauty Trends</h2>
                    <span class="">
                        <img src="https://images.prismic.io/orderchampdev/6da42cdc-72e6-4aad-af97-fb36e7b37ad2_cat_menu_img__0026_hair.jpg?auto=compress,format" 
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

