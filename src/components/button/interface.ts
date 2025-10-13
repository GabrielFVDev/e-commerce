export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  color?: 'white' | 'black'
  backgroundColor?: 'white' | 'black'
}
