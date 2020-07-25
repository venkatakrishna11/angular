import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userData: Array<any> = [];
  pageInfo: Array<number> = [];
  selectedPage: number;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getUserData(1);
  }
  getUserData(pageNumber) {
    this.selectedPage = pageNumber;
    const url = `users?page=${pageNumber}`;
    this.http.get(url).subscribe(item => {
      this.userData = item['data'];
      console.log(item);
      this.pageInfo = Array(item['total_pages']);
      console.log(this.pageInfo);
    });
  }
  pageChange(number) {
    this.getUserData(number);
  }
}
