<template>
  <div class="slogan">
    <h1>Perfeksjon i enkelhet</h1>
    <p>
      AQUALINK produserer og leverer kvalitetsprodukter siktet mot
      fiskeoppdrettsindustrien med materialer av høy kvalitet som gir minimal
      belastning på ytre miljø
    </p>
    <button>Produkter</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.slogan {
    border-radius: .7em;
    border-left: solid .7em var(--secondary);
    padding-left: 1em;
    width: 50%;
}
button {
    background-color: var(--secondary);
    color: var(--light);
}

@media screen and (max-width: 650px) {
  .slogan {
    width: 100%;
  }
}
</style>