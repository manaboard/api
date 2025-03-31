import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DrizzleProvider } from '@/core/providers/drizzle.provider';
import { IBaseRepository } from '@/core/interfaces/repository.interface';
import { User, NewUser, users } from '@/core/database/schema';

@Injectable()
export class UserRepository implements IBaseRepository<User, NewUser> {
  constructor(private drizzleProvider: DrizzleProvider) {}

  async findAll(): Promise<User[]> {
    return this.drizzleProvider.getDrizzle().select().from(users);
  }

  async findById(id: number): Promise<User | null> {
    const result = await this.drizzleProvider.getDrizzle()
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    
    return result[0] || null;
  }

  async create(data: NewUser): Promise<User> {
    const result = await this.drizzleProvider.getDrizzle()
      .insert(users)
      .values(data)
      .returning();
    
    return result[0];
  }

  async update(id: number, data: Partial<NewUser>): Promise<User> {
    const result = await this.drizzleProvider.getDrizzle()
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning();
    
    return result[0];
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.drizzleProvider.getDrizzle()
      .delete(users)
      .where(eq(users.id, id))
      .returning();
    
    return result.length > 0;
  }
}