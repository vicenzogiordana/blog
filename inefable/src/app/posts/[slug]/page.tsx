import ZoomParallax from "@/components/ZoomParallax"
import Amoremio from '@/md/amoremio.mdx'
const projects = [
"Amormío",
"Emptiness",
 "18 años",
"TE AMO",
"PRISCILLA",
 "More than friends",
"Passion",
 "Saudade",
"You deserve",
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: number }>
}) {
  const { slug } = await params
  const titulo = projects[( slug - 1)]
  const { default: Post } = await import(`@/md/${slug}.mdx`)
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl lg:text-9xl uppercase m-10 text-right">{titulo}</h1>
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