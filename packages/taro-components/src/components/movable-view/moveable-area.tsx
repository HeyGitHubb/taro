// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'taro-moveable-area'
})
export class MoveableArea {
  componentDidLoad () {
    console.error('H5 暂不支持 MoveableArea 组件！')
  }

  render () {
    return (
      <Host />
    )
  }
}
