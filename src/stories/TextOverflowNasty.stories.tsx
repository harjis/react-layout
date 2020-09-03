import React from "react";
import { Story, Meta } from "@storybook/react";

import styles from "./TextOverflowNested.module.css";

const TextOverflow = () => (
  <div className={styles.parent}>
    <div>
      Idea here is to see that text-overflow: ellipsis needs to be added to the
      overflowing div which has the text
      <br />
      Parent 100%
    </div>
    <div className={styles.child}>
      <div>
        Very very veryvery veryvery veryvery veryvery veryvery veryvery veryvery
        veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery
        veryvery veryvery very long child
      </div>
      <div>
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

export const TextOverflowNasty = Template.bind({});
TextOverflowNasty.args = {
  label: "Button",
};
