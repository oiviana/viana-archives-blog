import type { PortableTextBlock } from "@portabletext/types"

export interface BlogPostProps {
  _id: string
  _createdAt: string
  postTitle: string
  postDescription: string
  slug: {
    current: string
  }
  postDate: string
  authorName: string
  authorImage:ImageBlock
  readingTime: string
  thumbnailImage: ImageBlock
  references?: PortableTextBlock[] 
  postContent: PortableTextBlock[] 
}
