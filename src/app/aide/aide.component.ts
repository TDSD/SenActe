import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.scss']
})
export class AideComponent implements OnInit {

  
  collapseOne: string = '#74D0F1';
  collapsetwo: string = '#EFEFEF';
  collapseThree: string = '#EFEFEF';
  linkcolor: string = 'white';
  linkcolortwo: string = '#318CE7';
  linkcolorThree: string = '#318CE7';
  iconcolor: string = 'green';
  iconcolortwo: string = 'gray';
  iconcolorThree: string = 'gray';
  
  constructor() { }

  onClick():void {
    if(this.collapseOne === '#74D0F1') {
      this.collapseOne = '#74D0F1';
      this.collapsetwo ='#EFEFEF';
      this.collapseThree ='#EFEFEF';
      this.linkcolor='white';
      this.linkcolortwo='#318CE7';
      this.linkcolorThree='#318CE7';
      this.iconcolor = 'green';
      this.iconcolortwo = 'gray';
      this.iconcolorThree = 'gray';
    } 
    else{
      this.collapseOne ='#74D0F1';
      this.collapsetwo ='#EFEFEF';
      this.collapseThree ='#EFEFEF';
      this.linkcolor='white';
      this.linkcolortwo='#318CE7';
      this.linkcolorThree='#318CE7';
      this.iconcolor = 'green';
      this.iconcolortwo = 'gray';
      this.iconcolorThree = 'gray';
    }
}

onClicktwo():void {
  if(this.collapsetwo === '#74D0F1') {
    this.collapsetwo = '#74D0F1';
    this.collapseOne ='#EFEFEF';
    this.collapseThree ='#EFEFEF';
    this.linkcolortwo = 'white';
    this.linkcolor='#318CE7';
    this.linkcolorThree='#318CE7';
    this.iconcolortwo = 'green';
    this.iconcolor = 'gray';
    this.iconcolorThree = 'gray';
  } 
  else{
    this.collapsetwo ='#74D0F1';
    this.collapseOne ='#EFEFEF';
    this.collapseThree ='#EFEFEF';
    this.linkcolortwo='white';
    this.linkcolor='#318CE7';
    this.linkcolorThree='#318CE7';
    this.iconcolortwo = 'green';
    this.iconcolor = 'gray';
    this.iconcolorThree = 'gray';
  }
}

onClickThree():void {
  if(this.collapseThree === '#74D0F1') {
    this.collapseThree = '#74D0F1';
    this.collapseOne ='#EFEFEF';
    this.collapsetwo ='#EFEFEF';
    this.linkcolorThree = 'white';
    this.linkcolor='#318CE7';
    this.linkcolortwo='#318CE7';
    this.iconcolorThree = 'green';
    this.iconcolor = 'gray';
    this.iconcolortwo = 'gray';
  } 
  else{
    this.collapseThree ='#74D0F1';
    this.collapseOne ='#EFEFEF';
    this.collapsetwo ='#EFEFEF';
    this.linkcolorThree='white';
    this.linkcolor='#318CE7';
    this.linkcolortwo='#318CE7';
    this.iconcolorThree = 'green';
    this.iconcolor = 'gray';
    this.iconcolortwo = 'gray';
  }
}
  ngOnInit(): void {
  }

}
