import "./App.css";

const skills = [
  { title: "Développement", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"] },
  { title: "Backend / API", items: ["Node.js", "Express", "MongoDB", "FastAPI", "PostgreSQL"] },
  { title: "Outils", items: ["Git", "GitHub", "Docker", "VS Code"] },
];

const projects = [
  {
    name: "Todo App Microservices (Docker)",
    desc: "Todo app en microservices avec backend, base PostgreSQL et frontend, orchestrée via Docker Compose.",
    stack: ["Docker", "Docker Compose", "FastAPI", "PostgreSQL", "Nginx"],
    links: [{ label: "GitHub", href: "https://github.com/chahdbsd/portfolio" }],
  },
  {
    name: "API Boutique (CRUD Products)",
    desc: "API REST pour gérer des produits (Create, Read, Update, Delete) avec validation et base de données.",
    stack: ["Node.js", "Express", "MongoDB"],
    links: [{ label: "GitHub", href: "https://github.com/TON-USERNAME/TON-REPO" }],
  },
  {
    name: "Projet Réseaux (Packet Tracer)",
    desc: "Conception et configuration réseau (adressage IP, VLAN, routage, tests de connectivité).",
    stack: ["Cisco Packet Tracer", "Réseaux", "IPv4/IPv6"],
    links: [{ label: "Détails", href: "#" }],
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">Portfolio</div>
        <nav className="navLinks">
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <p className="badge">Recherche de stage</p>
          <h1>Chahd Bouassida— Étudiante en ingénierie informatique</h1>
            <div className="buttons">
            <a className="btn primary" href="#projects">Voir mes projets</a>
            <a className="btn" href="#contact">Me contacter</a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>À propos</h2>
          <p>
             Étudiante en 4ᵉ année de génie informatique à l'ESIEA, je recherche un
	stage de 4 à 6 mois en <b>développement logiciel / full-stack</b> à
	partir d’avril 2026, afin de contribuer à des projets concrets au 	sein d’une équipe dynamique.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Compétences</h2>
          <div className="grid">
            {skills.map((s) => (
              <div key={s.title} className="card">
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projets</h2>
          <div className="grid">
            {projects.map((p) => (
              <div key={p.name} className="card">
                <h3>{p.name}</h3>
                <p className="muted">{p.desc}</p>
                <div className="tags">
                  {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="card">
            <p><b>Email :</b> chahd.bouassida@et.esiea.fr</p>
            <p><b>GitHub :</b> <a href="https://github.com/chahdbsd" target="_blank" rel="noreferrer">github.com/chahdbsd</a></p>
            <p><b>LinkedIn :</b> <a href="https://www.linkedin.com/in/chahd-bouassida-6b541b264/" target="_blank" rel="noreferrer">linkedin.com/in/Chahd-Bouassida</a></p>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} — Portfolio</p>
        </footer>
      </main>
    </div>
  );
}
