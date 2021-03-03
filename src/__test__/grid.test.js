import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Grid from '..'

let container
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container)
  container.remove()
  container = undefined
})

describe('<Grid />', () => {
  it('should render correctly', () => {
    act(() => {
      render(<Grid />, container)
    })
    expect(container.querySelector('.flex-grid')).not.toBeNull()
  })

  it('should render custom classNames', () => {
    act(() => {
      render(<Grid className="test1 test2" />, container)
    })
    expect(container.querySelector('.flex-grid.test1.test2')).not.toBeNull()
  })

  it('should replace the root node with the passed `component` options', () => {
    act(() => {
      render(<Grid component="span" />, container)
    })
    expect(container.querySelector('.flex-grid')).not.toBeNull()
  })

  it('should render nested', () => {
    act(() => {
      render(
        <Grid>
          <Grid />
          <Grid>
            <Grid />
          </Grid>
        </Grid>,
        container
      )
    })
    expect(container.querySelectorAll('.flex-grid').length).toEqual(4)
    expect(
      container.querySelector('.flex-grid > .flex-grid > .flex-grid')
    ).not.toBeNull()
  })

  it('should make css custom properties', () => {
    act(() => {
      render(
        <Grid
          span={12}
          gap={1}
          direction="row"
          wrap="wrap"
          justify="center"
          alignItems="center"
          alignContent="center"
        />,
        container
      )
    })

    const grid = container.querySelector('.flex-grid')
    expect(grid.style.getPropertyValue('--flex-grid-span')).toBe('12')
    expect(grid.style.getPropertyValue('--flex-grid-gap')).toBe('1')
    expect(grid.style.getPropertyValue('--flex-grid-wrap')).toBe('wrap')
    expect(grid.style.getPropertyValue('--flex-grid-justify')).toBe('center')
    expect(grid.style.getPropertyValue('--flex-grid-align-items')).toBe(
      'center'
    )
    expect(grid.style.getPropertyValue('--flex-grid-align-content')).toBe(
      'center'
    )
  })
})
