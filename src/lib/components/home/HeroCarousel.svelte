<script>
  import './HeroCarousel.css';

  import { Search } from 'lucide-svelte';

  const banner =
    'https://www.fotorevista.com.ar/SFotos/16/10/22/161022142707g.jpg';
</script>

<section class="hero">
  <img src={banner} alt="banner" />

  <div class="search-box">
    <input placeholder="Busca por palabra clave o marca" />

    <button>
      <Search size={20} />
    </button>
  </div>
</section>
