import type { Product } from "../../types/product";
import type { ProductRepository } from "../../repositories/productRepository";

const PRODUCTS_URL = "/mock/products.json";

async function fetchProducts(): Promise<Product[]> {
    const product = await fetch(PRODUCTS_URL);

    if (!product.ok) {
        throw new Error("No fue posible obtener los productos");
    }

    const products: Product[] = await product.json();
    return products;
}

export const mockProductRepository: ProductRepository = {
    async getAll(): Promise<Product[]> {
        return await fetchProducts();
    },

    async getBySlug(slig: string): Promise<Product | null> {
        const products = await fetchProducts();
        return products.find((p) => p.slug === slig) || null;
    },

    async getFeatured(): Promise<Product[]> {
        const products = await fetchProducts();
        return products.filter( p => p.featured && p.active);
    },

    async getByCategory(category: string): Promise<Product[]> {
        const products = await fetchProducts();
        return products.filter((p) => p.categoryId === category && p.active);
    }
}