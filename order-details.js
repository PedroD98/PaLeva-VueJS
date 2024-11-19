const API_BASE_URL = "http://localhost:3000/api/v1/restaurants/5FTAWU/orders";

const app = Vue.createApp({

    data(){
        return{
            order: null,
            cancelReason: ''
        }
    },


    async mounted() {
        let orderCode = this.getQueryParams('code');
        await this.getOrderDetails(orderCode);
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
        },

        async updateToPreparing() {
            await fetch(`${API_BASE_URL}/${this.order.order_info.code}/preparing`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            window.location.reload();
        },

        async updateToDone() {
            await fetch(`${API_BASE_URL}/${this.order.order_info.code}/done`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            window.location.reload();
        },

        async updateToCanceled() {
            await fetch(`${API_BASE_URL}/${this.order.order_info.code}/canceled`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cancel_reason: this.cancelReason
                })
                
            });

            
            window.location.href = 'order-details.html?code=' + this.order.order_info.code;
        }
    }

})

app.mount('#app');