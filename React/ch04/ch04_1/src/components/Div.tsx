import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'

export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type DivProps = ReactDivProps & {
    src? : string
}

export const Div : FC<DivProps> = ({
    width, height
    style: _style,
})