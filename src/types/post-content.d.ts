export type CodeBlock = {
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
}