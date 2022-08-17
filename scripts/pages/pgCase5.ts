import PgCase5Design from 'generated/pages/pgCase5';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';

export default class PgCase5 extends withDismissAndBackButton(PgCase5Design) {
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.initBackButton(this.router); //Addes a back button to the page headerbar.
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
  }
}
