import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { idProducts: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.idProducts
 
  // fetch data
  const product = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
    description:`Mô tả sản phẩm có id là : ${product.id}`
  }
}
 
export default function Page({ params }: Props) {
    return (
        <div>
            SEO  với phương thức  genderate Metadata    
        </div>
    )
}