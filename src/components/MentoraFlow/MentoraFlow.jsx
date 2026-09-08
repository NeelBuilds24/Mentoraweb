import { useEffect, useRef, useState } from 'react'

const flowSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Find AI tools relevant to what you want to accomplish.',
  },
  {
    number: '02',
    title: 'Learn',
    description: 'Understand what the tool does, when to use it, and how to use it effectively.',
  },
  {
    number: '03',
    title: 'Practice',
    description: 'Apply the tool to realistic tasks instead of passive tutorials.',
  },
  {
    number: '04',
    title: 'Complete',
    description: 'Solve practical missions and demonstrate that you can actually use the tool.',
  },
  {
    number: '05',
    title: 'Master',
    description: 'Build a growing set of practical AI capabilities.',
  },
]

function MentoraFlow() {
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
    }, { threshold: 0.2 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`flow section shell ${isVisible ? 'flow-visible' : ''}`} id="solution" ref={sectionRef}>
      <div className="flow-heading">
        <p className="eyebrow">WHAT MENTORA DOES</p>
        <h2>Stop watching.<br /><em>Start doing.</em></h2>
        <p>Mentora turns AI learning into practical missions where you learn a tool, use it to solve a task, and build confidence through hands-on practice.</p>
      </div>
      <div className="flow-track" aria-label="Discover, learn, practice, complete, and master AI tools">
        {flowSteps.map((step) => (
          <article className="flow-step" key={step.number} style={{ '--flow-delay': `${(Number(step.number) - 1) * 100}ms` }}>
            <div className="flow-node"><span>{step.number}</span></div>
            <div className="flow-step-copy"><h3>{step.title}</h3><p>{step.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MentoraFlow
