import { dropdownI } from '../../interfaces/interfaceDropdowns'

const Dropdown = ({ background, textColor }: dropdownI) => {
  return (
    <select
      className={`rounded px-2 py-1 text-light
        ${background ? background : 'bg-primary'}
        ${textColor ? textColor : 'text-light'}
        `}
    >
      <option value='test-1'>test-1</option>
      <option value='test-1'>test-1</option>
      <option value='test-1'>test-1</option>
      <option value='test-1'>test-1</option>
    </select>
  )
}

export default Dropdown
