import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <div className="product-thumb">
        <img src={product.image} alt={product.name} />
        {isOutOfStock && <span className="out-of-stock-badge">Hết hàng</span>}
      </div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        <button className="btn" disabled={isOutOfStock}>
          {isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </div>
  );
}