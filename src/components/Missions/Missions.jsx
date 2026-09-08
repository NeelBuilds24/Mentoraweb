import { missions } from '../../data/missions'

function Missions() {
  return (
    <section className="missions section shell" id="missions">
      <div className="missions-heading">
        <div>
          <p className="eyebrow">PRACTICAL MISSIONS</p>
          <h2>Don't just learn the tool.<br /><em>Complete the task.</em></h2>
        </div>
        <p>Every Mentora learning experience is designed around doing something practical with the AI tool you're learning.</p>
      </div>
      <p className="missions-note"><span aria-hidden="true">+</span> Conceptual examples of the practical learning experiences Mentora is building.</p>
      <div className="mission-cards">
        {missions.map((mission) => (
          <article className="mission-card" key={mission.id}>
            <div className="mission-card-top"><span className="mission-label">MISSION {mission.number}</span><div className={`mission-icon mission-icon-${mission.icon}`} aria-hidden="true"><span></span><span></span></div></div>
            <h3>{mission.title}</h3>
            <p className="mission-description">{mission.description}</p>
            <div className="mission-skills"><span>SKILLS</span><p>{mission.skills.map((skill) => <b key={skill}>{skill}</b>)}</p></div>
            <div className="mission-meta"><span><small>DIFFICULTY</small><strong>{mission.difficulty}</strong></span><span><small>TASKS</small><strong>{mission.tasks}</strong></span></div>
            <a className="mission-cta" href="#join">Preview Mission <span aria-hidden="true">-&gt;</span></a>
          </article>
        ))}
      </div>
      <div className="missions-footer"><span>THE MENTORA LOOP</span><span className="missions-footer-line"></span><span>LEARN · PRACTICE · COMPLETE</span>
        </div>
    </section>
  )
}

export default Missions
