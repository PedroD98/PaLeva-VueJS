const API_BASE_URL = "http://localhost:3000/api/v1/restaurants/5FTAWU/orders";

const app = Vue.createApp({

    data() {
        return {
            ordersList: []
        }
    },

    async mounted() {
        await this.getOrders();
    },

    methods:{

        async getOrders() {
            let response = await fetch(`${API_BASE_URL}?status_filters[]=confirming&status_filters[]=preparing&status_filters[]=done`);
            let data = await response.json();

            data.orders.forEach(element => {
                var order = new Object()

                order.code = element.code;
                order.status = element.status;
                order.created_at = element.created_at;

                console.log('Order created_at:', order.created_at)

                this.ordersList.push(order);
            })
        }
    }
})

app.mount('#app');