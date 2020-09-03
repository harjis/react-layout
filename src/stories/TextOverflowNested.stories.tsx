import React from "react";
import { Story, Meta } from "@storybook/react";

import styles from "./TextOverflowNested.module.css";

const TextOverflow = () => (
  <div className={styles.parent}>
    <div>Parent 100%</div>
    <div>
      <div className={styles.child}>
        Very very veryvery veryvery veryvery veryvery veryvery veryvery veryvery
        veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery
        veryvery veryvery very long child
      </div>
      <div className={styles.child}>
        Very very veryvery veryvery veryvery veryvery veryvery veryvery veryvery
        veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery
        veryvery veryvery very long child
      </div>
    </div>
  </div>
);

export default {
  title: "CSS-layout/Text overflow",
  component: TextOverflow,
} as Meta;

const Template: Story = (args) => <TextOverflow {...args} />;

export const NestedChild = Template.bind({});
NestedChild.args = {
  label: "Button",
};
