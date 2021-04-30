<template>
  <nav class="tab-list">
    <ul>
      <li class="avatar_li">
        {{ recommend }}
      </li>
      <li class="tab-list_active">{{ friend }}</li>
      <!-- <li>nature</li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    recommend: {
      type: String,
      default: ''
    },
    friend: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
.tab-list {
  margin: 0 4px;
  font-size: 20px;
  height: 50px;

  &::after {
    content: '';
    display: block;
    height: 6px;
    background-image: linear-gradient(
      to left,
      #cfd7dd,
      #d7dde2 30%,
      #d7dde2 70%,
      #cfd7dd
    );
  }
  ul {
    display: flex;
    list-style: none;
    
  }
  li {
    padding: 16px 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
    width: auto;
    flex: 1;
    text-align: center;
  }

  
}
</style>
