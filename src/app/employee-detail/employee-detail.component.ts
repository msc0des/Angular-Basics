import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees=[];
  public errmsg;
  public selectedId;
  constructor(private _employeeservice:EmployeeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this._employeeservice.getEmployees()
    .subscribe(empdata=>this.employees=empdata,
              error=>this.errmsg=error);
              this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id=parseInt(params.get('id'));
      this.selectedId=id;
    })
  }
  onSelect(emp)
  {
   // this.router.navigate(['/employee-detail',emp.id ]);
   this.router.navigate([emp.id],{relativeTo:this.route})
  }
  isselected(emp)
  {
    return emp.id===this.selectedId;
  }

}
