import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username ='';
  password='';
  password2='';
  user ={};
  constructor(private router:Router,
              private service:UserServiceClient) {

  }

  register(username, password, password2) {
    if(username === ''){
      alert('Please enter username')
    }else{
        this.service.findUserByUsername(username)
          .then(user =>{
            if(user !== null){
              alert("Username Already Taken!!!");
            }
            else{
              if(password === ''){
                alert('Please enter password');
              }else{
                if(password2 === ''){
                  alert('Please reconfirm password');
                }else if(password !== password2){
                  alert("Passwords Don't Match");
                }else {
                  this.service
                    .createUser(username, password)
                    .then(() => {
                      alert("You are registered successfully");
                      this.router.navigate(['profile'])});
                }
              }
            }
          })
    }



  }


  ngOnInit() {
  }

}
