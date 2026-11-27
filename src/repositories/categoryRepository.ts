
import type { Category } from "../types/category";

export interface CategoryRepository {
    getAll(): Promise<Category[]>;

    getBySlug(slug: string): Promise<Category | null>;

    getById(id: string): Promise<Category | null>;
}
