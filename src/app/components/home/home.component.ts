import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConvertMoneyService } from '../../services/convertMoney.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      usd: new FormControl('', [Validators.required]),
      eu: new FormControl({ value : '', disabled: true}, [Validators.required])
    });
  }

  ngOnInit() {

  }

  async submitForm() {

    const { usd } = this.myForm.value;
    let valueEU = null;

    try {
      const time = localStorage.getItem('time') ? ((new Date).getTime() - Number(localStorage.getItem('time')) ) : 0;
      if (time && ((((time / 1000) / 60) * 10) < 10)) {
        valueEU = localStorage.getItem('valueEU');
      } else {
        const json = await ConvertMoneyService.getRequest2( usd );
        valueEU = json.rates.EUR;
        localStorage.setItem('time', String((new Date()).getTime()));
        localStorage.setItem('valueEU', valueEU);
      }

      this.myForm.patchValue({
        eu: usd * valueEU
      });

    } catch (e) {
      console.log(e);
    }

  }

}
