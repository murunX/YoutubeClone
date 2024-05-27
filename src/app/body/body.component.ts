import { Component, OnInit } from '@angular/core';
import { VideosService} from '../data/mock-data';
import { interest } from '../data/interest';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: []
})
export class BodyComponent implements OnInit {

  interestlist = interest;
  video!: { id: number; banner: string; profileImage: string; title: string; author: string; views: number; date: string; }[];

  constructor(private activatedRoute: ActivatedRoute, private service: VideosService) {}
  ngOnInit(): void {

  }
}




