const webdriver = require("selenium-webdriver")
const { Browser, By, Key, until } = webdriver
const assert = require("chai").assert

describe("check artist overview", function() {

    let driver = new webdriver
        .Builder()
        .forBrowser(Browser.CHROME)
        .usingServer("http://localhost:4444/wd/hub")
        .build()

    this.timeout(0)

    after(function(done) {
        driver.quit().then(done)
    })

    it("success", async function() {

        // open the index page
        await driver.get("http://localhost:3000/")

        // wait for certain elements so you know the page is loaded
        await driver.wait(until.elementLocated(By.css("h4")))
        await driver.wait(until.elementLocated(By.css(".MuiListItem-root")))
        await driver.wait(until.elementLocated(By.id("filter")))

        // enter "blue" as filter and press ENTER
        await driver.findElement(By.id("filter")).sendKeys("blue", Key.ENTER)

        // wait 1000ms
        await driver.sleep(1000)

        // get all elements of the artists
        let items = await driver.findElements(By.css(".MuiListItem-root"))
        // it should be 4
        assert.equal(items.length, 4)

        const first = items[0]

        const firstTitle = await first.getText()

        // check the first artist
        assert.equal(firstTitle, "Blue Öyster Cult")

        // click first element, will reroute to detail page
        await first.click()

        // wait 1000ms
        await driver.sleep(1000)

        // wait for certain elements so you know the page is loaded
        await driver.wait(until.elementLocated(By.css("h4")))
        const title = await driver.findElement(By.css("h4")).getText()

        // get all elements of the songs
        items = await driver.findElements(By.css(".MuiListItem-root"))
        // it should be 4
        assert.equal(items.length, 4)

        // check the title
        assert.equal(title, `${firstTitle} - ${items.length}  songs`)
    })
})