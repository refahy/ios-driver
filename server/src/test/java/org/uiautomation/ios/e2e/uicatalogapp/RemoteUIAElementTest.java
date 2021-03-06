package org.uiautomation.ios.e2e.uicatalogapp;

import org.json.JSONObject;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.uiautomation.ios.BaseIOSDriverTest;
import org.uiautomation.ios.SampleApps;
import org.uiautomation.ios.UIAModels.UIAButton;
import org.uiautomation.ios.UIAModels.UIAElement;
import org.uiautomation.ios.UIAModels.UIATableCell;
import org.uiautomation.ios.UIAModels.predicate.AndCriteria;
import org.uiautomation.ios.UIAModels.predicate.Criteria;
import org.uiautomation.ios.UIAModels.predicate.EmptyCriteria;
import org.uiautomation.ios.UIAModels.predicate.NameCriteria;
import org.uiautomation.ios.UIAModels.predicate.TypeCriteria;
import org.uiautomation.ios.client.uiamodels.impl.RemoteIOSDriver;

import java.io.File;
import java.util.List;

public class RemoteUIAElementTest extends BaseIOSDriverTest {

  private RemoteIOSDriver driver;
  private String buttonsName = "Buttons, Various uses of UIButton";
  private Criteria c1 = new TypeCriteria(UIATableCell.class);
  private Criteria c2 = new NameCriteria(buttonsName);
  private Criteria c = new AndCriteria(c1, c2);

  @BeforeClass
  public void startDriver() {
    driver = getDriver(SampleApps.uiCatalogCap());
  }

  @AfterClass
  public void stopDriver() {
    if (driver != null) {
      driver.quit();
    }
  }



  @Test
  public void findElement() {
    UIAElement element = driver.findElement(c);
    Assert.assertEquals(element.getName(), buttonsName);
    Assert.assertNull(element.getLabel());
    Assert.assertNull(element.getValue());
  }

  @Test
  public void logElementTreeNoScreenshot() throws Exception {
    UIAElement element = driver.findElement(c);
    JSONObject tree = element.logElementTree(null, false);
    Assert.assertTrue(tree.has("tree"));
  }

  @Test
  public void logElementTreeRootNoScreenshot() throws Exception {
    JSONObject tree = driver.logElementTree(null, false);
    Assert.assertTrue(tree.has("tree"));
  }

  @Test
  public void logElementTreeWithScreenshot() throws Exception {
    UIAElement element = driver.findElement(c);
    File f = new File("logElementTreeWithScreenshotTmp");
    f.delete();
    JSONObject tree = element.logElementTree(f, true);
    Assert.assertTrue(tree.has("tree"));
    Assert.assertTrue(f.exists());
    f.delete();
  }

  @Test
  public void logElementTreeRootWithScreenshot() throws Exception {
    File f = new File("logElementTreeWithScreenshotTmp");
    f.delete();
    JSONObject tree = driver.logElementTree(f, true);
    Assert.assertTrue(tree.has("tree"));
    Assert.assertTrue(f.exists());
    f.delete();
  }

  // sometimes 29, sometimes 31 depending on the timing.and 33 with ios 6...
  @Test(groups = "broken")
  public void findAllElements() throws InterruptedException {
    List<UIAElement> elements = driver.findElements(new EmptyCriteria());
    Assert.assertTrue(elements.size() > 40);
  }


  @Test
  public void isVisibleTests() {

    WebElement navBar = driver.findElement(By.tagName("UIANavigationBar"));
    Assert.assertTrue(navBar.isDisplayed(), "nav bar");

    List<WebElement> imgs = navBar.findElements(By.className("UIAImage"));

    Assert.assertEquals(imgs.size(), 2, "number of images in the menu");

    for (WebElement el : imgs) {
      Assert.assertFalse(el.isDisplayed(), "image");
    }

    WebElement text = navBar.findElement(By.className("UIAStaticText"));
    Assert.assertTrue(text.isDisplayed(), "nav bar text");


  }

  @Test//(dependsOnMethods ="isVisibleTests")
  public void canOnlyClickVisibleElement() {
    WebElement navBar = driver.findElement(By.tagName("UIANavigationBar"));
    Assert.assertTrue(navBar.isDisplayed(), "nav bar");
    navBar.click();

    List<WebElement> imgs = navBar.findElements(By.className("UIAImage"));

    Assert.assertEquals(imgs.size(), 2, "number of images in the menu");

    for (WebElement el : imgs) {
      Assert.assertFalse(el.isDisplayed(), "image");
      try {
        el.click();
        Assert.fail("click on not visible should throw.");
      } catch (ElementNotVisibleException e) {
        // expected
      }
    }

    WebElement text = navBar.findElement(By.className("UIAStaticText"));
    Assert.assertTrue(text.isDisplayed(), "nav bar text");
    text.click();
  }


  // TODO freynaud find a test for stale.
  @Test(expectedExceptions = StaleElementReferenceException.class, enabled = false)
  public void staleElement() {
    try {
      String name = "Buttons, Various uses of UIButton";
      Criteria c1 = new TypeCriteria(UIATableCell.class);
      Criteria c2 = new NameCriteria(name);
      Criteria c = new AndCriteria(c1, c2);
      UIAElement element = driver.findElement(c);
      // should work.
      // new screen. The element doesn't exist anymore
      element.tap();

      // that doesn't throw. The element isn't visible, but it's still accessible with UIAutomation.
      String s = element.getName();
      Assert.fail("cannot access stale elements");
    } finally {
      UIAButton
          but =
          driver.findElement(
              new AndCriteria(new NameCriteria("Back"), new TypeCriteria(UIAButton.class)));
      but.tap();
    }
  }

}
