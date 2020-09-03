import React from "react";
import { Story, Meta } from "@storybook/react";

import styles from "./TextOverflow.module.css";

const TextOverflow = () => (
  <div className={styles.parent}>
    <div>Parent 200px</div>
    <div className={styles.child}>
      Very very veryvery veryvery veryvery veryvery veryvery veryvery veryvery
      veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery
      veryvery veryvery very long child
    </div>
  </div>
);

export default {
  title: "CSS-layout/Text overflow",
  component: TextOverflow,
} as Meta;

const Template: Story = (args) => <TextOverflow {...args} />;

export const OneLevelDeep = Template.bind({});
OneLevelDeep.args = {
  label: "Button",
};
