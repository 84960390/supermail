<template>
    <div>
        <div class="footer">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import footerone from './footerone.vue'
export default {
    name:'footer1',
    components:{
        footerone,
    }

}
</script>

<style>
.footer{
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgb(33, 45, 218);
    height: 50px;
}
.footer .dd{
    flex: 1;
    text-align: center;
    background-color: #ccc;
}

</style>