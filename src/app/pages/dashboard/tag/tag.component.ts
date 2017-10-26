import {Component, OnInit} from '@angular/core';

import {TagService} from '../../../services/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: 'tag.component.html',
  providers: [TagService]
})
export class TagComponent implements OnInit {
  constructor(private _tagService: TagService) {
  }
  tags;
  ngOnInit() {
    this._tagService.getTags().subscribe(data => {
      if (data.success) {
        this.tags = data.tags;
      }
    });

  }

  pageChange(page) {

  }

}
