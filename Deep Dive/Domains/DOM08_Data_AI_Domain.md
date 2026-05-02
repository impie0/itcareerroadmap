---
title: "Data / AI / Ml Domain (DOM08)"
slug: "data-ai-domain"
code: "DOM08"
kind: "domain"
lastUpdated: "2026-04-01"
vendors: ["AWS", "Microsoft Azure", "Google Cloud", "Snowflake", "Databricks", "IBM", "DAMA"]
tags: ["data", "ai", "machine-learning", "analytics", "data-engineering"]
---

# Deep Dive: Data / AI / ML Domain (DOM08)

**Last updated:** April 2026  
**Scope:** Career progression, certification landscape, learning resources, salary benchmarks, and emerging roles in data engineering, analytics, machine learning, and AI engineering.

---

## Overview: Why Data/AI/ML Is a Discrete Domain

The Data/AI/ML ecosystem spans from **data warehousing and analytics engineering** (left edge) through **ML operations and generative AI application engineering** (right edge). Unlike Networking or Security (which are primarily platform-defense disciplines), Data/AI/ML is a **value-creation discipline**—every cert and role exists to extract, transform, model, and monetize data or build AI-powered products.

This domain sits adjacent to (but is distinct from) **DevOps** (which automates infrastructure) and **Cloud Architecture** (which designs capacity). A data engineer uses cloud services, but their expertise is in pipelines, not regions. A data scientist uses ML frameworks, but their expertise is in model design, not model serving (which is MLOps or AI engineering).

**Key trend (2024–2026):** The rise of **AI Engineer** as a discrete role—distinct from ML Engineer and Data Scientist. This role focuses on *applying* foundation models and LLMs to business problems, with minimal traditional ML background required.

---

## Career Progression: Analyst → Engineer → Architect → Leader

### Entry Level: Data Analyst

**What they do:**  
- Write SQL queries against data warehouses or lakehouses
- Build dashboards (Tableau, Power BI, Looker)
- Document data quality and sources
- Support business stakeholders with self-service analytics

