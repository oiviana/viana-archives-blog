"use client"

import { useLayoutEffect } from "react"

type DocumentTitleProps = {
  title: string
}

export default function DocumentTitle({ title }: DocumentTitleProps) {
  useLayoutEffect(() => {
    document.title = title
  }, [title])

  return null
}
