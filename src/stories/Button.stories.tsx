import type { Meta, StoryObj } from "@storybook/react";

import Button from "../common/components/elements/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: { type: "select" },
      option: ["primary", "secondary", "danger", "warning", "outline", "ghost"],
    },
    size: {
      control: { type: "select" },
      option: ["large", "medium", "small"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { text: "Primary" } };

export const Secondary: Story = {
  args: { theme: "secondary", text: "Secondary" },
};

export const Danger: Story = { args: { theme: "danger", text: "Danger" } };

export const Warning: Story = { args: { theme: "warning", text: "Warning" } };

export const Outline: Story = { args: { theme: "outline", text: "Outline" } };

export const Ghost: Story = { args: { theme: "ghost", text: "Ghost" } };

export const LargeSize: Story = {
  render: () => (
    <div className='flex flex-col gap-2'>
      <h1 className='text-left text-xl font-semibold'>Large Size</h1>
      <div className='flex gap-2'>
        <Button text='Primary' />
        <Button theme='secondary' text='Secondary' />
        <Button theme='danger' text='Danger' />
        <Button theme='warning' text='Warning' />
        <Button theme='outline' text='Outline' />
        <Button theme='ghost' text='Ghost' />
      </div>
    </div>
  ),
};

export const MediumSize: Story = {
  render: () => (
    <div className='flex flex-col gap-2'>
      <h1 className='text-left text-xl font-semibold'>Medium Size</h1>
      <div className='flex gap-2'>
        <Button size='medium' text='Primary' />
        <Button theme='secondary' size='medium' text='Secondary' />
        <Button theme='danger' size='medium' text='Danger' />
        <Button theme='warning' size='medium' text='Warning' />
        <Button theme='outline' size='medium' text='Outline' />
        <Button theme='ghost' size='medium' text='Ghost' />
      </div>
    </div>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <div className='flex flex-col gap-2'>
      <h1 className='text-left text-xl font-semibold'>Small Size</h1>
      <div className='flex gap-2'>
        <Button size='small' text='Primary' />
        <Button theme='secondary' size='small' text='Secondary' />
        <Button theme='danger' size='small' text='Danger' />
        <Button theme='warning' size='small' text='Warning' />
        <Button theme='outline' size='small' text='Outline' />
        <Button theme='ghost' size='small' text='Ghost' />
      </div>
    </div>
  ),
};
