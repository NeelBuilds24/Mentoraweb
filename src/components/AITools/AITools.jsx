import { useEffect, useRef, useState } from 'react'
import { tools } from '../../data/tools'

function AITools() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`tools section shell ${isVisible ? 'tools-visible' : ''}`} id="tools" ref={sectionRef}>
      <div className="tools-heading">
        <div>
          <p className="eyebrow">CAPABILITIES, NOT CATALOGUES</p>
          <h2>Learn the AI tools<br /><em>that actually matter.</em></h2>
        </div>
        <p>Mentora helps you move beyond tool discovery and learn how to use AI tools effectively in real situations.</p>
      </div>
      <div className="tools-grid" aria-label="AI tool learning categories">
        {tools.map((tool, index) => (
          <article className="tool-card" key={tool.category} style={{ '--tool-delay': `${index * 70}ms` }}>
            <div className={`tool-icon tool-icon-${tool.icon}`} aria-hidden="true"><span></span><span></span><span></span></div>
            <span className="tool-number">0{index + 1}</span>
            <h3>{tool.category}</h3>
            <p>{tool.description}</p>
            <div className="tool-outcome"><span>OUTCOME</span><strong>{tool.outcome}</strong></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AITools
