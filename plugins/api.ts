export default defineNuxtPlugin({
    setup(){
        const api = $fetch.create({
            baseURL: "https://novadeci-be-ecs-dev.yondu.net/membership/api/v1",
        })

        return {
            provide: {
                api
            }
        }
    }
})