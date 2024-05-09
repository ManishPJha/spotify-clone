import { clsx, type ClassValue } from 'clsx'
import { format, type FormatOptions } from 'date-fns'
import { getCldImageUrl } from 'next-cloudinary'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputClasses: ClassValue[]) => {
  return twMerge(clsx(inputClasses))
}

export function formatDate(
  date: Date,
  isHMSFormat: boolean = false,
  formatOptions?: FormatOptions
): string {
  return format(
    date,
    !isHMSFormat ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:MM:SS',
    formatOptions
  )
}

export async function getBluredImageUrl(src: string): Promise<string> {
  const imageUrl = getCldImageUrl({
    src,
    width: 100, // Resize the original file to a smaller size
  })

  try {
    const response = await fetch(imageUrl)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const base64 = buffer.toString('base64')
    const dataUrl = `data:${response.type};base64,${base64}`

    return dataUrl
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'failed to fetch blured image url!'
    )
  }
}
