import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DetailmodalComponent } from '../detailmodal/detailmodal.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isloading = true;
  coinType: any[] = [
    { coin_syb: 'BTC'},
    { coin_syb: 'BCH'},
    { coin_syb: 'LTC'},
    { coin_syb: 'USDT'},
  ];
  coinInfo: any[] = [];


  constructor(
    private apiService: ApiService,
    public matDialog: MatDialog
  ) {
    this.getCoinInfo();
  }

  ngOnInit() {
  }

  getCoinInfo() {
    for ( const coin of this.coinType ) {
      this.apiService.getCoinInfo(coin.coin_syb).subscribe( data => {
        this.coinInfo.push(data);
        if (this.coinType.length == this.coinInfo.length) {
          this.isloading = false;
          this.coinInfo.sort( (a, b) => {
            if (a.coin_name < b.coin_name) {
              return -1;
            }else if (a.coin_name > b.coin_name) {
              return 1;
            }else {
              return 0;
            }
          })
        };
      })
    };
  }

  coinDetail(coin){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig .id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = coin;


    const modalDialog = this.matDialog.open(DetailmodalComponent, dialogConfig);
  }


}
