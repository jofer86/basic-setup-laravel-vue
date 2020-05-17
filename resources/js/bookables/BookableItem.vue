<template>
    <div class="card  w-100">
        <div class="card-body">
            <h5 class="card-title">
                {{ title }}
            </h5>
            <p class="card-text">
                {{ description }}
            </p>
            <router-link :to="{ name: 'bookable', params: { id: id } }" class="btn btn-primary">
                Go There Nao!
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
        }
    },
    props: {
        title: String,
        description: String,
        price: Number,
        id: Number,
    },
    methods: {
    },
}
</script>

<style>

</style>