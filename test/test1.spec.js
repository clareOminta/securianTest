import { Insights } from '../pages/Insights.page'

const insightsObj = new Insights()


describe('submit the data', () => {

    beforeEach(async () => {
        await insightsObj.launchApp()
    })

    it('Additional Social Security fields should hide ', async () => {
        const hideFields = await insightsObj.validateAdditionalSecurityField('No')
        expect(hideFields).toBe(false)
    })


    it('Additional Social Security fields should display ', async () => {
        const displayFields = await insightsObj.validateAdditionalSecurityField('Yes')
        expect(displayFields).toBe(true)
        
    })

    

})