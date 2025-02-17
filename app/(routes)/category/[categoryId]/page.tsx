import getCategory from "@/actions/get-category-individu";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductsList from "@/components/product-list";
import Container from "@/components/ui/container";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import { title } from "process";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const product = await getProducts({
    categoryId: params.categoryId,
  });

  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <Banner data={category.banner} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="mt-6 lg:col-span-2 lg:mt-0">
            {product.length == 0 ? (
              <NoResult />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {product.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}                
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
