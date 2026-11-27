import { productRepository } from "../app/config/repositories";

export const productService = {
    async getAll () {
        const products = await productRepository.getAll();
        return products.filter(product => product.active);
    },

    async getBySlug(slug: string) {
        const product = await productRepository.getBySlug(slug);
        
        if(!product  || !product.active) {
            return null;
        }

        return product;
    },

    async getFeatured() {
        const products = await productRepository.getFeatured();
        return products;
    },

    async getByCategory(categoryId: string) {
        const products = await productRepository.getByCategory(categoryId);
        return products;
    }
}