import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PeopleService } from '../../providers/people-service'; //IMPORT HERE PeopleService

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleService]
})
export class HomePage {

    public people: any[];

    constructor(public peopleService: PeopleService, public navCtrl: NavController) {
        this.loadPeople();
        console.log(this.people);
        
    }

    loadPeople() {
        this.peopleService.load()
        .then(data =>{
            this.people = data;
            console.log(data); //CONSOLE
        });
    }

    itemSelected(person){
        this.navCtrl.push(DetailPage, {
            person: person
        });
    }
}
