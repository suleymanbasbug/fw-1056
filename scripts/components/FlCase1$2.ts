import FlCase1$2Design from 'generated/my-components/FlCase1$2';

export default class FlCase1$2 extends FlCase1$2Design {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
    console.log("a")
  }
}
