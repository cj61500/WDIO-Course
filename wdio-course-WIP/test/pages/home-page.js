class HomePage{
    async openHomePage(){
        await browser.url('/')
    }
    async openGetStarted(){
        await browser.url('/#get-started')
    }
    async openAbout(){
        await browser.url('/about/')
    }
}

export default new HomePage();