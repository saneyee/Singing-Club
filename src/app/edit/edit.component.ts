import { Component, Input } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [EventService]
})
export class EditComponent {

    @Input() selectedEvent;

    constructor(private eventService: EventService) { }

    beginUpdatingEvent(eventToUpdate){
      this.eventService.updateEvent(eventToUpdate);
    }

    beginDeletingEvent(eventToDelete){
    if(confirm("Are you sure you want to delete this event from the inventory?")){
      this.eventService.deleteEvent(eventToDelete);
    }
  }

}