import { useEffect, useRef, useState } from 'react'

const initialTesterForm = {
  name: '',
  email: '',
  tools: '',
  learning: '',
}

function EarlyTester() {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState(initialTesterForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const triggerRef = useRef(null)
  const modalRef = useRef(null)

  const closeForm = () => {
    setIsOpen(false)
    window.setTimeout(() => triggerRef.current?.focus(), 0)
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const modal = modalRef.current
    const focusable = [...modal.querySelectorAll('button, input, textarea, [href]')]
    focusable[0]?.focus()
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeForm()
      if (event.key !== 'Tab' || focusable.length < 2) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const openForm = () => {
    setError('')
    setSubmitted(false)
    setIsOpen(true)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setError('Add your name and a valid email so we know how to reach you.')
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      <section className="early-tester section shell" id="early-tester">
        <div className="early-tester-mark" aria-hidden="true"><span>+</span><i></i><i></i><i></i></div>
        <div className="early-tester-content">
          <p className="eyebrow">BUILD WITH US</p>
          <h2>Help us build<br /><em>Mentora.</em></h2>
          <p>We're building Mentora with real learners. If you're interested in testing early versions, sharing feedback and helping us make AI learning genuinely practical, we'd love to have you involved.</p>
          <div className="early-tester-actions"><button className="button button-primary" ref={triggerRef} type="button" onClick={openForm}>Become an Early Tester <span aria-hidden="true">-&gt;</span></button><a className="text-link" href="#join">Join the Waitlist <span aria-hidden="true">-&gt;</span></a></div>
        </div>
        <div className="early-tester-aside"><span>SMALL GROUPS.</span><span>REAL FEEDBACK.</span><strong>A BETTER WAY<br />TO LEARN AI.</strong></div>
      </section>

      {isOpen && (
        <div className="tester-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeForm() }}>
          <div className="tester-modal" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="tester-modal-title">
            <div className="tester-modal-header"><div><p className="eyebrow">EARLY TESTER GROUP</p><h2 id="tester-modal-title">Help shape the<br /><em>first missions.</em></h2></div><button className="modal-close" type="button" aria-label="Close early tester form" onClick={closeForm}>×</button></div>
            {submitted ? (
              <div className="tester-success" role="status" aria-live="polite"><span>✓</span><strong>Thanks for raising your hand.</strong><p>We'll be in touch as the first tester group takes shape.</p><button className="text-link" type="button" onClick={closeForm}>Close <span aria-hidden="true">-&gt;</span></button></div>
            ) : (
              <form className="tester-form" onSubmit={handleSubmit} noValidate>
                <div className="tester-form-row"><div className="waitlist-field"><label htmlFor="tester-name">Name <span aria-hidden="true">*</span></label><input id="tester-name" name="name" type="text" value={form.name} onChange={handleChange} autoComplete="name" autoFocus required /></div><div className="waitlist-field"><label htmlFor="tester-email">Email <span aria-hidden="true">*</span></label><input id="tester-email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" required /></div></div>
                <div className="waitlist-field"><label htmlFor="tester-tools">What AI tools do you currently use?</label><textarea id="tester-tools" name="tools" value={form.tools} onChange={handleChange} rows="2" placeholder="A few tools, or none yet" /></div>
                <div className="waitlist-field"><label htmlFor="tester-learning">What would you like to learn?</label><textarea id="tester-learning" name="learning" value={form.learning} onChange={handleChange} rows="2" placeholder="Tell us what you want to be able to do" /></div>
                {error && <p className="waitlist-error" role="alert">{error}</p>}
                <button className="button button-primary tester-submit" type="submit">Send interest <span aria-hidden="true">-&gt;</span></button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default EarlyTester
