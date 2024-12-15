import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);


describe('Upload Tests', () => {
    it('Simple upload test', async () => {
    //Open URL
        await browser.url('https://the-internet.herokuapp.com/upload')
        //store test file path
        const filePath = path.join(__dirname, '../data/TestUpload.png')
        
        //upload file
        const remoteFilePath = await browser.uploadFile(filePath)

        //set file path value in input field

        await $("#file-upload").setValue(remoteFilePath);
        await $("#file-submit").click(); //clicks submit

        //assertion
        await expect($('.example h3')).toHaveText('File Uploaded!')
    })


    it('Hidden upload test', async () => {
        //Open URL
            await browser.url('/cart')
            //store test file path
            
            
            const filePath = path.join(__dirname, '../data/TestUpload.png')
            
            //upload file
            const remoteFilePath = await browser.uploadFile(filePath)
    
            // remove hidden class
            await browser.execute(`document.querySelector('#upfile_1').className = ""`)
            //set file path value in input field

            await $("#upfile_1").setValue(remoteFilePath);
            await $("#upload_1").click(); //clicks submit
        
            //assertion
            await expect($('#wfu_messageblock_header_1_label_1')).toHaveText('File TestUpload.png uploaded successfully')
        })

})