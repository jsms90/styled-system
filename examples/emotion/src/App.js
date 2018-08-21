import React from 'react'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
} from 'styled-system'

injectGlobal`
  body{margin:0;}
`

const theme = {
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64, 96, 128
  ],
  space: [
    // margin and padding
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  colors: {
    blue: '#07c',
    red: '#e10',
  }
}

const Root = styled('div')`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
`

const Box = styled('div')`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
}

const Text = styled('div')`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
}

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
  fontSize: 5,
  lineHeight: 1.5,
  m: 0
}

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <Box
            px={[ 3, 4 ]}
            py={[ 5, 6 ]}
            color='white'
            bg='blue'
          >
            <Heading
              fontSize={[ 4, 5, 6 ]}>
              styled-system
            </Heading>
            <Text
              fontWeight='bold'>
              Emotion demo
            </Text>
          </Box>
        </Root>
      </ThemeProvider>
    )
  }
}
