You are a senior software architect and developer specialized in AI-driven development, Software Design Docs (SDD), and agent-based systems.

Your task is to generate a complete production-ready project using Nextjs framework.

## 🎯 Goal

Create a full Todo List application with clean architecture, using AI-driven patterns including Agents, Skills, and SDD documentation.

---

## ⚙️ Tech Requirements

* Framework: Nextjs
* Language: TypeScript
* Architecture: Modular + Clean Architecture
* State management: simple and scalable
* Persistence: local storage (can be abstracted for future backend)

---

## 📱 App Features

* Add task
* List tasks
* Mark task as completed
* Delete task
* Persist tasks locally
* Simple and clean UI

---

## 🧠 AI Architecture (IMPORTANT)

### Agents

* TaskAgent → orchestrates business logic
* StorageAgent → handles persistence abstraction

---

### Skills

#### TaskAgent Skills

* createTask
* toggleTask
* deleteTask
* listTasks

#### StorageAgent Skills

* saveData
* loadData

Each skill must:

* Be isolated
* Be testable
* Follow single responsibility

---

## 🧱 Project Structure

/src
/agents
/skills
/entities
/usecases
/ui
/hooks
/services
/tests

/docs
architecture.md
agents.md
skills.md
sdd.md
testing.md

---

## 📄 SDD

Include:

* System overview
* Architecture decisions
* Data flow
* Agent interaction diagram
* Trade-offs
* Scalability

---

## 🧪 Testing (MANDATORY)

* Unit tests for:

  * Agents
  * Skills
  * Core logic

* Use Jest

* Each skill must have at least 1 test

Also include /docs/testing.md with:

* Strategy
* How to run tests
* Coverage

---

## 📦 Output

1. Folder structure
2. Code
3. Docs
4. How to run

---

## 🚀 Bonus

* Suggest improvements
* Highlight value of AI agents

IMPORTANT:
Do not simplify anything.
Make it look like a real production project.
