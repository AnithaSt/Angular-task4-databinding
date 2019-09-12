import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';
import { StringComponent } from './string/string.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    OnewayComponent,
    TwowayComponent,
    StringComponent,
    PropertyBindingComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'string'},
      {path:'string',component:StringComponent},
      {path:'property-binding',component:PropertyBindingComponent},
      {path:'event',component:EventComponent},
      {path:'oneway',component:OnewayComponent},
      {path:'twoway',component:TwowayComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
