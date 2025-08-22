import type { PortableTextBlock } from "@portabletext/types"

export interface BlogPostProps {
  _id: string
  _createdAt: string
  postTitle: string
  slug: {
    current: string
  }
  postDate: string
  authorName: string
  authorImage?: {
    asset: {
      _ref: string
      url: string
    }
  }
  readingTime: string
  thumbnailImage?: {
    asset: {
      _ref: string
      url: string
    }
  }
  references?: PortableTextBlock[] 
  postContent: PortableTextBlock[] 
}
