import { newE2EPage } from '@stencil/core/testing';

describe('time-ago-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<fiz-time-ago></fiz-time-ago>');
    const element = await page.find('fiz-time-ago');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<fiz-time-ago></fiz-time-ago>');
    const component = await page.find('fiz-time-ago');
    const element = await page.find('fiz-time-ago >>> span');
    expect(element.textContent).toEqual(`less than a minute ago`);
    const today = new Date();

    component.setProperty('dateObj', new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()));
    await page.waitForChanges();
    expect(element.textContent).toEqual(`about 1 month ago`);
  });
});
