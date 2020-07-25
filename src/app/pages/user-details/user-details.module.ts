import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { HttpService } from 'src/app/services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService]
})
export class UserDetailsModule { }
