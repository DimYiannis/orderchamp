<template>
    <div class="backdroptwo" @mouseover.self="closeHome">
        <div @mouseleave="closeHome" class="modal bg-white place-self-center w-fit
        h-fit inset-x-16 fixed top-28">

        <div class="flex gap-20 m-5 ">
            <div class="grid gap-1">
                <h1 class="font-semibold my-1">Categories</h1>
                <h2 class="hover:underline my-1">Drinkware</h2>
                <h2 class="hover:underline my-1">Tableware</h2>
                <h2 class="hover:underline my-1">Kitchen</h2>
                <h2 class="hover:underline my-1">Serveware</h2>
                <h2 class="hover:underline my-1">Cookware</h2>
                <h2 class="hover:underline my-1">To Go</h2>
                <h2 class="hover:underline my-1">Kitchen Appliances</h2>
                <h2 class="hover:underline my-1">Barware</h2>
                <h2 class="hover:underline my-1">Kitchen Storage</h2>
                <h2 class="hover:underline my-1">Dinner Settings</h2>

            </div>

            <div class="grid ">
                <div class=" ">
                    <h1 class="font-semibold my-1">Recommended</h1>
                    <h2 class=" hover:underline my-1">New Arrivals</h2>
                    <h2 class="hover:underline my-1">Bestsellers</h2>
                    <h2 class="hover:underline my-1">Hidden Gems</h2>
                    <h2 class="hover:underline my-1"> Star Sellers </h2>
                </div>
                
                <div>
                    <h1 class="font-semibold my-1"> Discounts</h1>
                    <h2 class=" hover:underline my-1">Hot Deals</h2>
                    <h2 class="hover:underline my-1">Sale</h2>
                </div>
                   
            </div>
            
            <div class="grid">

                <h1 class="font-semibold my-1">Top Brands</h1>
                <div class="flex">
                    <span class="flex w-fit items-center gap-2">
                        
                        <span class="oc-image">
                            <span class="preloader"></span>
                            <img src="https://cdn.orderchamp.com/storefronts/703156295942145/story_128x128_crop.jpg?20210912093858" 
                             class="w-12 h-12">
                        </span>
                        <a>Little Adventure</a>
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
                            <img src="https://cdn.orderchamp.com/storefronts/1264898830696449/story_128x128_crop.jpg?20210210115543" 
                            class="w-12 h-12">
                        </span>
                        Jut & Julie

                    </span>

                    
                </div>
                <div class="flex  w-fit items-center gap-2">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/310923980144641/story_128x128_crop.jpg?20210416144117" 
                            class="w-12 h-12">
                        </span>
                        Naïf
                    </span>

                    

                </div>
                <div class="flex ">
                    <span class=" w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1866656796377089/story_128x128_crop.jpg?20220421220819" 
                            class="w-9 h-9">
                        </span>
                        Everyday Baby

                    </span>

                    
                </div>
                <div class="flex">
                    <span class="w-fit items-center gap-2 flex ">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1631388879192065/story_128x128_crop.jpg?20220524123830"  
                            class="w-9 h-9">
                        </span>
                        <p class="text-clip">">Boon  &amp;  Kaboost</p>

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/820285356949505/story_128x128_crop.jpg?20211020171347" 
                             class="w-12 h-12">
                        </span>
                        Witlof for kids

                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1009260015206401/story_128x128_crop.jpg?20220613223401" 
                            class="w-12 h-12">
                        </span>Plum Plum Babygoods


                    </span>

                    
                </div>
                <div class="flex ">
                    <span class="w-fit items-center gap-2 flex">
                        
                        <span class="oc-image">
                            <img src="https://cdn.orderchamp.com/storefronts/1555174490161153/story_128x128_crop.jpg?20211005115327" 
                            class="w-12 h-12">
                        </span>Taf Toys


                    </span>

                    
                </div>

            </div>


            <div class="relative z-0 overflow-hidden leading-none hover:rounded hover:bg-grey-300"> 
                <div class="flex flex-nowrap items-center justify-between laptop:flex-wrap hover:flex-row-reverse">
                    <div class="relative z-0 overflow-hidden">
                    <h2 class="heading-6 pt-1 hover:px-4">Kitchen and Dining Trends</h2>
                    <span class="">
                        <img src="https://images.prismic.io/orderchampdev/7cbb79f5-04d1-4141-b949-860652859516_cat_menu_img__0028_nursery+room+deco.jpg?auto=compress,format" 
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

