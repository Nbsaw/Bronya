<template>
  <div class="wx-aside clearfix">
    <aside-header></aside-header>
    <keep-alive>
      <component :is="viewName"></component>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AsideHeader from './Header'
import ChatList from './ChatList'
import SubjectList from './SubjectList'
import ContactList from './ContactList'
import viewConfig from '@/config/viewConfig'
export default {
  name: 'Aside',
  components: { AsideHeader, ChatList, SubjectList, ContactList },
  computed: {
    ...mapState(['currentView']),
    // 根据state里面的currentView切换视图
    viewName () {
      return viewConfig[this.currentView]['aside']
    }
  }
}
</script>

<style lang="scss">
  @import '~@/sass/mixin/bem';
  @import '~@/sass/common/var';

  @include b(aside){
    float: left;
    position: relative;
    width: 280px;
    height: 100%;
    background-color: $--aisde-color;
  }
</style>