const API_BASE_URL = "http://localhost:3000/api/v1/restaurants/5FTAWU/orders";

const app = Vue.createApp({

    data(){
        return{
            order: null
        }
    },


    async mounted() {
        let orderCode = this.getQueryParams('code')
        await this.getOrderDetails(orderCode)
    },

    methods:{

        async getOrderDetails(code) {
            let response = await fetch(`${API_BASE_URL}/${code}`);
            this.order = await response.json();
            console.log(this.order);
        },


        getQueryParams(code) {
            let params = new URLSearchParams(window.location.search);
            return params.get(code);
        }

    }

})

app.mount('#app');