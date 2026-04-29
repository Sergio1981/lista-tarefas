# Agents

Agents serve as the main orchestrators of the business logic in the application.

## `TaskAgent`

- **Responsibility**: Manages the life cycle of tasks in the application.
- **State**: Maintains an internal array of `Task` objects.
- **Data Flow**: Subscribes UI components to state changes. Delegates operations to `TaskSkills` and persistence to `StorageAgent`.

## `StorageAgent`

- **Responsibility**: Abstracts the persistence layer.
- **Data Flow**: Uses `StorageSkills` to interact with `localStorage`. In the future, this can be swapped out to interact with a remote API without modifying `TaskAgent`.
