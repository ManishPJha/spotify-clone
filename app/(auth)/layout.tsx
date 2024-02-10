import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@partials/auth-header'))
const Footer = dynamic(() => import('@partials/auth-footer'))

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default AuthLayout
