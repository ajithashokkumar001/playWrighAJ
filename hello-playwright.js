
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://www.google.com/?gws_rd=ssl
  await page.goto('https://www.google.com/?gws_rd=ssl');
  // Click button:has-text("I agree")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.google.com/?gws_rd=ssl' }*/),
    page.locator('button:has-text("I agree")').click()
  ]);
  // Click [aria-label="Search"]
  await page.locator('[aria-label="Search"]').click();
  // Press CapsLock
  await page.locator('[aria-label="Search"]').press('CapsLock');
  // Fill [aria-label="Search"]
  await page.locator('[aria-label="Search"]').fill('AJITH ASHOKKUMAR');
  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.google.com/search?q=AJITH+ASHOKKUMAR&source=hp&ei=RQmKYsTCH8-H8gL7jaq4DA&iflsig=AJiK0e8AAAAAYooXVfiwuqVDB3HZ4kRVIXLvoFKFFIX0&ved=0ahUKEwiE-eOf7PL3AhXPg1wKHfuGCscQ4dUDCAo&uact=5&oq=AJITH+ASHOKKUMAR&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEB4QCBANEIsDOg4IABCPARDqAhCMAxDlAjoUCC4QjwEQxwEQrwEQ6gIQjAMQ5QI6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6CAguELEDEIMBOgsILhCABBCxAxDUAjoLCC4QgAQQsQMQgwE6BQgAEIAEOg4ILhCABBCxAxDHARDRAzoFCC4QgAQ6CAguEIAEELEDOggIABCABBCxAzoOCC4QgAQQsQMQgwEQ1AI6BAgAEAo6BAguEAo6BggAEB4QFjoJCAAQHhAWEIsDOgcIABANEIsDUNMEWJIQYMoTaAFwAHgAgAGqAogB2xGSAQUyLjkuM5gBAKABAbABCrgBAw&sclient=gws-wiz' }*/),
    page.locator('[aria-label="Search"]').press('Enter')
  ]);
  // Click text=Wₒᵣd ₛₕₐₖₑᵣ (@ajith.ashokkumar) • Instagram photos ...
  await page.locator('text=Wₒᵣd ₛₕₐₖₑᵣ (@ajith.ashokkumar) • Instagram photos ...').click();
  // assert.equal(page.url(), 'https://www.instagram.com/ajith.ashokkumar/?hl=en');
  
  // ---------------------
  await context.close();
  await browser.close();
})();