// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'taro-cover-view'
})
export class CoverView {
  componentDidLoad () {
    console.error('H5 暂不支持 CoverView 组件！')
  }

  render () {
    return (
      <Host />
    )
  }
}
