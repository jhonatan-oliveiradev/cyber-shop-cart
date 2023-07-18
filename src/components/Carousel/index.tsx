import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ProductProps } from '../../interfaces/Product';
import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

export function CarouselComponent() {
  const [products, setProducts] = useState<ProductProps[]>([])
  
  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products")
      setProducts(response.data)
    }

    getProducts()
  }, [])

  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={1000}
      stopOnHover={false}
      swipeable={true}
      emulateTouch={true}
    >
      
      {
        products.map(product => (
          <div
            className="flex items-center justify-center my-10"
            key={product.id}
          >
            <Link to={`/product/${product.id}`}>
              <img
                className="object-contain w-full max-h-80"
                src={product.cover}
                alt={product.title}
                />
              <p className="legend mb-4">{product.title}</p>
            </Link>
          </div>
        ))
      }

    </Carousel>
  )
}