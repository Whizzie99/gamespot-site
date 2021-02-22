<template>
    <div>
        <comp-featured/>
        <comp-content/>
    </div>
</template>

<script>
    import compFeatured from './feature.vue';
    import compContent from './content.vue';

    export default {
        components:{
            compFeatured,
            compContent
        }
    }
</script>