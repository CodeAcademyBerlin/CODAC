import { ButtonProps } from '../../interfaces/interfaceButtons'

const Button = ({ children, padding, bg, text, border, shape }: ButtonProps) => {
  return (
    <button
      className={`
      ${padding ? padding : 'px-10 py-2'}
      ${bg ? bg : 'bg-primary'}
      ${text ? text : 'text-light'}
      ${border ? `border-2 ${border}` : 'border-2 border-primary'}
      ${shape? shape:'rounded'}
       text-2xl duration-300 active:translate-y-2`}
    >
      {children}
    </button>
  )
}

export default Button
