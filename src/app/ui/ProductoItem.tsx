// ProductoItem.tsx

interface ProductoProps {
  producto: {
    id_producto: number;
    producto: string;
    precio: string;
    almacen: number;
  };
}

const ProductoItem: React.FC<ProductoProps> = ({ producto }) => {
  return (
    <div className="border-2 border-gray-300 p-4 rounded-md mb-4">
      <h2 className="text-lg font-semibold">{producto.producto}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Almacen: {producto.almacen} unidades</p>
    </div>
  );
};

export default ProductoItem;
