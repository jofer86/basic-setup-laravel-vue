<template>
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body" v-if="loading">
                    <h1>Now Loading</h1>
                </div>
                <div class="card-body" v-if="!loading">
                    <h2>{{ bookable.title }}</h2>
                    <hr>
                    <article>{{ bookable.description }}</article>
                    <router-link :to="{ name: 'bookables' }" class="btn btn-danger" >
                        Take me Back!
                    </router-link>
                </div>

            </div>
        </div>
        <div class="col-md-4">
            <availability />
        </div>
    </div>
</template>

<script>
import Availability from './Availability';
export default {
    components: {
        Availability
    },
    data() {
        return {
            bookable: null,
            loading: true,
        };
    },
    created() {
        const id = this.$route.params.id;
        const request = axios
        .get(`/api/bookables/${id}`)
        .then(response => {
            this.bookable = response.data.data;
            this.loading = false;
        });
    }
}
</script>
<style>

</style>