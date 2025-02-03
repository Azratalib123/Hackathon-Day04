import { client } from '@/sanity/lib/client';
import ShopClient from '@/components/ShopClient';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  tags: string[];
  imageUrl: string;
}

const ShopPage = async () => {
  const query = `
    *[_type == "product"]{
      _id,
      title,
      description,
      price,
      discountPercentage,
      isNew,
      tags,
      "imageUrl": productImage.asset->url
    }
  `;
  const products: Product[] = await client.fetch(query);

  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-6">
        <ShopClient products={products} productsPerPage={productsPerPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default ShopPage;
