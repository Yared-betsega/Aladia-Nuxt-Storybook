import Heading from "@/components/atoms/Heading.vue";

export default {
  title: "Atoms/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    size: { control: { type: "select", options: ["sm", "md", "lg"] } },
  },
};

export const Small = {
  args: {
    text: "Small Heading",
    size: "sm",
  },
};

export const Medium = {
  args: {
    text: "Medium Heading",
    size: "md",
  },
};

export const Large = {
  args: {
    text: "Large Heading",
    size: "lg",
  },
};
