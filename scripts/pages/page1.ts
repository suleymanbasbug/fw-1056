import Page1Design from 'generated/pages/page1';
import Label from '@smartface/native/ui/label';
import { Route, Router } from '@smartface/router';
import { styleableComponentMixin } from '@smartface/styling-context';
import { i18n } from '@smartface/i18n';
import Button from '@smartface/native/ui/button';
import router from 'routes';

class StyleableButton extends styleableComponentMixin(Button) {}

class StyleableLabel extends styleableComponentMixin(Label) {}

export default class Page1 extends Page1Design {
myButton:StyleableButton;
  private disposeables: (() => void)[] = [];
  lbl: StyleableLabel;
  constructor(private router?: Router, private route?: Route) {
    super({});
    this.lbl = new StyleableLabel();
    console.log('[page1] constructor');
  }

  

  /**
   * @event onShow
   * This event is called when a page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    console.log('[page1] onShow');
    
    
  }
  initButtons(){
      for(let i=1; i<7; i++){
        this.myButton = new StyleableButton({
            text: `${i} case`,
            onPress: function () {
              router.push(`pages/case${i}`)
            },
          });
        
          this.flWrapper.addChild(this.myButton, "myButton", ".sf-button", {
            width: 100,
            height: 50,
            textColor: "#000000",
            backgroundColor: "#00A1F1",
            margin: 5
          });
      }
  }
  /**
   * @event onLoad
   * This event is called once when page is created.
   */
  onLoad() {
    super.onLoad();
    console.log('[page1] onLoad');
    this.headerBar.leftItemEnabled = false;
    this.addChild(this.lbl, 'page1lbl1unique', 'sf-label', (userProps: Record<string, any>) => {
      return { ...userProps };
    });
    this.initButtons();
    
  }

  onHide(): void {
    this.dispose();
  }

  dispose(): void {
    this.disposeables.forEach((item) => item());
  }
}