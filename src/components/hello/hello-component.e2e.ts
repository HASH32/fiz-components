import { newE2EPage } from '@stencil/core/testing';

describe('hello-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<fiz-hello></fiz-hello>');
    const element = await page.find('fiz-hello');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<fiz-hello></fiz-hello>');
    const component = await page.find('fiz-hello');
    const element = await page.find('fiz-hello >>> span');
    expect(element.textContent).toEqual(`Hello, `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, James Earl Quincy`);
  });
});
