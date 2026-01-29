import { ProductsContent } from "@/components/organisms/Products/ProductsContent";


export function ProductsSection() {
  return (
    <section aria-labelledby="Products" className="bg-[#F6F6F6] py-10.5 lg:pt-10.5 lg:px-18">
        <ProductsContent />
    </section>
  );
}
