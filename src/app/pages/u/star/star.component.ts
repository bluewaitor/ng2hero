import {Component, OnInit} from '@angular/core';
import {StarService} from '../../../services/star.service';

@Component({
  selector: 'star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.scss'],
  providers: [StarService]
})
export class StarComponent implements OnInit {
  stars = [];
  title;
  url;
  constructor(private _starService: StarService) {
  }

  ngOnInit() {
    this.getMyStar();
  }

  addStar(title, url){
    this._starService.addStar(title, url).subscribe(res=>{
      if(res.success) {
        this.getMyStar();
      }
    });
  }

  getMyStar(){
    this._starService.getMyStars().subscribe(res => {
      this.stars = res.stars;
    });
  }

  urlClick(id, i){
    this._starService.patchVisits(id).subscribe(res=>{
      this.stars[i] = res.star;
    });
  }
}
