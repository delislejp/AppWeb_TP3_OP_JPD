<template>
    <RegisterForm></RegisterForm> 
</template>

<script>
    import { ref } from 'vue';
    import RegisterForm from '@/components/RegisterForm.vue';

    export default {
        props: {
            id: String,
        },
        components: {
            RegisterForm
        },
        setup(props) {
            
            return {
            }
        },
        mounted(){
            document.title = "Account Registration";
        }
    }
</script>

<style scoped>

</style>