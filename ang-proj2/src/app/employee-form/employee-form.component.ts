import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  emp:Employee;
  joinDateStr:string;
  errMsg!:string;

  constructor(private empService:EmployeeService,private router:Router) {
    this.emp={id:0,fullName:'',basicPay:0,joinDate:new Date()};
    this.joinDateStr=this.emp.joinDate.toISOString().substring(0,10);
  }

  ngOnInit(): void {
  }

  save(){
    this.emp.joinDate=new Date(this.joinDateStr);
    this.empService.add(this.emp).subscribe({
      next: data => this.router.navigateByUrl("/list"),
      error: err => {console.error(err);this.errMsg="Unable to save data";}
    })
  }
}
