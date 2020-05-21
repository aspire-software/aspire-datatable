# To checkout any directory from this repository, Please follow below commands:

git clone --no-checkout http://gitlab.aspiresoftware.in/gitlab-admin/angular-lib.git

cd angular-lib

git config core.sparseCheckout true

// Replace your desired directory name that you want to checkout from this repository

echo <direcory name> > .git/info/sparse-checkout

// For ex. : echo aspire-datatable > .git/info/sparse-checkout

git checkout master // You can use any branchname that you want to checkout
