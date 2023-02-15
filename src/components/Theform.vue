<template>
    <form class="form" @submit.prevent="handleSubmit">
                
           
                <label class="label">Company name:</label>
                <input type="company name" required v-model="company">
                
    
                <label class="label">Country</label>

                    <select v-model="country">
                        <option v-for="country in countries"  :value="country.id">{{ country.name }}</option>
                </select>
    
                <label class="label">Email:</label>
                <input type="email" required v-model="email" placeholder="Email">
    
                <label>Password:</label>
                <input type="password" required v-model="password" placeholder="Password">
                <div v-if="passwordError" class="error"> {{passwordError}}</div>
        
                
    
                <div class="terms">
                    <h1 class="text-[10px]">By signing up, you are agreeing to our Terms of Service . 
                    We don’t allow third-party marketplace (e.g. Amazon, Bol.com, eBay, Etsy) resellers on Orderchamp</h1>
                </div>
    
                <div class="submit">
                    <button class="buton">Join Now</button>
                    <p class="place-self-start text-[10px]">Already have an account? Log in</p>
                    <p class="place-self-start text-[10px]">Are you a brand? Sign up as a brand</p>
                </div>
    
    </form>
</template>

<script>
    export default {
        name: 'Theform',
        data() {
            return {
                email: '',
                password: '',
                country: '',
                company: '',
                terms: false,
                passwordError: '',
                countries: [
                    {
                        id:'Greece',
                        name: 'Greece'
                    },
                    {
                        id:'Scotland',
                        name: 'Scotland',
                    },
                    {    
                
                        id:'Germany',
                        name: 'Germany',
                    },
                    {
                        id:'Switzerland',
                        name: 'Switzerland',
                    },
                    {
                        id:'Denmark',
                        name: 'Denmark'
                    },
                    {
                        id:'The Netherlands',
                        name: 'The Netherlands',
                    },
                    {
                        id:'Spain',
                        name: 'Spain',
                    },
                    {
                        id:'Norway',
                        name: 'Norway',
                    },
                    {    
                        id:'France',
                        name: 'France',
                    },
                    {
                        id:'Croatia',
                        name: 'Croatia',
                    },
                    {
                        id:'Iceland',
                        name: 'Iceland',
                    },
                    {
                        id:'Austria',
                        name: 'Austria',
                    },
                
                ]
            }
        },
        methods: {
            handleSubmit() {
                //validate password
                this.passwordError = this.password.length >= 12 ? 
                '' : 'Password must be at least 12 characters long'

                if(!this.passwordError) {
                   console.log('email: ',this.email) 
                   console.log('password: ', this.password) 
                   console.log('country: ', this.country) 
                   console.log('company: ', this.company) 
                   console.log('terms accepted: ', this.terms) 
                }
        
            },
        }
            
    }
</script>
