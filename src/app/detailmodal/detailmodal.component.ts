import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detailmodal',
  templateUrl: './detailmodal.component.html',
  styleUrls: ['./detailmodal.component.css']
})
export class DetailmodalComponent implements OnInit {

  coinInfo: any;
  coinInfo100: any;
  coinInfo250: any;
  coinInfo5000: any;
  coinInfoSyb: any;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<DetailmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
    console.log('Passed Data', data);
    this.coinInfo = data;
    this.coinInfoSyb = data.coin_id;
    this.getCoinQty();

  }

  ngOnInit() {
  }

  getCoinQty() {
    this.apiService.get100CoinQty(this.coinInfoSyb).subscribe( data => {
      this.coinInfo100 = data.to_quantity;

    })
    this.apiService.get250CoinQty(this.coinInfoSyb).subscribe( data => {
      this.coinInfo250 = data.to_quantity;

    })
    this.apiService.get5KCoinQty(this.coinInfoSyb).subscribe( data => {
      this.coinInfo5000 = data.to_quantity;

    })
  }

    closeModal() {
    this.dialogRef.close();
  }

}
