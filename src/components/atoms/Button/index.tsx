/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import {Responsive} from 'types/styled'
import {
  toPropValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
} from 'utils/styles'

// ボタンのバリアント
export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  fontSize?: Responsive<FontSize>
  fontWeight?: Responsive<string>
  letterSpacing?: Responsive<LetterSpacing>
  lineHeight?: Responsive<LineHeight>
  textAlign?: Responsive<string>
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
  pseudoClass?: {
    hover?: {
      backgroundColor?: Responsive<Color>
    }
    disabled?: {
      backgroundColor?: Responsive<Color>
    }
  }
}

const variants = {
  // プライマリ
  primary: {
    color: 'white',
    backgroundColor: 'primary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'primaryDark ',
      },
      disabled: {
        backgroundColor: 'primary',
      },
    },
  },
  // セカンダリ
  secondary: {
    color: 'white',
    backgroundColor: 'secondary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'secondaryDark',
      },
      disabled: {
        backgroundColor: 'secondary',
      }
    },
  },
  // デンジャー
  danger: {
    color: 'white',
    backgroundColor: 'danger',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'dangerDark',
      },
    },
  },
}

/**
 * ボタン
 * バリアント、色、タイポグラフィ、ボーダー、レイアウト、スペース
 * 関連のPropsを追加
*/
const Button = styled.button<ButtonProps>`
  
`