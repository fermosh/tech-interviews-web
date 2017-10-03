import { Injectable } from '@angular/core';

@Injectable()
export class ArrayToJsonService{
  private indexOf = [].indexOf || 
    function(item) { 
        for (var i = 0, l = this.length; i < l; i++) { 
            if (i in this && this[i] === item) 
            return i; 
        } 
        return -1; 
    };

  private BOOLTEXT = ['true', 'false'];
  
  private BOOLVALS = {
    'true': true,
    'false': false
  };
  
  private _DEFAULT_OPTIONS = {
    isColOriented: false,
    omitEmptyFields: false
  };

  public requiredProperties: Array<string>;
  public ignoreNonRequiredProperties: boolean = false;




  private isArray = function(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  public trimKeyName = function(key: any): string {
    let parsedKeyName = this.parseKeyName(key);
    return parsedKeyName[1];
  }

  private parseKeyName = function(key: string): any {
    let index;
    index = key.match(/\[(\d+)\]$/);
    switch (false) {
      case !index:
        return [true, key.split('[')[0].toString().trim(), Number(index[1])];
      case key.slice(-2) !== '[]':
        return [true, key.slice(0, -2).toString().trim(), void 0];
      default:
        return [false, key.toString().trim(), void 0];
    }
  };

  private convertValueList = function(list: Array<string>) {
    let item, j, len, results;
    results = [];
    for (j = 0, len = list.length; j < len; j++) {
      item = list[j];
      results.push(this.convertValue(item));
    }
    return results;
  };

  private convertValue = function(value: any): any {
    let testVal;
    if(value === undefined)
      return "";
    if (value.length === 0 || !/\S/.test(value)) {
      return value;
    } else if (isFinite(value)) {
      return Number(value);
    } else {
      testVal = value.toLowerCase();
      if (this.indexOf.call(this.BOOLTEXT, testVal) >= 0) {
        return this.BOOLVALS[testVal];
      } else {
        return value.toString().trim();
      }
    }
  };

  private assign = function(obj: JSON, key: any, value: any, options: any): any {
    let i, index, j, keyIsList, keyName, ref, ref1, ref2;
    if(key === undefined)
      return;
    if (typeof key !== 'object') {
      key = key.split('.');
    }
    ref = this.parseKeyName(key.shift()), keyIsList = ref[0], keyName = ref[1], index = ref[2];
    if (key.length) {
      if (keyIsList) {
        if (this.isArray(obj[keyName])) {
          if (!obj[keyName][index]) {
            for (i = j = ref1 = obj[keyName].length, ref2 = index; ref1 <= ref2 ? j <= ref2 : j >= ref2; i = ref1 <= ref2 ? ++j : --j) {
              obj[keyName].push({});
            }
          }
        } else {
          obj[keyName] = (function() {
            var k, ref3, results;
            results = [];
            for (i = k = 0, ref3 = index; 0 <= ref3 ? k <= ref3 : k >= ref3; i = 0 <= ref3 ? ++k : --k) {
              results.push({});
            }
            return results;
          })();
        }
        return this.assign(obj[keyName][index], key, value, options);
      } else {
        if (obj[keyName] == null) {
          obj[keyName] = {};
        }
        return this.assign(obj[keyName], key, value, options);
      }
    } else {
      if (keyIsList && (index != null)) {
        console.error("WARNING: Unexpected key path terminal containing an indexed list for <" + keyName + ">");
        console.error("WARNING: Indexed arrays indicate a list of objects and should not be the last element in a key path");
        console.error("WARNING: The last element of a key path should be a key name or flat array. E.g. alias, aliases[]");
      }
      if (keyIsList && (index == null)) {
        if (!(options.omitEmptyFields && value === '')) {
          return obj[keyName] = this.convertValueList(value.split(';'));
        }
      } else {
        if (!(options.omitEmptyFields && value === '')) {
          return obj[keyName] = this.convertValue(value);
        }
      }
    }
  };

  private transpose = function(matrix: Array<Array<any>>): Array<Array<any>> {
    let i, j, ref, results, t;
    results = [];
    for (i = j = 0, ref = matrix[0].length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      results.push((function() {
        var k, len, results1;
        results1 = [];
        for (k = 0, len = matrix.length; k < len; k++) {
          t = matrix[k];
          results1.push(t[i]);
        }
        return results1;
      })());
    }
    return results;
  };

  private convert = function(data: Array<Array<any>>, options: any): Array<JSON> {
    let index, item, j, k, keys, len, len1, result, row, rows, value;
    if (options.isColOriented) {
      data = this.transpose(data);
    }
    keys = data[0];
    rows = data.slice(1);
    result = [];
    for (j = 0, len = rows.length; j < len; j++) {
      row = rows[j];
      item = {};
      for (index = k = 0, len1 = row.length; k < len1; index = ++k) {
        if(this.ignoreNonRequiredProperties && !this.requiredProperties.some(rp => rp == keys[index]))
          continue;
        value = row[index];
        this.assign(item, keys[index], value, options);
      }
      result.push(item);
    }
    return result;
  };

  private _validateOptions = function(options: any): any {
    if (!options) {
      options = this._DEFAULT_OPTIONS;
    } else {
      if (!options.hasOwnProperty('isColOriented')) {
        options.isColOriented = false;
      }
      if (!options.hasOwnProperty('omitEmptyFields')) {
        options.omitEmptyFields = false;
      }
    }
    return options;
  };

  public processArray = function(data: Array<Array<any>>, options: any, requiredProperties: Array<string>) {
    if (options == null) {
      options = this._DEFAULT_OPTIONS;
    }
    if(requiredProperties.length > 0){
      this.requiredProperties = requiredProperties;
      this.ignoreNonRequiredProperties = true;
    }
    else{
      this.ignoreNonRequiredProperties = false;
    }

    options = this._validateOptions(options);
    return this.convert(data, options);
  };

}