import { anviraProduct } from "@/content/products/anvira";
import type { ProductDetail } from "@/types/content";

export const products = [anviraProduct] as const satisfies readonly ProductDetail[];

function assertUniqueProductRegistry(registry: readonly ProductDetail[]) {
  const ids = new Set(registry.map((product) => product.id));
  const slugs = new Set(registry.map((product) => product.slug));
  const routes = new Set(registry.map((product) => product.route));

  if (
    ids.size !== registry.length ||
    slugs.size !== registry.length ||
    routes.size !== registry.length
  ) {
    throw new Error("Product IDs, slugs, and routes must be unique.");
  }
}

assertUniqueProductRegistry(products);

export { anviraProduct };
