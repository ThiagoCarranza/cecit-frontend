<script>
  import './PartnersCarousel.css';

  import { getPartners } from '$lib/api/partners';

  const partners = getPartners();

  const repeatedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners
  ];
</script>

<section class="partners">
  <h2>Nuestros socios</h2>

  <div class="carousel">
    <div class="track">
      {#each repeatedPartners as partner}
        <div class="partner-card">
          <img src={partner.logo} alt={partner.name} />

          <p>{partner.name}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
