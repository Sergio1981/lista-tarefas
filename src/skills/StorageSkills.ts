export const StorageSkills = {
  saveData: <T>(key: string, data: T): void => {
    if (typeof window === 'undefined') return;
    try {
      const serialized = JSON.stringify(data);
      window.localStorage.setItem(key, serialized);
    } catch (e) {
      console.error('Error saving data to local storage', e);
    }
  },

  loadData: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    try {
      const serialized = window.localStorage.getItem(key);
      if (serialized === null) {
        return null;
      }
      return JSON.parse(serialized) as T;
    } catch (e) {
      console.error('Error loading data from local storage', e);
      return null;
    }
  }
};
