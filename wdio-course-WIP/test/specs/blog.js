
describe('Recent Blog Posts', () => {
    it('Get all recent posts, verify the length is >10 and assert the number of posts is 5', async () => {
    //Open URL
        await browser.url('/blog')
        const listOfPosts = await $$('.widget-sidebar-right ul li')
        const verifiedPosts = []
        for(const post of listOfPosts){
            const text = await post.getText();
            await expect(text.length).toBeGreaterThan(10)
        }

        await expect(listOfPosts).toHaveLength(5);
    })

})