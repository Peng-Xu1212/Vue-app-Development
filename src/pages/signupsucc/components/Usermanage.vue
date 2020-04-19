<template>
    <div class="wrapper-user">
        <ul>
          <li v-for="item in alluser" class="user-chunk">
            Name:
            {{item.username}}
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            Status:
            <span v-if="item.isAdmin">Admin</span>
            <span v-else>User</span>
            <button class="delete-button">Delete</button>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Usermanage',
    props: {
        alluser: Array
    }
}
</script>

<style lang="stylus" scoped>
  .wrapper-user
      position: absolute
      top: 1.5rem
      left: .2rem
      right: 0
      width: 95%
      height: 1
      border-radius: .15rem
      background: #eee
      .user-chunk
          margin: .25rem .15rem
          padding: .1rem
          background: #0CECF0
          height: .35rem
          border-radius: .1rem
          color: #fff
          .delete-button
              position: absolute
              right: .25rem
              background: #07F4C5
              font-size: .2rem
              border-radius: .1rem

</style>
