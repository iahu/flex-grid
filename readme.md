# a flex grid UI component

a flex based grid system.

## how to use

```tsx
const Basic = (): JSX.Element => {
  return (
    <Grid className="demo">
      <Grid className="box" span={12}>
        span=12
      </Grid>
      <Grid className="box" span={3}>
        span=3
      </Grid>
      <Grid className="box" span={3}>
        span=3
      </Grid>
      <Grid className="box" span={3}>
        span=3
      </Grid>
      <Grid className="box" span={3}>
        span=3
      </Grid>
    </Grid>
  );
};

export default Base;
```

[more exmaples](./demo)

## API

### Grid

| 参数                            | 说明                                       | 类型                                                                                          | 默认值       |
| ------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------ |
| prefixCls                       | className 前缀                             | `string`                                                                                      | -            |
| component                       | 根元素的组件                               | `ReactType`                                                                                   | 'div'        |
| direction                       | flex-direction 映射                        | 'row' \| 'row-reverse' \| 'column' \| 'column-reverse'                                        | 'row'        |
| justify                         | justify-content 映射                       | 'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly' | -            |
| alignItems                      | align-items 映射                           | 'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'                             | 'flex-start' |
| alignContent                    | align-conent 映射                          | 'stretch' \| 'center' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around';     | -            |
| wrap                            | flex-wrap 映射                             | 'nowrap' \| 'wrap' \| 'wrap-reverse'                                                          | 'wrap'       |
| span                            | 宽度，1 个单位=`8px`                       | `number`                                                                                      | -            |
| gap                             | 子元素的间距，可能为 css-grid `gap` 的映射 | `number` \| `string`                                                                          | -            |
| container                       | 是否设置为容器元素，宽度为 100%            | `boolean`                                                                                     | `false`      |
| collapse<sup>[1](#注意：)</sup> | 合并 gap                                   | `boolean`                                                                                     | `false`      |

## 注意：

[1]collapse：此功能仅在设置了 `container` 且浏览器支持 [`gap`](https://caniuse.com/?search=gap) 属性的情况下生效。嵌套使用不会继承。
