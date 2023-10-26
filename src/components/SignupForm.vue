<template>
    <div class="backdrop" @click.self="closeSignup">

        <div class="place-self-center flex
        max-w-[1000px] max-h-[screen] bg-white">

            

            <div class="grid w-1/2 bg-[#4c685f] gap-0 ">

                <div class="text-white font-italic 
                font-semibold text-xl place-self-center mt-10">
                    <h1>Start buying on Orderchamp!</h1>
                </div>

                <div class="place-self-center">
                    <img src="https://cdn.orderchamp.com/assets/store/images/retailer-step1-intro-new.png"
                    class="w-[400px]" />
                </div>

                <div class="text-white place-self-center 
                w-fit font-semibold mb-10 grid gap-2">

                    <div class="flex gap-5 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="15" height="15" 
                        viewBox="0 0 512 512">
                        <path fill="currentColor" 
                        d="M243.8 339.8c-10.9 10.9-28.7 
                        10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7
                        0-39.6c10.9-10.9 28.7-10.9 39.6 0l44.2
                        44.2l108.2-108.2c10.9-10.9 28.7-10.9 
                        39.6 0c10.9 10.9 10.9 28.7 0 39.6l-128 
                        128zM512 256c0 141.4-114.6 256-256 256S0 
                        397.4 0 256S114.6 0 256 0s256 114.6 256 
                        256zM256 48C141.1 48 48 141.1 48 256s93.1 
                        208 208 208s208-93.1 208-208S370.9 48 256 
                        48z"/>
                        </svg>
                        Low minimum order amounts
                    </div>
                    <div class="flex gap-5 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="15" height="15" 
                        viewBox="0 0 512 512">
                        <path fill="currentColor" 
                        d="M243.8 339.8c-10.9 10.9-28.7 
                        10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7
                        0-39.6c10.9-10.9 28.7-10.9 39.6 0l44.2
                        44.2l108.2-108.2c10.9-10.9 28.7-10.9 
                        39.6 0c10.9 10.9 10.9 28.7 0 39.6l-128 
                        128zM512 256c0 141.4-114.6 256-256 256S0 
                        397.4 0 256S114.6 0 256 0s256 114.6 256 
                        256zM256 48C141.1 48 48 141.1 48 256s93.1 
                        208 208 208s208-93.1 208-208S370.9 48 256 
                        48z"/>
                        </svg>
                        One checkout for multiple brands
                    </div>
                    <div class="flex gap-5 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="15" height="15" 
                        viewBox="0 0 512 512">
                        <path fill="currentColor" 
                        d="M243.8 339.8c-10.9 10.9-28.7 
                        10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7
                        0-39.6c10.9-10.9 28.7-10.9 39.6 0l44.2
                        44.2l108.2-108.2c10.9-10.9 28.7-10.9 
                        39.6 0c10.9 10.9 10.9 28.7 0 39.6l-128 
                        128zM512 256c0 141.4-114.6 256-256 256S0 
                        397.4 0 256S114.6 0 256 0s256 114.6 256 
                        256zM256 48C141.1 48 48 141.1 48 256s93.1 
                        208 208 208s208-93.1 208-208S370.9 48 256 
                        48z"/>
                        </svg>
                        Free shipping above €250
                    </div>
                    <div class="flex gap-5 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="15" height="15" 
                        viewBox="0 0 512 512">
                        <path fill="currentColor" 
                        d="M243.8 339.8c-10.9 10.9-28.7 
                        10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7
                        0-39.6c10.9-10.9 28.7-10.9 39.6 0l44.2
                        44.2l108.2-108.2c10.9-10.9 28.7-10.9 
                        39.6 0c10.9 10.9 10.9 28.7 0 39.6l-128 
                        128zM512 256c0 141.4-114.6 256-256 256S0 
                        397.4 0 256S114.6 0 256 0s256 114.6 256 
                        256zM256 48C141.1 48 48 141.1 48 256s93.1 
                        208 208 208s208-93.1 208-208S370.9 48 256 
                        48z"/>
                        </svg>
                        Buy now, pay up to 60 days later
                    </div>
                </div>

            </div>
            <div class=" w-1/2 ">

                <div class="flex justify-end p-3 h-10">
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

                <Theform/>

            </div>
            
        </div>
    </div>
</template>

<script>
import Theform from './Theform.vue';
export default 
{
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

