# Architecture Overview

This project uses a Clean Architecture approach combined with an Agent-Based logic structure.

## Layers

1. **Entities**: Define the core domain data (e.g., `Task`).
2. **Skills**: Pure, functional logic pieces that execute specific operations (e.g., `TaskSkills`, `StorageSkills`).
3. **Agents**: Orchestrators that maintain state, use skills to process data, and communicate changes. (e.g., `TaskAgent`, `StorageAgent`).
4. **Hooks / UseCases**: React-specific bindings that connect UI to the Agents (e.g., `useTasks`).
5. **UI**: Presentational components (e.g., `TaskList`, `TaskItem`).

This guarantees separation of concerns: React doesn't know about `localStorage`, and the UI only reacts to state changes broadcasted by the `TaskAgent`.
