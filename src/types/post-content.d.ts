export type CodeBlockType = {
  _type: "code"
  language?: string
  code: string
}

export type ImageBlock = {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
  caption?: string
}

export type PostTableBlock = {
  _type: "postTable"
  caption?: string
  rows?: Array<{
    _key?: string
    cells: string[]
  }>
}
