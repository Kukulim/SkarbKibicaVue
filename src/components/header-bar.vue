<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <HeaderLinks></HeaderLinks>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderBarBrand from "@/components/header-bar-brand";
import HeaderLinks from "@/components/header-links";

export default {
  name: "HeaderBar",
  components: { HeaderBarBrand, HeaderLinks }
};
</script>
