import homePageSelectors from "../selectors/homePageSelectors"

class HomePageValidators{
    async assertHomeTitleText(){
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    }
    async assertAboutPageURL(){
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/')
    }
    async assertGetStartedURLText(){
        await expect(browser).toHaveUrl(expect.stringContaining('get-started'))
    }
    async assertNOGetStartedURLText(){
        await expect(browser).not.toHaveUrl(expect.stringContaining('get-started'))
    }
    async assertHeadingElementText(){
        await expect(homePageSelectors.HomeHeadingElement).toHaveText('Think different. Make different.')
    }
}

export default new HomePageValidators();