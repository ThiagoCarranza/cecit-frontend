<script>
  import './page.css';

  let email = $state('');
  let password = $state('');
</script>

<section class="login-page">
  <div class="login-card">
    <h1>Iniciar sesión</h1>

    <input
      bind:value={email}
      type="email"
      placeholder="Correo electrónico"
    />

    <input
      bind:value={password}
      type="password"
      placeholder="Contraseña"
    />

    <button>Ingresar</button>
  </div>
</section>
