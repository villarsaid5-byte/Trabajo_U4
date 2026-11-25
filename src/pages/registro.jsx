import { useState } from 'react'
import { Link } from 'react-router-dom'

function Registro() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    if (formData.get('password') !== formData.get('confirm-password')) {
      setMessage('Las contraseñas no coinciden.')
      return
    }

    setMessage('El formulario está listo, pero todavía no está conectado a un servicio de registro.')
  }

  return (
    <section className="auth-card">
      <p className="eyebrow">Únete</p>
      <h1>Crear cuenta</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="register-name">Nombre</label>
        <input
          autoComplete="name"
          id="register-name"
          name="name"
          type="text"
          required
        />

        <label htmlFor="register-email">Correo electrónico</label>
        <input
          autoComplete="email"
          id="register-email"
          name="email"
          type="email"
          required
        />

        <label htmlFor="register-password">Contraseña</label>
        <input
          autoComplete="new-password"
          id="register-password"
          name="password"
          type="password"
          minLength={8}
          required
        />

        <label htmlFor="confirm-password">Confirmar contraseña</label>
        <input
          autoComplete="new-password"
          id="confirm-password"
          name="confirm-password"
          type="password"
          minLength={8}
          required
        />

        <button className="button button-primary" type="submit">
          Registrarme
        </button>
      </form>
      {message && <p className="form-message" role="status">{message}</p>}
      <p className="auth-switch">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </section>
  )
}

export default Registro