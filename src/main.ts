import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));



  //sample code for javascript examples
  //demo for call function

  var obj={num:2};

  var addToThis= function(a,b,c){
    return this.num+a+b+c;
  }

  console.log("bind demo:"+ addToThis.call(obj,2,3,4));
  //demo for apply function

var numbers= [2,3,4];

console.log("apply demo :"+addToThis.apply(obj,numbers));

  //demo for bind function

  var bound=addToThis.bind(obj);
  console.log(bound(2,3,4));