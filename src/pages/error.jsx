import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className="home-page">
      <p className="eyebrow">Error 404</p>
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe o pudo haber cambiado.</p>
      <div className="home-actions">
        <Link className="button button-primary" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default Error