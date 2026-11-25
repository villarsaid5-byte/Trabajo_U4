import { useState } from 'react'

function Usuarios() {
  const [character, setCharacter] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const id = Number(formData.get('id'))

    
    if (!Number.isSafeInteger(id) || id < 1) {
      setCharacter(null)
      setErrorMessage('Escribe un ID válido mayor que cero.')
      return
    }

    setCharacter(null)
    setErrorMessage('')
    setLoading(true)

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

      if (response.status === 404) {
        setErrorMessage(`No se encontró un personaje con el ID ${id}.`)
        return
      }

      if (!response.ok) {
        setErrorMessage(`La API respondió con un error (${response.status}). Intenta de nuevo.`)
        return
      }

      setCharacter(await response.json())
    } catch {
      setErrorMessage('No se pudo conectar con la API. Revisa tu conexión e intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="users-page">
      <p className="eyebrow">Directorio</p>
      <h1>Personajes de Rick and Morty</h1>
      <p>Busca un personaje por su ID.</p>

      <form className="character-search" onSubmit={handleSubmit}>
        <label htmlFor="character-id">
          ID del personaje
          <input
            id="character-id"
            name="id"
            type="number"
            min="1"
            step="1"
            required
          />
        </label>
        <button className="button button-primary" type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {loading && <p className="form-message" role="status">Consultando la API...</p>}
      {errorMessage && <p className="form-message" role="alert">{errorMessage}</p>}

      {character && (
        <article className="character-result">
          <img src={character.image} alt={`Retrato de ${character.name}`} />
          <div className="character-details">
            <h2>{character.name}</h2>
            <dl>
              <div>
                <dt>Estado</dt>
                <dd>{character.status}</dd>
              </div>
              <div>
                <dt>Especie</dt>
                <dd>{character.species}</dd>
              </div>
              <div>
                <dt>Género</dt>
                <dd>{character.gender}</dd>
              </div>
              <div>
                <dt>Origen</dt>
                <dd>{character.origin.name}</dd>
              </div>
              <div>
                <dt>Ubicación</dt>
                <dd>{character.location.name}</dd>
              </div>
            </dl>
          </div>
        </article>
      )}
    </section>
  )
}

export default Usuarios