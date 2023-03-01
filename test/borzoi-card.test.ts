import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { BorzoiCard } from '../src/borzoi-card.js';
import '../src/borzoi-card.js';

describe('BorzoiCard', () => {
  let element: BorzoiCard;
  beforeEach(async () => {
    element = await fixture(html`<borzoi-card></borzoi-card>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
