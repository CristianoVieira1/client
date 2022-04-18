import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'
import { parameters } from '../../../.storybook/preview'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  background: 'dark'
}