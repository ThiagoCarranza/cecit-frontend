<script>
  import './page.css';

  import HeroCarousel from '$lib/components/home/HeroCarousel.svelte';
  import Categories from '$lib/components/home/Categories.svelte';
  import BenefitsSection from '$lib/components/home/BenefitsSection.svelte';
  import PartnersCarousel from '$lib/components/home/PartnersCarousel.svelte';
  import JoinSection from '$lib/components/home/JoinSection.svelte';
</script>

<section class="home-page">
  <HeroCarousel />

  <Categories />

  <BenefitsSection title="Beneficios populares" />

  <BenefitsSection title="Nuevos beneficios" />

  <PartnersCarousel />

  <JoinSection />
</section>
