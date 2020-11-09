import {Component, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
  ) {}

  public async getLazyComp() {
    this.viewContainerRef.clear();
    const { LazyComponent } = await import('./features/lazy/lazy.component');
    console.log(LazyComponent)
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(LazyComponent)
    );
  }
}
