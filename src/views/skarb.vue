<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Skarb Kibica:</h1>
    <form>

      <div class="form-group">
        <label for="id">Id:</label>
        <label class="input form-control" id="id">{{ klub.id }}</label>
      </div>

      <div class="form-group">
        <label for="name">Nazwa klubu:</label>
        <input class="input form-control" id="name" v-model="klub.name" />
      </div>

      <div class="form-group">
        <label for="name">Rok załorzenia:</label>
        <input class="input form-control" id="name" v-model="klub.created" />
      </div>

      <div class="form-group">
        <label for="name">Barwy klubowe:</label>
        <input class="input form-control" id="name" v-model="klub.clubColors" />
      </div>

      <div class="form-group">
        <label for="name">Stadion:</label>
        <input class="input form-control" id="name" v-model="klub.stadium.name" />
      </div>

      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="showMore" v-model="showMore" />
        <label for="showMore" class="form-check-label">Szczególy</label>       
      </div>

      <div class="form-group" v-show="showMore">
        <label for="name">Adress:</label>
        <input class="input form-control" id="name" v-model="klub.stadium.adress" />
      </div>

      <div class="form-group" v-show="showMore">
        <label for="name">Ilość miejsc:</label>
        <input class="input form-control" id="name" v-model="klub.stadium.seats" />
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: "Kluby",
  data() {
    return {
      showMore: false,
      klub: {
        id: 1,
        name: "Raków Częstochowa",
        clubColors: "Czerwono-niebieskie",
        created: 1921,
        stadium: {
          name: "Miejski Stadion Piłkarski",
          adress: "Limanowskiego 83",
          seats: 4200
        }
      }
    };
  }
};
</script>