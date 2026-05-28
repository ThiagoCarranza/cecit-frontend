<script>
    import './Navbar.css';

    import User24Icon from '@iconify-svelte/qlementine-icons/user-24';
    import { Menu } from 'lucide-svelte';

    const logo = "http://centrodecomercioag.com.ar/wp-content/uploads/2023/07/logonuevo.png";

</script>

<nav class="navbar">
    <div class="logo">
    <img src={logo} alt="CeCIT Logo" />
    </div>

    <div class="links">
        <a href="#/home">Institucional</a>
        <span class="separator" aria-hidden="true">|</span>
        <a href="#/become-member">Hacete socio</a>
        <span class="separator" aria-hidden="true">|</span>
        <a href="#/contact">Contacto</a>

        <button class="user-btn">
            <User24Icon height="3.0em" />
        </button>
    </div>

    <button class="menu-btn" type="button" aria-label="Abrir menú">
        <Menu size={34} strokeWidth={2.5} />
    </button>
</nav>
