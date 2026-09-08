const audiences = [
  {
    number: '01',
    title: 'Students',
    description: 'Build practical AI skills before entering the workforce.',
    icon: 'student',
  },
  {
    number: '02',
    title: 'Young Professionals',
    description: 'Use AI tools to become more productive and effective at work.',
    icon: 'professional',
  },
  {
    number: '03',
    title: 'Professionals',
    description: 'Stay relevant as AI changes how industries operate.',
    icon: 'industry',
  },
]

function Audience() {
  return (
    <section className="audience section shell" id="who-it-is-for">
      <div className="audience-heading">
        <p className="eyebrow">WHO IT IS FOR</p>
        <h2>Built for people who<br /><em>want to be AI-capable.</em></h2>
      </div>
      <div className="audience-grid">
        {audiences.map((audience) => (
          <article className="audience-card" key={audience.title}>
            <div className={`audience-icon audience-icon-${audience.icon}`} aria-hidden="true"><span></span><span></span><span></span></div>
            <span className="audience-number">{audience.number}</span>
            <h3>{audience.title}</h3>
            <p>{audience.description}</p>
            <span className="audience-arrow" aria-hidden="true">-&gt;</span>
          </article>
        ))}
      </div>
      <div className="audience-statement"><span>You don't need to become an AI researcher.</span><strong>You need to know how to use AI effectively.</strong></div>
    </section>
  )
}

export default Audience
