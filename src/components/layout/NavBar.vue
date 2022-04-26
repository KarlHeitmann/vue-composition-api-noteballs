<template>
  <nav
    class="navbar is-success"
    role="navigation"
    aria-label="main navigation"
    >
    
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Noteballs
        </div>
  
        <a
          role="button"
          @click.prevent="showMobileNav = !showMobileNav"
          class="navbar-burger"
          :class="{ 'is-active' : showMobileNav}"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBurgerRef"
          >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        ref="navbarMenuRef"
        :class="{ 'is-active' : showMobileNav}"
        >
        <div class="navbar-end">
          <RouterLink
            @click="showMobileNav=false"
            to="/"
            class="navbar-item"
            active-class="is-active"
            >
            Home
          </RouterLink>
          <RouterLink
            @click="showMobileNav=false"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
            >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>


  </nav>
</template>

<script setup>
/*
  imports
*/
  import { ref } from "vue";
  import { onClickOutside } from '@vueuse/core'
/*
  mobile nav
*/
  const navbarMenuRef = ref(null)
  const navbarBurgerRef = ref(null)
  // onClickOutside(target, (event) => console.log(event))
  // onClickOutside(target, (event) => {
  //   showMobileNav.value = false
  // })
  onClickOutside(navbarMenuRef, (event) => {
    showMobileNav.value = false
  }, {
    ignore: [navbarBurgerRef]
  })
  const showMobileNav = ref(false)
</script>

<style>
  @media (max-width: 1023px) {
    .navbar-menu {
      position: absolute;
      left: 0;
      width: 100%;
    }
  }
</style>