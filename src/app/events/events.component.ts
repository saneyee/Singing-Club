import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
    providers: [EventService]
})

export class EventsComponent implements OnInit {
    events: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;

    constructor(private router: Router, private eventService: EventService) {}

    ngOnInit(){
        this.events = this.eventService.getEvents();
    }
    goToDetailPage(clickedEvent) {
        this.router.navigate(['events', clickedEvent.$key]);
    };

}
