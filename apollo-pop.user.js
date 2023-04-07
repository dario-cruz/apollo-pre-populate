// ==UserScript==
// @name         Apollo Pre-Populate
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Pre-populate a form with information
// @match        https://apollo-audit.corp.amazon.com/audits/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Alert user to auto pop
    alert('Auto-Pop In Progress!')

    // Get the form element
    let form = document.querySelector('#audits-form.new_audit');

    // Set the values of the form elements
    form.querySelector('#audit_properties_Select Sort').value = 'MOR';
    form.querySelector('#audit_properties_Select Job Path Observed').value = 'Water Spider';
    form.querySelector("#audit_properties_Is AA's hair up above shoulders").value = 'Yes';
    form.querySelector("#audit_properties_Is AA observed using unauthorized electronic devices (phone/earbuds)").value = 'No';


})();
