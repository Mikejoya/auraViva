
import type { Category } from "../../types/category";
import type { CategoryRepository } from "../../repositories/categoryRepository";

const CATEGORIES_URL = "/mock/categories.json";

async function fetchCategories(): Promise<Category[]> {
    const response = await fetch(CATEGORIES_URL);

    if (!response.ok) {
        throw new Error("No fue posible obtener las categorías");
    }

    const categories: Category[] = await response.json();

    return categories;
}

export const mockCategoryRepository: CategoryRepository = {
    async getAll(): Promise<Category[]> {
        return fetchCategories();
    },

    async getBySlug(slug: string): Promise<Category | null> {
        const categories = await fetchCategories();

        return categories.find(category => category.slug === slug) ?? null;
    },

    async getById(id: string): Promise<Category | null> {
        const categories = await fetchCategories();

        return categories.find(category => category.id === id) ?? null;
    }
};
