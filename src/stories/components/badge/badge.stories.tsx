import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";
import Badge, { TBadgeProps } from "./badge";
import { EUiVariant } from "~/core/types/ui-variants.type";

type Story = StoryObj<TBadgeProps>;

export const Default: Story = {
  args: {
    children: "some text",
    variant: EUiVariant.Danger,
  },
};

export default {
  title: "Components/Badge",
  tags: ["autodocs"],
  render: (props) => <Badge {...props} />,
} as Meta<ComponentProps<typeof Badge>>;
