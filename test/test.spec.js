
import { Insights } from '../pages/Insights.page'

const insightsObj = new Insights()

describe ('submit the data', () => {

    beforeEach(async () => {
        await insightsObj.launchApp ()
    })

    it ('Validate submit from functionality with Required fields fill in', async () =>{
        await browser.maximizeWindow()
        const result = await insightsObj.submitRequiredFields()
        expect(result).toEqual('Results')

    })

    

    it('User should be able to submit form with all the fields filled in', async() => {
        const result = await insightsObj.submitFormWithAllFields()
        expect(result).toEqual('Results')

    })

    it('User should be able to update default calculator values ', async ()=>{
        await insightsObj.validateAdjustDefaultValues()
    })


})