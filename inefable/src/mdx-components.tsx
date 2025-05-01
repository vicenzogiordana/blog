import type { MDXComponents } from 'mdx/types'
import { Merriweather, Inter } from "next/font/google";

const geistMono = Merriweather({
    variable: "--font-Merriweather",
    subsets: ["latin"],
    weight: "400", // Add a valid weight value
  });


 
export function useMDXComponents(components: MDXComponents): MDXComponents {
return {
    p: ({ children }) => (
            <p className={`${geistMono.className} antialiased mb-1 text-base/7 indent-8`}>{children}</p>
        ),
    ...components,
}
}