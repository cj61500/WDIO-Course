

describe('Navigation Menu', () => {
    it('Get text of all menu items and assert them', async () => {
    //Open URL
        await browser.url('/')
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ]
        const actualLinks = []
        await $('.zak-primary-nav').waitForDisplayed();
        const navLinks = await $$('.zak-primary-nav li[id*=menu]')
        
        for(const link of navLinks){
            actualLinks.push(await link.getText())
        }

        await expect(expectedLinks).toEqual(actualLinks)

    })

})