**Common certifications:**
- **Tableau Desktop Specialist** (https://www.tableau.com/learn/certification)
- **Microsoft PL-300 Power BI Data Analyst** (cross-listed in D05)
- **dbt Fundamentals** (free online course via https://www.getdbt.com/dbt-certifications)

**Salary (2026):**  
$65,000–$85,000 USD (per Robert Half 2026 Salary Guide, https://www.roberthalf.com/us/en/insights/salary-guide/technology)

**Typical progression time:** 2–3 years to mid-level.

---

### Mid Level: Data Engineer / Analytics Engineer

**Data Engineer:**  
Builds and maintains pipelines that move and transform raw data into usable form. Focuses on:
- ETL/ELT tools (Apache Spark, Airflow, dbt, Mage)
- Cloud data warehouses (Snowflake, BigQuery, Redshift)
- Data quality and pipeline reliability
- Scaling and optimization

**Analytics Engineer (modern hybrid role):**  
Sits between data and analytics. Uses SQL + dbt (or similar) to create the *transformation layer* that analysts consume. Often the first "data hire" at startups.

**Common certifications:**
- **Snowflake SnowPro Core (COF-C03)** – Launched Feb 16, 2026, replacing COF-C02. Exam cost: $175. Covers Snowflake architecture, clustering, security, Cortex AI, Apache Iceberg. Retiring COF-C02 English version May 14, 2026. (https://learn.snowflake.com/en/certifications/snowpro-core-c03/)
- **Databricks Certified Data Engineer Associate** – Covers Delta Lake, Unity Catalog, Auto Loader, DLT, Spark SQL. (https://www.databricks.com/learn/certification/data-engineer-associate)
- **AWS Certified Data Engineer – Associate (DEA-C01)** – 65 questions, 30 minutes, score 720/1000, cost $150. Not retiring 2026. (https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html)
- **dbt Analytics Engineer Certification** – $200, 65 questions, 120 min, 65% pass. Requires ~6 months dbt experience. (https://www.getdbt.com/dbt-certifications/analytics-engineer-certification-exam)
- **Google Cloud Professional Data Engineer** – $200, 3+ years industry + 1+ years GCP. Covers BigQuery, Pub/Sub, Dataflow, Dataproc. (https://cloud.google.com/learn/certification/data-engineer)
- **Azure DP-300 (Azure Database Administrator Associate)** – Not retiring 2026. Also consider **DP-700 (Microsoft Fabric Data Engineering Associate)**. (https://learn.microsoft.com/en-us/certifications/azure-data-administrator/)

**Salary (2026):**  
$127,000–$180,750 USD per Robert Half; Levels.fyi reports $155,000 median across FAANG. (https://www.roberthalf.com/us/en/insights/salary-guide/technology, https://www.levels.fyi/t/software-engineer/title/data-engineer)

**Typical progression time:** 3–5 years to senior.

---

### Senior Level: Data Architect / ML Engineer

**Data Architect:**  
Designs end-to-end data systems—warehouse strategy, governance, cost optimization, security. Often reports to CTO or Chief Data Officer. Rare; highly paid.

**ML Engineer:**  
Owns the full ML lifecycle: feature engineering, model training, evaluation, deployment, monitoring. Often trained in statistics or CS + deep learning. Distinct from Data Scientist (research-leaning) and AI Engineer (foundation model application).

**Common certifications:**
- **Databricks Certified Data Engineer Professional** – Advanced production systems, advanced optimization. (https://www.databricks.com/learn/certification/data-engineer-professional)
- **Databricks Certified ML Engineer Associate / Professional** – Feature store, MLflow, production inference. (https://www.databricks.com/learn/certification/)
- **AWS Certified Machine Learning Engineer – Associate (MLA-C01)** – Replaces retiring MLS-C01 (last day March 31, 2026). Covers SageMaker, hyperparameter tuning, deployment. (https://aws.amazon.com/certification/certified-machine-learning-specialty/)
- **Google Cloud Professional ML Engineer** – $200, 3+ years industry, 1+ GCP. Covers Vertex AI, model evaluation, LLM deployment. (https://cloud.google.com/learn/certification/machine-learning-engineer)
- **Azure AI-103 (Azure AI App and Agent Developer Associate)** – Generative AI apps, agents, multimodal. Beta April 2026, GA June 2026. (https://learn.microsoft.com/en-us/certifications/azure-ai-app-agent-developer-associate/)

**Salary (2026):**  
$160,000–$226,000+ USD (senior); FAANG senior ML engineers $200,000–$350,000 total comp. AI engineers $145,000–$310,000 base, with GenAI specialists commanding 40–60% premiums. (https://www.kore1.com/ml-engineer-salary-guide/, https://www.kore1.com/ai-engineer-salary-guide/)

**Typical progression time:** 5+ years to specialist or lead.

---

### Emerging: AI Engineer (2024–2026 Role)

**What they do:**  
- Build production applications using LLMs, RAG, multi-step agents
- Fine-tune or prompt-engineer foundation models (GPT, Claude, Llama, etc.)
- Design vector stores, retrieval pipelines, evaluation frameworks
- Requires practical LLM knowledge, *not* traditional ML/statistics depth

**Distinction from ML Engineer:**  
- ML Engineer builds *custom* models from labeled data
- AI Engineer *applies* existing models to business problems

**Certifications (nascent):**
- **AWS Certified Generative AI Developer – Professional** (emerging 2025–2026)
- **Databricks Certified Generative AI Engineer Associate** (covers end-to-end GenAI apps: design, data, assembly, deployment, governance)
- **NVIDIA Certified Generative AI LLM Associate** (verify current state; in-progress 2024–2025)
- **Hugging Face / DeepLearning.AI courses** (no formal credential yet; community-recognized)

**Reference:** Chip Huyen's *AI Engineering* (O'Reilly, Jan 7, 2025) defines the discipline. (https://www.oreilly.com/library/view/ai-engineering/9781098166298/)

**Salary (2026):**  
Overlaps ML Engineer + $10–20K GenAI premium. Market demand high (LinkedIn 2026 jobs on the rise).

---

## Certification Landscape by Vendor

### Amazon Web Services (AWS)

| Cert | Code | Cost | Status | Notes |
|------|------|------|--------|-------|
| AI Practitioner (Foundational) | AIF-C01 | $100 | Active 2026 | AI/ML fundamentals; entry point. |
| Machine Learning Engineer – Associate | MLA-C01 | $150 | Active 2026 | Technical ML implementation on SageMaker. |
| Data Engineer – Associate | DEA-C01 | $150 | Active 2026 | ETL, analytics, glue, batch/streaming. |
| Machine Learning – Specialty | MLS-C01 | $300 | Retiring 3/31/2026 | Last day to test: March 31, 2026. No longer new registrations. |
| Generative AI Developer – Professional | AIG-C02 (TBD) | TBD | Emerging 2025+ | Focus: LLM deployment, agents, RAG. |

**Citation:** https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html, https://aws.amazon.com/certification/

---

### Microsoft Azure

| Cert | Code | Cost | Status | Notes |
|------|------|------|--------|-------|
| Data Fundamentals | DP-900 | $99 | Active 2026 | Overview; often free for students. |
| Data Scientist Associate | DP-100 | $165 | Active 2026 (retiring check needed) | Azure ML, AutoML, Notebooks. |
| Database Administrator Associate | DP-300 | $165 | Active 2026 | SQL Server, managed DB, backup/recovery. |
| Fabric Data Engineering Associate | DP-700 | $165 | Active 2026 | Microsoft Fabric unified analytics. |
| AI Fundamentals | AI-900 | $99 | Retiring 6/2026 | Retiring June 2026; replaced by AI-901. |
| AI App & Agent Developer Associate | AI-103 | TBD | Beta 4/2026, GA 6/2026 | Generative AI, agents, multimodal; replaces AI-102. |
| Azure AI Cloud Developer Associate | AI-200 | TBD | Emerging 7/2026 | Replaces deprecated AZ-204. |

**Citation:** https://vladtalkstech.com/microsoft-learning-and-credential-news/microsoft-certification-retirements-2026/, https://learn.microsoft.com/en-us/certifications/

---

### Google Cloud

| Cert | Code | Cost | Status | Notes |
|------|------|------|--------|-------|
| Associate Cloud Engineer | ACE | $200 | Active 2026 | Entry; covers core GCP services. |
| Professional Data Engineer | PDE | $200 | Active 2026 | BigQuery, Pub/Sub, Dataflow, Dataproc. |
| Professional ML Engineer | PML | $200 | Active 2026 | Vertex AI, model lifecycle, LLM deployment. |
| Professional Generative AI Leader (proposed) | — | TBD | Under development | Emerging; similar to AWS AIG-C02. |

**Citation:** https://cloud.google.com/learn/certification/

---

### Snowflake

| Cert | Code | Cost | Status | Notes |
|------|------|------|--------|-------|
| SnowPro Core | COF-C03 | $175 | Launched 2/16/2026 | Covers architecture, Cortex AI, Iceberg tables. COF-C02 retiring 5/14/2026. |
| SnowPro Advanced: Architect | — | $200 | Active 2026 | Advanced architecture, multi-cloud, cost. |
| SnowPro Advanced: Data Engineer | — | $200 | Active 2026 | Advanced ETL, Streams, Performance tuning. |
| SnowPro Advanced: Data Scientist | — | $200 | Active 2026 | ML in Snowflake, MLOps, model deployment. |
| SnowPro Advanced: Administrator | — | $200 | Active 2026 | Cluster, security, replication, backup. |

**Citation:** https://learn.snowflake.com/en/certifications/snowpro-core-c03/

---

### Databricks

| Cert | Code | Cost | Status | Notes |
|------|------|------|--------|-------|
| Data Engineer Associate | — | $200 | Active 2026 | Delta Lake, Spark SQL, DLT, workflows. |
| Data Engineer Professional | — | $250 | Active 2026 | Advanced production systems; requires Associate first. |
| ML Associate | — | $200 | Active 2026 | AutoML, Feature Store, MLflow. |
| ML Professional | — | $250 | Active 2026 | Production ML, lifecycle, monitoring. |
| Generative AI Engineer Associate | — | $200 | Active 2026 | End-to-end GenAI apps; design through governance. |

**Citation:** https://www.databricks.com/learn/training/certification

---

### Specialized Vendors

#### Confluent (Apache Kafka)

- **CCDAK** (Confluent Certified Developer for Apache Kafka): 90 min, remote proctored. Requires 6–12 mo. hands-on experience. (https://www.confluent.io/certification/)
- **CCAAK** (Confluent Certified Administrator for Apache Kafka): Cluster operations, monitoring, security.

#### MongoDB

- **Associate Developer**: C100DEV. MongoDB CRUD, indexing, drivers (Python, Node.js, Java, C#, PHP). (https://learn.mongodb.com/)
- **Associate DBA**: C100DBA. Replication, security, backup, monitoring.
- **Associate Data Modeler**: C100ADM.

#### Neo4j

- **Neo4j Certified Professional**: Graph database design, Cypher, indexing, performance. (https://graphacademy.neo4j.com/)

#### Elastic

- **Elastic Certified Engineer**: Elasticsearch, Kibana, ingest, tuning. (https://www.elastic.co/training/certification)
- **Elastic Certified Analyst**: Analytics, dashboards, security.

#### NVIDIA

| Cert | Code | Cost | Duration | Status |
|------|------|------|----------|--------|
| AI Infrastructure & Operations (Associate) | NCA-AIIO | $125 | 60 min | Active 2026. 50 Q, 2-year validity. |
| AI Infrastructure (Professional) | NCP-AII | $400 | 120 min | Active 2026. ~70 Q, requires 2–3 yr. data center ops. |

**Citation:** https://www.nvidia.com/en-us/learn/certification/

#### dbt

- **dbt Analytics Engineer Certification**: $200, 120 min, 65 Q, 65% pass. Tests SQL modeling, testing, docs, version control, dbt Cloud. (https://www.getdbt.com/dbt-certifications/)
- **dbt Fundamentals** (free course on Coursera & YouTube via https://www.getdbt.com/)

---

## Learning Resources

### Free Comprehensive Courses

**DataTalks.Club Zoomcamps** (fully free, YouTube + GitHub + Slack community; 80,000+ members globally):
- **Data Engineering Zoomcamp** – 9 weeks, covers Docker, PostgreSQL, BigQuery, dbt, Spark, Kafka. Next cohort Jan 2026. (https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **MLOps Zoomcamp** – 6 modules + project, experiment tracking (MLflow), orchestration (Mage), deployment, monitoring. (https://github.com/DataTalksClub/mlops-zoomcamp)
- **ML Zoomcamp** – Machine learning engineering, end-to-end project-based. (https://datatalks.club/blog/machine-learning-zoomcamp.html)

**DeepLearning.AI** (by Andrew Ng & team; free YouTube + Coursera audit):
- Short courses on LLMs, RAG, agents, vector databases, prompt engineering. (https://www.deeplearning.ai/)
- Specialization partnerships on Coursera.

**Fast.ai** (by Jeremy Howard; free):
- Practical Deep Learning for Coders. Top-down approach; accessible. (https://course.fast.ai/)

**Hugging Face Course** (free online):
- NLP course, transformers, LLM fine-tuning. (https://huggingface.co/learn/nlm-course/)

**Mode Analytics SQL Tutorial** (free):
- SQL fundamentals; essential for data roles. (https://mode.com/sql-tutorial/)

**Snowflake University** (free education track via https://learn.snowflake.com/)

**Databricks Academy** (mixed free + paid via https://academy.databricks.com/)

---

### Paid Platforms

- **DataCamp** – Hands-on SQL, Python, R, dbt, Snowflake tracks. Monthly subscription. (https://www.datacamp.com/)
- **Coursera Specializations** – Google Cloud, dbt, and many vendor partnerships. Audit free, certificate requires payment.
- **Udemy** – Affordable individual courses; quality varies. Look for 30,000+ enrollees and 4.5+ ratings.
- **Pluralsight** – Enterprise track; monthly subscription.
- **Educative.io** – System design, data structures, interactive lessons.

---

### YouTube Channels (Highly Regarded)

- **3Blue1Brown** – Math foundations (linear algebra, calculus). (https://www.youtube.com/@3blue1brown)
- **StatQuest with Josh Starmer** – Statistics, ML intuition, clear explanations.
- **Andrej Karpathy** – Deep learning, code-from-scratch neural networks, GPT implementation. (https://www.youtube.com/@AndrejKarpathy)
- **Two Minute Papers** – Summarizes recent ML/AI research papers.
- **Yannic Kilcher** – Deep learning research overviews.
- **DeepLearning.AI** – Official channel for Andrew Ng's courses.
- **Jay Alammar** – Visual explanations (transformers, BERT, etc.).
- **Krish Naik** – Python, ML, data science tutorials.
- **DataTalks.Club** – Zoomcamp lectures, interviews, community content. (https://www.youtube.com/@DataTalksClub)
- **Hugging Face** – Transformers, NLP tutorials. (https://www.youtube.com/@HuggingFace)

---

## Essential Books

All citations with publisher + year + URL (where available).

### Data Engineering & Architecture

1. **Designing Data-Intensive Applications** – Martin Kleppmann (O'Reilly, March 2017). The canonical reference for distributed systems, databases, streaming. https://dataintensive.net/

2. **Fundamentals of Data Engineering** – Joe Reis & Matt Housley (O'Reilly, 2022). Modern data stack, lake house concepts, governance.

3. **Database Internals** – Alex Petrov (O'Reilly, 2021). Deep dive into B-trees, LSM trees, query engines. For architects.

4. **Data Mesh** – Zhamak Dehghani (O'Reilly, 2022). Organizational paradigm shift; governance-at-scale for modern data teams.

### Machine Learning & AI Engineering

5. **Hands-On Machine Learning with Scikit-Learn, Keras and TensorFlow** – Aurélien Géron (O'Reilly, 3rd ed. 2022). Practical, accessible end-to-end ML. Industry standard.

6. **Designing Machine Learning Systems** – Chip Huyen (O'Reilly, 2022). ML systems design, feature stores, monitoring.

7. **AI Engineering: Building Applications with Foundation Models** – Chip Huyen (O'Reilly, Jan 7, 2025). The definitive new book on LLM applications, RAG, agents, evaluation. Already the most-read O'Reilly book since launch. https://www.oreilly.com/library/view/ai-engineering/9781098166298/

8. **Machine Learning Engineering** – Andriy Burkov (mlebook.com, 2020). Practical ML workflows, debugging, deployment. http://www.mlebook.com/

9. **The Hundred-Page Machine Learning Book** – Andriy Burkov (mlebook.com, 2019). Concise; good for fundamentals refresher.

10. **Building Machine Learning Powered Applications** – Emmanuel Ameisen (O'Reilly, 2020). End-to-end ML product design and iteration.

### Deep Learning (Theory + Practice)

11. **Deep Learning** – Ian Goodfellow, Yoshua Bengio, Aaron Courville (MIT Press, 2016). Comprehensive; dense. Free online: https://www.deeplearningbook.org/

12. **Pattern Recognition and Machine Learning** – Christopher Bishop (Springer, 2006). Probabilistic models; mathematical rigor.

13. **The Elements of Statistical Learning** – Trevor Hastie, Robert Tibshirani, Jerome Friedman (Springer, 2nd ed. 2009). Essential statistics and ML. Free PDF available.

### Analytics & Storytelling

14. **Storytelling with Data** – Cole Nussbaumer Knaflic (Wiley, 2015). How to design dashboards and presentations for impact. Essential for analysts.

---

## Career Transition Paths

### Data Analyst → Data Engineer (2–3 years)

**Skills to gain:**
- Python (or Scala) for data processing
- Cloud data warehouse architecture (choose one: BigQuery, Snowflake, Redshift)
- Orchestration tools (Airflow, Mage, Dagster)
- SQL optimization and query planning
- Version control (Git) and CI/CD

**Certs to target:**
- dbt Analytics Engineer (bridges gap)
- Snowflake COF-C03 or AWS DEA-C01
- Optional: Databricks Data Engineer Associate

**Timeline:** 2–3 years on-the-job, plus 6–12 months focused study.

---

### Data Engineer → ML Engineer (3–5 years)

**Skills to gain:**
- Statistics and experimental design
- ML lifecycle (feature engineering, model selection, evaluation)
- Deep learning frameworks (PyTorch, TensorFlow)
- MLOps (MLflow, Weights & Biases, DVC)
- Model deployment and monitoring

**Certs to target:**
- Databricks ML Engineer Associate / Professional
- AWS MLA-C01 (or new generative AI cert)
- Google Cloud Professional ML Engineer
- Azure AI-103

**Timeline:** 3–5 years; often overlaps with data engineering role.

---

### Data Scientist / ML Engineer → AI Engineer (1–2 years)

**Skills to gain:**
- LLM foundation model landscape (GPT, Claude, Llama, Mixtral, etc.)
- Prompt engineering and in-context learning
- Retrieval-augmented generation (RAG) systems
- Multi-step agentic workflows
- LLM evaluation and fine-tuning
- Vector databases and embeddings

**Certs to target:**
- Databricks Generative AI Engineer Associate
- AWS Generative AI Developer Pro (emerging)
- Industry-agnostic: Chip Huyen's *AI Engineering* book + project portfolio

**Timeline:** 1–2 years of LLM application experience.

---

### Non-Tech Background → Data Analyst (6–12 months)

**For business/finance professionals:**
- SQL fundamentals (6 weeks)
- Tableau or Power BI (4 weeks)
- Excel/Sheets advanced (concurrent)
- Bootcamp (12 weeks) or self-paced Udemy/Coursera (4–6 months)

**For statisticians/academics:**
- Python + pandas (2–3 weeks)
- Cloud warehouse (Snowflake, BigQuery) in 4 weeks
- Business domain (4–8 weeks immersion)
- Already have stats advantage

**Certs to target:**
- Tableau Desktop Specialist
- Microsoft PL-300 Power BI Data Analyst

**Timeline:** 6–12 months to junior analyst role.

---

## Salary Progression (2026 USD)

| Role | Junior | Mid | Senior | Lead / Manager |
|------|--------|-----|--------|-----------------|
| Data Analyst | $65–85K | $85–120K | $120–160K | $140–180K |
| Data Engineer | $110–140K | $140–180K | $180–240K | $220–320K |
| Analytics Engineer | $95–130K | $130–170K | $170–210K | $200–270K |
| BI Developer | $100–130K | $130–170K | $170–210K | $200–260K |
| Data Scientist | $120–160K | $160–210K | $210–280K | $250–350K |
| ML Engineer | $140–180K | $180–240K | $240–320K | $300–400K+ |
| AI Engineer (GenAI) | $150–190K | $200–260K | $260–340K | $320–420K+ |
| MLOps Engineer | $130–160K | $160–210K | $210–280K | $280–360K |
| Chief Data Officer | — | — | $250–400K | $400–600K+ |

**Notes:**  
- All figures 2026 USD, US market (San Francisco / New York command +20–40% premium).
- FAANG + well-funded startups typically top-of-range or above.
- GenAI specialists (fine-tuning, agents, RAG) command +40–60% premium over base ML salary.
- Salary data sources: Robert Half 2026 Salary Guide, Levels.fyi (https://www.roberthalf.com/us/en/insights/salary-guide/technology), Glassdoor, levels.fyi (https://www.levels.fyi/), Kore1 salary guides (https://www.kore1.com/ai-engineer-salary-guide/).

---

## Key 2026 Trends & Shifts

### Certification Retirements & Launches

- **AWS MLS-C01 retires 3/31/2026.** Replaced by three pathways: AIF-C01 (foundational), MLA-C01 (associate), and emerging AWS Generative AI Developer – Professional.
- **Azure AI-900 retires 6/2026.** Replaced by AI-901 (foundations).
- **Azure AI-102 retiring.** Replaced by AI-103 (generative AI app developer).
- **Snowflake COF-C02 retires 5/14/2026.** COF-C03 (launched 2/16/2026) adds Cortex AI, Apache Iceberg tables, Snowflake Notebooks.

### Role Evolution

1. **AI Engineer (LLM focus) now mainstream.** Previously niche; now entry point for many. Chip Huyen's *AI Engineering* (O'Reilly, Jan 2025) formalizes discipline.
2. **MLOps becomes required.** Model deployment and monitoring no longer optional; every ML org needs MLOps practices.
3. **Analytics Engineering mainstream.** dbt adoption near 100% at scaling data teams; certification now industry-standard.

### Market Dynamics

- **Talent shortage continues.** AI engineers, prompt engineers, and LLM fine-tuning specialists command 40–60% premiums.
- **Remote-first data roles.** Unlike security (which often needs on-site compliance), data roles are 80%+ remote-capable.
- **Cross-functional blurring.** Product engineers doing simple ML. ML engineers learning cloud ops. Blended skill sets valued.

---

## Cross-Domain Linkages

### To DevOps (DOM09)

- **Overlap:** MLOps (deployment, CI/CD, monitoring)
- **Distinction:** MLOps is *within* the model lifecycle; DevOps is infrastructure automation across the whole org
- **Relevant certs:** Databricks MLOps, AWS MLOps certifications (emerging)

### To Cloud Architecture (DOM05)

- **Overlap:** Both use cloud services (BigQuery, SageMaker, Vertex AI, Snowflake)
- **Distinction:** Cloud architects design regions, failover, cost structures; data engineers design pipelines and warehouse schemas
- **Relevant:** Data engineers must understand cloud cost, performance tiers, and multi-region replication

### To Software Engineering (DOM11)

- **Overlap:** ML infrastructure, feature stores, serving frameworks (FastAPI, Flask for inference)
- **Distinction:** SWE builds production systems; data roles build analytics/models
- **Emerging:** Full-stack ML platforms blurring this line

---

## Emerging Specialty: Generative AI & Agents

**Timeline:** 2023–present. Will dominate 2026–2028.

**Key skills:**
- Prompt engineering (zero-shot, few-shot, chain-of-thought)
- RAG (retrieval-augmented generation): vector stores, embeddings, reranking
- Multi-step agents (ReAct, function calling, tool use)
- Fine-tuning (LoRA, parameter-efficient methods)
- Evaluation frameworks (RAGAS, custom evals)
- Guardrails and safety

**Learning path:**
1. Start: DeepLearning.AI short courses (1–2 weeks each)
2. Build: 1–2 personal projects (RAG app, chatbot, agent)
3. Read: Chip Huyen *AI Engineering* (Jan 2025)
4. Certify: Databricks Generative AI Engineer Associate (2026) or AWS Generative AI Developer – Professional (emerging)

**Salary lift:** +$30–50K over base ML engineer for 2–3 years' GenAI-focused work.

---

## Recommended Study Sequence for Career Starters

### Target: Junior Data Analyst (6 months)

1. **Weeks 1–4:** SQL fundamentals (Mode Analytics free tutorial, DataCamp)
2. **Weeks 5–8:** Excel/Sheets + Tableau Desktop Specialist cert ($99)
3. **Weeks 9–12:** Business domain immersion + portfolio project (mock dashboards)
4. **Weeks 13–24:** Apply for roles; intern or contract data analyst positions
5. **Cert:** Tableau Desktop Specialist OR Microsoft PL-300 Power BI Data Analyst

**Resources:** DataCamp, Mode Analytics (free SQL), Udemy Tableau/Power BI courses ($10–15).

---

### Target: Data Engineer (18–24 months)

**Prerequisite:** Junior data analyst or CS background.

1. **Months 1–3:** Python for data (pandas, NumPy). DataCamp or Udemy.
2. **Months 3–6:** SQL optimization + cloud warehouse (BigQuery or Snowflake free tier). dbt fundamentals (free).
3. **Months 6–9:** DataTalks.Club Data Engineering Zoomcamp (9 weeks, free).
4. **Months 9–12:** Databricks or Snowflake COF-C03 exam prep.
5. **Months 12–18:** First data engineering role (junior → mid).
6. **Months 18–24:** AWS DEA-C01 or Google Cloud PDE cert.

**Certs:** dbt Analytics Engineer (optional but recommended) + Snowflake COF-C03 OR AWS DEA-C01.

---

### Target: ML Engineer (36–48 months from analyst start)

**Prerequisite:** 2+ years data engineering + statistics or CS degree.

1. **Months 1–6:** Math foundations (3Blue1Brown linear algebra, stats). Free YouTube.
2. **Months 6–12:** ML fundamentals (Géron's *Hands-On ML*, Coursera Andrew Ng, Fast.ai).
3. **Months 12–18:** DataTalks.Club MLOps Zoomcamp (6 weeks) + ML projects (Kaggle).
4. **Months 18–24:** Databricks ML Associate or AWS MLA-C01 exam prep.
5. **Months 24–36:** Production ML role; learn MLflow, monitoring, deployment.
6. **Months 36–48:** Databricks ML Professional or Google Cloud PML cert.

**Certs:** Databricks ML Associate (6 months in), then Professional (12 months in) OR AWS MLA-C01.

---

### Target: AI Engineer (LLM focus) (6–12 months from ML background)

**Prerequisite:** 2+ years ML engineering or adjacent role.

1. **Weeks 1–2:** Chip Huyen *AI Engineering* book (Jan 2025). Fast read; very practical.
2. **Weeks 3–8:** DeepLearning.AI short courses (5–6 available; 1–2 weeks each).
3. **Weeks 8–12:** Build RAG app + multi-step agent. Use LangChain / LlamaIndex / CrewAI.
4. **Weeks 12–16:** Second project: Fine-tuning or custom eval framework.
5. **Months 4–6:** Job search + Databricks Generative AI Engineer Associate (launch 2026).

**Certs:** Databricks Generative AI Engineer Associate (emerging 2026). Community-recognized portfolio > formal cert at this stage.

---

## Conclusion

The Data / AI / ML domain is the most rapidly evolving area of IT career growth (2024–2026). Certifications are essential for validation, but **project portfolio often matters more than certs** for ML and AI roles. The emergence of AI Engineer as a distinct role opens new pathways for both career starters and career changers.

**For career starters:** Data analyst (6 mo) → data engineer (3–5 yr) → ML engineer or architect.

**For career changers (non-tech):** Focus SQL + analytics (6 mo) → choose specialization.

**For career changers (SWE/Systems):** Leverage programming skills → skip analyst role → go directly to ML engineer (18–24 mo).

**2026 priority:** Learn an LLM stack (RAG, agents, fine-tuning) to stay competitive. The market will not wait.

---

## Sources

- [AWS Certification Exam Guides](https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html)
- [AWS Certified Machine Learning Specialty](https://aws.amazon.com/certification/certified-machine-learning-specialty/)
- [Azure Certification Updates 2026](https://vladtalkstech.com/microsoft-learning-and-credential-news/microsoft-certification-retirements-2026/)
- [Microsoft Certification Paths](https://learn.microsoft.com/en-us/certifications/)
- [Google Cloud Certification](https://cloud.google.com/learn/certification/)
- [Snowflake SnowPro Core COF-C03](https://learn.snowflake.com/en/certifications/snowpro-core-c03/)
- [Databricks Certification](https://www.databricks.com/learn/training/certification)
- [Confluent Certification](https://www.confluent.io/certification/)
- [MongoDB Certification](https://learn.mongodb.com/)
- [NVIDIA Certification](https://www.nvidia.com/en-us/learn/certification/)
- [Neo4j Certification](https://graphacademy.neo4j.com/)
- [Elastic Certification](https://www.elastic.co/training/certification)
- [dbt Certifications](https://www.getdbt.com/dbt-certifications/)
- [Tableau Certification](https://www.tableau.com/learn/certification)
- [Robert Half 2026 Salary Guide](https://www.roberthalf.com/us/en/insights/salary-guide/technology)
- [Levels.fyi Data Engineer Salaries](https://www.levels.fyi/t/software-engineer/title/data-engineer)
- [Kore1 AI Engineer Salary Guide 2026](https://www.kore1.com/ai-engineer-salary-guide/)
- [Kore1 ML Engineer Salary Guide 2026](https://www.kore1.com/ml-engineer-salary-guide/)
- [DataTalks.Club Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- [DataTalks.Club MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- [DataTalks.Club Overview](https://datatalks.club/)
- [DeepLearning.AI](https://www.deeplearning.ai/)
- [Fast.ai](https://course.fast.ai/)
- [Hugging Face Course](https://huggingface.co/learn/llm-course/)
- [Mode Analytics SQL Tutorial](https://mode.com/sql-tutorial/)
- [DataCamp](https://www.datacamp.com/)
- [Chip Huyen AI Engineering (O'Reilly, Jan 2025)](https://www.oreilly.com/library/view/ai-engineering/9781098166298/)
- [Designing Data-Intensive Applications (Kleppmann, O'Reilly 2017)](https://dataintensive.net/)
- [Hands-On Machine Learning (Géron, O'Reilly 2022)](https://www.oreilly.com/library/view/hands-on-machine-learning-with-scikit-learn-keras-and-tensorflow/9781098125967/)
- [Designing Machine Learning Systems (Huyen, O'Reilly 2022)](https://www.oreilly.com/library/view/designing-machine-learning-systems/9781098107956/)
- [Machine Learning Engineering (Burkov, 2020)](http://www.mlebook.com/)
- [Deep Learning (Goodfellow, Bengio, Courville)](https://www.deeplearningbook.org/)
