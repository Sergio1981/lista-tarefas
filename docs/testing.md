# Testing Strategy

## Strategy
We employ unit testing focused primarily on the pure business logic (`Skills`) and the orchestrators (`Agents`). Since React acts merely as a view layer reacting to Agent states, UI tests are less critical but can be added.

- **Skills**: Tested extensively for various edge cases as they are pure functions.
- **Agents**: Tested with mocked dependencies (e.g., mocking `StorageSkills`) to ensure correct state updates and subscriber notifications.

## How to run tests

Ensure dependencies are installed:
```bash
npm install
```

Run tests using Jest:
```bash
npx jest
# or if configured in package.json
npm run test
```

## Coverage
- `TaskSkills`: 100% core logic coverage.
- `StorageSkills`: Testing local storage boundary.
- `TaskAgent`: Testing state updates and event notifications.
