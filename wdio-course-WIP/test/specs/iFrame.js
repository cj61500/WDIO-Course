

describe('iFrame', () => {
    it('Working with iFrames', async () => {
    //Open URL
        await browser.url('/iframe-sample')

        //access iframe
        const iframe = await $('#advanced_iframe')
        await browser.switchFrame(iframe) //switch to iframe
        const logo = await $$('.hfe-site-logo')[0]
        await logo.waitForDisplayed()
        //verify logo exists
        await expect(logo).toExist();

        //verify page title
        await browser.switchFrame(null) //switch out of iframe

        await expect($('.zak-page-header__title h1')).toHaveText('IFrame Sample')
    })

})