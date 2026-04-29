import { StorageSkills } from '../skills/StorageSkills';

export class StorageAgent {
  constructor(private storageKey: string = 'app_data') {}

  save<T>(data: T): void {
    StorageSkills.saveData(this.storageKey, data);
  }

  load<T>(): T | null {
    return StorageSkills.loadData<T>(this.storageKey);
  }
}
