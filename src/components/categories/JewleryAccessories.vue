<template>
    <div class="backdroptwo" @mouseover.self="closeHome">
        <div @mouseleave="closeHome" class="modal bg-white place-self-center w-fit
        h-fit inset-x-16 fixed top-28">

        <div class="flex gap-20 m-5 ">
            <div class="">
                <h1 class="font-semibold my-1">Categories</h1>
                <h2 class="hover:underline my-1">Small Accessories</h2>
                <h2 class="hover:underline my-1">Tech Accessories</h2>
                <h2 class="hover:underline my-1">Jewellery</h2>
                <h2 class="hover:underline my-1">Fashion Accessories</h2>
           
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
                            <img src="https://cdn.orderchamp.com/storefronts/326240790282241/story_128x128_crop.jpg?20220118085458"  
                            class="w-12 h-12">
                        </span>
                        <a>Mint15</a>
                    </span>
 
                </div>
                <div class="flex ">
                    <span class="flex w-fit items-center gap-2">
                        
                    <span class="oc-image">
                        <img src="https://cdn.orderchamp.com/storefronts/424164459380737/story_128x128_crop.jpg?20210219114309" 
                            class="w-12 h-12">
                        </span>
                        <a> Fairitems</a>
                    </span>

                    
                </div>
                <div class="flex">
                    <span class=" flex w-fit items-center gap-2">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/524559349219329/story_128x128_crop.jpg?20190906122557" 
                            class="w-12 h-12">
                        </span>
                        Fortuna Beads

                    </span>

                    
                </div>
                <div class="flex  w-fit items-center gap-2">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/633465890979841/story_128x128_crop.jpg?20191219123802" 
                            class="w-12 h-12">
                        </span>
                        ANNA NERA

                    </span>

                    

                </div>
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
                    <span class="w-fit items-center gap-2 flex ">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/466568526823425/story_128x128_crop.jpg?20200311132247" 
                            class="w-9 h-9">
                        </span>
                        <p class="text-clip">MOOI! Jewels</p>

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1432121928384513/story_128x128_crop.jpg?20210609215612" 
                            class="w-12 h-12">
                        </span>
                        Bellody

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/775410327404545/story_128x128_crop.jpg?20200329121852" 
                            class="w-12 h-12">
                        </span>Boho-Beach


                    </span>

                    
                </div>

            </div>


            <div class="relative z-0 overflow-hidden leading-none hover:rounded hover:bg-grey-300">
                <div class="flex flex-nowrap items-center justify-between laptop:flex-wrap hover:flex-row-reverse">
                    <div class="relative z-0 overflow-hidden">
                    <h2 class="heading-6 pt-1 hover:px-4">Jewelry &amp; Accessories Trends</h2>
                    <span class="">
                        <img src="https://images.prismic.io/orderchampdev/9e460e5a-0763-4d1e-8a32-9c90cab659ed_cat_menu_img__0002_belts.jpg?auto=compress,format" 
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

