export type SerializeInput<T> = (
  input: T,
) => Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;
