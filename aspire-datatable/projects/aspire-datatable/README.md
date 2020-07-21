# aspire-datatable

aspire-datatable is an Angular component for creating data table for large and complex data with lots of configurable features.

It is developed using `Angular CLI` version `9.1.4`.

## Installations

`npm install aspire-datatable`

## Usage

Import aspire-datatable module as below:<br>
`import { AspireDatatableModule } from 'aspire-datatable';`

**Inputs**

| Input            | Type    | Required                   | Description                                                                                               |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| headers            | object  | **YES**                    | array of headers that need to be shown in column header in the data table. Here type helps to perform actions on it like `date` to display it in given format.                                               |
| records        | object  | **YES**     | array of objects to be displayed in data table.                                                                       |
| options        | object  | Optional     | options refers to configure datatable as per need. Here we have different configuration of components along with configurable ui.                                                                       |
| popup        | object  | Optional     | array of popup component data like content, header, etc... that supports multiple popups for multiple use.                                                                        |
| actionConfirm        | function  | Optional     | actionConfirm is callback function for popups                                                                       |

Register `AspireDatatableModule` in your module.

Use markup as below:
```typescript
<aspire-datatable [headers]="headers" [records]="records" [options]="options" [popup]="popup" (actionConfirm)="actionConfirm($event)">
</aspire-datatable>
```

Set details as below:

**headers:<br>**
```typescript
headers = [
    { field: 'name', type: 'string' },
    { field: 'status', type: 'boolean' },
    { field: 'date', type: 'date' },
    { field: 'age', type: 'number' },
    { field: 'action', type: 'any' }
];
```

**records:<br>**
```typescript
records = [
    {
        name: 'John',
        status: 'yes',
        date: '01/01/2020',
        age: 25,
        action: {
            id: 1,
            classType: 'fa fa-cog',
            perform: [
                { perAction: 'edit', url: '1/edit' },
                { perAction: 'delete', url: null, popupConfirm: true }
            ]
        }
    }
];
```

**options:<br>**
```typescript
options = {
    tableStyle: 'table table-striped table-bordered',
    headerStyle: 'thead-light',
    recordsPerPageOptions: [5, 10, 20, 30, 50]
};
```

**popup:<br>**
```typescript
Popup = [
    { body: 'Do You want to delete this record?', header: 'Delete Action', perAction: 'delete' }
];
```

**actionConfirm:<br>**
```typescript
onActionConfirm(event) {
    if (event && event.action === 'delete') {
        performDelete(event.item);
    }
}
```

## API
You can create datatable using below options:

