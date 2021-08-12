<template>
<div class="me">
    <tabhead class='pinkhead'>
        <div slot="center">我的信息</div>
    </tabhead>
    个人信息33
    <checkbox></checkbox>
</div>
  
</template>

<script>
import tabhead from 'components/common/tabhead.vue';
import checkbox from 'components/common/checkbox/checkbox.vue';
export default {
    name:'me',
    components:{
        tabhead,
        checkbox
    }

}
</script>

<style>

</style>