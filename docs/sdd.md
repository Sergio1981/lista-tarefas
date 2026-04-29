# Software Design Document (SDD)

## System Overview
A Todo List application built using Next.js, featuring an AI-driven agent pattern to separate business rules from presentation and data persistence.

## Architecture Decisions
- **Next.js**: Used as the foundational framework for future scalability (e.g., SSR, API routes).
- **Agent Pattern**: Adopted to keep business logic framework-agnostic. Agents maintain state and orchestrate skills.
- **Clean Architecture**: Ensures components are decoupled.

## Data Flow
1. User interacts with UI (e.g., clicks "Add Task").
2. React Hook (`useTasks`) calls `TaskAgent.createTask()`.
3. `TaskAgent` delegates the logic to `TaskSkills.createTask()`.
4. `TaskAgent` updates its internal state.
5. `TaskAgent` notifies subscribers and calls `StorageAgent.save()`.
6. UI re-renders with new data.

## Agent Interaction Diagram
```
UI -> useTasks Hook -> TaskAgent -> TaskSkills (logic)
                           |
                           v
                     StorageAgent -> StorageSkills (persistence)
```

## Trade-offs
- Over-engineering for a simple Todo list, but provides an excellent foundation for a highly scalable, complex application.
- The use of pure skills requires passing state (the task array) explicitly, which is great for testing but slightly more verbose.

## Scalability
- New Agents can be added without modifying existing ones.
- `StorageAgent` can easily be refactored to fetch data from an external REST/GraphQL API.
