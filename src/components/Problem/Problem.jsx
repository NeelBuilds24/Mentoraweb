import { useEffect, useRef, useState } from 'react'

const problems = [
  {
    icon: 'spark',
    title: 'Too Many Tools',
    description: "New AI tools appear constantly. It's difficult to know which ones are actually worth learning.",
  },
  {
    icon: 'layers',
    title: 'Surface-Level Learning',
    description: "Watching tutorials and reading about AI doesn't mean you can use the tools effectively.",
  },
  {
    icon: 'cursor',
    title: 'No Practical Practice',
    description: "Most learning experiences don't give users enough opportunities to solve realistic tasks.",
  },
  {
    icon: 'signal',
    title: 'No Proof of Skill',
    description: "It's difficult to know whether you've actually mastered a tool or simply used it once.",
  },
]

function Problem() {
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
    }, { threshold: 0.18 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`problem section shell ${isVisible ? 'problem-visible' : ''}`} id="problem" ref={sectionRef}>
      <div className="problem-heading">
        <p className="eyebrow">THE AI LEARNING GAP</p>
        <h2>AI is everywhere.<br /><em>Knowing how to use it isn't.</em></h2>
        <p className="problem-intro">New AI tools appear every week. Students and professionals are surrounded by possibilities, but most people still don't know which tools to use, how to use them effectively, or how to turn them into real skills.</p>
      </div>
      <div className="problem-grid">
        {problems.map((problem, index) => (
          <article className="problem-card" key={problem.title} style={{ '--problem-delay': `${index * 90}ms` }}>
            <div className={`problem-icon problem-icon-${problem.icon}`} aria-hidden="true"><span></span><span></span><span></span></div>
            <span className="problem-index">0{index + 1}</span>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </article>
        ))}
      </div>
      <div className="problem-conclusion"><span>Mentora is built around a simple idea:</span><strong>You master AI by using it.</strong></div>
    </section>
  )
}

export default Problem
