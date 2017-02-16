<template>
    <ul id="navigation_bar">
        <li v-for="(item,index) in items" v-bind:class="{'current_selected':index==0}">{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'NavigationBar',
        data() {
            return {
                items: [
                    '推荐', '全球旗舰', '轻奢', '母婴', '美妆'
                ]
            };
        }
    };

</script>