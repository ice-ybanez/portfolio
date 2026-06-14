import { timelineItems } from "../data/timeline";

function ExperiencePage() {
  return (
    <main className="page">
      <section className="section pageTop">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">Experience</p>
            <h2>Experience & education</h2>
          </div>

          <p className="sectionHint">
            A more detailed view of my placement experience, studies, and
            development background.
          </p>
        </div>

        <div className="timeline">
          {timelineItems.map((item) => (
            <article key={`${item.year}-${item.title}`} className="timelineItem">
              <div className="timelineYear">{item.year}</div>

              <div className="timelineContent">
                <h3>{item.title}</h3>
                <p className="timelineSubtitle">{item.subtitle}</p>
                <p>{item.description}</p>

                <div className="techList">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ExperiencePage;