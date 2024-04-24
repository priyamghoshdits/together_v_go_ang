import {CommonModule, NgForOf, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {environment} from "../../../environments/environment";
import {CityService} from "../../services/city.service";
import {ServicesService} from "../../services/services.service";
import {TestimonialService} from "../../services/testimonial.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,CommonModule,NgbModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public FILE_URL = environment.FILE_URL;
  starRating = 4;
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  cityList: any[] = [];
  serviceList: any[] = [];
  testimonialList: any[] = [];
  constructor(private cityService: CityService, private servicesService:ServicesService
              , private testimonialService: TestimonialService) {
    this.cityService.getCityListListener().subscribe((response: any) => {
      this.cityList = response;
    });
    this.cityList = this.cityService.getCityList();
    this.servicesService.getServiceListListener().subscribe((response: any) => {
      this.serviceList = response;
    });
    this.serviceList = this.servicesService.getServiceList();
    this.testimonialService.getTestimonialListListener().subscribe((response: any) => {
      this.testimonialList = response
    });
    this.testimonialList = this.testimonialService.getTestimonial();
  }

}
