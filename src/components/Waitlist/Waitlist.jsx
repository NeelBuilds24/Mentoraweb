import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  audience: '',
  goal: '',
  challenge: '',
}

const submitWaitlist = async (submission) => {
  // Replace this local adapter with the waitlist API when the backend is ready.
  return { accepted: true, submission }
}

function Waitlist() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!form.name.trim()) {
      setErrorMessage('Please enter your name to join the list.')
      setStatus('error')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setErrorMessage('Please enter a valid email address to join the list.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const result = await submitWaitlist(form)
      if (!result.accepted) throw new Error('Submission was not accepted')
      setStatus('success')
    } catch {
      setErrorMessage('We could not join you to the early-access list right now. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="join section shell" id="join">
      <div className="join-content">
        <p className="eyebrow">EARLY ACCESS</p>
        <h2>Be among the first<br /><em>to learn AI by doing.</em></h2>
        <p>Mentora is currently being built. Join the early-access list and help us shape the future of practical AI learning.</p>
        {status === 'success' ? (
          <div className="success-message" role="status" aria-live="polite"><span>✓</span><div><strong>You're on the list.</strong><small>We'll keep you updated as Mentora gets closer to launch.</small></div></div>
        ) : (
          <form className="waitlist-form waitlist-form-expanded" onSubmit={handleSubmit} noValidate>
            <div className="waitlist-field waitlist-field-half">
              <label htmlFor="waitlist-name">Name <span aria-hidden="true">*</span></label>
              <input id="waitlist-name" name="name" type="text" value={form.name} onChange={handleChange} autoComplete="name" required />
            </div>
            <div className="waitlist-field waitlist-field-half">
              <label htmlFor="waitlist-email">Email <span aria-hidden="true">*</span></label>
              <input id="waitlist-email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" required />
            </div>
            <div className="waitlist-field">
              <label htmlFor="waitlist-audience">What best describes you? <span className="field-optional">(optional)</span></label>
              <select id="waitlist-audience" name="audience" value={form.audience} onChange={handleChange}>
                <option value="">Select one</option><option>Student</option><option>Working professional</option><option>Entrepreneur</option><option>Freelancer</option><option>Other</option>
              </select>
            </div>
            <div className="waitlist-field">
              <label htmlFor="waitlist-goal">What do you want to use AI for? <span className="field-optional">(optional)</span></label>
              <select id="waitlist-goal" name="goal" value={form.goal} onChange={handleChange}>
                <option value="">Select one</option><option>Studies</option><option>Career</option><option>Work</option><option>Business</option><option>Productivity</option><option>Content creation</option><option>Coding</option><option>Other</option>
              </select>
            </div>
            <div className="waitlist-field">
              <label htmlFor="waitlist-challenge">What is your biggest challenge with learning AI tools? <span className="field-optional">(optional)</span></label>
              <textarea id="waitlist-challenge" name="challenge" value={form.challenge} onChange={handleChange} rows="3" placeholder="Optional: tell us what gets in the way" />
            </div>
            {status === 'error' && <p className="waitlist-error" role="alert">{errorMessage}</p>}
            <button className="button button-primary waitlist-submit" type="submit" disabled={status === 'loading'} aria-busy={status === 'loading'}>{status === 'loading' ? 'Joining...' : 'Join the Waitlist'} <span aria-hidden="true">-&gt;</span></button>
          </form>
        )}
        <small className="form-note">No spam. Just thoughtful updates from the build.</small>
      </div>
      <div className="join-mark" aria-hidden="true"><span>m</span><i></i><i></i><i></i></div>
    </section>
  )
}

export default Waitlist
