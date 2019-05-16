describe('testing angular.io navigation', function () {

    beforeAll(function () {
        browser.driver.manage().window().maximize();
    });

    beforeEach(function () {
        var potato = "https://angular.io/";
        browser.get(potato);
    });

    // should open quickstart page when clicked on "Get Started" button
    // using xpath locator finding an anchor element with "Get Started" text 
    it('should open quickstart page', function () {
        element(by.xpath('//a[text() = "Get Started"]')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/guide/quickstart');
    });

    // should go to home page when clicked on "Home" button
    // using css locator, which finds element img with alt attribute = "Home"
    it('should go to home page', function () {
        element(by.css('img[alt="Home"]')).click();
        expect(browser.getTitle()).toBe('Angular');
    });

    /** should open architecture overview page from "Get Started" page
     * by clicking left vertical menu items: "Fundamentals", "Architecture", "Architecture Overview"
     * using locators: buttonText, cssContainingText 
     **/ 
    it('should open architecture overview page', function () {
        element(by.xpath('//a[text() = "Get Started"]')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/guide/quickstart');

        element(by.buttonText('Fundamentals')).click();
        element(by.buttonText('Architecture')).click();
        element(by.cssContainingText('.vertical-menu-item.level-3', 'Architecture Overview')).click();

        expect(browser.getCurrentUrl()).toBe('https://angular.io/guide/architecture');
    });
   
    /**should check the "Search" function 
     * by key "protractor"
     * expecting the result "ng e2e" to show up
    */
   it('should check search function', function(){
       element(by.xpath('//input[@placeholder="Search"]')).click();
       element(by.xpath('//input[@placeholder="Search"]')).sendKeys('protractor');
       browser.actions().sendKeys(protractor.Key.ENTER).perform();
       browser.sleep(1000);
       expect(element(by.xpath('//span[text() = "ng e2e"]')).isPresent()).toBe(true);
   });
   
}
   
);
    