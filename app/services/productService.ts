export async function getProductsFromApi() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) throw new Error('فشل في جلب المنتجات')
  const data = await res.json()
  return data
}
