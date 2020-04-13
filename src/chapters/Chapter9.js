import React from 'react'
import './styles/sass-style.scss'
import styles from './styles/CSSModule.module.scss'
import classNames from 'classnames/bind'
import styled, { css } from 'styled-components'
const cx = classNames.bind(styles)
const SassComponent = () => {
  return (
    <React.Fragment>
      <h2> SassComponent </h2>
      <div className="SassComponent">
        <div className="box red" />
        <div className="box orange" />
        <div className="box yellow" />
        <div className="box green" />
      </div>
    </React.Fragment>
  )
}

const CSSModule = () => {
  return (
    <React.Fragment>
      <h2> CSS Module </h2>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        Hello, I am <span className="something"> CSS Module! </span>
      </div>
      <h2> CSS Module with classname </h2>
      <div className={cx(styles.wrapper, styles.inverted)}>
        Hello, I am
        <span className="something"> CSS Module with classname! </span>
      </div>
    </React.Fragment>
  )
}

const sizes = {
    desktop: 1024,
    tablet: 768
}

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media(max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }`;
    return acc;
}, {})

const Box = styled.div`
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`}
  @media (max-width: 768px) {
      width: 100%;
  }
`

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &.hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const func = props => {
    console.log(props)
}

const StyledComponent = () => {
  return (
    <React.Fragment>
      <h2> Styled Components</h2>
      <Title> Styled Components </Title>
      <Box color="black">
        <Button> Hello </Button>
        <Button inverted={true}> Only outline</Button>
      </Box>
    </React.Fragment>
  )
}

const Chapter9 = () => {
  return (
    <div>
      <h1> Chapter 9 - Styled Components </h1>

      <SassComponent />
      <CSSModule />
      <StyledComponent />
    </div>
  )
}

export default Chapter9
