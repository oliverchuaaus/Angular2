import { Component } from '@angular/core';
import { Entry } from './Entry';

@Component({
    selector: 'entry-form',
    template: `
  Add an Entry:

  <div>
    Title: <input #title> 
  </div>
  <div>
    Link: <input #link> 
  </div>  
  <div>
    <button (click)="submitEntry(title, link)">Submit</button> 
  </div>  

  <hr/>
  <div>Entries:<div>
  <entry-item [entry]="entry"  *ngFor="let entry of sortedEntryList()"></entry-item>
  `
})
export class EntryFormComponent {
    //need to  initialise, otherwise undefined
    entryList: Entry[] = [];

    submitEntry(title: HTMLInputElement, link: HTMLInputElement) {
        this.entryList.push(new Entry(title.value, link.value));
        //this to pass element, so can be reset to empty string. 
        title.value="";
        link.value="";
    }

    sortedEntryList():Entry[]{
        return this.entryList.sort( (a, b) => b.votes - a.votes);
    }
}


