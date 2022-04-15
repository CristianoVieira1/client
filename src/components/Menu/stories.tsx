import { Story, Meta } from '@storybook/react'
import Menu from '.'
import { parameters } from '../../../.storybook/preview'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story = () => <Menu />

Default.parameters = {
  layout: 'fullscreen',
  background: 'dark'
}
