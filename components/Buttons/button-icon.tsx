type ButtonIconProps = {
  Icon: React.JSXElementConstructor<{ className: string }>
  className: string
}

const ButtonIcon = ({ Icon, className }: ButtonIconProps) => {
  return (
    <div>
      <Icon className={className} />
    </div>
  )
}

export default ButtonIcon
