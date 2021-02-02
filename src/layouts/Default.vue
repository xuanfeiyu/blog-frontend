<template>
  <div class="layout sticky-header">
    <!-- Navigation -->
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <a href="/" aria-current="page" class="home-link active--exact active">
            <img src="../..//static/img/logo.svg" alt="Nichlas W. Andersen" class="logo"></a>
        </div>
        <nav class="nav right">
          <g-link to="/journal" class="nav__link">Journal</g-link>
          <g-link to="/contact" class="nav__link">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <!-- 默认插槽 -->
    <slot />
    <!-- Footer -->
    <footer class="footer">
      <div class="container"><span>Copyright © 2021</span></div>
    </footer>
  </div>
</template>

<style></style>
