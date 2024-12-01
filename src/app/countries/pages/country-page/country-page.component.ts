import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/contries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;


  constructor(
    private activateRoute: ActivatedRoute,
    private countrieService: CountriesService,
    private router: Router

  ) { }
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countrieService.searchCountrybyAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl('');

      return this.country = country;



      });
  }



}
