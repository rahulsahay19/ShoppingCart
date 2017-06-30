import { Component, OnInit } from '@angular/core';
import { MakeService } from "../../services/make.service";

@Component({
    selector: 'app-vehicle-form',
    templateUrl: './vehicle-form.component.html',
    styleUrls: ['./vehicle-form.component.css'],
    providers: [MakeService]
})
export class VehicleFormComponent implements OnInit {

    makes: any[];
    models: any[];
    vehicle: any = {};
    constructor(private makeService: MakeService) { }

    ngOnInit() {
        this.makeService.getMakes().subscribe(makes => {
            this.makes = makes;
            console.log("Makes:-", this.makes);
        });

    }

    onMakeChange() {
        console.log("Vehicle", this.vehicle);
        var selectedMake = this.makes.find(m => m.id == this.vehicle.make);
        this.models = selectedMake ? selectedMake.models : [];
    }

}
