import homePage from "../pages/home-page"
import homePageSelectors from "../selectors/homePageSelectors"
import homePageValidators from "../validators/homePageValidators"

describe('Home', () => {
    it('Open URL & assert title', async () => {
        await homePage.openHomePage()    
        await homePageValidators.assertHomeTitleText()
    })
    it('Open About Page & assert URL', async () => {
        await homePage.openAbout()
        await homePageValidators.assertAboutPageURL()
})
    it('Click Get Started Button & assert URL contains get-started text', async () => {
        await homePage.openHomePage() 
        await homePageSelectors.btnGetStarted.click();
        await homePageValidators.assertGetStartedURLText()
})    

    it('Click Logo Button & assert URL DOES NOT CONTAIN get-started text', async () => {
        await homePage.openGetStarted() 
        await homePageSelectors.sdetULogo.click();
        await homePageValidators.assertNOGetStartedURLText()
})

    it('Find Header Element & assert text', async () => {
        await homePage.openHomePage()
        await homePageValidators.assertHeadingElementText()
})
                    
})