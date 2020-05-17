<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">LaravelBnB</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :to="{ name: 'testor' }" class="navbar-item nav-link">Testing</router-link>
                </div>
            </div>
        </nav>
        <div class="container mt-4 mb-4 pr-4 pl-4">
            <!-- Aqui se agrega el componente router view que es donde se va a renderizar el app -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>