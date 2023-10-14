<script>
  import Card from "./lib/card.svelte";
  import Rosquilla from "./assets/rosquilla.png";
  import Moe_Awitado from "./assets/moe-triste.png";

  let page = 1;
  let personajes = [];
  let loading = false;
  let buscando = false;
  let next = false;
  let previous = false;
  let name = "";
  async function CargarPersonajes() {
    loading = true;
    const res = await fetch(
      "https://apisimpsons.fly.dev/api/personajes?limit=20&page=" + page
    );
    const data = await res.json();
    console.log(data);
    personajes = data.docs;
    next = data.hasNextPage;
    previous = data.hasPrevPage;
    page = data.page;
    loading = false;
  }
  CargarPersonajes();
  function Previous() {
    if (previous) {
      page -= 1;
      CargarPersonajes();
    }
  }
  function Next() {
    if (next) {
      page += 1;
      CargarPersonajes();
    }
  }
  async function Buscar() {
    if (name.length != 0) {
      loading = true;
      const res = await fetch(
        "https://apisimpsons.fly.dev/api/personajes/find/" + name
      );
      const data = await res.json();
      console.log(data);
      personajes = data.result;
      next = false;
      previous = false;
      loading = false;
      buscando = true;
    }
  }
  function Revertir() {
    buscando = !buscando;
    CargarPersonajes();
  }
</script>

<main>
  <h1>Los Simpsons</h1>
  <div class="flex buscador">
    <label for="buscar">Nombre:</label>
    <input bind:value={name} type="text" id="buscar" placeholder="Homero" />
    <button on:click={Buscar}>Buscar</button>
  </div>
  <article class="flex">
    {#if loading}
      <img src={Rosquilla} alt="Rosquilla" class="loading" />
    {:else if personajes.length == 0}
      <h3 class="failed">No se encontraron coincidencias :(</h3>
      <img src={Moe_Awitado} alt="Moe awitado" class="failed-img" />
    {:else}
      {#each personajes as personaje}
        <Card {personaje} />
      {/each}
    {/if}
  </article>
  <div class="flex">
    {#if loading}
      <h2>Cargando...</h2>
    {:else if !buscando}
      <button on:click={Previous}>Previous</button>
      <button on:click={Next}>Next</button>
    {:else}
      <button on:click={Revertir}>Volver</button>
    {/if}
  </div>
</main>
