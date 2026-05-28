<script>
  import './page.css';

  import BenefitCard from '$lib/components/benefits/BenefitCard.svelte';
  import { getBenefits } from '$lib/api/benefits';

  const benefits = getBenefits();
</script>

<section class="benefits-page">
  <div class="top">
    <h1>Todos los beneficios</h1>

    <input placeholder="Buscar beneficio..." />
  </div>

  <div class="grid">
    {#each benefits as benefit}
      <BenefitCard {...benefit} />
    {/each}
  </div>
</section>
