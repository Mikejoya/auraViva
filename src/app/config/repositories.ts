import type { ProductRepository } from "../../repositories/productRepository";
import type { CategoryRepository } from "../../repositories/categoryRepository";
import { mockProductRepository } from "../../infrastructure/mock/mockProductRepository";
import { mockCategoryRepository } from "../../infrastructure/mock/mockCategoryRepository";

export const productRepository: ProductRepository = mockProductRepository;
export const categoryRepository: CategoryRepository = mockCategoryRepository;