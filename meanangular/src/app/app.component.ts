import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { AppService } from './services/app.service'

import { ɵNgClassImplProvider__POST_R3__ } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
   ngOnInit() {
    console.log('Iniciado app Content')
  }


}
