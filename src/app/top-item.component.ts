import { Component, Input, OnInit, ChangeDetectionStrategy, enableProdMode } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Topitem, TopitemService } from './top-item.service';
enableProdMode();
export class ShopItem{
	myItem: Topitem;
	itemNumber: number=1;
	setItem(Topitem: Topitem){
		this.myItem=Topitem;
	}
	getItem(){
		return this.myItem;
	}
}

@Component({
	changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-top-item',
  templateUrl: './top-item.component.html',
  styleUrls: ['./top-item.component.css'],
  providers: [TopitemService]
})
export class TopItemComponent implements OnInit {
  selectedItem: Topitem;
  Items: Topitem[];
  categories: string[]=[];
  Shoplist: ShopItem[]=[];
  Shopitem: ShopItem;
  priceItems: Topitem[];
  cateItems: Topitem[];
  summary: number;

  CreateShow(Category: string){
		//console.log(Category);
		this.cateItems=this.Items.filter(Item=>Item.category===Category);
		console.log(this.Items);
		console.log(this.categories);
		//this.categories=[];
	}
	
  intheshop(item: Topitem){
	for(var i=0;i<this.Shoplist.length; i++){
		var checkitem;
		checkitem= this.Shoplist[i].getItem();
		if(checkitem!=undefined && checkitem.name == item.name){
			return false;
		}
	}
	return true;
  }
 
  shopping(item: Topitem){
	var temp= new ShopItem;
	if(this.intheshop(item)){
		temp.setItem(item);
		this.Shoplist.push(temp);
	}else{
		var target= this.Shoplist.find(x=>x.myItem===item);
		target.itemNumber++;
	}
	this.calTotal();
  }
  calTotal(){
	  var sum=0;
	  for(var i=0; i<this.Shoplist.length; i++){
		sum += (this.Shoplist[i].myItem.price*this.Shoplist[i].itemNumber);
	  }
	  this.summary=sum;
  }
  
  
  constructor(
	private route: ActivatedRoute,
    private router: Router,	 
	private topitemService: TopitemService) {}
  getTopitems(){
	this.topitemService.getTopitems()
		.subscribe(
			
			(result: any) => {
				//let items  = result.Items;
				this.Items = result;
				console.log(result);
				 this.Items.forEach(element => {
					if(this.categories.indexOf(element.category)===-1){
						this.categories.push(element.category);
					}
				});
				console.log(this.categories);
		}
		
		);
	
  }
  ngOnInit() {
	this.getTopitems();
	}	

   private gotoTopitems() {
    let route = ['/topitems'];
    this.router.navigate(route);
  }
}
