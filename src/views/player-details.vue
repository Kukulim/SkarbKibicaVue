<template>
  <div class="container">
      <h1 class="mt-5 mb-3">Dodaj zawodnika:</h1>
<form>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Imię:</label>
    <div class="col-sm-10">
      <input type="text" class="input form-control" value="imię...">
    </div>
  </div>



</form>
  </div>
</template>

<script>
export default {
  name: "PlayerDetails",
  props: {
    id: {
      type: Number,
      default: 0,
    },
    squadId: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
