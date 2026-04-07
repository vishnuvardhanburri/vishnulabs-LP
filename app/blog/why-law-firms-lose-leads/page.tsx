import type { Metadata } from "next"

import { BlogPostTemplate } from "@/components/seo/blog-post-template"
import { blogPosts } from "@/lib/seo-pages"

const postData = blogPosts.whyLawFirmsLoseLeads

export const metadata: Metadata = {
  title: postData.metadata.title,
  description: postData.metadata.description,
  alternates: {
    canonical: postData.metadata.canonical,
  },
}

export default function WhyLawFirmsLoseLeadsPage() {
  return <BlogPostTemplate {...postData.post} />
}
