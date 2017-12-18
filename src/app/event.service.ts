import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EventService {
  events: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.events = database.list('events');
  }

  getEvents(){
      return this.events;
    }

    addEvent(newEvent: Event) {
    this.events.push(newEvent);
  }

  getEventById(eventId: string){
    return this.database.object('/events/' + eventId);
  }

  updateEvent(localUpdatedEvent){
    var eventEntryInFirebase = this.getEventById(localUpdatedEvent.$key);
    eventEntryInFirebase.update({title: localUpdatedEvent.title,
                                location: localUpdatedEvent.location,
                                trainer: localUpdatedEvent.trainer});
  }
}
