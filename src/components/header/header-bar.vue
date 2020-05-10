<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <HeaderBarBrand></HeaderBarBrand>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <HeaderNav></HeaderNav>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <HeaderLinks></HeaderLinks>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderBarBrand from "@/components/header/header-bar-brand";
import HeaderLinks from "@/components/header/header-links";
import HeaderNav from "@/components/header/header-nav";

export default {
  name: "HeaderBar",
  components: { HeaderBarBrand, HeaderLinks, HeaderNav }
};
</script>
