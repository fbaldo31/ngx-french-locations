import { City } from 'projects/ngx-french-location/src/lib/cities';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { County } from 'projects/ngx-french-location/src/lib/county';
import { NgxFrenchLocationService } from 'projects/ngx-french-location/src/public-api';
import { District } from 'projects/ngx-french-location/src/lib/district';

@Component({
  selector: 'lib-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-french-locations examples';
  selectLabel = 'Select';
  inputName =  'location';
  counties: County[] = [];
  county: string;
  cities: City[];
  city: string;
  district: District;
  postalCodes: string;
  filteredOptions: Observable<County[]>;

  constructor(private api: NgxFrenchLocationService) { }

  ngOnInit() {
    // First fetch the counties list
    this.api.getCounties().subscribe(
        (response: any) => this.counties = response,
        (error) => console.error(error)
    );
  }

  getCities() {
    console.log(this.county);
    this.api.getCitiesByCounty(this.county).subscribe((cities: City[]) => this.cities = cities);
    this.api.getDistrics(this.counties.find(c => c.code === this.county).codeRegion)
      .subscribe((district: District) => this.district = district);
  }

  displayPostalCodes() {
    const city = this.cities.find(c => +c.code === +this.city);
    console.log(city);
    this.postalCodes = city.codesPostaux.toString();
  }
}
