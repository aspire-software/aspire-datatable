import { Component, OnInit, Input } from '@angular/core';
import { SortServiceService } from '../../shared/services/sort-service.service';
import * as moment from 'moment';
import { dataTypes } from '../../constants/constants';

@Component({
  selector: 'lib-aspire-datatable',
  templateUrl: './aspire-datatable.component.html',
  styleUrls: ['./aspire-datatable.component.css']
})
export class AspireDatatableComponent implements OnInit {
  @Input() headers: any[] = [];
  @Input() records: any[] = [];
  @Input() tableStyle: string = 'table table-striped table-bordered';
  @Input() headerStyle: string = 'thead-light';
  @Input() tableDiv: string = 'table-responsive-md';
  @Input() tableRowStyle: string = '';
  @Input() tableDataStyle: string = '';
  @Input() collectionSize: number;
  @Input() pageSize: number;
  @Input() page: number;
  @Input() ellipses: boolean;
  @Input() maxSize: number;
  @Input() directionLinks: boolean;
  @Input() boundaryLinks: boolean;
  @Input() allowSorting: boolean;
  @Input() allowSearch: boolean;
  @Input() dateFormat: string;
  @Input() searchingStyle: string = "";
  @Input() noRecordFoundMessage: string = "";
  // searchForm = this.formBuilder.group({
  //   search: [null],
  // });
  noDataFoundMessage = ''
  // totalRecords = []
  // @Input() paginationClass: string = 'd-flex justify-content-end';
  // @Input() ariaLabel: string = 'Default pagination';
  constructor(private sortServiceService: SortServiceService) { }

  ngOnInit(): void {
    this.filterDate();
    // this.totalRecords = this.records;
    // this.checkSearch();
  }
  getRowSpan(){
    return this.headers.length;
  } 

  sort(item, event){
    this.records = this.sortServiceService.sorting(item.field,this.records,event,item.type);
  }

  filterDate(){
    if(this.headers){
      this.headers.forEach(header => {
        if(header.type === dataTypes.date){
          this.records.forEach(element => {
            var date = moment(new Date(element.date)).format(this.dateFormat)
            element[header.type] = date
          });
        }
      });
    }
  }

  // checkSearch(){
  //   this.searchForm = this.formBuilder.group({
  //     search: [''],
  //   }); 
  // }

  // search(){
  //   var searchItem = this.searchForm.value.search;
  //   var filterRecord = [];
  //   if(searchItem === ''){
  //     console.warn("search is null");
  //     this.records = this.totalRecords;
  //   }
  //   else{
  //     if(this.records && this.records.length){
  //       this.records.filter(function searchingFilter(element, index, array){
  //         Object.values(element).forEach(objectValues=>{
  //           if(objectValues.toString().includes(searchItem)){
  //             filterRecord.push(index)
  //           }
  //         })
  //       });
  //       if(filterRecord && filterRecord.length){
  //         var  filnalSearchIndexes= this.filterResult(filterRecord);
  //         var filnalSearchElement = [];
  //         this.records.forEach((record,index) => {
  //           if(filnalSearchIndexes && filnalSearchIndexes.length){
  //             filnalSearchIndexes.forEach(id=>{
  //               if(index === id){
  //                 filnalSearchElement.push(record);
  //               }
  //             });  
  //           }
  //           else{
  //             console.warn("records inside filnalSearchIndexes No data")
  //           }
  //         });
    
  //         if(filnalSearchElement.length){
  //           this.records = filnalSearchElement;
  //         }
  //         else {
  //           this.records = []
  //           console.warn("error Message")
  //         }
  //       }         
  //       else{
  //         console.warn("filnalSearchIndexes No data")          
  //       }    

  //     }
  //     else{
  //       console.warn("No Data present")
  //     }
  //   }

  // }

  // filterResult(arr){
  //   var filterDuplicateSearch = [];
  //   for(var i = 0; i < arr.length; i++){
  //       if(filterDuplicateSearch.indexOf(arr[i]) == -1){
  //         filterDuplicateSearch.push(arr[i]);
  //       }
  //   }
  //   return filterDuplicateSearch;
  // }

  // isSearchClear(event: string){
  //   var searchItem = event;
  //   var filterRecord = [];
  //   if(searchItem === ''){
  //     this.noDataFoundMessage = ""
  //     this.records = this.totalRecords;
  //   }
  //   else{
  //     if(this.records && this.records.length){
  //       this.records.filter(function searchingFilter(element, index, array){
  //         Object.values(element).forEach(objectValues=>{
  //           if(objectValues.toString().includes(searchItem)){
  //             filterRecord.push(index)
  //           }
  //         })
  //       });
  //       if(filterRecord && filterRecord.length){
  //         var  filnalSearchIndexes= this.filterResult(filterRecord);
  //         var filnalSearchElement = [];
  //         this.records.forEach((record,index) => {
  //           if(filnalSearchIndexes && filnalSearchIndexes.length){
  //             filnalSearchIndexes.forEach(id=>{
  //               if(index === id){
  //                 filnalSearchElement.push(record);
  //               }
  //             });  
  //           }
  //           else{
  //             this.noDataFoundMessage = " No Data Found "
  //             console.warn("records inside filnalSearchIndexes No data")
  //           }
  //         });
    
  //         if(filnalSearchElement.length){
  //           this.records = filnalSearchElement;
  //         }
  //         else {
  //           this.noDataFoundMessage = " No Data Found "            
  //           console.warn("error Message")
  //         }
  //       }         
  //       else{
  //         this.noDataFoundMessage = " No Data Found "
  //         console.warn("filnalSearchIndexes No data")          
  //       }    

  //     }
  //     else{
  //       this.noDataFoundMessage = " No Data Found "
  //       console.warn("No Data present")
  //     }

  //   }

  // }

  public getSearchRecords(value): void {
    this.records = value;
  }
  public getNoDataFoundMessage(value): void {
    this.noDataFoundMessage = value;
  }
}
