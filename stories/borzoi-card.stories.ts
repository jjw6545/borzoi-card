import { html, TemplateResult } from 'lit';
import '../src/borzoi-card.js';

export default {
  title: 'BorzoiCard',
  component: 'borzoi-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <borzoi-card style="--borzoi-card-background-color: ${backgroundColor}" .title=${title}></borzoi-card>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
