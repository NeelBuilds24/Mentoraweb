const steps = [
  {
    number: '01',
    icon: '+',
    title: 'Discover',
    description: 'Find the right tool for the task in front of you, not an endless list of tools you might use someday.',
  },
  {
    number: '02',
    icon: '->',
    title: 'Learn by doing',
    description: 'Follow a focused mission that gets you from “what is this?” to a useful first result.',
    featured: true,
  },
  {
    number: '03',
    icon: '*',
    title: 'Build capability',
    description: 'Complete real tasks, reflect on the outcome, and turn a one-off win into a skill you can repeat.',
  },
]

function HowItWorks() {
  return (
    <section className="method section shell" id="method">
      <div className="section-heading">
        <p className="eyebrow">THE METHOD</p>
        <h2>Learning AI should feel<br /><em>like doing the work.</em></h2>
      </div>
      <p className="section-intro">The fastest way to understand a tool is to use it on something real. Mentora turns scattered curiosity into a clear, repeatable path.</p>
      <div className="steps-grid">
        {steps.map((step) => (
          <article className={`step-card ${step.featured ? 'step-card-featured' : ''}`} key={step.number}>
            <span className="step-number">{step.number}</span>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <span className="step-arrow">-&gt;</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
