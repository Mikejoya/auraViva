
import { categoryRepository } from "../app/config/repositories";

export const categoryService = {
    async getAll() {
        const categories = await categoryRepository.getAll();

        return categories.filter(category => category.active);
    },

    async getBySlug(slug: string) {
        const category = await categoryRepository.getBySlug(slug);

        if (!category || !category.active) {
            return null;
        }

        return category;
    },

    async getById(id: string) {
        const category = await categoryRepository.getById(id);

        if (!category || !category.active) {
            return null;
        }

        return category;
    }
};
