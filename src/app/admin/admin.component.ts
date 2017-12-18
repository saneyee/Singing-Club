import { Component} from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [EventService]
})
export class AdminComponent {

    constructor(private eventService: EventService) { }

    submitForm(title: string, eventlocation: string, trainer: string) {
      const newEvent: Event = new Event(title, eventlocation, trainer);
      this.eventService.addEvent(newEvent);
    }

}
