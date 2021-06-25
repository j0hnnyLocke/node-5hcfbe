import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  tablica = [
    {
      id: 1,
      nazwa:
        'Czy w ciągu ostatnich 30 dni miała Pani/miał Pan dodatni wynik testu genetycznego lub antygenowego w kierunku wirusa SARS-CoV-2?',
      odpowiedz: ''
    },
    {
      id: 2,
      nazwa:
        'Czy w ciągu ostatnich 14 dni miała Pani/miał Pan bliski kontakt lub mieszka z osobą, która uzyskała dodatni wynik testu genetycznego lub antygenowego w kierunku wirusa SARSCoV-2 lub mieszka osobą, która miała w tym okresie objawy COVID-19?',
      odpowiedz: ''
    },
    {
      id: 3,
      nazwa:
        'Czy w ciągu ostatnich 14 dni miała Pani/miał Pan podwyższoną temperaturę ciała lub gorączkę?',
      odpowiedz: ''
    },
    {
      id: 4,
      nazwa:
        'Czy w ciągu ostatnich 14 dni występował u Pani/Pana nowy, utrzymujący się kaszel lub nasilenie kaszlu przewlekłego z powodu rozpoznanej choroby przewlekłej?',
      odpowiedz: ''
    },
    {
      id: 5,
      nazwa:
        'Czy Pani/Pan czuje się dzisiaj przeziębiony lub ma biegunkę, wymioty?',
      odpowiedz: ''
    }
  ];
}
