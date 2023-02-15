/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
     // customized breakpoints //
     screens: {
      'mobile': '450px',
        
      'tablet': '760px',

      'laptop': '1090px',

      'desktop': '1280px',
    },
    extend: {
      backgroundImage: {
        'palais': "url('https://cdn.orderchamp.com/storefronts/452395495948289/header_2000x400.jpg?20220901160844')",
        'brand': "url('https://cdn.orderchamp.com/assets/store/images/supplier-intro.png')",
        "brandpage": "url('https://images.prismic.io/orderchampdev/85f3ef8b-45b1-44b0-b3b4-094d5b01dc99_Retailer+%283%29.png?auto=compress,format&amp;rect=0,0,2119,643&amp;w=2636&amp;h=800&quot;')",
      }
    },
  },
  plugins: [],
}