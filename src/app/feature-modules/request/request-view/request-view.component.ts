import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/models/user.service';
@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css'],
  providers:[UserService]
})
export class RequestViewComponent implements OnInit {
  types = ['Mr.','Mrs.','Mr.and Mrs.','Ms.','Company'];
  shops = ['Porsche Centre Ahmedabad','Porsche Centre Chandigarh','Porsche Centre Delhi-NCR','Porsche Centre Kochi','Porsche Centre Mumbai'];
   models=['718 Boxter','718 Cayman','911','Panamera','Macan','Cayenne'];
  constructor() { }

  ngOnInit(): void {
  }

}
