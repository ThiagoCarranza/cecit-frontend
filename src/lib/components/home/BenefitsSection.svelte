<script>
  import './BenefitsSection.css';

  /*
  ==========================================
  IMPORTS
  ==========================================
  */

  import BenefitCard from '$lib/components/benefits/BenefitCard.svelte';
  import { getBenefits } from '$lib/api/benefits';

  import {
    ChevronLeft,
    ChevronRight
  } from 'lucide-svelte';

  let { title = 'Beneficios populares' } = $props();
  const benefits = getBenefits();

  /*
  ==========================================
  FILTROS
  ==========================================
  */

  const filters = [
    'Todo',
    'Comida',
    'Ropa',
    'Juguetes',
    'Libreria'
  ];

  let activeFilter = $state('Todo');
  let filteredBenefits = $derived(
    activeFilter === 'Todo'
      ? benefits
      : benefits.filter((benefit) => benefit.category === activeFilter)
  );

  /**
   * @param {string} filter
   */
  function selectFilter(filter) {
    activeFilter = activeFilter === filter ? 'Todo' : filter;

    carousel?.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  }

  /*
  ==========================================
  CARRUSEL
  ==========================================
  */

  let carousel = $state(/** @type {HTMLDivElement | null} */ (null));
  const SCROLL_AMOUNT = 480;

  function closeBenefitOverlays() {
    window.dispatchEvent(new CustomEvent('close-benefit-overlays'));
  }

  /**
   * @param {-1 | 1} direction
   */
  function moveCarousel(direction) {
    if (!carousel) return;

    closeBenefitOverlays();

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (maxScroll <= 0) return;

    const nextPosition = carousel.scrollLeft + (direction * SCROLL_AMOUNT);

    if (direction === 1 && nextPosition >= maxScroll - 10) {
      carousel.scrollTo({
        left: 0,
        behavior: 'smooth'
      });

      return;
    }

    if (direction === -1 && nextPosition <= 10) {
      carousel.scrollTo({
        left: maxScroll,
        behavior: 'smooth'
      });

      return;
    }

    carousel.scrollBy({
      left: direction * SCROLL_AMOUNT,
      behavior: 'smooth'
    });
  }

  function next() {
    moveCarousel(1);
  }

  function prev() {
    moveCarousel(-1);
  }
</script>

<section class="benefits-section">

  <div class="top">

    <div class="title-group">

      <h2>{title}</h2>

      <button class="more-btn">
        Ver más
      </button>

    </div>

  </div>

  <div class="filters">

    {#each filters as filter}

      <button
        class:active={activeFilter === filter}
        onclick={() => selectFilter(filter)}
      >
        {filter}
      </button>

    {/each}

  </div>

  <div class="carousel-wrapper">

    <button
      type="button"
      class="arrow left"
      onclick={prev}
      aria-label="Ver beneficios anteriores"
    >
      <ChevronLeft size={24} />
    </button>

    <div class="carousel" bind:this={carousel}>

      {#each filteredBenefits as benefit}

        <div class="card-wrapper">
          <BenefitCard {...benefit} />
        </div>

      {/each}

    </div>

    <button
      type="button"
      class="arrow right"
      onclick={next}
      aria-label="Ver más beneficios"
    >
      <ChevronRight size={24} />
    </button>

  </div>

</section>
