<template>
    <div class="backdrop" @click.self="closeSignup">

        <div class="place-self-center transition-opacity
        w-screen h-screen bg-white overflow-auto">
            <div class="text-center w-screen m-5 font-semibold
            text-3xl">
                Categories
                <div class="right-2 top-3 absolute p-3 h-10">
                    <button class="exitbtn" @click="closeSignup">
                     <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="white" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" stroke="black" 
                        class="w-6 h-6 hover:stroke-red-800 
                        place-self-center">
                        <path stroke-linecap="round" 
                        troke-linejoin="round" 
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="grid gap-2 w-fit">
                <div class="flex items-center ">
                        <div class="mr-6 h-15 w-15 shrink-0 
                            overflow-hidden rounded bg-grey-300">
                            <span class="overflow-hidden rounded">
                                <span class="preloader"></span>
                                <img src="https://cdn.orderchamp.com/category/b47589b2-b1c5-401c-8a3a-e0288115c351.jpg?20220812104602" 
                                class="w-16 h-16">
                            </span>
                        </div>
                        <div class="flex w-full flex-nowrap font-bold">
                            Home &amp; Living
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="mr-6 h-15 w-15 shrink-0 
                            overflow-hidden rounded bg-grey-300">
                            <span class="overflow-hidden rounded">
                                <span class="preloader"></span>
                                <img src="https://cdn.orderchamp.com/category/58bda5b1-c46d-49cb-95ef-604ad295dc56.jpg?20220926093257" 
                                class="w-16 h-16">
                            </span>
                        </div>
                        <div class="flex w-full flex-nowrap font-bold">
                            Kitchen & Dining
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="mr-6 h-15 w-15 shrink-0 
                            overflow-hidden rounded bg-grey-300">
                            <span class="overflow-hidden rounded">
                                <span class="preloader"></span>
                                <img src="https://cdn.orderchamp.com/category/09f60d83-1c68-4dfa-b06b-f26c7f2ebbd9.png?20220926104739" 
                                class="w-16 h-16">
                            </span>
                        </div>
                        <div class="flex w-full flex-nowrap font-bold">
                            Food & Beverages
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="mr-6 h-15 w-15 shrink-0 
                            overflow-hidden rounded bg-grey-300">
                            <span class="overflow-hidden rounded">
                                <span class="preloader"></span>
                                <img src="https://cdn.orderchamp.com/category/a2bc130a-8af7-432b-bc5c-0a9d13fa6e68.jpg?20220812103817" 
                                class="w-16 h-16">
                            </span>
                        </div>
                        <div class="flex w-full flex-nowrap font-bold">
                            Kids & Baby
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="mr-6 h-15 w-15 shrink-0 
                            overflow-hidden rounded bg-grey-300">
                            <span class="overflow-hidden rounded">
                                <span class="preloader"></span>
                                <img src="https://cdn.orderchamp.com/category/df24d541-555e-4ae6-9ed9-188f26d48865.png?20220926104932" 
                                class="w-16 h-16">
                            </span>
                        </div>
                        <div class="flex w-full flex-nowrap font-bold">
                            Health & Beauty
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="mr-6 h-15 w-15 shrink-0 
                            overflow-hidden rounded bg-grey-300">
                            <span class="overflow-hidden rounded">
                                <span class="preloader"></span>
                                <img src="https://cdn.orderchamp.com/category/6bb6f0c1-1872-4756-9033-9820f95dd01c.png?20220926105639" 
                                class="w-16 h-16">
                            </span>
                        </div>
                        <div class="flex w-full flex-nowrap font-bold">
                            Jewlery & Accessories
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="mr-6 h-15 w-15 shrink-0 
                            overflow-hidden rounded bg-grey-300">
                            <span class="overflow-hidden rounded">
                                <span class="preloader"></span>
                                <img src="https://cdn.orderchamp.com/category/4cdc144f-2ef8-4226-8ba3-a3be0117fd8d.png?20220926105146" 
                                class="w-16 h-16">
                            </span>
                        </div>
                        <div class="flex w-full flex-nowrap font-bold">
                            Stationery
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="mr-6 h-15 w-15 shrink-0 
                            overflow-hidden rounded bg-grey-300">
                            <span class="overflow-hidden rounded">
                                <span class="preloader"></span>
                                <img src="https://images.prismic.io/orderchampdev/aec13c64-7d8a-4722-abc2-f5955fbfce0a_ODF+Circle-20.png?auto=compress,format&amp;rect=0,0,1608,1608&amp;w=300&amp;h=300" 
                                class="w-16 h-16">
                            </span>
                        </div>
                        <div class="flex w-full flex-nowrap font-bold">
                            Digital Fair
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="mr-6 h-15 w-15 shrink-0 
                            overflow-hidden rounded bg-grey-300">
                            <span class="overflow-hidden rounded">
                                <span class="preloader"></span>
                                <img src="https://images.prismic.io/orderchampdev/30ca632f-6be8-443e-88c1-749b2aec7508_Hot+Deals+Logo+1.png?auto=compress,format&amp;rect=0,0,256,256&amp;w=300&amp;h=300" 
                                class="w-16 h-16">
                            </span>
                        </div>
                        <div class="flex w-full flex-nowrap font-bold">
                            Hot Deals
                        </div>
                    </div>
            </div>
            

            
            
        </div>
    </div>
</template>

<script>
import Theform from '../Theform.vue';
export default {
    name: 'SignupForm',
    components: {Theform,},
    data() {
        return {
          
        }
    },
    methods: {
        closeSignup() {
            this.$emit('close')
        },
    }, 
    
}


</script>

