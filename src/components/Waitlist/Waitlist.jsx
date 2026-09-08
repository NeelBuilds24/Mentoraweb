import { useState } from 'react'

function Waitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [audience, setAudience] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="join section shell" id="join">
      <div className="join-content">
        <p className="eyebrow">WE ARE EARLY</p>
        <h2>Help shape the<br /><em>practice layer.</em></h2>
        <p>Mentora is in the making. Join the early list to get first access, share what you are trying to learn, and help us build the right missions.</p>
        {submitted ? (
          <div className="success-message"><span>✓</span><div><strong>You are on the list.</strong><small>We will be in touch when the first missions are ready.</small></div></div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email">Your email address</label>
            <input id="email" type="email" placeholder="you@company.com" required />
            <button className="button button-primary" type="submit">Join the list <span aria-hidden="true">-&gt;</span></button>
            <label className="sr-only" htmlFor="audience">I am a</label>
            <select id="audience" value={audience} onChange={(event) => setAudience(event.target.value)}>
              <option value="">I am a... (optional)</option>
              <option value="student">Student</option>
              <option value="professional">Working professional</option>
              <option value="career-switcher">Career switcher</option>
              <option value="other">Something else</option>
            </select>
          </form>
        )}
        <small className="form-note">No spam. Just thoughtful updates from the build.</small>
      </div>
      <div className="join-mark" aria-hidden="true"><span>m</span><i></i><i></i><i></i></div>
    </section>
  )
}

export default Waitlist
