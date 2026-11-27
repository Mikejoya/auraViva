
import { useEffect, useState } from "react";

import type { Category } from "../types/category";
import { categoryService } from "../services/categoryService";

interface UseCategoriesResult {
    categories: Category[];
    loading: boolean;
    error: string | null;
}

export function useCategories(): UseCategoriesResult {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadCategories() {
            try {
                setLoading(true);
                setError(null);

                const data = await categoryService.getAll();

                setCategories(data);
            } catch (error) {
                setError(
                    error instanceof Error
                        ? error.message
                        : "Ocurrió un error al cargar las categorías"
                );
            } finally {
                setLoading(false);
            }
        }

        loadCategories();
    }, []);

    return {
        categories,
        loading,
        error
    };
}
