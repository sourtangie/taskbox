import './SegmentedButton';
import React from 'react';
import {SegmentedButton} from "./SegmentedButton";

export default{
    component: SegmentedButton,
    title: 'Segmented Button'
}

const Template = args => <SegmentedButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: "Default className",
    value: "Default value",
    options:["Default options"],
    onChange: "do nothing",
};
export const Large = Template.bind({});
Large.args = {
    className: "segmented-large",
    value: "Default value",
    options:["Default options"],
    onChange: "do nothing",
    large: true
};
