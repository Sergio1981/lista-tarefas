import { Task } from '../entities/Task';
import { TestSkills } from '../skills/TestSkills';

/**
 * TestAgent atua como um orquestrador voltado especificamente para facilitar 
 * os testes unitários. Ele cuida do setup de ambiente e da geração de dados fake (mocks),
 * removendo a necessidade de repetir lógicas de mock em múltiplos arquivos de teste.
 */
export class TestAgent {
  /**
   * Inicializa o ambiente de testes (ex: mockando o localStorage)
   */
  setupEnvironment(): void {
    TestSkills.mockLocalStorage();
  }

  /**
   * Cria uma lista contendo N tarefas populadas para injeção em testes
   */
  generateFakeTasks(count: number): Task[] {
    return TestSkills.generateMultipleTasks(count);
  }

  /**
   * Retorna uma única tarefa com os atributos desejados
   */
  generateSingleTask(title: string, completed: boolean = false): Task {
    return TestSkills.generateMockTask(crypto.randomUUID(), title, completed);
  }
}

export const testAgent = new TestAgent();
