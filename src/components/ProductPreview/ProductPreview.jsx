function ProductPreview() {
  return (
    <section className="product-showcase section shell" id="about">
      <div className="product-showcase-heading">
        <p className="eyebrow">CONCEPTUAL PRODUCT PREVIEW</p>
        <h2>Learning AI should feel<br /><em>like using AI.</em></h2>
      </div>
      <div className="product-frame" aria-label="Conceptual Mentora mission interface preview">
        <div className="product-frame-topbar"><span className="frame-brand"><i></i> MENTORA</span><span className="frame-context">LEARNING WORKSPACE <b></b> PREVIEW ONLY</span><span className="frame-controls"><i></i><i></i><i></i></span></div>
        <div className="product-frame-body">
          <aside className="preview-sidebar"><span className="sidebar-label">MISSION PATH</span><div className="sidebar-progress"><b></b><b></b><b className="active"></b><b></b><b></b></div><span className="sidebar-caption">03 <small>/ 05</small></span><div className="sidebar-rule"></div><span className="sidebar-label">CURRENT SKILL</span><strong className="sidebar-skill">AI Coding</strong><span className="sidebar-caption sidebar-caption-muted">Building momentum</span></aside>
          <div className="preview-main">
            <div className="preview-mission-head"><div><span className="preview-kicker">MISSION 03</span><h3>Build a landing page with<br />an AI coding assistant</h3></div><span className="preview-status"><b></b> In Progress</span></div>
            <div className="preview-task-card"><div className="preview-task-header"><span>TASK 03 / 05</span><span>AI CODING</span></div><p>Use an AI coding assistant to turn a rough idea into a responsive, working section of a web project.</p><div className="task-checklist"><span className="task-done">✓</span><span>Set up the page structure</span><span className="task-done">✓</span><span>Shape the first working layout</span><span className="task-current"></span><span>Refine and debug the result</span></div></div>
            <div className="preview-progress-block"><div className="preview-progress-heading"><span>MISSION PROGRESS</span><strong>70%</strong></div><div className="preview-progress-track"><span></span></div><div className="preview-progress-foot"><span>3 of 5 tasks complete</span><span>Keep going</span></div></div>
          </div>
          <aside className="preview-evaluation"><span className="evaluation-kicker">EVALUATION</span><div className="evaluation-ring"><strong>72</strong><small>/ 100</small></div><span className="evaluation-label">Task quality</span><p>Clear structure, useful output, and a working result.</p><div className="evaluation-rule"></div><span className="evaluation-kicker">SKILL</span><strong className="evaluation-skill">AI Coding</strong><div className="evaluation-bars"><span><i></i></span><span><i></i></span><span><i></i></span></div></aside>
        </div>
        <div className="product-frame-footer"><span>MENTORA / MISSION 03</span><span>Practice turns knowledge into capability <b>↗</b></span></div>
      </div>
    </section>
  )
}

export default ProductPreview
