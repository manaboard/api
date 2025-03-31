export interface IBaseRepository<T, K> {
  findAll(): Promise<T[]>;
  findById(id: number | string): Promise<T | null>;
  create(data: K): Promise<T>;
  update(id: number | string, data: Partial<K>): Promise<T>;
  delete(id: number | string): Promise<boolean>;
}
