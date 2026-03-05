  const products = [{
    id: 1,
    name: "Casual Shirt",
    price: 150,
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    description: "Cool casual shirt for everyday street look",
  },
  {
    id: 2,
    name: "Stylish Hoodie",
    price: 250,
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
    description: "Modern hoodie perfect for cool nights",
  },
  {
    id: 3,
    name: "Slim Jeans",
    price: 180,
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    description: "Trendy slim fit jeans for a sharp look",
  },
  {
    id: 4,
    name: "Sneakers",
    price: 300,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    description: "Comfortable and stylish sneakers",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
