import { StorageSkills } from '../skills/StorageSkills';

describe('StorageSkills', () => {
  beforeEach(() => {
    // Mock localStorage
    const store: Record<string, string> = {};
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key: string) => store[key] || null),
        setItem: jest.fn((key: string, value: string) => {
          store[key] = value.toString();
        }),
      },
      writable: true
    });
  });

  it('should save data to localStorage', () => {
    const data = { test: 'value' };
    StorageSkills.saveData('test_key', data);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('test_key', JSON.stringify(data));
  });

  it('should load data from localStorage', () => {
    const data = { test: 'value' };
    window.localStorage.setItem('test_key', JSON.stringify(data));
    const loadedData = StorageSkills.loadData('test_key');
    expect(loadedData).toEqual(data);
  });

  it('should return null if key does not exist', () => {
    const loadedData = StorageSkills.loadData('non_existent');
    expect(loadedData).toBeNull();
  });
});
