function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow reveal">AI skills, learned by doing.</p>
        <h1 className="reveal reveal-delay-1">Master AI by<br /><em>actually using it.</em></h1>
        <p className="hero-text reveal reveal-delay-2">Mentora AI helps students and professionals master AI tools through practical, hands-on learning — so you can go beyond knowing what AI can do and learn how to actually use it.</p>
        <div className="hero-actions reveal reveal-delay-3">
          <a className="button button-primary" href="#join">Join the Waitlist <span aria-hidden="true">-&gt;</span></a>
          <a className="text-link" href="#method">See How It Works <span aria-hidden="true">↓</span></a>
        </div>
        <p className="hero-trust reveal reveal-delay-3">Learn. Practice. Build real AI skills.</p>
      </div>
      <div className="hero-product-wrap reveal reveal-delay-2">
        <span className="preview-label">Early product preview</span>
        <div className="hero-product" aria-label="Mentora learning mission preview">
          <div className="product-chrome"><span className="product-logo"><i></i> mentora<span>.</span></span><span className="product-status"><b></b> IN PRACTICE</span></div>
          <div className="product-content">
            <div className="product-heading"><span className="mission-kicker">MISSION 01</span><span className="product-dots">•••</span></div>
            <h2>AI Research</h2>
            <p className="product-task-label">TASK</p>
            <p className="product-task">Research a topic using an AI research tool and produce a structured brief.</p>
            <div className="product-progress-block"><div className="progress-meta"><span>PROGRESS</span><strong>03 / 05 Tasks</strong></div><div className="progress-track"><span style={{ width: '60%' }}></span></div></div>
            <div className="product-skill-block"><div className="progress-meta"><span>SKILL</span><strong>AI Research <em>72%</em></strong></div><div className="skill-ring"><span>72</span><small>%</small></div></div>
            <div className="product-complete"><span>✓</span><span><b>Mission in progress</b><small>Keep going. You are building a repeatable skill.</small></span><span className="complete-arrow">-&gt;</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
