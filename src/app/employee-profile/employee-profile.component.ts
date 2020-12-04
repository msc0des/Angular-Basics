import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  public empid;
  constructor(private route:ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
    //let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id=parseInt(params.get('id'));
      this.empid=id;
    })


  }
  goPrevious(){
    let previousId=this.empid-1;
    this.router.navigate(['/employee-detail',previousId]);
  }
  goNext()
  {
    let nextId=this.empid+1;
    this.router.navigate(['/employee-detail',nextId]);
  }
  gotoEmployeedetail()
  {
    let selectedId=this.empid?this.empid:null;
    //this.router.navigate(['/employee-detail',{id:selectedId}]);
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route})
  }
  showAge(){
    this.router.navigate(['age'],{relativeTo:this.route})
  }

}