| Option                            | Default&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; | Description                                         |
| --------------------------------- | ------------------------------------  | --------------------------------------------------- |
| tableStyle                        | 'table table-striped table-bordered'  | Set custom css class list to style your datatable   |
| headerStyle                       | 'thead-light'                         | It sets custom css class list to style table header |
| tableRowStyle                     | ''                                    | Set custom css class list to style table rows       |
| tableDataStyle                    | ''                                    | Set custom css class list to style table data i.e. columns                                                                                                                           |
| page                              | 1                                     | It sets current/active page in datatable.           |
| searchingStyle                    | ''                                    | Set custom css class list to style search component |
| noRecordFoundMessage              | 'No Data Found'                       | It sets custom message for no data                  |
| itemsPerPage                      | 10                                    | This option sets items per page in datatable.<br>If page size selector and pagination is disabled i.e. `paginationOptions.disable` is `true` or `showRecordsPerPageSelector` and `showPagination` both set to false then it will display all records on single page.                                               |
| resetPagination                   | true                                  | To reset pagination any true or false value can be accepted                                                                                                                          |
| showSorting                       | true                                  | To show/hide sorting on columns                     |
| showSearch                        | true                                  | show/hide search component                          |
| showRecordsCount                  | true                                  | show/hide records count component                   |
| showPagination                    | true                                  | show/hide pagination component                      |
| showRecordsPerPageSelector        | true                                  | show/hide records per page select box component     |
| recordsPerPageOptions             | [5, 10, 20, 30, 50]                   | This option sets options of records per page selector.<br>By default `itemsPerPage` value will be selected option.                                                             |
| dateFormat                        | 'dd/MM/yyyy'                          | Sets date fields with given custom format in datatable                                                                                                                         |
| ariaLabel                         | 'Default pagination'                  | Sets aria-label attribute value for pagination component.<br>This option is sub-option of `paginationOptions` and can be set as `paginationOptions: { ariaLabel:'Default Pagination' }`                                                                                                                    |
| disable                           | false                                 | disable pagination based on value set.<br>This option is sub-option of `paginationOptions` and can be set as `paginationOptions: { disable:false }`                              |
| paginationStyle                   | 'pagination justify-content-center'   | Set custom css class list to style pagination component.<br>This option is sub-option of `paginationOptions` and can be set as `paginationOptions: { paginationStyle:'pagination' }`                                                                                                   |
| pageItemStyle                     | 'page-item'                           | Set custom css class list to style items of pagination component.<br>This option is sub-option of `paginationOptions` and can be set as `paginationOptions: { pageItemStyle:'page-item' }`                                                                                                      |
| pageLinkStyle                     | 'page-link'                           | Set custom css class list to style link of items in pagination component.<br>This option is sub-option of `paginationOptions` and can be set as `paginationOptions: { pageLinkStyle:'page-link' }`                                                                                                      |
| firstPageText                     | '<<'                                  | Add custom text for button to navigate to first page.<br>This option is sub-option of `paginationOptions` and can be set as `paginationOptions: { firstPageText:'<<' }`           |
| prevPageText                      | '<'                                   | Add custom text for button to navigate to previous page.<br>This option is sub-option of `paginationOptions` and can be set as `paginationOptions: { prevPageText:'<' }`             |
| nextPageText                      | '>'                                   | Add custom text for button to navigate to next page.<br>This option is sub-option of `paginationOptions` and can be set as `paginationOptions: { nextPageText:'>' }`             |
| lastPageText                      | '>>'                                  | Add custom text for button to navigate to last page.<br>This option is sub-option of `paginationOptions` and can be set as `paginationOptions: { lastPageText:'>>' }`            |
| topBlankComponentClassList        | 'col-md-6 col-sm-12'                  | This option sets empty block at top of the datatable with given css class. Suppose we have set `showRecordsPerPageSelector` to false and `componentsClass.search.classList` is `col-md-4` and `componentsClass.search.position` is `top-right` then `topBlankComponentClassList` value set to `col-md-8`.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { topBlankComponentClassList:'col-md-6' }`          |
| bottomBlankComponentClassList     | 'col-md-4 col-sm-12'                  | This option sets empty block at bottom of the datatable with given css class. Suppose we have set `showRecordsCount` to false and `componentsClass.pagination.classList` is `col-md-8` and `componentsClass.pagination.position` is `bottom-right` then `bottomBlankComponentClassList` value set to `col-md-4`.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { bottomBlankComponentClassList:'col-md-6' }`                                                                                       |
| pagination.position               | 'bottom-right'                        | This option sets position of pagination component. `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` are the possible options for position values.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { pagination: { position:'bottom-right' } }`                                                                                                      |
| pagination.classList              | 'col-md-8 col-sm-8 mt-2 mt-sm-0'      | This option sets custom css class list to position pagination component.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { pagination: { classList:'col-md-8' } }`                                                                                                         |
| pagination.alignmentClassList     | 'justify-right justify-center-center' | This option sets custom css class list for alignment of pagination component.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { pagination: { alignmentClassList:'justify-right' } }`                                                                                           |
| recordsCount.position             | 'bottom-left'                         | This option sets position of records count component. `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` are the possible options for position values.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { recordsCount: { position:'bottom-left' } }`                                                                                                       |
| recordsCount.classList            | 'col-md-4 col-sm-4 mt-2 mt-sm-0'      | This option sets custom css class list to position records count component.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { recordsCount: { classList:'col-md-4' } }`                                                                                                         |
| recordsCount.alignmentClassList   | 'justify-left justify-center-center'  | This option sets custom css class list for alignment of records count component.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { recordsCount: { alignmentClassList:'justify-left' } }`                                                                                          |
| search.position                   | 'top-right'                           | This option sets position of search component. `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` are the possible options for position values.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { search: {position:'top-right'} }` |
| search.classList                  | 'col-md-6 col-sm-6 mb-2 mb-sm-0'      | This option sets custom css class list to position search component.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { search: { classList:'col-md-6' } }`                                                                                                         |
| search.alignmentClassList         | 'justify-right'                       | This option sets custom css class list for alignment of search component.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { search: { alignmentClassList:'justify-right' } }`                                                                                           |
| recordsPerPage.position           | 'top-left'                            | This option sets position of records per page component. `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` are the possible options for position values.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { recordsPerPage: { position:'top-left' } }`                                                                                                          |
| recordsPerPage.classList          | 'col-md-6 col-sm-6'                   | This option sets custom css class list to position records per page component.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { recordsPerPage: { classList:'col-md-6' } }`                                                                                       |
| recordsPerPage.alignmentClassList | 'justify-left'                        | This option sets custom css class list for alignment of records per page component.<br>This option is sub-option of `componentsClass` and can be set as `componentsClass: { recordsPerPage: { alignmentClassList:'justify-left' } }`                                                                          |


Below is the example to set options and sub-options for datatable:

```typescript
options = {
    tableStyle: 'table table-striped table-bordered',
    headerStyle: 'thead-light',
    recordsPerPageOptions: [5, 10, 20, 30, 50],
    paginationOptions: {
        ariaLabel: 'Default pagination',
        disable: false,
        paginationStyle: 'pagination justify-content-center',
        pageItemStyle: 'page-item',
        pageLinkStyle: 'page-link',
        firstPageText: '<<',
        prevPageText: '<',
        nextPageText: '>',
        lastPageText: '>>'
    },
    componentsClass: {
        topBlankComponentClassList: 'col-md-6 col-sm-12',
        bottomBlankComponentClassList: 'col-md-4 col-sm-12',
        pagination: {
            position: 'bottom-right',
            classList: 'col-md-8 col-sm-8 mt-2 mt-sm-0',
            alignmentClassList: 'justify-right justify-center-center'
        },
        recordsCount: {
            position: 'bottom-left',
            classList: 'col-md-4 col-sm-4 mt-2 mt-sm-0',
            alignmentClassList: 'justify-left justify-center-center'
        },
        search: {
            position: 'top-right',
            classList: 'col-md-6 col-sm-6 mb-2 mb-sm-0',
            alignmentClassList: 'justify-right'
        },
        recordsPerPage: {
            position: 'top-left',
            classList: 'col-md-6 col-sm-6',
            alignmentClassList: 'justify-left'
        }
    }
};
```