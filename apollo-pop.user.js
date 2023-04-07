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

    document.querySelector('span.slider.round').click()

    // Set the values of the form elements
    document.getElementById('audit_properties_Select Sort').value = 'MOR';
    document.getElementById('audit_properties_Select Job Path Observed').value = 'Water Spider'
    document.getElementById("audit_properties_Is AA's hair up above shoulders").value = 'Yes'
    document.getElementById('audit_properties_Is AA observed using unauthorized electronic devices (phone/earbuds)').value = 'No'
    document.getElementById('audit_properties_Is the associate exhibiting safe lifting/lowering practices (back upright - testing package before lifting - working in power zone - standing close to object -bending/lifting with legs NOT BACK - feet shoulder width apart - hands free)').value = 'Yes'
    document.getElementById('audit_properties_Is the AA handling objects properly (For 1 handed grasping fingers form “C” shape, not “L” shape, hands free and clear, wrist in the neutral position – handshaking position)').value = 'Yes'
    document.getElementById('audit_properties_Is the AA pivoting at the waist to complete tasks or are they keeping NOSE OVER TOES and picking up and moving feet in the direction of work').value = 'Yes'
    document.getElementById('audit_properties_Is the AA demonstrating safe and standard work practices for pushing or pulling').value = 'Yes'
    document.getElementById('audit_properties_Is the AA observed bending at the knees and not the waist to complete tasks below their power zone').value = 'Yes'
    document.getElementById('audit_properties_Have you (the auditor) watched the Working Well Huddle material for the week').value = 'Yes'
    document.getElementById('audit_properties_Is the AA observed bending at the knees and not the waist to complete tasks below their power zone').value = 'Yes'
    

    // Simulate click for all checkbox elements.

    let spanArray = document.querySelectorAll('span')

    spanArray.forEach(element => {
        switch(element.innerText) {
            case 'Scanner Harness':
                element.click()
                break
            case 'Gloves':
                element.click()
                break
            case 'Safety Shoes':
                element.click()
                break
            case 'Eye Protection (PS/ Smalls Induct)':
                element.click()
                break
            case 'No':
                element.click()
                break
            default:
                break;
        }
    })

})();
