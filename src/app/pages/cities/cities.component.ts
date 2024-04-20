import { Component } from '@angular/core';

import {NgForOf} from "@angular/common";
import {CityService} from "../../services/city.service";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent {
  public FILE_URL = environment.FILE_URL;
  cityList: any[] = [];
  constructor(private cityService: CityService) {
    this.cityService.getCityListListener().subscribe((response: any) => {
      this.cityList = response;
    });
    this.cityList = this.cityService.getCityList();
  }
}
