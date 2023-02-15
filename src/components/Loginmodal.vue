<template>
    <div class="backdrop" @click.self="closeLogin">
        <div class="modal bg-white tablet:w-fit
            tablet:h-fit place-self-center
            w-screen h-screen">

            <div class="flex justify-end p-3 h-10 ">
                    <button class="exitbtn" @click="closeLogin">
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

            <form class="mb-6">
                <h1 class="heading-4 mb-3 text-2xl font-bold">Log in</h1>
                <h2 class="mb-1 font-semibold">
                    Log in to access your dashboard.
                    <br>
                    Don't have an account yet?
                    <a class="underline">Sign up</a> 
                </h2>
        
                <label class="label">Company name:</label>
                <input type="company name" required v-model="company">
                


                <label>Password:</label>
                <input type="password" required v-model="password" placeholder="Password">
                <div v-if="passwordError" class="error"> {{passwordError}}</div>
            
            
                <button  class="bg-[#2b2b2b] w-full rounded-none 
                    m-4 text-white h-10 ">
                    Log in
                </button>

                <div class="text-center">
                    <a class="underline font-semibold">
                    Sell on Orderchamp?
                    </a>
                </div>
            </form>

            

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loginmodal',
        data() {
            return {
                password: '',
                company: '',
                passwordError: '',
            }
        },
        
        methods: {
       
       closeLogin() {
           this.$emit('close')
       },
   }, 
    }
</script>

