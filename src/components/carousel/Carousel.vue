<template>
    <div class="carousel">
        <slot></slot>

        <button @click="next" class="btnr">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="32" height="32" 
            viewBox="0 0 20 20">
            <path fill="grey" 
            d="M10 7H2v6h8v5l8-8l-8-8v5z"/>
            </svg>
        </button>
        <button @click="prev" class="btnl">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="32" height="32"
            viewBox="0 0 20 20">
            <path fill="grey" 
            d="M10 13h8V7h-8V2l-8 8l8 8v-5z"/>
            </svg>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            next() {
                this.$emit('next')
            },
            prev() {
                this.$emit('prev')
            },
        },
    }
</script>
