# AspireDatatable

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Code scaffolding

Run `ng generate component component-name --project aspire-datatable` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project aspire-datatable`.
> Note: Don't forget to add `--project aspire-datatable` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build aspire-datatable` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build aspire-datatable`, go to the dist folder `cd dist/aspire-datatable` and run `npm publish`.

## Running unit tests

Run `ng test aspire-datatable` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


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

| Option              | Default                       | Description                                                              |
| ------------------- | ----------------------------- | ------------------------------------------------------------------------ | 
| tableStyle | 'table table-striped table-bordered' | Set custom css class list to style your datatable |
| headerStyle | 'thead-light' | It sets custom css class list to style table header |
| tableRowStyle | '' | Set custom css class list to style table rows |
| tableDataStyle | '' | Set custom css class list to style table data i.e. columns |
| page | 1 | It sets current/active page in datatable. |
| searchingStyle | '' | Set custom css class list to style search component |
| noRecordFoundMessage | 'No Data Found' | It sets custom message for no data |
| itemsPerPage | 10 | This option sets items per page in datatable.<br> If page size selector and pagination is disabled i.e. `paginationOptions.disable` is `true` or `showRecordsPerPageSelector` and `showPagination` both set to false then it will display all records on single page. |
| resetPagination | true | To reset pagination any true or false value can be accepted |
| showSorting | true | To show/hide sorting on columns |
| showSearch | true | show/hide search component |
| showRecordsCount | true | show/hide records count component |
| showPagination | true | show/hide pagination component |
| showRecordsPerPageSelector | true | show/hide records per page select box component |
| recordsPerPageOptions | [5, 10, 20, 30, 50] | This option sets options of records per page selector. By default `itemsPerPage` value will be selected option. |
| dateFormat | 'dd/MM/yyyy' | Sets date fields with given custom format in datatable |
| paginationOptions.ariaLabel | 'Default pagination' | Sets aria-label attribute value for pagination component |
| paginationOptions.disable | false | disable pagination based on value set |
| paginationOptions.paginationStyle | 'pagination justify-content-center' | Set custom css class list to style pagination component |
| paginationOptions.pageItemStyle | 'page-item' | Set custom css class list to style items of pagination component |
| paginationOptions.pageLinkStyle | 'page-link' | Set custom css class list to style link of items in pagination component |
| paginationOptions.firstPageText | '<<' | Add custom text for button to navigate to first page |
| paginationOptions.prevPageText | '<' | Add custom text for button to navigate to previous page |
| paginationOptions.nextPageText | '>' | Add custom text for button to navigate to next page |
| paginationOptions.lastPageText | '>>' | Add custom text for button to navigate to last page |
| componentsClass.topBlankComponentClassList | 'col-md-6 col-sm-12' | This option sets empty block at top of the datatable with given css class. Suppose we have set `showRecordsPerPageSelector` to false and `componentsClass.search.classList` is `col-md-4` and `componentsClass.search.position` is `top-right` then `topBlankComponentClassList` value set to `col-md-8` |
| componentsClass.bottomBlankComponentClassList | 'col-md-4 col-sm-12' | This option sets empty block at bottom of the datatable with given css class. Suppose we have set `showRecordsCount` to false and `componentsClass.pagination.classList` is `col-md-8` and `componentsClass.pagination.position` is `bottom-right` then `bottomBlankComponentClassList` value set to `col-md-4` |
| componentsClass.pagination.position | 'bottom-right' | This option sets position of pagination component. `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` are the possible options for position values. |
| componentsClass.pagination.classList | 'col-md-8 col-sm-8 mt-2 mt-sm-0' | This option sets custom css class list to position pagination component |
| componentsClass.pagination.alignmentClassList | 'justify-right justify-center-center' | This option sets custom css class list for alignment of pagination component |
| componentsClass.recordsCount.position | 'bottom-left' | This option sets position of records count component. `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` are the possible options for position values. |
| componentsClass.recordsCount.classList | 'col-md-4 col-sm-4 mt-2 mt-sm-0' | This option sets custom css class list to position records count component |
| componentsClass.recordsCount.alignmentClassList | 'justify-left justify-center-center' | This option sets custom css class list for alignment of records count component |
| componentsClass.search.position | 'top-right' | This option sets position of search component. `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` are the possible options for position values. |
| componentsClass.search.classList | 'col-md-6 col-sm-6 mb-2 mb-sm-0' | This option sets custom css class list to position search component |
| componentsClass.search.alignmentClassList | 'justify-right' | This option sets custom css class list for alignment of search component |
| componentsClass.recordsPerPage.position | 'top-left' | This option sets position of records per page component. `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` are the possible options for position values. |
| componentsClass.recordsPerPage.classList | 'col-md-6 col-sm-6' | This option sets custom css class list to position records per page component |
| componentsClass.recordsPerPage.alignmentClassList | 'justify-left' | This option sets custom css class list for alignment of records per page component |


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