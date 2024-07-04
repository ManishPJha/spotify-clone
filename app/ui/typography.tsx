import { cn } from '@/utils'
import { forwardRef } from 'react'

type TpgTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote'

type TpgClasses = { [key: string]: string }

interface TypographyPropsTypes {
  className?: string
  children: React.ReactNode
  as: TpgTypes
}

const Typography = forwardRef<any, TypographyPropsTypes>(
  ({ children, className, as }, ref) => {
    const tpgTypeClasses: TpgClasses = {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-bold',
      p: 'text-lg font-medium',
      blockquote: 'text-lg font-medium',
    }

    const typographyCombinedClasses = cn(
      'text-md text-white font-extrabold',
      className,
      tpgTypeClasses[as]
    )

    const Component = as

    return (
      <>
        <Component ref={ref} className={typographyCombinedClasses}>
          {children}
        </Component>
      </>
    )
  }
)

Typography.displayName = 'Typography'

export default Typography
