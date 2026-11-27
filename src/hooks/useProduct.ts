
import { useEffect, useState } from "react";

import type { Product } from "../types/product";
import { productService } from "../services/productService";

interface UseProductsResult {
    products: Product[];
    loading: boolean;
    error: string | null;
}

export function useProducts(): UseProductsResult {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                setLoading(true);
                setError(null);

                const data = await productService.getAll();

                setProducts(data);
            } catch (error) {
                setError(
                    error instanceof Error
                        ? error.message
                        : "Ocurrió un error al cargar los productos"
                );
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    return {
        products,
        loading,
        error
    };
}
