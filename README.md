form460
=======

### MongoDB

Create collection in a database:

```
$ mongod
$ mongo
> show dbs
> use form460
$ mongoimport --db form460 --collection scheduleE --type csv --file ./data/Form_460_-_Schedule_E_-_Payments_Made.csv --headerline
connected to: 127.0.0.1
2014-09-05T16:07:05.004-0700 		Progress: 9313438/21471137	43%
2014-09-05T16:07:05.004-0700 			33700	11233/second
2014-09-05T16:07:07.578-0700 check 9 76613
2014-09-05T16:07:07.583-0700 imported 76612 objects
$ mongo
> db
form460
> db.scheduleE.find()
```

### Resources

Angularjs smart-table: http://lorenzofox3.github.io/smart-table-website/

angular-ui-slider: https://github.com/angular-ui/ui-slider

Papa Parse: http://papaparse.com/ (in browser CSV)

CrossfilterJS: http://square.github.io/crossfilter/ (idk looks cool)


d3-directive: http://www.fullscale.co/dangle/

## Data

Campaign Finance - FPPC Form 460 - Summary Totals

https://data.sfgov.org/City-Management-and-Ethics/Campaign-Finance-FPPC-Form-460-Summary-Totals/4tts-fyix

etc. Datasets in `data/` folder


## Getting Started

```
$ npm install && bower install
$ gulp
$ node server
```

Open web browser to `localhost:3000`