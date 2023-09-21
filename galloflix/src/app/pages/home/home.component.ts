import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:MovieApiService) { }

   bannerResult: any = [];
   trendingMovieResult: any = [];

  ngOnInit(): void{
    this.bannerData();
    this.trendingData();
  }

  //Bnner Data
  bannerData(){
    this.service.bannerApiData().subscribe((result)=> {
      this.bannerResult = result.results;
    });
  }

    //Trending Data
    trendingData() {
      this.service.trendingMovieApiData().subscribe((result) =>{
        this.trendingMovieResult = result.results;
      });
    }
}



