import ZoomParallax from "@/components/ZoomParallax"
import Amoremio from '@/md/amoremio.mdx'
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/md/${slug}.mdx`)
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl lg:text-9xl uppercase m-10 text-right">{slug}</h1>
      </div>
      <ZoomParallax />
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mx-16 lg:mx-80 my-10 lg:my-28">
          <Post />
        </div>
      </div>
    </div>
  )
}
export const dynamicParams = false