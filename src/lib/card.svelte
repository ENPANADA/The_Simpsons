<script>
  // @ts-nocheck

  import "../styles/card.css";
  /**
   * @type {{ Nombre: any; Imagen: any; }}
   */
  export let personaje;
  let verInfo = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="card" on:click={() => (verInfo = !verInfo)}>
  <h2>{personaje.Nombre}</h2>
  <img src={personaje.Imagen} alt={personaje.Nombre} />
</section>
{#if verInfo == true}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <section class="info" on:click={() => (verInfo = !verInfo)}>
    <div class="contenido">
      <h2>{personaje.Nombre}</h2>
      <img src={personaje.Imagen} alt="" />
      <h3>{personaje.Ocupacion}</h3>
      <p>{personaje.Historia}</p>
      <p class="flex">
        {#if personaje.Estado == "Vivo"}
            <p class="etiqueta Vivo">{personaje.Estado}</p>
            {:else if personaje.Estado == "Fallecido"}
                <p class="etiqueta Fallecido">{personaje.Estado}</p>
                {:else if personaje.Estado == "Ficticio"}
                    <p class="etiqueta Ficticio">{personaje.Estado}</p>
                    {:else}
                        <p class="etiqueta Desconocido">{personaje.Estado}</p>
        {/if}
        {#if personaje.Genero == "Masculino"}
            <p class="etiqueta Masculino">{personaje.Genero}</p>
            {:else}
                <p class="etiqueta Femenino">{personaje.Genero}</p>
        {/if}
      </p>
      <button on:click={() => (verInfo = !verInfo)}> Volver </button>
    </div>
  </section>
{/if}
