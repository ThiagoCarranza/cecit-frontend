<script>
  import './BenefitCard.css';

  import { onMount } from 'svelte';
  import { X } from 'lucide-svelte';
  import favicon from '$lib/assets/favicon.svg';

  let { title, image, business } = $props();

  let isExpanded = $state(false);
  let openTimer = /** @type {ReturnType<typeof setTimeout> | null} */ (null);

  function clearOpenTimer() {
    if (!openTimer) return;

    clearTimeout(openTimer);
    openTimer = null;
  }

  function scheduleExpanded() {
    clearOpenTimer();

    openTimer = setTimeout(() => {
      isExpanded = true;
      openTimer = null;
    }, 1000);
  }

  function openExpandedNow() {
    clearOpenTimer();
    isExpanded = true;
  }

  function closeExpanded() {
    clearOpenTimer();
    isExpanded = false;
  }

  onMount(() => {
    window.addEventListener('close-benefit-overlays', closeExpanded);

    return () => {
      window.removeEventListener('close-benefit-overlays', closeExpanded);
    };
  });
</script>

<div class="benefit-card card">
  <div
    class="compact-card"
    role="button"
    tabindex="0"
    onmouseenter={scheduleExpanded}
    onmouseleave={clearOpenTimer}
    onfocusin={openExpandedNow}
    onkeydown={(event) => (event.key === 'Enter' || event.key === ' ') && openExpandedNow()}
  >
    <img src={image} alt={title} />

    <div class="content">
      <div class="title-row">
        <h2>{title}</h2>

        <button class="info-btn">Más información</button>
      </div>

      <div class="bottom">
        <div class="business">
          <img src={favicon} alt="" />
          <p>{business}</p>
        </div>

        <button class="coupon-btn">Adquirir cupón</button>
      </div>
    </div>
  </div>

  <div
    class:visible={isExpanded}
    class="expanded-backdrop"
    role="presentation"
    onkeydown={(event) => event.key === 'Escape' && closeExpanded()}
  >
    <div
      class="expanded-card"
      role="dialog"
      aria-label={title}
      tabindex="-1"
      onmouseleave={closeExpanded}
    >
      <button
        class="close-btn"
        type="button"
        aria-label="Cerrar"
        onclick={closeExpanded}
      >
        <X size={22} />
      </button>

      <div class="expanded-info">
        <h3>{title}</h3>
        <p>{business}</p>

        <button class="coupon-btn">Adquirir cupón</button>
      </div>

      <div class="expanded-preview">
        <img src={image} alt={title} />
      </div>
    </div>
  </div>
</div>
