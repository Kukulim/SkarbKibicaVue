<template>
          <a :href="github" target="_blank" class="nav-link " >
            <font-awesome-icon :icon="['fab', 'github']" size="3x" />
          </a>

</template>

<script>
export default {
  data() {
    return {
      github: 'https://github.com/Kukulim',
    };
  },
};
</script>

