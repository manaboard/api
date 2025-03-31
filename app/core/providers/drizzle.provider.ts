import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { drizzle } from "drizzle-orm/bun-sql";
import { sql } from "bun";

@Injectable()
export class DrizzleProvider {
  private _db: ReturnType<typeof drizzle>;

  constructor(private configService: ConfigService) {
    const databaseUrl = this.configService.get<string>("DATABASE_URL");
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not defined in the environment variables");
      }
      const client = new sql(process.env.DATABASE_URL!);
      this._db = drizzle({ client });
  }

  getDrizzle() {
    return this._db;
  }
}