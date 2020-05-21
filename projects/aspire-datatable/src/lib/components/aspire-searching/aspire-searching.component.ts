import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'aspire-searching',
  templateUrl: './aspire-searching.component.html',
  styleUrls: ['./aspire-searching.component.css']
})

export class AspireSearchingComponent implements OnInit {
  @Input() records: any[] = [];
  @Input() searchingStyle: string = "";
  @Input() noRecordFoundMessage: string = "";
  @Output() getSearchRecords: EventEmitter<any> = new EventEmitter<any>();
  @Output() getNoDataFoundMessage: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  noDataFoundMessage = 'No Data Found'
  totalRecords = []

  ngOnInit() {
    this.totalRecords = this.records;
  }

  filterResult(arr){
    var filterDuplicateSearch = [];
    for(var i = 0; i < arr.length; i++){
        if(filterDuplicateSearch.indexOf(arr[i]) == -1){
          filterDuplicateSearch.push(arr[i]);
        }
    }
    return filterDuplicateSearch;
  }

  isSearchClear(event: string){
    var searchItem = event;
    var filterRecord = [];
    if(searchItem === ''){
      this.records = this.totalRecords;
      this.noDataFoundMessage = ""
      this.getSearchRecords.emit(this.records);
      this.getNoDataFoundMessage.emit(this.noDataFoundMessage);
    }
    else{
      if(this.records && this.records.length){
        if(searchItem.length > 3){
          this.records.filter(function searchingFilter(element, index, array){
            Object.values(element).forEach(objectValues=>{
              if(objectValues.toString().trim().includes(searchItem.trim())){
                filterRecord.push(index)
              }
            })
          });
          if(filterRecord && filterRecord.length){
            var  filnalSearchIndexes= this.filterResult(filterRecord);
            var filnalSearchElement = [];
            this.records.forEach((record,index) => {
              if(filnalSearchIndexes && filnalSearchIndexes.length){
                filnalSearchIndexes.forEach(id=>{
                  if(index === id){
                    filnalSearchElement.push(record);
                  }
                });  
              }
              else{
                this.noDataFoundMessage = this.noRecordFoundMessage
                this.getNoDataFoundMessage.emit(this.noDataFoundMessage);            
                this.records = []
              }
            });
      
            if(filnalSearchElement.length){
              this.records = filnalSearchElement;
            }
            else {
              this.noDataFoundMessage = this.noRecordFoundMessage
              this.getNoDataFoundMessage.emit(this.noDataFoundMessage);
              this.records = []
            }
          }         
          else{
            this.noDataFoundMessage = this.noRecordFoundMessage
            this.getNoDataFoundMessage.emit(this.noDataFoundMessage);
            this.records = []
          }    
        }
        else{
          this.records = this.totalRecords;
        }
      }
      else{
        this.noDataFoundMessage = this.noRecordFoundMessage
        this.getNoDataFoundMessage.emit(this.noDataFoundMessage);
      }
    }
    this.getSearchRecords.emit(this.records);
  }
}
