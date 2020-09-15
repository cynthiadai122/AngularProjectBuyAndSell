import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Listing} from '../types';
import {fakeListings} from '../fake-data';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email: string = '';
  message:string='';
  listing: Listing;


  constructor(
    private route: ActivatedRoute,
    private rounter: Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing=fakeListings.find(listing=> this.listing.id===id);
    this.message=`Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`

  }
sendMessage():void{
alert('your message has been sent!');
this.rounter.navigateByUrl('/listings');


}
}
