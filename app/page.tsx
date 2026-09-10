export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <a href="#" className="text-xl font-bold tracking-tight">
          VK<span className="text-sky-400">.</span>
        </a>

        <div className="flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-sky-400">
            About
          </a>
          <a href="#projects" className="hover:text-sky-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-sky-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-sky-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-sky-400">
            AI • MACHINE LEARNING • GENERATIVE AI • DATA SCIENCE
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Vivek Kothapalli.
            </span>
          </h1>

          <h2 className="mt-6 max-w-3xl text-2xl font-medium text-slate-300 md:text-3xl">
            I build practical AI and machine learning solutions.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            MSc Artificial Intelligence with Business Strategy graduate from
            Aston University, with hands-on experience in machine learning,
            generative AI, RAG, data analysis and NLP.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              View Projects
            </a>

            <a
              href="/Vivek-Kothapalli-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-sky-400 px-6 py-3 font-semibold text-sky-400 transition hover:bg-sky-400 hover:text-slate-950"
            >
              Download CV
            </a>

            <a
              href="https://github.com/vivekavardhan484"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sky-400">
          ABOUT ME
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Turning data into practical AI solutions.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-400">
          <p>
            I&apos;m an MSc Artificial Intelligence with Business Strategy
            graduate from Aston University with an interest in building
            practical machine learning, generative AI and data-driven
            applications.
          </p>

          <p>
            I have hands-on experience across the machine learning lifecycle,
            including data preparation, exploratory data analysis, model
            training, evaluation, retrieval-augmented generation and deploying
            interactive AI applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sky-400">
          TECHNICAL SKILLS
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Technologies I work with.
        </h2>

        <div className="mt-10 flex max-w-4xl flex-wrap gap-3">
          {[
            "Python",
            "SQL",
            "Machine Learning",
            "Generative AI",
            "RAG",
            "LLMs",
            "LangChain",
            "ChromaDB",
            "OpenAI API",
            "Embeddings",
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Data Analysis",
            "NLP",
            "Streamlit",
            "TensorFlow",
            "Git",
            "GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sky-400">
          FEATURED PROJECTS
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Things I&apos;ve built.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* AI Banking Knowledge Assistant */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-sky-400/50">
            <p className="text-sm font-medium text-indigo-400">
              GENERATIVE AI • RAG
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              AI Banking Knowledge Assistant
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Retrieval-Augmented Generation application that answers banking
              questions using FCA source material. Built with OpenAI embeddings,
              ChromaDB semantic retrieval, relevance filtering and an LLM to
              generate grounded answers with source and page attribution.
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Python • RAG • LLM • LangChain • ChromaDB • OpenAI • Streamlit
            </p>

            <div className="mt-7 flex gap-5">
              <a
                href="https://vivek-rag-ai-assistant-project.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-400 hover:text-sky-300"
              >
                Live Demo →
              </a>

              <a
                href="https://github.com/vivekavardhan484/banking-ai-portfolio-projects/tree/main/banking-rag-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-300 hover:text-white"
              >
                GitHub →
              </a>
            </div>
          </article>

          {/* Fraud Detection */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-sky-400/50">
            <p className="text-sm font-medium text-sky-400">
              MACHINE LEARNING
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Bank Fraud Detection
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Machine learning application that estimates transaction fraud
              risk using transaction and account features. Logistic Regression
              and Random Forest models were evaluated using classification
              metrics and ROC-AUC.
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Python • Scikit-learn • Pandas • Streamlit
            </p>

            <div className="mt-7 flex gap-5">
              <a
                href="https://vivek-bank-fraud-detection.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-400 hover:text-sky-300"
              >
                Live Demo →
              </a>

              <a
                href="https://github.com/vivekavardhan484/banking-ai-portfolio-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-300 hover:text-white"
              >
                GitHub →
              </a>
            </div>
          </article>

          {/* Churn Prediction */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-sky-400/50">
            <p className="text-sm font-medium text-indigo-400">
              MACHINE LEARNING
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Customer Churn Prediction
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              End-to-end machine learning application for predicting customer
              churn risk from customer behaviour and account-related features,
              deployed as an interactive web application.
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Python • Scikit-learn • Pandas • Streamlit
            </p>

            <div className="mt-7 flex gap-5">
              <a
                href="https://vivek-customer-churn-prediction.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-400 hover:text-sky-300"
              >
                Live Demo →
              </a>

              <a
                href="https://github.com/vivekavardhan484/banking-ai-portfolio-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-300 hover:text-white"
              >
                GitHub →
              </a>
            </div>
          </article>

          {/* Healthcare Chatbot */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-sky-400/50">
            <p className="text-sm font-medium text-sky-400">
              NLP
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Healthcare Appointment Chatbot
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              NLP-based chatbot developed for healthcare appointment
              scheduling, rescheduling and cancellation, with a focus on
              understanding multiple user intents.
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Python • NLP • Rasa
            </p>
          </article>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sky-400">
          EXPERIENCE & EDUCATION
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          My background.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
            <p className="text-sm font-medium text-sky-400">
              EXPERIENCE
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Data Science Intern
            </h3>

            <p className="mt-1 text-slate-300">
              Oeson
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Jan 2025 – Apr 2025
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              Worked on practical data science and machine learning tasks using
              Python, Pandas and NumPy, including data cleaning, preprocessing
              and exploratory data analysis.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
            <p className="text-sm font-medium text-indigo-400">
              EDUCATION
            </p>

            <h3 className="mt-3 text-xl font-bold">
              MSc Artificial Intelligence with Business Strategy
            </h3>

            <p className="mt-1 text-slate-300">
              Aston University
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Sep 2023 – Oct 2024
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              Studied Machine Learning, Deep Learning and Mathematics for AI,
              alongside the strategic application of emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-24 text-center"
      >
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sky-400">
          GET IN TOUCH
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Let&apos;s connect.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          I&apos;m currently interested in graduate and junior opportunities
          across AI, Machine Learning, Generative AI and Data Science.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/vivek-kothapalli"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/vivekavardhan484"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
          >
            GitHub
          </a>
        </div>

        <p className="mt-20 border-t border-slate-800 pt-8 text-sm text-slate-500">
          © 2026 Vivek Kothapalli
        </p>
      </section>
    </main>
  );
}