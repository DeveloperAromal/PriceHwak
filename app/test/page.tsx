import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from 'react';

const TestPage = () => {
  const pathname = usePathname();
  let parsedProducts = [];

  if (pathname) {
    const queryParams = new URLSearchParams(pathname.split('?')[1]);
    const addedProducts = queryParams.get('addedProducts');

    console.log('Query Params:', queryParams.toString()); // Log query params
    console.log('Added Products:', addedProducts); // Log the addedProducts string

    if (addedProducts) {
      try {
        parsedProducts = JSON.parse(addedProducts);
        console.log('Parsed Products:', parsedProducts); // Log the parsed products
      } catch (error) {
        console.error('Error parsing products:', error);
      }
    }
  }

  return (
    <div>
      <h1>Full Data</h1>
      {parsedProducts.length > 0 ? (
        parsedProducts.map((product: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; image: string | StaticImport; }, index: Key | null | undefined) => (
          <div key={index}>
            <p>{product.title}</p>
            {product.image && (
              <div>
                <Image src={product.image} alt="Product" width={150} height={150} />
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No products to display</p> // Display a message if no products are found
      )}
    </div>
  );
};

export default TestPage;
