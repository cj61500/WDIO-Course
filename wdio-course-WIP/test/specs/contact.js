import { $, expect, browser } from "@wdio/globals";


describe('Contact Message Test', () => {
    it('Send contact message and verify the success modal', async () => {
    //Open URL
        await browser.url('https://practice.sdetunicorns.com/contact/')
        const enterName = await $('.contact-name input')
        const enterEmail = await $('.contact-email input')
        const enterPhone = await $('.contact-phone input')
        const enterMessage = await $('.contact-message textarea')
        const successMessage = await $('.everest-forms')
        enterName.setValue('Charles Gill Jr')
        enterEmail.setValue('test@test.com')
        enterPhone.setValue('2222222222')
        enterMessage.setValue('This is a test message!')
        await $('.evf-submit').click()
        await expect(successMessage).toHaveText("Thanks for contacting us! We will be in touch with you shortly");
        
    })

})