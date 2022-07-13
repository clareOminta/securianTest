import { GeneralFunctions} from "../Utils/common"


export class Insights {
    get homePage() { return $("//img[2][@alt='Securian Financial Home'")}

    get currentAge() {return $("#current-age")}

    get retireAge() { return $("#retirement-age")}

    get currentIncome() { return "#current-income"}

    get spouseIncome () { return "#spouse-income"}

    get retirementSavingsBalance() { return "#current-total-savings"}

    get currentAnnualSavings() { return "#current-annual-savings"}

    get savingsIncreaseRate() { return "#savings-increase-rate"}

    get calculateResultsSubmit() { return $("//button[contains(text(),'Calculate')]")}

    get resultsText() { return $("#calculator-results-container>h3")}

    get displayAdditionalSecurityFields() { return $("//label[@for='yes-social-benefits']")}

    get hideAdditionalSecurityFields() { return $("#no-social-benefits")}

    get socialSecurityOverride() { return $("#social-security-override")}

    get adjustDefaultValues() { return $("//a[contains(text(),'Adjust default values')]")}

    get retirementDuration() { return $ ("#retirement-duration")}

    get retirementAnnualIncome() { return $ ("#retirement-annual-income")}

    get preRetirementROI() { return $ ("#pre-retirement-roi")}

    get postRetirementROI() { return $ ("#post-retirement-roi")}

    get saveChanges() { return $ ("//button[contains(text(),'Save changes')]")}

    async launchApp() {
        await browser.url("https://www.securian.com/insights-tools/retirement-calculator.html")
        await browser.waitUntil(
            async () =>await browser.execute(()=> document.readyState ==='complete'),
            {timeout : 10000}
        )
    }
    async submitRequiredFields() {
        await GeneralFunctions.setInputValue(await this.currentAge, 40)
        await GeneralFunctions.setInputValue(await this.retireAge, 68)
        await GeneralFunctions.executeScript(this.currentIncome, 100000)
        await GeneralFunctions.executeScript(this.retirementSavingsBalance, 50000)
        await GeneralFunctions.executeScript(this.currentAnnualSavings, 50000)
        await GeneralFunctions.executeScript(this.savingsIncreaseRate, 10)
        await GeneralFunctions.click(await this.calculateResultsSubmit)
        await this.resultsText.waitForDisplayed({timeout: 10000})
        return await this.resultsText.getText()

    }

    async validateAdditionalSecurityField(additionalSecurity) {
        if(additionalSecurity === 'Yes'){
            await GeneralFunctions.click(await this.displayAdditionalSecurityFields)
            await this.socialSecurityOverride.waitForDisplayed( {timeout:10000})
            return await this.socialSecurityOverride.isDisplayed()? true : false
        }else{
            return await this.socialSecurityOverride.isDisplayed()? true : false
        }
    }

    async submitFormWithAllFields() {
        await GeneralFunctions.executeScript(this.spouseIncome,75000)
        return await this.submitRequiredFields()
    }
    async validateAdjustDefaultValues() {
        await GeneralFunctions.click(await this.adjustDefaultValues)
        await GeneralFunctions.setInputValue(await this.retirementDuration, 3)
        await GeneralFunctions.setInputValue(await this.retirementAnnualIncome, 2)
        await GeneralFunctions.setInputValue(await this.preRetirementROI, 8)
        await GeneralFunctions.setInputValue(await this.postRetirementROI, 5)
        await GeneralFunctions.click(await this.saveChanges)
    }


    
}