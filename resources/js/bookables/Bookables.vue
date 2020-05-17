<template>
    <div>

    <p v-if="loading">Loading</p>
    <div v-for="(row, index) in rows" :key="index" class="row mb-4" >
        <div v-for="(bookable, column) in bookablesInRow(row)"
            :key="'row' + row + column"
            class="col d-flex align-items-stretch">
                <bookable-item
                    class="col d-flex align-items-stretch"
                    v-bind="bookable"
                />
        </div>
        <div class="col" v-for="p in placeholderInRow(row)" :key="'placeholder' + row + p"></div>
    </div>

    </div>
</template>

<script>
import BookableItem from './BookableItem';

// De esta forma se registran los componentes de forma local, el componente que se está usando
// tiene que ser pasado en el export default para que pueda ser tomado en cuenta por la app.
export default {
    components: {
        BookableItem,
    },
    data() {
        return {
            loading: true,
            bookables: [],
            columns: 3,
        }
    },
    computed: {
        rows() {
            return Math.ceil(this.bookables.length / this.columns);
        }
    },
    methods: {
        bookablesInRow(row) {
            return this.bookables.slice((row-1) * this.columns, row * this.columns);
        },
        placeholderInRow(row) {
            return this.columns - this.bookablesInRow(row).length;
        }
    },
    // beforeCreate()  {
    //     console.log('before create');
    // },
    created () {
        const request = axios
            .get("/api/bookables")
            .then(response => {
                this.bookables = response.data.data;
                this.loading = false;
            });
    },
    // beforeMount() {
    //     console.log('before mount');
    // },
    // mounted () {
    //     console.log('mounted');
    // },
    // beforeDestroy(){
    //     console.log('before destroy');
    // },
    // destroyed() {
    //     console.log('destroyed');
    // }
}
</script>

<style>

</style>