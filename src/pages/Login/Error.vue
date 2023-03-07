<template>
    <div>
        <h1>Error {{ msg }}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: null
        };
    },
    created() {
        this.msg = this.$route.query.message;
    }
};
</script>