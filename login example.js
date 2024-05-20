const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginToWebsite(username, password) {

  const driver = await new Builder().forBrowser('chrome').build();

  try {
    
    await driver.get('https://practice.expandtesting.com/login');


    await driver.findElement(By.name('username')).sendKeys(username);
    await driver.findElement(By.name('password')).sendKeys(password, Key.RETURN);

    await loginButton.click();

  
    await driver.wait(until.urlContains('example.com'), 5000);


    console.log('Successfully logged into the example website!');
  } catch (error) {
    console.error('Failed to log into the example website:', error);
  } finally {
  
    await driver.quit();
  }
}


const username = 'practice';
const password = 'SuperSecretPassword!';

loginToWebsite(username, password);