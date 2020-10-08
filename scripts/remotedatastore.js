(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    //Old code from the book
/*
    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverUrl = url;
    }
    RemoteDataStore.prototype.add = function (val) {
        $.post(this.serverUrl, val, function (serverResponse) {
            console.log(serverResponse);
        });
    };
    RemoteDataStore.prototype.getAll = function (cb) {
        $.get(this.serverUrl, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };
    RemoteDataStore.prototype.get = function (key, cb) {
        $.get(this.serverUrl + '/' + key, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };
    RemoteDataStore.prototype.remove = function (key) {
        $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
        });
    };
*/

    class RemoteDataStore {
        constructor(url){
            console.log('running the DataStore Function');
            if(!url){
                throw new Error('No remote URL supplied');
            };
            this.serverUrl = url;
        }
        ajaxposthelper(type, url, val){
            $.ajax({ type: type, url: url, contentType: 'application/json', data: JSON.stringify(val),
            success: function(response){ console.log('function required: ' + JSON.stringify(response));}
            });
        }
        ajaxhelper(type, url, cb) {
            $.ajax({ type: type, url: url, contentType: 'application/json', 
            success: function(response){
                console.log('function returned: ' + JSON.stringify(response));
                if (cb !== undefined) {cb(response);}
            }})
        }
        add(key,val) { this.ajaxposthelper('POST', this.serverUrl, val);}
        get(key,cb) { this.ajaxhelper('GET', this.serverUrl + '/' + key,cb);}
        getAll(cb)  { this.ajaxhelper('GET', this.serverUrl, cb);}
        remove(key) { this.ajaxhelper('DELETE', this.serverUrl + '/' + key);}
    }

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);