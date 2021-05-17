describe('First step', () => {
    it('Load website', () => {
        browser.url('https://frontend.staging.geotwin.io');
        browser.pause(15000);
        expect(browser).toHaveUrl('')
    });
});

