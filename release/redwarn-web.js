/*
R E D W A R N
(c) 2020 Ed. E and contributors - ed6767wiki (at) gmail.com
Licensed under the Apache License 2.0 - read more at https://gitlab.com/redwarn/redwarn-web/

+-------------------------------------------+
|                                           |
| ATTENTION ALL USERS WITH SCRIPT CHANGE    |
| PERMISSIONS                               |
|                                           |
| CHANGING THIS FILE WILL AFFECT MANY USERS |
| AND WILL BE REVERTED WHEN A NEW UPDATE    |
| IS RELEASED AS THIS FILE IS BUILT BY A    |
| SEPERATE SCRIPT. INSTEAD, ISSUE A PULL    |
| REQUEST AT                                |
| https://gitlab.com/redwarn/redwarn-web/   |
|                                           |
+-------------------------------------------+

To all normal users, if you wish to customise RedWarn, submit a request on the talk page or download source.
*/
// <nowiki>
// Handles RedWarns styles
$(".menu").css("z-index", 110); // stop ours from overlaying

var rwDialogAnimations = { // Custom CSS for each animation style
    // DEFAULT
    "default" : `
    /* DEFAULT DIALOG ANIMATION BEGIN */

    dialog[open] {
        -webkit-animation: show 0.25s ease normal;
    }
    @-webkit-keyframes show{
        from {
            opacity: 0;
            transform: scale(0.5) translateY(-10%);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0%);
        }
    }
    
    dialog.closeAnimate {
        -webkit-animation: close 0.25s ease normal;
    }
    
    @-webkit-keyframes close{
        from {
            opacity: 1;
            transform: scale(1) translateY(0%);
        }
        to {
            opacity: 0;
            transform: scale(0.5) translateY(-10%);
        }
    }
    
    /* DIALOG ANIMATION END */`,

    // NONE (marked as "instant")
    "none" : `
    /* DEFAULT DIALOG ANIMATION BEGIN */

    dialog[open] {
        -webkit-animation: show 0.01s ease normal;
    }
    @-webkit-keyframes show{
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    dialog.closeAnimate {
        -webkit-animation: close 0.01s ease normal;
    }
    
    @-webkit-keyframes close{
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    
    /* DIALOG ANIMATION END */
    `,

    // Spinny
    "spinny" : `
    /* DEFAULT DIALOG ANIMATION BEGIN */

    dialog[open] {
        -webkit-animation: show 0.25s ease normal;
    }
    @-webkit-keyframes show{
        from {
            opacity: 0;
            transform: scale(0.5) translateY(-10%) rotate(30deg);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0%) rotate(0deg);
        }
    }
    
    dialog.closeAnimate {
        -webkit-animation: close 0.25s ease normal;
    }
    
    @-webkit-keyframes close{
        from {
            opacity: 1;
            transform: scale(1) translateY(0%) rotate(0deg);
        }
        to {
            opacity: 0;
            transform: scale(0.5) translateY(-10%) rotate(-30deg);
        }
    }
    
    /* DIALOG ANIMATION END */`,

    // Mega
    "mega" : `
    /* DEFAULT DIALOG ANIMATION BEGIN */

    dialog[open] {
        -webkit-animation: show 0.25s ease normal;
    }
    @-webkit-keyframes show{
        from {
            opacity: 0;
            transform: scale(3);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    dialog.closeAnimate {
        -webkit-animation: close 0.25s ease normal;
    }
    
    @-webkit-keyframes close{
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(3);
        }
    }
    
    /* DIALOG ANIMATION END */`
};


// MAIN CSS - THE MAIN PAGE DOES NOT INCLUDE MATERIAL DESIGN LITE CSS. Include all the things here if needed.
/**
 * material-design-lite - Material Design Components in CSS, JS and HTML
 * version v1.3.0
 * license Apache-2.0
 * copyright 2015 Google, Inc.
 * link https://github.com/google/material-design-lite
 */
var rwStyle = `
/* MW INDICATORS to stop tooltip clashes */
.mw-indicators {
    z-index: 1;
}



.mdl-tooltip {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: top center;
    transform-origin: top center;
    z-index: 999;
    background: rgba(97, 97, 97, .9);
    border-radius: 2px;
    color: #fff;
    display: inline-block;
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    max-width: 170px;
    position: fixed;
    top: -500px;
    left: -500px;
    padding: 8px;
    text-align: center
}

.mdl-tooltip.is-active {
    -webkit-animation: pulse 200ms cubic-bezier(0, 0, .2, 1)forwards;
    animation: pulse 200ms cubic-bezier(0, 0, .2, 1)forwards
}

.mdl-tooltip--large {
    line-height: 14px;
    font-size: 14px;
    padding: 16px
}

@-webkit-keyframes pulse {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0
    }

    50% {
        -webkit-transform: scale(.99);
        transform: scale(.99)
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
        visibility: visible
    }
}

@keyframes pulse {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0
    }

    50% {
        -webkit-transform: scale(.99);
        transform: scale(.99)
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
        visibility: visible
    }
}
.mdl-snackbar {
    position: fixed;
    bottom: 0;
    left: 50%;
    cursor: default;
    background-color: #323232;
    z-index: 3;
    display: block;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    will-change: transform;
    -webkit-transform: translate(0, 80px);
    transform: translate(0, 80px);
    transition: transform .25s cubic-bezier(.4, 0, 1, 1);
    transition: transform .25s cubic-bezier(.4, 0, 1, 1), -webkit-transform .25s cubic-bezier(.4, 0, 1, 1);
    pointer-events: none
}

@media (max-width:479px) {
    .mdl-snackbar {
        width: 100%;
        left: 0;
        min-height: 48px;
        max-height: 80px
    }
}

@media (min-width:480px) {
    .mdl-snackbar {
        min-width: 288px;
        max-width: 568px;
        border-radius: 2px;
        -webkit-transform: translate(-50%, 80px);
        transform: translate(-50%, 80px)
    }
}

.mdl-snackbar--active {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    pointer-events: auto;
    transition: transform .25s cubic-bezier(0, 0, .2, 1);
    transition: transform .25s cubic-bezier(0, 0, .2, 1), -webkit-transform .25s cubic-bezier(0, 0, .2, 1)
}

@media (min-width:480px) {
    .mdl-snackbar--active {
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0)
    }
}

.mdl-snackbar__text {
    padding: 14px 12px 14px 24px;
    vertical-align: middle;
    color: #fff;
    float: left
}

.mdl-snackbar__action {
    background: 0 0;
    border: none;
    color: rgb(83, 109, 254);
    float: right;
    padding: 14px 24px 14px 12px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0;
    overflow: hidden;
    outline: none;
    opacity: 0;
    pointer-events: none;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center
}

.mdl-snackbar__action::-moz-focus-inner {
    border: 0
}

.mdl-snackbar__action:not([aria-hidden]) {
    opacity: 1;
    pointer-events: auto
}

.mdl-dialog {
    border: none;
    box-shadow: 0 9px 46px 8px rgba(0, 0, 0, .14), 0 11px 15px -7px rgba(0, 0, 0, .12), 0 24px 38px 3px rgba(0, 0, 0, .2);
}

.mdl-dialog__title {
    padding: 24px 24px 0;
    margin: 0;
    font-size: 2.5rem
}

.mdl-dialog__actions {
    padding: 8px 8px 8px 24px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.mdl-dialog__actions>* {
    margin-right: 8px;
    height: 36px
}

.mdl-dialog__actions>*:first-child {
    margin-right: 0
}

.mdl-dialog__actions--full-width {
    padding: 0 0 8px
}

.mdl-dialog__actions--full-width>* {
    height: 48px;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    padding-right: 16px;
    margin-right: 0;
    text-align: right
}

.mdl-dialog__content {
    padding: 20px 24px 24px;
    color: rgba(0, 0, 0, .54)
}


.mdl-button {
    background: 0 0;
    border: none;
    border-radius: 2px;
    color: #000;
    position: relative;
    height: 36px;
    margin: 0;
    min-width: 64px;
    padding: 0 16px;
    display: inline-block;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0;
    overflow: hidden;
    will-change: box-shadow;
    transition: box-shadow .2s cubic-bezier(.4, 0, 1, 1), background-color .2s cubic-bezier(.4, 0, .2, 1), color .2s cubic-bezier(.4, 0, .2, 1);
    outline: none;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    line-height: 36px;
    vertical-align: middle
}

.mdl-button::-moz-focus-inner {
    border: 0
}

.mdl-button:hover {
    background-color: rgba(158, 158, 158, .2)
}

.mdl-button:focus:not(:active) {
    background-color: rgba(0, 0, 0, .12)
}

.mdl-button:active {
    background-color: rgba(158, 158, 158, .4)
}

.mdl-button.mdl-button--colored {
    color: rgb(33, 150, 243)
}

.mdl-button.mdl-button--colored:focus:not(:active) {
    background-color: rgba(0, 0, 0, .12)
}

input.mdl-button[type="submit"] {
    -webkit-appearance: none
}

.mdl-button--raised {
    background: rgba(158, 158, 158, .2);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)
}

.mdl-button--raised:active {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
    background-color: rgba(158, 158, 158, .4)
}

.mdl-button--raised:focus:not(:active) {
    box-shadow: 0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36);
    background-color: rgba(158, 158, 158, .4)
}

.mdl-button--raised.mdl-button--colored {
    background: rgb(33, 150, 243);
    color: rgb(255, 255, 255)
}

.mdl-button--raised.mdl-button--colored:hover {
    background-color: rgb(33, 150, 243)
}

.mdl-button--raised.mdl-button--colored:active {
    background-color: rgb(33, 150, 243)
}

.mdl-button--raised.mdl-button--colored:focus:not(:active) {
    background-color: rgb(33, 150, 243)
}

.mdl-button--raised.mdl-button--colored .mdl-ripple {
    background: rgb(255, 255, 255)
}

.mdl-button--fab {
    border-radius: 50%;
    font-size: 24px;
    height: 56px;
    margin: auto;
    min-width: 56px;
    width: 56px;
    padding: 0;
    overflow: hidden;
    background: rgba(158, 158, 158, .2);
    box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, .12), 0 1px 1px 0 rgba(0, 0, 0, .24);
    position: relative;
    line-height: normal
}

.mdl-button--fab .material-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-12px, -12px);
    transform: translate(-12px, -12px);
    line-height: 24px;
    width: 24px
}

.mdl-button--fab.mdl-button--mini-fab {
    height: 40px;
    min-width: 40px;
    width: 40px
}

.mdl-button--fab .mdl-button__ripple-container {
    border-radius: 50%;
    -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000)
}

.mdl-button--fab:active {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
    background-color: rgba(158, 158, 158, .4)
}

.mdl-button--fab:focus:not(:active) {
    box-shadow: 0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36);
    background-color: rgba(158, 158, 158, .4)
}

.mdl-button--fab.mdl-button--colored {
    background: rgb(83, 109, 254);
    color: rgb(255, 255, 255)
}

.mdl-button--fab.mdl-button--colored:hover {
    background-color: rgb(83, 109, 254)
}

.mdl-button--fab.mdl-button--colored:focus:not(:active) {
    background-color: rgb(83, 109, 254)
}

.mdl-button--fab.mdl-button--colored:active {
    background-color: rgb(83, 109, 254)
}

.mdl-button--fab.mdl-button--colored .mdl-ripple {
    background: rgb(255, 255, 255)
}

.mdl-button--icon {
    border-radius: 50%;
    font-size: 24px;
    height: 32px;
    margin-left: 0;
    margin-right: 0;
    min-width: 32px;
    width: 32px;
    padding: 0;
    overflow: hidden;
    color: inherit;
    line-height: normal
}

.mdl-button--icon .material-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-12px, -12px);
    transform: translate(-12px, -12px);
    line-height: 24px;
    width: 24px
}

.mdl-button--icon.mdl-button--mini-icon {
    height: 24px;
    min-width: 24px;
    width: 24px
}

.mdl-button--icon.mdl-button--mini-icon .material-icons {
    top: 0;
    left: 0
}

.mdl-button--icon .mdl-button__ripple-container {
    border-radius: 50%;
    -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000)
}

.mdl-button__ripple-container {
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
    overflow: hidden
}

.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple,
.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple {
    background-color: transparent
}

.mdl-button--primary.mdl-button--primary {
    color: rgb(33, 150, 243)
}

.mdl-button--primary.mdl-button--primary .mdl-ripple {
    background: rgb(255, 255, 255)
}

.mdl-button--primary.mdl-button--primary.mdl-button--raised,
.mdl-button--primary.mdl-button--primary.mdl-button--fab {
    color: rgb(255, 255, 255);
    background-color: rgb(33, 150, 243)
}

.mdl-button--accent.mdl-button--accent {
    color: rgb(83, 109, 254)
}

.mdl-button--accent.mdl-button--accent .mdl-ripple {
    background: rgb(255, 255, 255)
}

.mdl-button--accent.mdl-button--accent.mdl-button--raised,
.mdl-button--accent.mdl-button--accent.mdl-button--fab {
    color: rgb(255, 255, 255);
    background-color: rgb(83, 109, 254)
}

.mdl-button[disabled][disabled],
.mdl-button.mdl-button--disabled.mdl-button--disabled {
    color: rgba(0, 0, 0, .26);
    cursor: default;
    background-color: transparent
}

.mdl-button--fab[disabled][disabled],
.mdl-button--fab.mdl-button--disabled.mdl-button--disabled {
    background-color: rgba(0, 0, 0, .12);
    color: rgba(0, 0, 0, .26)
}

.mdl-button--raised[disabled][disabled],
.mdl-button--raised.mdl-button--disabled.mdl-button--disabled {
    background-color: rgba(0, 0, 0, .12);
    color: rgba(0, 0, 0, .26);
    box-shadow: none
}

.mdl-button--colored[disabled][disabled],
.mdl-button--colored.mdl-button--disabled.mdl-button--disabled {
    color: rgba(0, 0, 0, .26)
}

.mdl-button .material-icons {
    vertical-align: middle
}

.mdl-menu__container {
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    position: absolute;
    overflow: visible;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: -1
}

.mdl-menu__container.is-visible,
.mdl-menu__container.is-animating {
    z-index: 999;
    visibility: visible
}

.mdl-menu__outline {
    display: block;
    background: #fff;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    will-change: transform;
    transition: transform .3s cubic-bezier(.4, 0, .2, 1), opacity .2s cubic-bezier(.4, 0, .2, 1);
    transition: transform .3s cubic-bezier(.4, 0, .2, 1), opacity .2s cubic-bezier(.4, 0, .2, 1), -webkit-transform .3s cubic-bezier(.4, 0, .2, 1);
    z-index: -1
}

.mdl-menu__container.is-visible .mdl-menu__outline {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    z-index: 999
}

.mdl-menu__outline.mdl-menu--bottom-right {
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0
}

.mdl-menu__outline.mdl-menu--top-left {
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%
}

.mdl-menu__outline.mdl-menu--top-right {
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%
}

.mdl-menu {
    position: absolute;
    list-style: none;
    top: 0;
    left: 0;
    height: auto;
    width: auto;
    min-width: 124px;
    padding: 8px 0;
    margin: 0;
    opacity: 0;
    clip: rect(0 0 0 0);
    z-index: -1
}

.mdl-menu__container.is-visible .mdl-menu {
    opacity: 1;
    z-index: 999
}

.mdl-menu.is-animating {
    transition: opacity .2s cubic-bezier(.4, 0, .2, 1), clip .3s cubic-bezier(.4, 0, .2, 1)
}

.mdl-menu.mdl-menu--bottom-right {
    left: auto;
    right: 0
}

.mdl-menu.mdl-menu--top-left {
    top: auto;
    bottom: 0
}

.mdl-menu.mdl-menu--top-right {
    top: auto;
    left: auto;
    bottom: 0;
    right: 0
}

.mdl-menu.mdl-menu--unaligned {
    top: auto;
    left: auto
}

.mdl-menu__item {
    display: block;
    border: none;
    color: rgba(0, 0, 0, .87);
    background-color: transparent;
    text-align: left;
    margin: 0;
    padding: 0 16px;
    outline-color: #bdbdbd;
    position: relative;
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    text-decoration: none;
    cursor: pointer;
    height: 48px;
    line-height: 48px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity .2s cubic-bezier(.4, 0, .2, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.mdl-menu__container.is-visible .mdl-menu__item {
    opacity: 1
}

.mdl-menu__item::-moz-focus-inner {
    border: 0
}

.mdl-menu__item--full-bleed-divider {
    border-bottom: 1px solid rgba(0, 0, 0, .12)
}

.mdl-menu__item[disabled],
.mdl-menu__item[data-mdl-disabled] {
    color: #bdbdbd;
    background-color: transparent;
    cursor: auto
}

.mdl-menu__item[disabled]:hover,
.mdl-menu__item[data-mdl-disabled]:hover {
    background-color: transparent
}

.mdl-menu__item[disabled]:focus,
.mdl-menu__item[data-mdl-disabled]:focus {
    background-color: transparent
}

.mdl-menu__item[disabled] .mdl-ripple,
.mdl-menu__item[data-mdl-disabled] .mdl-ripple {
    background: 0 0
}

.mdl-menu__item:hover {
    background-color: #eee
}

.mdl-menu__item:focus {
    outline: none;
    background-color: #eee
}

.mdl-menu__item:active {
    background-color: #e0e0e0
}

.mdl-menu__item--ripple-container {
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
    overflow: hidden
}

.mdl-progress {
    display: block;
    position: relative;
    height: 4px;
    width: 500px;
    max-width: 100%
}

.mdl-progress>.bar {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0%;
    transition: width .2s cubic-bezier(.4, 0, .2, 1)
}

.mdl-progress>.progressbar {
    background-color: rgb(33, 150, 243);
    z-index: 1;
    left: 0
}

.mdl-progress>.bufferbar {
    background-image: linear-gradient(to right, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), linear-gradient(to right, rgb(33, 150, 243), rgb(33, 150, 243));
    z-index: 0;
    left: 0
}

.mdl-progress>.auxbar {
    right: 0
}

@supports (-webkit-appearance:none) {

    .mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,
    .mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar {
        background-image: linear-gradient(to right, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), linear-gradient(to right, rgb(33, 150, 243), rgb(33, 150, 243));
        -webkit-mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=");
        mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=")
    }
}

.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,
.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar {
    background-image: linear-gradient(to right, rgba(255, 255, 255, .9), rgba(255, 255, 255, .9)), linear-gradient(to right, rgb(33, 150, 243), rgb(33, 150, 243))
}

.mdl-progress.mdl-progress--indeterminate>.bar1,
.mdl-progress.mdl-progress__indeterminate>.bar1 {
    -webkit-animation-name: indeterminate1;
    animation-name: indeterminate1
}

.mdl-progress.mdl-progress--indeterminate>.bar1,
.mdl-progress.mdl-progress__indeterminate>.bar1,
.mdl-progress.mdl-progress--indeterminate>.bar3,
.mdl-progress.mdl-progress__indeterminate>.bar3 {
    background-color: rgb(33, 150, 243);
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear
}

.mdl-progress.mdl-progress--indeterminate>.bar3,
.mdl-progress.mdl-progress__indeterminate>.bar3 {
    background-image: none;
    -webkit-animation-name: indeterminate2;
    animation-name: indeterminate2
}

@-webkit-keyframes indeterminate1 {
    0% {
        left: 0%;
        width: 0%
    }

    50% {
        left: 25%;
        width: 75%
    }

    75% {
        left: 100%;
        width: 0%
    }
}

@keyframes indeterminate1 {
    0% {
        left: 0%;
        width: 0%
    }

    50% {
        left: 25%;
        width: 75%
    }

    75% {
        left: 100%;
        width: 0%
    }
}

@-webkit-keyframes indeterminate2 {

    0%,
    50% {
        left: 0%;
        width: 0%
    }

    75% {
        left: 0%;
        width: 25%
    }

    100% {
        left: 100%;
        width: 0%
    }
}

@keyframes indeterminate2 {

    0%,
    50% {
        left: 0%;
        width: 0%
    }

    75% {
        left: 0%;
        width: 25%
    }

    100% {
        left: 100%;
        width: 0%
    }
}

.mdl-checkbox {
    position: relative;
    z-index: 1;
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 24px;
    margin: 0;
    padding: 0
}

.mdl-checkbox.is-upgraded {
    padding-left: 24px
}

.mdl-checkbox__input {
    line-height: 24px
}

.mdl-checkbox.is-upgraded .mdl-checkbox__input {
    position: absolute;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    -ms-appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none
}

.mdl-checkbox__box-outline {
    position: absolute;
    top: 3px;
    left: 0;
    display: inline-block;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid rgba(0, 0, 0, .54);
    border-radius: 2px;
    z-index: 2
}

.mdl-checkbox.is-checked .mdl-checkbox__box-outline {
    border: 2px solid rgb(33, 150, 243)
}

fieldset[disabled] .mdl-checkbox .mdl-checkbox__box-outline,
.mdl-checkbox.is-disabled .mdl-checkbox__box-outline {
    border: 2px solid rgba(0, 0, 0, .26);
    cursor: auto
}

.mdl-checkbox__focus-helper {
    position: absolute;
    top: 3px;
    left: 0;
    display: inline-block;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: transparent
}

.mdl-checkbox.is-focused .mdl-checkbox__focus-helper {
    box-shadow: 0 0 0 8px rgba(0, 0, 0, .1);
    background-color: rgba(0, 0, 0, .1)
}

.mdl-checkbox.is-focused.is-checked .mdl-checkbox__focus-helper {
    box-shadow: 0 0 0 8px rgba(33, 150, 243, .26);
    background-color: rgba(33, 150, 243, .26)
}

.mdl-checkbox__tick-outline {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==");
    mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==");
    background: 0 0;
    transition-duration: .28s;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-property: background
}

.mdl-checkbox.is-checked .mdl-checkbox__tick-outline {
    background: rgb(33, 150, 243)url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")
}

fieldset[disabled] .mdl-checkbox.is-checked .mdl-checkbox__tick-outline,
.mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline {
    background: rgba(0, 0, 0, .26)url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")
}

.mdl-checkbox__label {
    position: relative;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    margin: 0
}

fieldset[disabled] .mdl-checkbox .mdl-checkbox__label,
.mdl-checkbox.is-disabled .mdl-checkbox__label {
    color: rgba(0, 0, 0, .26);
    cursor: auto
}

.mdl-checkbox__ripple-container {
    position: absolute;
    z-index: 2;
    top: -6px;
    left: -10px;
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000)
}

.mdl-checkbox__ripple-container .mdl-ripple {
    background: rgb(33, 150, 243)
}

fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container,
.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container {
    cursor: auto
}

fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container .mdl-ripple,
.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container .mdl-ripple {
    background: 0 0
}
`;
// (c) Ed.E and contributors 2020

// Window focus checking n things
var windowFocused = true;

window.onblur = function(){  
    windowFocused = false;  
}  
window.onfocus = function(){  
    windowFocused = true;  
}

// Array extention
var arrayMove = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
}

function waitForMDLLoad(cb) { // Used to wait for MDL load
    if(typeof componentHandler !== "undefined"){
        cb(); // callback
    } else {
        setTimeout(()=>waitForMDLLoad(cb), 250);
    }
}

function redirect(url, inNewTab) {
    if (inNewTab) {
        Object.assign(document.createElement('a'), { target: '_blank', href: url}).click(); // Open in new tab
    } else {
        window.location.href = url; // open here
    }
}
if (rw != null) {
    // Double init, rm the old version and hope for the best
    rw = {};
    mw.notify("Warning! You have two versions of RedWarn installed at once! Please edit your common.js or skin js files to ensure that you only use one instance to prevent issues.");
}
var rw = {
    // UPDATE THIS DATA FOR EVERY VERSION!
    "version" : "15", // don't forget to change each version!
    "versionSummary": `
<!-- RedWarn 15 -->
RedWarn 15 unifies the anti-vandalism experience, including user interface improvements, UAA reports, bug fixes and more.
    `,
    // ADDED BY BUILD SCRIPT
    "buildInfo" : `Build Time: 13/09/2020 12:18:27UTC
Excecuted script: D:/RedWarn/redwarn-web/build.php
User: Ed@edryzen on Windows NT`,
    // Now edited by us again
    "logoHTML" : `<span style="font-family:Roboto;font-weight: 300;text-shadow:2px 2px 4px #0600009e;"><span style="color:red">Red</span>Warn</span>`, // HTML of the logo
    "logoShortHTML" : `<span style="font-family:Roboto;font-weight: 300;text-shadow:2px 2px 4px #0600009e;"><span style="color:red">R</span>W</span>`, // Short HTML of the logo
    "sign": ()=>{return atob("fn5+fg==")}, // we have to do this because mediawiki will swap this out with devs sig.
    "welcome": ()=> {return atob("e3tzdWJzdDpXZWxjb21lfX0=");}, // welcome template
    "welcomeIP": ()=> {return atob("e3tzdWJzdDp3ZWxjb21lLWFub259fQ==");}, // welcome IP template
    "sharedIPadvice" : ()=> {return atob("XG46e3tzdWJzdDpTaGFyZWQgSVAgYWR2aWNlfX0=");}, // if this is a shared...

    // Wiki automated config
    "wikiBase" : mw.config.get("wgServer"), // mediawiki base URL (i.e. //en.wikipedia.org)
    "wikiIndex" : mw.config.get("wgServer") + mw.config.get("wgScript"), // mediawiki index.php (i.e. //en.wikipedia.org/w/index.php)
    "wikiAPI" : mw.config.get("wgServer") + mw.config.get("wgScriptPath") + "/api.php", // mediawiki API path  (i.e. //en.wikipedia.org/w/api.php)
    "wikiID": mw.config.values.wgWikiID,
    "makeID" : length=> {
        // Generates a random string
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },

    "visuals" : {
        "init" : (callback) => {
            // Welcome message
            console.log("RedWarn "+ rw.version + " - (c) 2020 RedWarn Contributors");
            // Load MDL and everything needed, then callback when all loaded
            $('head').append(`
                <link rel="stylesheet" href="https://redwarn.toolforge.org/cdn/css/jqueryContextMenu.css">
                <script src="https://redwarn.toolforge.org/cdn/js/jquery-contextmenu.js"></script>
                <script src="https://redwarn.toolforge.org/cdn/js/jquery-ui-position.js"></script>
                <link rel="stylesheet" href="https://redwarn.toolforge.org/cdn/css/materialicons.css">
                <script src="https://redwarn.toolforge.org/cdn/js/dialogPolyfill.js"></script> <!-- firefox being dumb -->
                <script src="https://redwarn.toolforge.org/cdn/js/mdl.js" id="MDLSCRIPT"></script>
                <!-- Roboto Font -->
                <link href="https://tools-static.wmflabs.org/fontcdn/css?family=Roboto:100,100italic,300,300italic,400,400italic,500,500italic,700,700italic,900,900italic&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese" rel="stylesheet">

                <!-- MDL AND CONTEXT MENU STYLES -->
                <style>
                /* Context menus */
                .context-menu-list {
                    list-style-type: none;
                    list-style-image: none;
                }

                /* MDL */
                `+ rwStyle +`
                </style>
            `); // Append required libaries to page

            // OOui
            mw.loader.load( 'oojs-ui-windows' );

            // Show redwarn only spans
            $(".RedWarnOnlyVisuals").show();
            
            // wait for load
            waitForMDLLoad(callback);
        },

        "register" : c=> {
            // Register a componant with MDL
            componentHandler.upgradeElement(c);
        },

        "pageIcons" : ()=> {
            // Thanks to User:Awesome Aasim for the suggestion and some sample code.
            try {
                let pageIconHTML = "<div id='rwPGIconContainer' style='display:none;display: inline-block;'>"; // obj it is appended to
                // Possible icons locations: default (page icons area) or sidebar
                let iconsLocation = rw.config.pgIconsLocation ? rw.config.pgIconsLocation : "default"; // If set in config, use config
                /* DO NOT REMOVE THIS LINE */

if (mw.config.get("wgNamespaceNumber") >= 0) { //do not show on special pages
if (mw.config.get("wgRelevantPageName").includes("User:") || mw.config.get("wgRelevantPageName").includes("User_talk:")) {
    pageIconHTML += `
        <!-- BEGIN USER ONLY ICONS -->
        `+ (iconsLocation == "sidebar" ? "" : "&nbsp;&nbsp;&nbsp;") + ` <!-- no spacing on sidebar -->
        <div id="newUsrMsg" class="icon material-icons"><span style="cursor: pointer;" onclick="rw.ui.newMsg();">send</span></div>
        <div class="mdl-tooltip mdl-tooltip--large" for="newUsrMsg">
            New Message
        </div>

        <div id="welcomeUsr" class="icon material-icons"><span style="cursor: pointer;" onclick="rw.quickTemplate.openSelectPack();">library_add</span></div>
        <div class="mdl-tooltip mdl-tooltip--large" for="welcomeUsr">
            Quick Template
        </div>

        <div id="warnUsr" class="icon material-icons"><span style="cursor: pointer;" onclick="rw.ui.beginWarn();">report</span></div>
        <div class="mdl-tooltip mdl-tooltip--large" for="warnUsr">
            Send Notice
        </div>

        <div id="reportUsr" class="icon material-icons"><span style="cursor: pointer;" onclick="rw.ui.adminReportSelector();">gavel</span></div>
        <div class="mdl-tooltip mdl-tooltip--large" for="reportUsr">
            Report to Admin
        </div>
    `;
} // end this section
pageIconHTML += `
    `+ (iconsLocation == "sidebar" ? "" : "&nbsp;&nbsp;&nbsp;") + ` <!-- no spacing on sidebar -->
    <!-- START PAGE ONLY ICONS -->

    <!-- ONLY ON EDITABLE PAGES -->
    `+ (mw.config.get("wgIsProbablyEditable") ? `
    <div id="RwPageLock" class="icon material-icons"><span style="cursor: pointer;" onclick="rw.pageProtect.open();">lock</span></div>
    <div class="mdl-tooltip mdl-tooltip--large" for="RwPageLock">
        Manage Page Protection
    </div>

    <div id="rwSpyIcon" class="icon material-icons"><span style="cursor: pointer;" onclick="rw.info.changeWatch.toggle();">notification_important</span></div>
    <div class="mdl-tooltip mdl-tooltip--large" for="rwSpyIcon">
        Alert on Change
    </div>

    <div id="rwInspectorLaunch" class="icon material-icons"><span style="cursor: pointer;" onclick="rw.visuals.toast.show('This feature is experimental and may not always work.');rw.whodunnit.mouseHighlighter();">find_in_page</span></div>
    <div class="mdl-tooltip mdl-tooltip--large" for="rwInspectorLaunch">
        Inspector (alpha)
    </div>
    
    <div id="mrevPg" class="icon material-icons"><span style="cursor: pointer;" onclick="rw.info.isLatestRevision(mw.config.get('wgRelevantPageName'), 0, ()=>{});">watch_later</span></div>
    <div class="mdl-tooltip mdl-tooltip--large" for="mrevPg">
        Latest revision
    </div>
    ` : `
    <!-- UNEDITABLE ONLY ICON -->
    <div id="RwPageLock" class="icon material-icons"><span style="cursor: pointer;" onclick="rw.pageProtect.open();">lock</span></div>
    <div class="mdl-tooltip" for="RwPageLock">
        You cannot edit this page. Click to manage page protection.
    </div>
    `) + ` <!-- END EDITABLE PAGES ONLY ICONS -->
    `;
}
pageIconHTML += `
    <div id="rwOpenPref" class="icon material-icons"><span style="cursor: pointer;" onclick="rw.ui.openPreferences();">settings</span></div>
    <div class="mdl-tooltip mdl-tooltip--large" for="rwOpenPref">
        RedWarn Preferences
    </div>

`;


/* DO NOT REMOVE THIS LINE */
                pageIconHTML += "</div>"; // close contianer
                if (iconsLocation == "default") {
                    try {
                        $(".mw-indicators").append(pageIconHTML); // Append our icons to the page icons
                    } catch (error) {
                        // Incompatible theme, use sidebar instead
                        iconsLocation = "sidebar";
                    }
                }
                // delib. not else if
                if (iconsLocation == "sidebar") {
                    // Add our icons to the sidebar (w/ all theme compatibility)
                    (_t=>{
                        $('<div class="sidebar-chunk" id="redwarn"><h2><span>RedWarn</span></h2><div class="sidebar-inner">' + _t + '</div></div>').prependTo("#mw-site-navigation");
                        $('<div class="portal" role="navigation" id="redwarn" aria-labelledby="p-redwarn-label">' + _t + '</div>').prependTo("#mw-panel");
                        $('<div role="navigation" class="portlet generated-sidebar" id="redwarn" aria-labelledby="p-redwarn-label">' + _t + '</div>').prependTo("#sidebar");
                        $('<div class="portlet" id="redwarn">' + _t + '</div>').prependTo("#mw_portlets");
                        $('<ul id="redwarn">' + _t + '</ul>').appendTo("#mw-mf-page-left"); //minerva
                        $("#p-navigation").prependTo("#mw-panel");
                        $("#p-search").prependTo("#quickbar");
                        $('#p-logo').prependTo("#mw-site-navigation");
                        $('#p-logo').prependTo("#mw-panel");
                        $('#p-logo').prependTo("#sidebar");
                        $('#p-logo').prependTo("#mw_portlets");
                        $('ul.hlist:first').appendTo('#mw-mf-page-left');

                        // Add click event handlers
                        $(document).click(e=> {
                            if ($(e.target).closest("#redwarn").length == 0) {
                                $("#redwarn").removeClass("dropdown-active");
                            }
                        });
                        (h=>{
                            $($('.sidebar-chunk > h2:contains("RedWarn")')[0]).click(e=>h(e)); // collapsed
                            $($('.sidebar-inner > #redwarn-label')[0]).click(e=>h(e)); // visible
                        })(e=>{ // Handler
                            e.preventDefault();
                            if ($("#redwarn").hasClass("dropdown-active")) {
                                $("#redwarn").removeClass("dropdown-active");
                            } else {
                                $("#redwarn").toggleClass("dropdown-active");
                            }
                        });
                        // We done
                    })(` <!-- hand in pageIconHTML and some extra gubbins to become _t -->
                        <h3 id="redwarn-label" lang="en" dir="ltr">RedWarn tools</h3><div class="mw-portlet-body body pBody" id="redwarn-tools">
                        ` + pageIconHTML + `
                        </div>
                    `);
                }
            } catch (error) {
                // Likely invalid theme, not all themes can use default
                mw.notify("RedWarn isn't compatible with this theme.");
                return; // Exit
            }
            

            // Now register all tooltips
            for (let item of document.getElementsByClassName("mdl-tooltip")) rw.visuals.register(item); 

            // Now Register menu mdl-menu
            for (let item of document.getElementsByClassName("mdl-menu")) rw.visuals.register(item); 
            
            // Now fade in container
            $("#rwPGIconContainer").fadeIn();
            
            // That's done :)
        }
    },

    "recentChanges" : {
        "openPage" : (filters)=> {
            // Open recent changes url
            let sidebarSize = 500;
            let addCol = "0,255,0"; // rgb
            let rmCol = "255,0,0"; // rgb
            let mwBody = document.getElementsByTagName("BODY")[0];
            /*if (rw.config.ptrSidebar) sidebarSize = rw.config.ptrSidebar; DEP. REV12*/
             // If preferences set, apply them
            if (rw.config.ptrAddCol) addCol = rw.config.ptrAddCol;
            if (rw.config.ptrRmCol) rmCol = rw.config.ptrRmCol;
            // basically multiact js but with stuff replaced
            mwBody.style.overflowY = "hidden";
            let content = mdlContainers.generateContainer(` 
            <!DOCTYPE HTML>
<html>
    <!-- RECENT CHANGES EDITOR. RUNS COMPLETLY SEPERATE AS STANDALONE PAGE. DO NOT USE A CONTAINER. -->
    <head>
        <script src="https://redwarn.toolforge.org/cdn/js/jQuery.js"></script>
        <link href="https://tools-static.wmflabs.org/fontcdn/css?family=Roboto:100,100italic,300,300italic,400,400italic,500,500italic,700,700italic,900,900italic&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese" rel="stylesheet">
        <link rel="stylesheet" href="https://redwarn.toolforge.org/cdn/css/materialicons.css">
        
        <link rel="stylesheet" href="https://redwarn.toolforge.org/cdn/css/material.blue-indigo.min.css" />
    </head>
    <body onload="refreshLive();"> <!-- Show a few edits on load -->
    <!-- No header, and the drawer stays open on larger screens (fixed drawer). -->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
            <div class="mdl-layout__drawer" style="width:100%;-webkit-transform: translateX(0px); transform: translateX(0px);">
            <span class="mdl-layout-title">${rw.logoHTML} Patrol</span>
            <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="#" onclick="window.parent.postMessage('rwRCPcloseDialog')">Return to Wikipedia / Change filter options</a>
                <a class="mdl-navigation__link" href="#" id="newAttached" target="_blank">Open New Attached Tab</a>
                <a class="mdl-navigation__link" href="#" style="background-color: teal;color:white;" onmouseover="tI = setInterval(refreshLive,  750);" onmouseout="clearTimeout(tI);">Hover your cursor here for live updates</a>
                <div id="recentChangesContainer">
                </div>
                
            </nav>
            </div>
            <main class="mdl-layout__content">
            <div class="page-content" style="display:none;">
            </div>
            </main>
        </div>

    <script>
// Create broadcast channel
var bcID = "RWBC_" + Math.random().toString(36).substring(7);
const bc = new BroadcastChannel(bcID);
$("#newAttached").attr("href", "https://en.wikipedia.org/wiki/User:Ed6767/redwarn/patrol#rwPatrolAttach-"+ bcID); // set link

var tI;
function convertRange( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}
// Check for new updates every 750ms
function refreshLive() {
    // Don't use JSON API so that the vars are interchangable from Special:RecentChanges
    parseRecentChanges(arr=>{
        arr.forEach(edit => {
            console.log(edit);
            // Clear excess
            if ($('a[id^="recentChange"]').length > 250) {
                // Max 250 (rev8), delete bottom
                $('a[id^="recentChange"]').last().remove(); // remove the last one
            }
            // Add new
            if ($("#recentChange-"+ edit.revID).length < 1) { // Only continue if edit not already in page
                let sizeDiff = edit.changeSize;
                let opacityLevel = 0;
                if ((sizeDiff > 1000) || (sizeDiff < -1000)) {
                    // Max opacity
                    opacityLevel = 1;
                } else {
                    // We can map
                    if (sizeDiff < 0) {
                        // Red map
                        opacityLevel = convertRange(sizeDiff, [0, -1000], [0.1, 0.75]);
                    } else {
                        // Green map
                        opacityLevel = convertRange(sizeDiff, [0, 1000], [0.1, 0.75]);
                    }
                    
                }
                let style = (sizeDiff < 0) ? "background-color: rgba(`+ rmCol +`,"+ opacityLevel +"); color:black;" : "background-color: rgba(`+ addCol +`,"+ opacityLevel +"); color:black;" // First neg style, next add style
                $("#recentChangesContainer").prepend('<a class="mdl-navigation__link notif" href="#" style="display:none;'+ style +'" id="recentChange-'+ edit.revID +'"><i id="title-'+ edit.revID +'"></i><br><b>'+ edit.user +'</b> ('+ sizeDiff +')<br /><span id="comment-'+ edit.revID +'"></span><br>'+ edit.tags +'</a>');
                $('#title-'+ edit.revID).text(edit.title); // XSS security
                $('#comment-'+ edit.revID).text(edit.comment);
                $("#recentChange-"+ edit.revID).fadeIn(); // fancy

                // Append click handler
                $('#recentChange-'+ edit.revID).on("click", ()=>goToLatestDiffPage(edit.title));
            }
            
        });
    });
}

function goToLatestDiffPage(article) {
    $("#welcomeContainer").hide();
    // Nav to latest diff page
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles="+ encodeURIComponent(article) +"&rvslots=*&rvprop=ids%7Cuser&formatversion=2&format=json", r=>{
            // We got the response
            let latestRId = r.query.pages[0].revisions[0].revid;
            let parentRId = r.query.pages[0].revisions[0].parentid;
            // Open page in new tab (has to be done here due to new security systems)
            bc.postMessage("https://en.wikipedia.org/w/index.php?title="+ encodeURIComponent(name) +"&diff="+ latestRId +"&oldid="+ parentRId +"&diffmode=source");
    });
}

function parseRecentChanges(callback) {
    // USING HTML API for one reason
    // 1. works easily with Special:RecentChanges filters
    $.get("https://en.wikipedia.org/wiki/Special:RecentChanges?`+ filters +`&action=render&enhanced=0", r=>{
        $("body").append("<div id='toDelete' style='display:none;'></div>"); // create temp div
        $("#toDelete").html(r);
        let _ = $("#toDelete").find("ul").find("li");
        let arr = [];
        let recentChanges = _.each(i=> {
            let el = _[i];
            let revId = $(el).attr("data-mw-revid"); // get revision ID
            let changeSize = $(el).find(".mw-diff-bytes").text(); // get size (+123)
            let changeTitle = $(el).find(".mw-changeslist-title").text(); // get title of page
            let changeUsername = $(el).find(".mw-userlink").text(); // get username of changer
            let tags =  $(el).find(".mw-tag-markers").text(); // get tags (mobile edit ext)
            let comment = $(el).find(".comment").text(); // get comment
            if (!isNaN(parseInt(changeSize))) {
                // Valid
                arr[i] = {
                "revID": revId,
                "changeSize": parseInt(changeSize),
                "tags": tags,
                "user": changeUsername,
                "title": changeTitle,
                "comment": comment
                }; // append data to the array
            }
        });

        $("toDelete").remove(); // dispose unneeded
        callback(arr); // we done
    });
}

    </script>
    </body>
</html>

            `, window.innerWidth, window.innerHeight); // Generate container using mdlContainer.generatecontainer aka blob in iframe

            // Init if needed
            if ($("#PTdialogContainer").length < 1) {
                // Need to init
                $("body").prepend(`
                    <div id="PTdialogContainer">
                    </div>
                `);
                // Add close event
                addMessageHandler("closeDialogPT", ()=>{
                    rw.recentChanges.dialog.close();
                    mwBody.style.overflowY = "auto";
                }); // closing
            }
            
            $("#PTdialogContainer").html(`
            <dialog class="mdl-dialog" id="rwPATROLdialog">
                ${content}
            </dialog>
            `);
            rw.recentChanges.dialog = document.querySelector('#rwPATROLdialog'); // set dialog

            $("#rwPATROLdialog").attr("style", "padding:inherit;"); // set no padding
            // Firefox issue fix
            if (! rw.recentChanges.dialog.showModal) {
                dialogPolyfill.registerDialog(rw.recentChanges.dialog);
            }

            // Resize on window change
            $(window).resize(()=>{
                $(rw.recentChanges.dialog.getElementsByTagName("iframe")[0]).attr("height",  window.innerHeight);
                $(rw.recentChanges.dialog.getElementsByTagName("iframe")[0]).attr("width",  window.innerWidth);
            });

            // Add message handler for dialog close
            addMessageHandler("rwRCPcloseDialog", ()=>{rw.recentChanges.dialog.close(); dialogEngine.enableScrolling();});

            rw.recentChanges.dialog.showModal(); // Show dialog
        }
    }
};

var messageHandlers = {"testHandler": () => {alert("Working!");}};

function addMessageHandler(msg, callback) { // calling more than once will just overwrite
    Object.assign(messageHandlers, ((a,b)=>{let _ = {}; _[a]=b; return _;})(msg, callback)); // function ab returns a good formatted obj
}

window.onmessage = e=>{
    if (messageHandlers[e.data]){messageHandlers[e.data]();} // Excecute handler if exact
    else { // We find ones that contain
        for (const evnt in messageHandlers) {
            if ((evnt.substr(evnt.length - 1) == "*") && e.data.includes(evnt.substr(0, evnt.length - 2))) { // and includes w * chopped off
                messageHandlers[evnt](e.data);
                return;
            } // if contains and ends with wildcard then we do it
        }
    }
};

// init everthing
function initRW() {
    rw.visuals.init(()=>{
        rw.visuals.toast.init();
        dialogEngine.init();

        // Quick check we have perms to use (in confirmed/autoconfirmed group)
        rw.info.featureRestrictPermissionLevel("confirmed", false, ()=>{
            // We don't have permission
            // Add red lock to the top right to show that RedWarn cannot be used
            document.getElementsByClassName("mw-indicators mw-body-content")[0].innerHTML = `
            <div id="Lock" class="icon material-icons"><span style="cursor: help; color:red;" onclick="">lock</span></div>
            <div class="mdl-tooltip" for="Lock">
                You must be Autoconfirmed or Confirmed to use RedWarn.  Please refer the user guide for more information.
            </div>
            `;
            // Now register that
            for (let item of document.getElementsByClassName("mdl-tooltip")) {
                rw.visuals.register(item); 
            }
            // A bit more of a clear error for someone who may not be paying immediate attention. Maybe we can use wikitext to send new user guide?
            mw.notify("You do not have permission to use Redwarn yet. Please refer to the user guide for more information (Error: User is NOT confirmed/autoconfirmed)", {title: "Error loading Redwarn", autoHide: "false", tag: "redwarn"});
            rw = {}; // WIPE OUT ENTIRE CLASS. We're not doing anything here.
            // That's it
        });

        // We have perms, let's continue.

        // Load config and check if updated
        rw.info.getConfig(()=> {
            rw.info.getRollbackToken(); // get rollback token
            rw.visuals.pageIcons(); // page icons once config loaded
            rw.ui.registerContextMenu(); // register context menus once config loaded

            // Add dialog animations from config
            $('head').append(`<style>${rwDialogAnimations[(rw.config.dialogAnimation == null ? "default" : rw.config.dialogAnimation)]}</style>`);

            // Check if updated
            if (rw.config.lastVersion != rw.version) {
                // We've had an update
                rw.config.lastVersion = rw.version; // update entry 
                rw.info.writeConfig(true, ()=> { // update the config file
                    // Show an update dialog
                    rw.ui.confirmDialog(`
                    <h2 style="font-weight: 200;font-size:45px;line-height: 48px;">Welcome to ${rw.logoHTML} ${rw.version}!</h2>
                    ${rw.versionSummary}
                    `,
                    "READ MORE", ()=>{
                        dialogEngine.closeDialog();
                        redirect("https://en.wikipedia.org/wiki/Wikipedia:RedWarn/bugsquasher#RedWarn_"+ rw.version + "_summary", true);
                    },
                    "LATER", ()=>{
                        dialogEngine.closeDialog();//this thing turns it off
                        rw.visuals.toast.show("You can read more later at RedWarn's page (WP:REDWARN)");//display a toast
                        
                    },168);
                });
            }

            // TODO: probably fix this mess into a URL
            // HERE REALLY REALLY NEEDS CLEANUP
                // Check if a message is in URL (i.e edit complete ext)
            if(window.location.hash.includes("#noticeApplied-")) {
                // Show toast w undo edit capabilities
                // #noticeApplied-currentEdit-pastEdit
                rw.visuals.toast.show("Message saved", "UNDO", ()=>{
                    // Just restore the version via rollback restore (this does a normal undo request)
                    rw.rollback.restore(window.location.hash.split("-")[2], "Undo message addition (via toast)");
                }, 7500);
            } else if (window.location.hash.includes("#redirectLatestRevision")) { // When latest revision loaded
                rw.visuals.toast.show("Redirected to the latest revision.", "BACK", ()=>window.history.back(), 4000); // When back clciked go back
            } else if (window.location.hash.includes("#watchLatestRedirect")) {
                // Redirected to latest by redirector, play sound
                let src = 'https://redwarn.toolforge.org/cdn/audio/newEdit.mp3';
                let audio = new Audio(src);
                audio.play();
                // enable watcher
                rw.info.changeWatch.toggle();
            } else if (window.location.hash.includes("#investigateFail")) {
                rw.visuals.toast.show("Investigation Failed. This text has not been modified in the past 500 revisions or originated when the page was created.", false, false, 10000);
            } else if (window.location.hash.includes("#investigateIncomp")) {
                rw.visuals.toast.show("The selection could not be investigated.", false, false, 10000);
            } else if (window.location.hash.includes("#configChange")) {
                rw.visuals.toast.show("Preferences saved.");
            } else if (window.location.hash.includes("#rwPendingAccept")) {
                rw.visuals.toast.show("Changes accepted.");
            } else if (window.location.hash.includes("#rwReviewUnaccept")) {
                rw.visuals.toast.show("Changes unaccepted.");
            } else if (window.location.hash.includes("#compLatest")) {
                // Go to the latest revison
                rw.info.isLatestRevision(mw.config.get("wgRelevantPageName"), 0, ()=>{}); // auto filters and redirects for us - 0 is an ID that will never be
            } else if (window.location.hash.includes("#rollbackPreview")) {
                // Rollback preview page
                $('.mw-revslider-container').html(`
                <div style="padding-left:10px;">
                    <h2>This is a rollback preview</h2>
                    To rollback, use the buttons on the left side below. Using the restore revision button <b>will not</b> warn the user and won't redirect you to the latest revision.
                </div>
                <br>
                `);

                $('.mw-revslider-container').attr("style", "border: 3px solid red;");

            } else if (window.location.hash.includes("#rollbackFailNoRev")) {
                rw.visuals.toast.show("Could not rollback as there were no recent revisions by other users. Use the history page to try and manually revert.", false, false, 15000);
            }
            
            if ($("table.diff").length > 0) { // DETECT DIFF HERE - if diff table is present
                // Diff page
                rw.rollback.loadIcons(); // load rollback icons
            } else if (mw.config.get("wgRelevantPageName").includes("Special:RecentChanges")) {
                // Recent changes page
                // Add redwarn open btn
                $(".mw-specialpage-summary").prepend(`
                <div id="openRWP" style="
                    font-size: 32px;
                    float: right;
                    background: white;
                ">
                    <span style="cursor: pointer;" onclick="rw.recentChanges.openPage(window.location.search.substr(1));">
                        ${rw.logoHTML} patrol
                    </span>
                </div>

                <div class="mdl-tooltip mdl-tooltip--large" for="openRWP">
                    Click to launch RedWarn Patrol
                </div>
                `); // Register tooltip
                for (let item of document.getElementsByClassName("mdl-tooltip")) {
                    rw.visuals.register(item); 
                }
            
            } else if (mw.config.get("wgRelevantPageName").includes("Special:Contributions")) { // Special contribs page
                rw.rollback.contribsPageIcons(); // rollback icons on current
            } else if (window.location.hash.includes("#rwPatrolAttach-RWBC_")) { // Connect to recent changes window
                let bcID = window.location.hash.split("-")[1]; // get bc id from hash
                const bc = new BroadcastChannel(bcID); // open channel
                bc.onmessage = msg=>{// On message open here
                    rw.ui.loadDialog.show("Loading...");
                    redirect(msg.data);
                } 
                // Set session storage (see below) Hopefully will only effect this window
                sessionStorage.rwBCID = bcID;
            }
            if (sessionStorage.rwBCID != null){
                //  Session storage set! Connect to bcID
                const bc = new BroadcastChannel(sessionStorage.rwBCID); // open channel
                bc.onmessage = msg=>{// On message open here
                    rw.ui.loadDialog.show("Loading...");
                    redirect(msg.data);
                } 
            }

            // Log page in recently visited (rev13)
            if (!mw.config.get("wgRelevantPageName").includes("Special:")) { // if not special page
                try {
                    if (window.localStorage.rwRecentlyVisited == null) window.localStorage.rwRecentlyVisited = "[]"; // if not set, reset to empty array
                    // Load data
                    let recentlyVisted = JSON.parse(window.localStorage.rwRecentlyVisited);
                    let rVi = recentlyVisted.indexOf(mw.config.get("wgRelevantPageName")); // get index of, if not here -1
                    if (rVi != -1) {
                        // Page is already on the list, push to top
                        recentlyVisted = arrayMove(recentlyVisted, rVi, 0); // move (from, to)
                    } else {
                        // Page isn't on list, let's add
                        recentlyVisted.unshift(mw.config.get("wgRelevantPageName")); // adds at start of array
                    }

                    // Finally
                    if (recentlyVisted.length > 20) {
                        recentlyVisted.pop(); // remove last item to ensure list stays under 20 items
                    }

                    // Now save
                    window.localStorage.rwRecentlyVisited = JSON.stringify(recentlyVisted);// Done!
                } catch (error) { // on error (maybe corrupt value)
                    console.error(error);
                    window.localStorage.rwRecentlyVisited = "[]"; // try reset to empty array and hope for the best
                }
            }


            // Pending changes
            rw.PendingChangesReview.reviewPage(); // will auto check if possible ext and add icons

            // MultiAct history
            rw.multiAct.initHistoryPage();
        }); 
    });
}

var dialogEngine = {
    "init" : ()=>{
        $("body").append(`
        <div id="dialogEngineContainer">
        </div>
        `);
        // Add events
        addMessageHandler("closeDialog", ()=>{dialogEngine.closeDialog();}); // closing
    },
    "create" : (content, noPad)=>{ 
       
        $("#dialogEngineContainer").html(`
        <dialog class="mdl-dialog" id="dialogEngineDialog">
            `+ content +`
        </dialog>
        `);


        dialogEngine.dialog = document.querySelector('#dialogEngineDialog');

        if (noPad) $("#dialogEngineDialog").attr("style", "padding:inherit;"); // if no padding requested

        // Firefox issue fix
        if (! dialogEngine.dialog.showModal) {
            dialogPolyfill.registerDialog(dialogEngine.dialog);
        }
        
        return dialogEngine.dialog;
    },
    "closeDialog" : ()=> {
        // Close the dialog (animated)
        $(dialogEngine.dialog)
        .addClass("closeAnimate")
        .on("webkitAnimationEnd", ()=>{
            // Animation finished
            dialogEngine.dialog.close();
        });

        // Make sure to reenable scrolling
        dialogEngine.enableScrolling();
    },

    "freezeScrolling" : ()=>{// stop the page from scrolling
        $("body").css("overflow", "hidden");
    }, 

    "enableScrolling" : ()=>{
        $("body").css("overflow", "");
    }
}
/*
(c) Ed E 2020

NOTICE: All cross-domain addresses in containers MUST BE ABSOLUTE (i.e https:// rather than //)
*/
var mdlContainers = {
    "generateHtml" : innerContent => {
        let content = `
        <script src="https://redwarn.toolforge.org/cdn/js/jQuery.js"></script>
        <link href="https://tools-static.wmflabs.org/fontcdn/css?family=Roboto:100,100italic,300,300italic,400,400italic,500,500italic,700,700italic,900,900italic&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese" rel="stylesheet">
        <link rel="stylesheet" href="https://redwarn.toolforge.org/cdn/css/materialicons.css">
        <script defer src="https://redwarn.toolforge.org/cdn/js/mdl.js"></script>
        <script src="https://redwarn.toolforge.org/cdn/js/dialogPolyfill.js"></script> <!-- firefox being dumb -->
        `;
        
        // Themes
        let theme = "";
        if (rw.config.colTheme){
            theme = rw.config.colTheme;
        } else {
            theme = "blue-indigo"; // default theme
        }
        
        content += `
        <link rel="stylesheet" href="https://redwarn.toolforge.org/cdn/css/material.${theme}.min.css" />
        <!-- Material dropdown - MIT License, Copyright (c) 2016 CreativeIT https://github.com/CreativeIT/getmdl-select/blob/master/LICENSE.txt -->
        <style>
        .getmdl-select{outline:none}.getmdl-select .mdl-textfield__input{cursor:pointer}.getmdl-select .selected{background-color:#ddd}.getmdl-select .mdl-icon-toggle__label{float:right;margin-top:-30px;color:rgba(0,0,0,0.4);transform:rotate(0);transition:transform 0.3s}.getmdl-select.is-focused .mdl-icon-toggle__label{color:#3f51b5;transform:rotate(180deg)}.getmdl-select .mdl-menu__container{width:100% !important;margin-top:2px}.getmdl-select .mdl-menu__container .mdl-menu{width:100%}.getmdl-select .mdl-menu__container .mdl-menu .mdl-menu__item{font-size:16px}.getmdl-select__fix-height .mdl-menu__container .mdl-menu{overflow-y:auto;max-height:288px !important}.getmdl-select__fix-height .mdl-menu.mdl-menu--top-left{bottom:auto;top:0}
        </style>
        <script defer>
            "use strict";!function(){function e(){getmdlSelect.init(".getmdl-select")}window.addEventListener?window.addEventListener("load",e,!1):window.attachEvent&&window.attachEvent("onload",e)}();var getmdlSelect={_defaultValue:{width:300},_addEventListeners:function(e){var t=e.querySelector("input"),n=e.querySelector('input[type="hidden"]'),l=e.querySelectorAll("li"),a=e.querySelector(".mdl-js-menu"),o=e.querySelector(".mdl-icon-toggle__label"),i="",c="",s="",u=!1,d=function(o){var i=o.textContent.trim();if(t.value=i,l.forEach(function(e){e.classList.remove("selected")}),o.classList.add("selected"),e.MaterialTextfield.change(i),setTimeout(function(){e.MaterialTextfield.updateClasses_()},250),n.value=o.dataset.val||"",c=t.value,s=n.value,"createEvent"in document){var u=document.createEvent("HTMLEvents");u.initEvent("change",!1,!0),a.MaterialMenu.hide(),t.dispatchEvent(u)}else t.fireEvent("onchange")},r=function(){u=!1,t.value=c,n.value=s,e.querySelector(".mdl-menu__container").classList.contains("is-visible")||e.classList.remove("is-focused");var l=document.querySelectorAll(".getmdl-select .mdl-js-menu");[].forEach.call(l,function(e){e.MaterialMenu.hide()});var o=new Event("closeSelect");a.dispatchEvent(o)};document.body.addEventListener("click",r,!1),e.onkeydown=function(l){9==l.keyCode&&(t.value=c,n.value=s,a.MaterialMenu.hide(),e.classList.remove("is-focused"))},t.onfocus=function(e){a.MaterialMenu.show(),a.focus(),u=!0},t.onblur=function(e){e.stopPropagation()},t.onclick=function(t){t.stopPropagation(),a.classList.contains("is-visible")?(a.MaterialMenu.hide(),u=!1):(a.MaterialMenu.show(),r(),e.classList.add("is-focused"),u=!0)},t.onkeydown=function(l){27==l.keyCode&&(t.value=c,n.value=s,a.MaterialMenu.hide(),e.MaterialTextfield.onBlur_(),""!==i&&(e.querySelector(".mdl-textfield__label").textContent=i,i=""))},a.addEventListener("closeSelect",function(l){t.value=c,n.value=s,e.classList.remove("is-focused"),""!==i&&(e.querySelector(".mdl-textfield__label").textContent=i,i="")}),a.onkeydown=function(l){27==l.keyCode&&(t.value=c,n.value=s,e.classList.remove("is-focused"),""!==i&&(e.querySelector(".mdl-textfield__label").textContent=i,i=""))},o&&(o.onclick=function(l){l.stopPropagation(),u?(a.MaterialMenu.hide(),u=!1,e.classList.remove("is-focused"),e.MaterialTextfield.onBlur_(),t.value=c,n.value=s):(r(),e.MaterialTextfield.onFocus_(),t.focus(),a.MaterialMenu.show(),u=!0)}),[].forEach.call(l,function(n){n.onfocus=function(){e.classList.add("is-focused");var l=n.textContent.trim();t.value=l,e.classList.contains("mdl-textfield--floating-label")||""!=i||(i=e.querySelector(".mdl-textfield__label").textContent.trim(),e.querySelector(".mdl-textfield__label").textContent="")},n.onclick=function(){d(n)},n.dataset.selected&&d(n)})},init:function(e){var t=document.querySelectorAll(e);[].forEach.call(t,function(e){getmdlSelect._addEventListeners(e),componentHandler.upgradeElement(e),componentHandler.upgradeElement(e.querySelector("ul"))})}};
        </script>
        <!-- End material dropdown -->
        <body>
        `+innerContent+`
        </body>
        `;
        return content; // return
    },

    "generateContainer" : function(innerContent, width, height, fill) { // fill sizes mdl containers in dialogEngine to ALWAYS be screen size
        if (fill) {
            // If fill mode on, fit to window
            $(window).resize(()=>{
                $(dialogEngine.dialog.getElementsByTagName("iframe")[0]).attr("height",  window.innerHeight);
                $(dialogEngine.dialog.getElementsByTagName("iframe")[0]).attr("width",  window.innerWidth);
            });
        }

        let url = URL.createObjectURL(new Blob([mdlContainers.generateHtml(innerContent)], { type: 'text/html' })); // blob url
        return `<iframe width="`+width+`" height="`+height+`" src="`+ url + `" frameborder="0" scrolling="no" style="max-height: 100%;"></iframe>`;
    }
}
// Data originally processed from Twinkle Source at https://github.com/azatoth/twinkle
rw.rules = [
    {
        "name": "Vandalism",
        "catagory": "Common warnings",
        "template": "uw-vandalism",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Disruptive editing",
        "catagory": "Common warnings",
        "template": "uw-disruptive",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Editing tests",
        "catagory": "Common warnings",
        "template": "uw-test",
        "warningLevels": [
            1,
            2,
            3
        ]
    },
    {
        "name": "Removal of content, blanking",
        "catagory": "Common warnings",
        "template": "uw-delete",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Generic warning (for template series missing level 4)",
        "catagory": "Common warnings",
        "template": "uw-generic",
        "warningLevels": [
            4
        ]
    },
    {
        "name": "Adding unreferenced information about living persons",
        "catagory": "Article Conduct Warnings",
        "template": "uw-biog",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Addition of defamatory content",
        "catagory": "Article Conduct Warnings",
        "template": "uw-defamatory",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Introducing deliberate factual errors",
        "catagory": "Article Conduct Warnings",
        "template": "uw-error",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Frequent or mass changes to genres without consensus or reference",
        "catagory": "Article Conduct Warnings",
        "template": "uw-genre",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Image-related vandalism",
        "catagory": "Article Conduct Warnings",
        "template": "uw-image",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Using improper humor",
        "catagory": "Article Conduct Warnings",
        "template": "uw-joke",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Adding original research, including unpublished syntheses of sources",
        "catagory": "Article Conduct Warnings",
        "template": "uw-nor",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Censorship of material",
        "catagory": "Article Conduct Warnings",
        "template": "uw-notcensored",
        "warningLevels": [
            1,
            2,
            3
        ]
    },
    {
        "name": "Ownership of articles",
        "catagory": "Article Conduct Warnings",
        "template": "uw-own",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Removal of maintenance templates",
        "catagory": "Article Conduct Warnings",
        "template": "uw-tdel",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Addition of unsourced or improperly cited material",
        "catagory": "Article Conduct Warnings",
        "template": "uw-unsourced",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Using Wikipedia for advertising or promotion",
        "catagory": "Promotions and spam",
        "template": "uw-advert",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Not adhering to neutral point of view",
        "catagory": "Promotions and spam",
        "template": "uw-npov",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Paid editing without disclosure under the Wikimedia Terms of Use",
        "catagory": "Promotions and spam",
        "template": "uw-paid",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Adding spam links",
        "catagory": "Promotions and spam",
        "template": "uw-spam",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Not assuming good faith",
        "catagory": "Behavior towards other editors",
        "template": "uw-agf",
        "warningLevels": [
            1,
            2,
            3
        ]
    },
    {
        "name": "Harassment of other users",
        "catagory": "Behavior towards other editors",
        "template": "uw-harass",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Personal attack directed at a specific editor",
        "catagory": "Behavior towards other editors",
        "template": "uw-npa",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Improper use of warning or blocking template",
        "catagory": "Behavior towards other editors",
        "template": "uw-tempabuse",
        "warningLevels": [
            1,
            2
        ]
    },
    {
        "name": "Removing {{afd}} templates",
        "catagory": "Removal of deletion tags",
        "template": "uw-afd",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Removing {{blp prod}} templates",
        "catagory": "Removal of deletion tags",
        "template": "uw-blpprod",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Removing file deletion tags",
        "catagory": "Removal of deletion tags",
        "template": "uw-idt",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Removing speedy deletion tags",
        "catagory": "Removal of deletion tags",
        "template": "uw-speedy",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Triggering the edit filter",
        "catagory": "Other",
        "template": "uw-attempt",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Using talk page as forum",
        "catagory": "Other",
        "template": "uw-chat",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Creating inappropriate pages",
        "catagory": "Other",
        "template": "uw-create",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Manual of style",
        "catagory": "Other",
        "template": "uw-mos",
        "warningLevels": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "name": "Page moves against naming conventions or consensus",
        "catagory": "Other",
        "template": "uw-move",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Refactoring others' talk page comments",
        "catagory": "Other",
        "template": "uw-tpv",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Uploading unencyclopedic images",
        "catagory": "Other",
        "template": "uw-upload",
        "warningLevels": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Bad AIV report",
        "catagory": "Reminders",
        "template": "uw-aiv",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Creating autobiographies",
        "catagory": "Reminders",
        "template": "uw-autobiography",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Adding incorrect categories",
        "catagory": "Reminders",
        "template": "uw-badcat",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Adding inappropriate entries to lists",
        "catagory": "Reminders",
        "template": "uw-badlistentry",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Being harsh to newcomers",
        "catagory": "Reminders",
        "template": "uw-bite",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Conflict of interest",
        "catagory": "Reminders",
        "template": "uw-coi",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Introducing controversial material",
        "catagory": "Reminders",
        "template": "uw-controversial",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Copying text to another page",
        "catagory": "Reminders",
        "template": "uw-copying",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Adding speculative or unconfirmed information",
        "catagory": "Reminders",
        "template": "uw-crystal",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Cut and paste moves",
        "catagory": "Reminders",
        "template": "uw-c&pmove",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Incorrect edit to a disambiguation page",
        "catagory": "Reminders",
        "template": "uw-dab",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Unnecessarily changing date formats",
        "catagory": "Reminders",
        "template": "uw-date",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Removing proper sources containing dead links",
        "catagory": "Reminders",
        "template": "uw-deadlink",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "User should draft in draftspace or userspace",
        "catagory": "Reminders",
        "template": "uw-draftfirst",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Not using edit summary",
        "catagory": "Reminders",
        "template": "uw-editsummary",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Adding external links to the body of an article",
        "catagory": "Reminders",
        "template": "uw-elinbody",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Not communicating in English",
        "catagory": "Reminders",
        "template": "uw-english",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Hasty addition of speedy deletion tags",
        "catagory": "Reminders",
        "template": "uw-hasty",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Italicize books, films, albums, magazines, TV series, etc within articles",
        "catagory": "Reminders",
        "template": "uw-italicize",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Unnecessarily changing between British and American English",
        "catagory": "Reminders",
        "template": "uw-lang",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Excessive addition of redlinks or repeated blue links",
        "catagory": "Reminders",
        "template": "uw-linking",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Incorrect use of minor edits check box",
        "catagory": "Reminders",
        "template": "uw-minor",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Creating non-English articles",
        "catagory": "Reminders",
        "template": "uw-notenglish",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "We use consensus, not voting",
        "catagory": "Reminders",
        "template": "uw-notvote",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Copying from public domain sources without attribution",
        "catagory": "Reminders",
        "template": "uw-plagiarism",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Use preview button to avoid mistakes",
        "catagory": "Reminders",
        "template": "uw-preview",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Indiscriminate removal of redlinks",
        "catagory": "Reminders",
        "template": "uw-redlink",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Reverting self tests",
        "catagory": "Reminders",
        "template": "uw-selfrevert",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Wikipedia is not a social network",
        "catagory": "Reminders",
        "template": "uw-socialnetwork",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Be bold and fix things yourself",
        "catagory": "Reminders",
        "template": "uw-sofixit",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Adding spoiler alerts or removing spoilers from appropriate sections",
        "catagory": "Reminders",
        "template": "uw-spoiler",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Talk in article",
        "catagory": "Reminders",
        "template": "uw-talkinarticle",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Not signing posts",
        "catagory": "Reminders",
        "template": "uw-tilde",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Posting at the top of talk pages",
        "catagory": "Reminders",
        "template": "uw-toppost",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Stale userspace draft",
        "catagory": "Reminders",
        "template": "uw-userspace draft finish",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Adding video game walkthroughs, cheats or instructions",
        "catagory": "Reminders",
        "template": "uw-vgscope",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Place user warning templates when reverting vandalism",
        "catagory": "Reminders",
        "template": "uw-warn",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Using inaccurate or inappropriate edit summaries",
        "catagory": "Reminders",
        "template": "uw-wrongsummary",
        "warningLevels": [
            0
        ]
    },
    {
        "name": "Potential three-revert rule violation; see also uw-ew",
        "catagory": "Policy Violation Warnings",
        "template": "uw-3rr",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Affiliate marketing",
        "catagory": "Policy Violation Warnings",
        "template": "uw-affiliate",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Use of multiple accounts (assuming good faith)",
        "catagory": "Policy Violation Warnings",
        "template": "uw-agf-sock",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Creating attack pages",
        "catagory": "Policy Violation Warnings",
        "template": "uw-attack",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Bot username",
        "catagory": "Policy Violation Warnings",
        "template": "uw-botun",
        "warningLevels": [
            6
        ],
        "note" : "Username notices should not be added for blatant violations. In these cases, click the gavel to report the username to the admins."
    },
    {
        "name": "Canvassing",
        "catagory": "Policy Violation Warnings",
        "template": "uw-canvass",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Copyright violation",
        "catagory": "Policy Violation Warnings",
        "template": "uw-copyright",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Linking to copyrighted works violation",
        "catagory": "Policy Violation Warnings",
        "template": "uw-copyright-link",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Copyright violation (with explanation for new users)",
        "catagory": "Policy Violation Warnings",
        "template": "uw-copyright-new",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Removing {{copyvio}} template from articles",
        "catagory": "Policy Violation Warnings",
        "template": "uw-copyright-remove",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Edit summary triggering the edit filter",
        "catagory": "Policy Violation Warnings",
        "template": "uw-efsummary",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Edit warring (stronger wording)",
        "catagory": "Policy Violation Warnings",
        "template": "uw-ew",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Edit warring (softer wording for newcomers)",
        "catagory": "Policy Violation Warnings",
        "template": "uw-ewsoft",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Hijacking articles",
        "catagory": "Policy Violation Warnings",
        "template": "uw-hijacking",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Creating hoaxes",
        "catagory": "Policy Violation Warnings",
        "template": "uw-hoax",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Making legal threats",
        "catagory": "Policy Violation Warnings",
        "template": "uw-legal",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Editing while logged out",
        "catagory": "Policy Violation Warnings",
        "template": "uw-login",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Usage of multiple IPs",
        "catagory": "Policy Violation Warnings",
        "template": "uw-multipleIPs",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Personal info",
        "catagory": "Policy Violation Warnings",
        "template": "uw-pinfo",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Recreating salted articles under a different title",
        "catagory": "Policy Violation Warnings",
        "template": "uw-salt",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Sockpuppetry",
        "catagory": "Policy Violation Warnings",
        "template": "uw-socksuspect",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Userpage vandalism",
        "catagory": "Policy Violation Warnings",
        "template": "uw-upv",
        "warningLevels": [
            6
        ]
    },
    {
        "name": "Username is against policy",
        "catagory": "Policy Violation Warnings",
        "template": "uw-username",
        "warningLevels": [
            6
        ],
        "note" : "Username notices should not be added for blatant violations. In these cases, click the gavel to report the username to the admins."
    },
    {
        "name": "Username is against policy, and conflict of interest",
        "catagory": "Policy Violation Warnings",
        "template": "uw-coi-username",
        "warningLevels": [
            6
        ],
        "note" : "Username notices should not be added for blatant violations. In these cases, click the gavel to report the username to the admins."
    },
    {
        "name": "Userpage or subpage is against policy",
        "catagory": "Policy Violation Warnings",
        "template": "uw-userpage",
        "warningLevels": [
            6
        ],
        "note" : "Username notices should not be added for blatant violations. In these cases, click the gavel to report the username to the admins."
    }
];

// Used to manage the toast notifications
// init is seperate here as it isn't always needed or used

/*
    EXAMPLE SYNTAX:
    Required somewhere: rw.visuals.toast.init();
    Then:
    (for no button) rw.visuals.toast.show("Text", false, false, 2000);
    (for button) rw.visuals.toast.show("Text", "BtnTxt", function() {
        // your code here
    }, 5000);
*/

rw.visuals.toast = {
    
    "active" : false,

    "init" : function(){
        if (!rw.visuals.toast.active) { // If init already done, no need
            $('body').append(`
                <div id="rw-toast" class="mdl-js-snackbar mdl-snackbar">
                <div class="mdl-snackbar__text"></div>
                <button class="mdl-snackbar__action" type="button"></button>
                </div>
            `); // init
            (function() {
                'use strict';
                window['counter'] = 0;
                var toast = document.querySelector('#rw-toast');
                rw.visuals.register(toast); // register comp

                // create function
                rw.visuals.toast.show = (text, buttonTxt, btnClick, tOut) => {
                    'use strict';
                    if (buttonTxt) {
                        // Show with action and button
                        toast.MaterialSnackbar.showSnackbar({message: text, actionHandler: btnClick, actionText: buttonTxt, timeout: tOut}); 
                    } else {
                        // Show just message
                        toast.MaterialSnackbar.showSnackbar({message: text, timeout: tOut});
                    }
                };
                }());

            // Init done. Register.
            rw.visuals.toast.active = true;
        }
    },

    "show" : function(text, buttonTxt, btnClick) {} // made in init()

}
// API calls ext.
rw.info = { // API
    // Rollback token
    "rollbackToken" : "",
    "getRollbackToken" : () => {
        // Ran on load to allow for ?action=rollback request
        rw.info.featureRestrictPermissionLevel("rollbacker", ()=>{
            $.getJSON(rw.wikiAPI + "?action=query&meta=tokens&type=rollback&format=json", r=>{
                rw.info.rollbackToken = r.query.tokens.rollbacktoken; // Set from response
            });
        },()=>{});
    },
    "targetUsername": un=>{
        if (un) {return un;} // return username if defined
        return mw.config.values.wgRelevantUserName},
    "getUsername":  ()=>{return mw.config.values.wgUserName},

    "isUserAnon" : un=> {
        // Detect if user is an IP address
        let regEx = un.match(/([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(\d{1,3}\.){3}\d{1,3}/g); // this regex matches all ipv4 and ipv6 addresses. thanks: http://regexlib.com/UserPatterns.aspx?authorId=3e359e7e-cff5-4149-ba94-7baeae099d9c
        return (regEx != null); // If matches is not null then yes
    },

    "getConfig": (callback, resetToDefault) => { // IF RESETTODEFAULT IS TRUE IT WILL DO IT
        
        let defaultConfig = { // Default config on reset or anything like that
            "lastVersion" : rw.version
        };

        if (resetToDefault) {rw.config = defaultConfig; rw.info.writeConfig(); return;} // If reset to default, do it

        if (rw.config) {callback();} // if config loaded, no need to reload


        // gets user config from their page. 
        let user = rw.info.getUsername();
        $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles=User:"+user+"/redwarnConfig.js&rvslots=*&rvprop=content&formatversion=2&format=json", latestR=>{
            // Grab text from latest revision of talk page
            // Check if exists
            let revisionWikitext = "";
            if (!latestR.query.pages[0].missing) { // If page isn't missing, i.e exists
                revisionWikitext = latestR.query.pages[0].revisions[0].slots.main.content;
            } else {
                // Config doesn't exist  we need to make it
                console.log("creating config file");
                rw.config = defaultConfig;
                rw.info.writeConfig(()=>{if (callback != null) callback();}); // write new config file and callback if possible, else, add welcome screen here
                return;
            }

            // Now that's done, verify config file / load it
            try {
                eval(revisionWikitext); // exec script

                if (!rw.config) throw "no config";

                // Process template packs (b64encoded string)
                if (rw.config.templatePacks != null) {
                    rw.config.templatePacks = JSON.parse(atob(rw.config.templatePacks));
                    // Verify
                    if (typeof rw.config.templatePacks == "string") rw.config.templatePacks = JSON.parse(atob(rw.config.templatePacks)); // if issue, throw error and return to default
                }

                // Load rollback icons
                if (rw.config.rwRollbackIcons != null) {
                    // More info in preferences.html and rollback.html
                    let newRwIcons = []; // object containing the new object
                    rw.config.rwRollbackIcons.forEach(icon=>{ // for each icon
                        // Add to ours at the new location
                        newRwIcons[icon.shift] = rw.rollback.icons[icon.index];
                        // Now modify for each modifier in modify object
                        for (const key in icon.modify) {
                            if (icon.modify.hasOwnProperty(key)) {
                                const value = icon.modify[key];
                                newRwIcons[icon.shift][key] = value; // apply modifier
                            }
                        }

                        // Set original index for preferences
                        newRwIcons[icon.shift].originalIndex = icon.index; // DO NOT set this to iconIndex as iconIndex is for rendering - this is for config and preferences ONLY
                    });

                    // Now update rwrollbackicons
                    rw.rollback.icons = newRwIcons;
                }

            } catch (err) {
                // Corrupt config file
                console.log(rw.config);
                rw.config = defaultConfig;
                console.error(err);
                // Reset config file to defaults
                rw.info.writeConfig(true, ()=>rw.ui.confirmDialog(`Sorry, but an issue has caused your RedWarn preferences to be reset to default. Would you like to report a bug?`, 
                "Open Feedback and Support", ()=>{
                    rw.ui.sendFeedback(`<!-- DO NOT EDIT BELOW THIS LINE! THANK YOU -->
                    rwConfig load - Error info: <code><nowiki>
                    ` +err + `</nowiki></code>
                    [[User:`+user+`/redwarnConfig.js|Open user rwConfig.js]]
                    `);
                },
                
                "DISMISS", ()=>{
                    dialogEngine.closeDialog();
                }, 20));   
            }
            

            callback(); // we done
        });
    },

    "writeConfig": (noRedirect, callback)=> { // CALLBACK ONLY IF NOREDIRECT IS TRUE.
        let rwConfigTemplate = rw.config.templatePacks; // for restore
        // Handle templates (saved as b64 string)
        if (rw.config.templatePacks != null) rw.config.templatePacks = btoa(JSON.stringify(rw.config.templatePacks));
        if (!noRedirect) rw.ui.loadDialog.show("Saving preferences...");
        // Write config to the users page and refresh
        let finalTxt = `
/*<nowiki>                                                    
This is your RedWarn configuration file. It is recommended that you don't edit this yourself and use RedWarn prefrences instead.
It is writen in JSON formatting and is excecuted every time RedWarn loads.

If somebody has asked you to add code to this page, DO NOT do so as it may comprimise your account and will be reverted as soon as any configuration value changes.

!!! Do not edit below this line unless you understand the risks! If rw.config isn't defined, this file will be reset. !!!
*/
rw.config = `+ JSON.stringify(rw.config) +"; //</nowiki>"; // generate config text
        $.post(rw.wikiAPI, {  // LOCALISATION ISSUE!!
                "action": "edit",
                "format": "json",
                "token" : mw.user.tokens.get("csrfToken"),
                "title" : "User:"+ rw.info.getUsername() + "/redwarnConfig.js",
                "summary" : "Updating user configuration [[w:en:WP:RW|(RW "+ rw.version +")]]", // summary sign here
                "text": finalTxt,
                "tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
            }).done(dt => {
                // We done. Check for errors, then callback appropriately
                if (!dt.edit) {
                    // Error occured or other issue
                    console.error(dt);
                    rw.visuals.toast.show("Sorry, there was an error. See the console for more info. Your changes have not been saved.");
                } else {
                    // Success!
                    if (noRedirect) {rw.config.templatePacks = rwConfigTemplate; callback(); return;}; // DO NOT continue if no redirect is requested
                    window.location.hash = "#configChange";
                    window.location.reload(); // we done
                }
            });
    },

    "featureRestrictPermissionLevel": (l, callback, callbackIfNot)=> {
        // Restrict feature to users in this group
        mw.user.getGroups(g=>{
            let hasPerm = g.includes(l);
            if (!hasPerm) hasPerm = g.includes("sysop"); // admins override all feature restrictions if we don't have them
            
            if ((l == "confirmed") && !hasPerm) {hasPerm = g.includes("autoconfirmed");} // Due to 2 types of confirmed user, confirmed and autoconfirmed, we have to check both
            if (hasPerm) {
                // Has the permission needed
                if (callback) {
                    callback();
                }
            } else {
                if (callbackIfNot) {
                    // Make no perm callback
                    callbackIfNot();
                } else {
                    // Show no perm toast
                    rw.visuals.toast.show("Your account doesn't have permission to do that yet.", false, false, 5000);
                }
            }
        });
    },

    "getRelatedPage" : (pg)=> { // TODO - APPEND &VANARTICLE LIKE TWINKLE FOR THIS!
        if (pg) {return pg;} // return page if defined
        try {
            let x = mw.util.getParamValue('vanarticle');
            if (x != null) {return x;} else {return "";}
        } catch (er) {
            // If none
            return "error";
        }  
    },

    "parseWikitext" : (wikiTxt, callback) => { // Uses Wikipedia's API to turn Wikitext to string. NEED TO USE POST IF USERPAGE IS LARGE EXT..
        $.post(rw.wikiAPI, {
            "action": "parse",
            "format": "json",
            "contentmodel" : "wikitext",
            "prop": "text",
            "pst": true,
            "assert": "user",
            "text": wikiTxt,
            "tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
        }).done(r => {
            let processedResult = r.parse.text['*'].replace(/\/\//g, "https://").replace(/href=\"\/wiki/g, `href=rw.wikiBase+"/wiki`); // regex replace w direct urls
            callback(processedResult); // make callback w HTML
        });
    },

    "lastWarningLevel" : (user, callback)=> { // callback(wLevel. thisMonthsNotices, userPg) 0 none 1 notice 2 caution 3 warning 4 final warning
        // Get the last warning level of a user this month
        $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles=User_talk:"+user+"&rvslots=*&rvprop=content&formatversion=2&format=json", latestR=>{
            // Grab text from latest revision of talk page
            // Check if exists
            let revisionWikitext = "";
            if (!latestR.query.pages[0].missing) { // If page isn't missing, i.e exists
                revisionWikitext = latestR.query.pages[0].revisions[0].slots.main.content;
            } else {
                // Return that record is clean as no past warnings due to page not existing
                callback(0, "Talk page doesn't exist.", "Talk page doesn't exist."); // exit
                return;
            }
            let wikiTxtLines = revisionWikitext.split("\n");
            // let's continue
            // Returns date in == Month Year == format and matches
            let currentDateHeading = ((d)=>{return "== " + ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()] + " " + (1900 + d.getYear()) + " =="})(new Date);
            
            // rev13, add alt without space
            let currentAltDateHeading = ((d)=>{return "==" + ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()] + " " + (1900 + d.getYear()) + "=="})(new Date);
            
            let pageIncludesCurrentDate = wikiTxtLines.includes(currentDateHeading);
            let pageIncludesCurrentAltDate = wikiTxtLines.includes(currentAltDateHeading);

            if ((!pageIncludesCurrentDate) && (!pageIncludesCurrentAltDate)) {
                // No warnings this month
                callback(0, "No notices for this month.", revisionWikitext);
                return;
            } else if ((!pageIncludesCurrentDate) && (pageIncludesCurrentAltDate)) currentDateHeading = currentAltDateHeading; // If ==Date== is there but == Date == isn't, use ==Date== instead.

            let highestWarningLevel = 0; // Set highest to nothing so if there is a date title w nothing in then that will be reported 
            let thisMonthsNotices = ""; // for dialog
            // For each line
            for (let i = wikiTxtLines.indexOf(currentDateHeading) + 1; i < wikiTxtLines.length; i++) {
                if (wikiTxtLines[i].startsWith("==")) {
                    // New section
                    break; // exit the loop
                }

                // Check if it contains logo for each level
                thisMonthsNotices += wikiTxtLines[i]; // Add to this months
                if (wikiTxtLines[i].match(/(File:|Image:)Stop hand nuvola.svg/gi)) { // Level 4 warning
                    // This is the highest warning level. We can leave now
                    highestWarningLevel = 4;
                    break; // exit the loop
                }

                // Not using elseif in case of formatting ext..

                if (wikiTxtLines[i].match(/(File:|Image:)(Nuvola apps important.svg|Ambox warning pn.svg)/gi)) { // Level 3 warning
                    highestWarningLevel = 3; // No need for if check as highest level exits
                }

                if (wikiTxtLines[i].match(/(File:|Image:)Information orange.svg/gi)) { // Level 2 warning 
                    if (highestWarningLevel < 3) {
                        // We can set
                        highestWarningLevel = 2;
                    }
                }

                if (wikiTxtLines[i].match(/(File:|Image:)Information.svg/gi)) { // Level 1 notice
                    if (highestWarningLevel < 2) {
                        // We can set
                        highestWarningLevel = 1;
                    }
                }
            } // End for loop

            callback(highestWarningLevel, thisMonthsNotices, revisionWikitext); // We done

        });
    },// End lastWarningLevel

    "addWikiTextToUserPage" : (user, text, underDate, summary, blacklist, blacklistToast, callback) => {
        if ((user == null) || (user.toLowerCase() == "undefined")) {
            // Stop it from being sent to User:undefined
            // TODO: Add callback because likely bug
            rw.visuals.toast.show("Sorry, an error occured. (user undef.)");
            return;
        }
        if (callback == null) rw.ui.loadDialog.show("Saving message..."); // show load if no callback
        // Add text to a page. If underdate true, add it under a date marker
        $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles=User_talk:"+user+"&rvslots=*&rvprop=content&formatversion=2&format=json", latestR=>{
            // Grab text from latest revision of talk page
            // Check if exists
            let revisionWikitext = "";
            if (!latestR.query.pages[0].missing) { // If page isn't missing, i.e exists
                revisionWikitext = latestR.query.pages[0].revisions[0].slots.main.content;
            } // else we keep to ""
            let wikiTxtLines = revisionWikitext.split("\n");
            let finalTxt = "";

            // Check blacklist (if defined)
            if (blacklist) {
                if (revisionWikitext.includes(blacklist)) {
                    // Don't continue and show toast
                    rw.ui.loadDialog.close();
                    rw.visuals.toast.show(blacklistToast, false, false, 5000);
                    return;
                }
            }

            // let's continue
            // Returns date in == Month Year == format and matches
            let currentDateHeading = ((d)=>{return "== " + ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()] + " " + (1900 + d.getYear()) + " =="})(new Date);
            let pageIncludesCurrentDate = wikiTxtLines.includes(currentDateHeading);
            // rev13, add alt without space (i.e ==Month Year==)
            let currentAltDateHeading = ((d)=>{return "==" + ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()] + " " + (1900 + d.getYear()) + "=="})(new Date);
            let pageIncludesCurrentAltDate = wikiTxtLines.includes(currentAltDateHeading);

            if ((!pageIncludesCurrentDate) && (pageIncludesCurrentAltDate)) { // If ==Date== is there but == Date == isn't, use ==Date== instead.
                currentDateHeading = currentAltDateHeading;
                pageIncludesCurrentDate = true;
            } 
            
            // Let's continue :)
            if (underDate) {
                if (pageIncludesCurrentDate) {
                    // Locate and add text in section

                    // Locate where the current date section ends so we can append ours to the bottom
                    let locationOfLastLine = wikiTxtLines.indexOf(currentDateHeading) + 1; // in case of date heading w nothing under it
                    for (let i = wikiTxtLines.indexOf(currentDateHeading) + 1; i < wikiTxtLines.length; i++) {
                        if (wikiTxtLines[i].startsWith("==")) { 
                            // New section
                            locationOfLastLine = i - 1; // the line above is therefore the last
                            console.log("exiting loop: " +wikiTxtLines[locationOfLastLine]);
                            break; // exit the loop
                        } else if (i == wikiTxtLines.length - 1) {
                            // End of page, let's break and set location of last line.
                            locationOfLastLine = i;
                            break; // exit loop
                        }
                    }
                    console.log(locationOfLastLine);
                    if (locationOfLastLine == wikiTxtLines.length - 1) {
                        // To prevent to end notices squishing against eachother
                        // Same as without, but we just include the date string at bottom of page
                        wikiTxtLines.push(["\n" + text]);
                    } else {
                        wikiTxtLines.splice(locationOfLastLine, 0, ["\n" + text]); // Add notice to array at correct position. Note the "" at the start is for a newline to seperate from prev content
                    }
                } else { // Page doesn't have current date
                    // Same as without, but we just include the date string at bottom of page
                    wikiTxtLines.push(["\n" + currentDateHeading + "\n" + text]);
                }
            } else {
                // No need to add to date. Just shove at the bottom of the page
                wikiTxtLines.push([text]);
            }

            // Process final string
            wikiTxtLines.forEach(ln => finalTxt = finalTxt + ln + "\n"); // Remap to lines
            console.log(finalTxt);

            // Push edit using CSRF token
            $.post(rw.wikiAPI, {
                "action": "edit",
                "format": "json",
                "token" : mw.user.tokens.get("csrfToken"),
                "title" : "User_talk:"+ user,
                "summary" : summary + " [[w:en:WP:RW|(RW "+ rw.version +")]]", // summary sign here
                "text": finalTxt,
                "tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
            }).done(dt => {
                // We done. Check for errors, then callback appropriately
                if (!dt.edit) {
                    // Error occured or other issue
                    console.error(dt);
                    rw.ui.loadDialog.close();
                    rw.visuals.toast.show("Sorry, there was an error. See the console for more info. Your message has not been sent.");
                    // Reshow dialog
                    dialogEngine.dialog.showModal();
                } else {
                    // Success! 
                    if (callback != null) {callback(); return;}; // callback and stop if set, else..

                    // Redirect to complete page
                    let reloadNeeded = window.location.href.includes(rw.wikiBase+"/wiki/User_talk:"+ user); // if we are already on the talk page we need to refresh as this would just change the hash
                    redirect(rw.wikiBase+"/wiki/User_talk:"+ user + "#noticeApplied-" + dt.edit.newrevid + "-" + dt.edit.oldrevid); // go to talk page
                    if (reloadNeeded) {location.reload();}
                    // We done
                }
            });
        }); 
    }, // end addTextToUserPage

    "quickWelcome" : un=>{
        // Quickly welcome the current user
        // Check if registered or unregistered user
        if (rw.info.isUserAnon(rw.info.targetUsername(un))) {
            // IP Editor - send IP welcome
            rw.info.addWikiTextToUserPage(rw.info.targetUsername(un), "\n"+ rw.welcomeIP() +" " + rw.sign() +"\n", false, "Welcome! (IP)");
        } else {
            // Registered user
            rw.info.addWikiTextToUserPage(rw.info.targetUsername(un), "\n"+ rw.welcome() +" " + rw.sign() +"\n", false, "Welcome!");
        }
    },

    // Used for rollback
    "isLatestRevision" : (name, revID, callback, noRedirectCallback) => { // callback(username) only if successful!! in other cases, will REDIRECT to latest revison compare page
        // Check if revsion is the latest revision
        $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles="+ encodeURIComponent(name) +"&rvslots=*&rvprop=ids%7Cuser&formatversion=2&format=json", r=>{
            // We got the response
            let latestRId = r.query.pages[0].revisions[0].revid;
            let parentRId = r.query.pages[0].revisions[0].parentid;
            let latestUsername = r.query.pages[0].revisions[0].user;
            if (latestRId == revID) {
                // Yup! Send the callback
                callback(latestUsername, latestRId);
            } else {
                // Nope :(
                // Check for a noredirect callback, if so, call and return
                if (noRedirectCallback != null) {noRedirectCallback(); return;}
                
                // Load the preview page of the latest one
                try {if (dialogEngine.dialog.open) {return;}} catch (error) {} // DO NOT REDIRECT IF DIALOG IS OPEN.
                // Redirect and open in new tab if requested
                redirect(rw.wikiIndex + "?title="+ encodeURIComponent(name) +"&diff="+ latestRId +"&oldid="+ parentRId +"&diffmode=source#redirectLatestRevision", (rw.config.rwLatestRevisionOption == "newtab"));
            }
        });
    },

    "latestRevisionNotByUser" : (name, username, callback) => { // CALLBACK revision, summaryText, rId
        // Name is page name, username is bad username
        $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles="+ encodeURIComponent(name) +"&rvslots=*&rvprop=ids%7Cuser%7Ccontent&rvexcludeuser="+ username +"&formatversion=2&format=json", r=>{
            // We got the response
            let _r;
            try {
                _r = r.query.pages[0].revisions[0]; // get latest revision
                if (_r == null) { throw "can't be null"; } // if empty error
            } catch (error) {
                // Probably no other edits. Redirect to history page and show the notice
                redirect(rw.wikiIndex + "?title="+ encodeURIComponent(name) +"&action=history#rollbackFailNoRev");
                return; // exit
            }
            
            let latestContent = _r.slots.main.content;
            let summary = "Reverting edit(s) by [[Special:Contributions/"+ username +"|"+ username +"]] ([[User_talk:"+ username +"|talk]]) to rev. "+ _r.revid +" by " +_r.user;
            callback(latestContent, summary, _r.revid, _r.parentid);
        });
    },

    "stripWikiTxt" : wikiTxt=> {
        // VERY BASIC Convert WikiText to string
        try {
            wikiTxt = wikiTxt.replace(/<!--[^>]*-->/g, ""); // Strip html comments
            wikiTxt.match(/\[\[(?:[^\]\]]*)\]\]/g).forEach(t=>{ // match [[*]]
                txtToKeep = (a=>{return a[a.length - 1];})(t.split("|")).replace("]]", ""); // Last | iin the string then rm the end
                wikiTxt = wikiTxt.replace(t, txtToKeep); // now replace
            });
            wikiTxt = wikiTxt.replace(/'''/g, ""); // rm bold
            wikiTxt = wikiTxt.replace(/''/g, ""); // rm italic
        } catch (err) {} // Probably no wikitxt there
         return wikiTxt;
    },

    "getUserPronouns" : (user, callback)=> {
        // Trying mediawiki api here rather than a jquery get
        new mw.Api().get({
            action: 'query',
            list: 'users',
            usprop: 'gender',
            ususers: user
        }).then(r=>{
            let gender = r.query.users[0].gender;
            callback((gender == "male") ? "he/him" : ((gender == "female") ? "she/her" : "they/them")); // callback with our pronouns
        });
    },

    "getUserEditCount" : (user, callback)=> {
        // Trying mediawiki api here rather than a jquery get
        new mw.Api().get({
            action: 'query',
            list: 'users',
            usprop: 'editcount',
            ususers: user
        }).then(r=>{
            callback(r.query.users[0].editcount); // edit count
        });
    },

    "changeWatch" : {
        // Watches for changes on a page, always latest version and notifies
        "active" : false,
        "timecheck" : "",
        "lastRevID": "",
        "toggle" : ()=> {
            if (!rw.info.changeWatch.active) {
                // We're not active, make UI changes
                // Request notification perms
                if (Notification.permission !== 'granted') Notification.requestPermission();

                $("#rwSpyIcon").css("color", "green");
                rw.visuals.toast.show("Alerts Enabled - please keep this tab open.");
                rw.info.changeWatch.active = true;

                // Get latest rev id
                $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles="+ encodeURIComponent(mw.config.get("wgRelevantPageName")) +"&rvslots=*&rvprop=ids&formatversion=2&format=json", r=>{
                    // We got the response, set our ID
                    rw.info.changeWatch.lastRevID = r.query.pages[0].revisions[0].revid;
                    rw.info.changeWatch.timecheck = setInterval(()=>{ // Check for new revision every 5 seconds
                        $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles="+ encodeURIComponent(mw.config.get("wgRelevantPageName")) +"&rvslots=*&rvprop=ids&formatversion=2&format=json", r2=>{
                            // Got response, compare
                            if (rw.info.changeWatch.lastRevID != r2.query.pages[0].revisions[0].revid) {
                                // New Revision! Redirect.
                                clearInterval(rw.info.changeWatch.timecheck); // clear updates
                                let latestRId = r2.query.pages[0].revisions[0].revid;
                                let parentRId = r2.query.pages[0].revisions[0].parentid;

                                if (windowFocused) {
                                    // Redirect and don't do anything else
                                    redirect(rw.wikiIndex + "?title="+ encodeURIComponent(mw.config.get("wgRelevantPageName")) +"&diff="+ latestRId +"&oldid="+ parentRId +"&diffmode=source#watchLatestRedirect");
                                } else {
                                    // Push notification
                                    document.title = "**New Edit!** " + document.title; // Add alert to title
                                    if (Notification.permission !== 'granted') {
                                        Notification.requestPermission();
                                    } else {
                                        let notification = new Notification('New Change to ' + mw.config.get("wgRelevantPageName"), {
                                            icon: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png',
                                            body: 'Click here to view',
                                        });
                                        notification.onclick = function() {
                                            window.focus(); // When focused, we'll redirect anyways
                                            this.close(); // focus our tab and close notif
                                        };

                                        window.onfocus = function(){
                                            // Redirect on focus
                                            redirect(rw.wikiIndex + "?title="+ encodeURIComponent(mw.config.get("wgRelevantPageName")) +"&diff="+ latestRId +"&oldid="+ parentRId +"&diffmode=source#watchLatestRedirect");
                                        };
                                    }
                                } 
                            }
                        });
                    }, 5000);
                });
            } else {
                clearInterval(rw.info.changeWatch.timecheck); // clear updates
                $("#rwSpyIcon").css("color", ""); // clear colour from icon
                rw.visuals.toast.show("Alerts Disabled.");
                rw.info.changeWatch.active = false;
            }
        }
    }
    
};
rw.rollback = { // Rollback features - this is where the business happens, people!
    "clickHandlers" : {}, // set in code
    
    "icons" : [ // rev14, icon IDs and everything for current rollback - from left to right - usually loaded from config
        // WARNING: CHANGING ORDER WILL MESS UP CONFIGS.
        // DEFAULT ENABLED ICONS
        {
            "enabled": true, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback vandalism",
            "color" : "red", // css colour
            "icon" : "delete_forever",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info? false = quick rollback, otherwise not
            "summary" : "[[WP:VANDAL|Vandalism]]", // Set summary
            "ruleIndex" : 0 // used for autowarn
        },

        {
            "enabled": true, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback unexplained content removal",
            "color" : "orange", // css colour
            "icon" : "format_indent_increase",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "[[WP:CRV|Unexplained content removal]]", // Set summary
            "ruleIndex" : 3 // used for autowarn
        },

        {
            "enabled": true, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback non-constructive edit",
            "color" : "gold", // css colour
            "icon" : "work_outline",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "non-constructive" // Set summary
        },

        {
            "enabled": true, // true is a default rollback icon, false can be added via preferences
            "name" : "Rollback",
            "color" : "blue", // css colour
            "icon" : "replay",
            "actionType" : "rollback",
            "promptReason" : true, // add extra info?
            "summary" : "" // Set summary
        },

        {
            "enabled": true, // true is a default rollback icon, false can be added via preferences
            "name" : "Assume Good Faith and Rollback",
            "color" : "green", // css colour
            "icon" : "thumb_up",
            "actionType" : "rollback",
            "promptReason" : true, // add extra info?
            "summary" : "Reverting [[WP:AGF|good faith]] edits" // Set summary
        },

        {
            "enabled": true, // true is a default rollback icon, false can be added via preferences
            "name" : "Preview Rollback",
            "color" : "black", // css colour
            "icon" : "compare_arrows",
            "actionType" : "func",
            "action" : ()=>rw.rollback.preview() // Callback
        },

        {
            "enabled": true, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick Template",
            "color" : "black", // css colour
            "icon" : "library_add",
            "actionType" : "func",
            "action" : ()=>rw.rollback.welcomeRevUsr() // Callback
        },

        {
            "enabled": true, // true is a default rollback icon, false can be added via preferences
            "name" : "More Options",
            "color" : "black", // css colour
            "icon" : "more_vert",
            "actionType" : "func",
            "action" : ()=>rw.rollback.selectFromDisabled() // Callback
        },

        // END DEFAULT ENABLED ICONS
        // DEFAULT DISABLED ICONS

        // RED
        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback 3RR",
            "color" : "red", // css colour
            "icon" : "filter_3",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "[[WP:3RR]]", // Set summary
            "ruleIndex" : 84 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback personal attacks towards another editor",
            "color" : "red", // css colour
            "icon" : "offline_bolt",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "Personal attack towards another editor ([[WP:NPA]])", // Set summary
            "ruleIndex" : 22 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback copyright violation",
            "color" : "red", // css colour
            "icon" : "copyright",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "Likely [[WP:COPYVIO|copyright violation]]", // Set summary
            "ruleIndex" : 79 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback BLP violation",
            "color" : "red", // css colour
            "icon" : "face",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "Fails [[WP:BLP]]", // Set summary
            "ruleIndex" : 5 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback advertising/promotional",
            "color" : "red", // css colour
            "icon" : "monetization_on",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "Using Wikipedia for [[WP:NOTADVERTISING|advertising and/or promotion]] is not permitted.", // Set summary
            "ruleIndex" : 16 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback unnecessary or inappropriate external links",
            "color" : "red", // css colour
            "icon" : "link_off",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "Addition of unnecessary/inappropriate [[WP:EL|external links]]", // Set summary
            "ruleIndex" : 19 // used for autowarn
        },

        // ORANGE
        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback no reliable source",
            "color" : "orange", // css colour
            "icon" : "history_edu",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "[[WP:RS|Not providing a reliable source]]", // Set summary
            "ruleIndex" : 15 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback disruptive editing",
            "color" : "orange", // css colour
            "icon" : "error",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "Disruptive editing", // Set summary
            "ruleIndex" : 1 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback factual errors",
            "color" : "orange", // css colour
            "icon" : "menu_book",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "likely [[WP:PROVEIT|factual errors]]", // Set summary
            "ruleIndex" : 7 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback joke edit",
            "color" : "orange", // css colour
            "icon" : "child_care",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "Joke edit", // Set summary
            "ruleIndex" : 10 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback NPOV issues",
            "color" : "orange", // css colour
            "icon" : "campaign",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "per [[WP:NPOV]]", // Set summary
            "ruleIndex" : 17 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback talk in article",
            "color" : "orange", // css colour
            "icon" : "announcement",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "Please use the article [[WP:TPHELP|talk page]] or [[WP:FIXIT|be bold]] and fix the problem", // Set summary
            "ruleIndex" : 66 // used for autowarn
        },

        // BLUE
        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback manual of style issues",
            "color" : "blue", // css colour
            "icon" : "brush",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "[[WP:MOS|Manual of Style]] issues", // Set summary
            "ruleIndex" : 31 // used for autowarn
        },

        {
            "enabled": false, // true is a default rollback icon, false can be added via preferences
            "name" : "Quick rollback test edits",
            "color" : "blue", // css colour
            "icon" : "build",
            "actionType" : "rollback",
            "promptReason" : false, // add extra info?
            "summary" : "[[WP:SANDBOX|test edits]]", // Set summary
            "ruleIndex" : 2 // used for autowarn
        }
    ],

    "loadIcons" : () => { // Adds icons to a diff page - see rw.rollback.icons to set defaults here.
        // Check if page is editable, if not, don't show
        if (!mw.config.get("wgIsProbablyEditable")) {
           // Can't edit, so exit
           return; 
        }

        // else, continue :)

        let isLatest = $("#mw-diff-ntitle1").text().includes("Latest revision"); // is this the latest revision diff page?
        let isLeftLatest = $("#mw-diff-otitle1").text().includes("Latest revision"); // is the left side the latest revision? (rev13 bug fix)

        let currentRevIcons = "";

        // Load Rollback current rev icons (rev14)
        rw.rollback.icons.forEach((icon,i) => {
            let elID = "rwRollback_" + i; // generate an ID for the new icons

            // Establish element with all the info
            if (icon.enabled) currentRevIcons += `
            <div id="${elID}" class="icon material-icons">
                <span style="cursor: pointer;
                            font-size:28px;
                            padding-right:5px;
                            color:${icon.color};"
                onclick="rw.rollback.clickHandlers.${elID}();">
                    ${icon.icon}
                </span>
            </div>
            <div class="mdl-tooltip mdl-tooltip--large" for="${elID}">
                ${icon.name} 
            </div>
            `;

            // Add click handler
            let clickHandler = ()=>{};

            if (icon.actionType == "func") {
                // Function callback
                clickHandler = icon.action;
            } else if (icon.actionType == "rollback") {
                // Rollback on click
                if (!icon.promptReason) {
                    // quick rollback
                    clickHandler = ()=>rw.rollback.apply(icon.summary, null, icon.ruleIndex); // if icon.ruleIndex is undef it'll be ignored anyway
                } else {
                    // Ask for a reason
                    clickHandler = ()=>rw.rollback.promptRollbackReason(icon.summary);
                }
            }

            // Now add the handler to the handlers object (because the elements aren't on page yet)
            rw.rollback.clickHandlers[elID] = clickHandler; // we done
        });

        // Finally, wrap and add more info
        currentRevIcons = `<!-- Rollback buttons and icons / other formatting - see src/js/rollback.js -->
<span id="rwCurrentRevRollbackBtns"><!-- main buttons -->
    ${currentRevIcons}
</span>
<span id="rwRollbackInProgress" style="display:none;">
    <div id="rwRollbackInProgressBar" class="mdl-progress mdl-js-progress" style="
    width:300px;
    display: block;
    margin-left: auto;
    margin-right: auto;"></div>
    <div style="height:5px"></div><!-- spacer -->
    <span style="font-family: Roboto;font-size: 16px;">Reverting...</span><br/>
    <div style="height:5px"></div><!-- spacer -->
</span>

<!-- Rollback complete icons -->
<span id="rwRollbackDoneIcons" style="display:none;">
    <!-- Done indicator -->
    <div style="height:5px"></div><!-- spacer -->
    <span style="font-family: Roboto;font-size: 16px;display: inline-flex;vertical-align: middle;">
        <span class="material-icons" style="color:green;cursor:default;">check_circle</span>&nbsp;&nbsp;
        Rollback complete
    </span><br/>
    <div style="height:5px"></div><!-- spacer -->
    <!-- CONTROL ICONS - todo add onclick events -->
    <div id="RWRBDONEmrevPg" class="icon material-icons"><span style="cursor: pointer;">watch_later</span></div>
    <div class="mdl-tooltip mdl-tooltip--large" for="RWRBDONEmrevPg">
        Go to latest revision
    </div>
    &nbsp;&nbsp;
    <div id="RWRBDONEnewUsrMsg" class="icon material-icons"><span style="cursor: pointer;">send</span></div>
    <div class="mdl-tooltip mdl-tooltip--large" for="RWRBDONEnewUsrMsg">
        New Message
    </div>
    &nbsp;&nbsp;
    <div id="RWRBDONEwelcomeUsr" class="icon material-icons"><span style="cursor: pointer;">library_add</span></div>
    <div class="mdl-tooltip mdl-tooltip--large" for="RWRBDONEwelcomeUsr">
        Quick Template
    </div>
    &nbsp;&nbsp;
    <div id="RWRBDONEwarnUsr" class="icon material-icons"><span style="cursor: pointer;">report</span></div>
    <div class="mdl-tooltip mdl-tooltip--large" for="RWRBDONEwarnUsr">
        Send Notice
    </div>
    &nbsp;&nbsp;
    <div id="RWRBDONEreportUsr" class="icon material-icons"><span style="cursor: pointer;">gavel</span></div>
    <div class="mdl-tooltip mdl-tooltip--large" for="RWRBDONEreportUsr">
        Report to Admin
    </div>

</span>`; // see HTML file

        // RESTORE THIS VERSION ICONS. DO NOT FORGET TO CHANGE BOTH FOR LEFT AND RIGHT

        // On left side
        // DO NOT FORGET TO CHANGE BOTH!!
        $('.diff-otitle').prepend(isLeftLatest ? currentRevIcons : `
        <div id="rOld1" class="icon material-icons"><span style="cursor: pointer; font-size:28px; padding-right:5px; color:purple;"
            onclick="rw.rollback.promptRestoreReason($('#mw-diff-otitle1 > strong > a').attr('href').split('&')[1].split('=')[1]);"> <!-- the revID on left -->
                history
            </span>
        </div>
        <div class="mdl-tooltip mdl-tooltip--large" for="rOld1">
            Restore this version
        </div>
        `
        ); 

        // On the right side
        $('.diff-ntitle').prepend(isLatest ? currentRevIcons : `
        <div id="rOld2" class="icon material-icons"><span style="cursor: pointer; font-size:28px; padding-right:5px; color:purple;"
            onclick="rw.rollback.promptRestoreReason($('#mw-diff-ntitle1 > strong > a').attr('href').split('&')[1].split('=')[1]);"> <!-- the revID on right -->
                history
            </span>
        </div>
        <div class="mdl-tooltip mdl-tooltip--large" for="rOld2">
            Restore this version
        </div>
        `); // if the latest rev, show the accurate revs, else, don't 
        
        setTimeout(()=>{
            // Register all tooltips after 50ms (just some processing time)
            for (let item of document.getElementsByClassName("mdl-tooltip")) {
                rw.visuals.register(item); 
            } 

            // Register progressbar
            rw.visuals.register($("#rwRollbackInProgressBar")[0]);
        },100);
    },

    "selectFromDisabled" : ()=>{
        // Open a new dialog with all the disabled icons so user can select one. Click handlers are already registered, so we just call rw.rollback.clickHandlers.[elID]();
        // Load Rollback current rev icons (rev14)
        let finalIconStr = "";
        rw.rollback.icons.forEach((icon,i) => {
            if (icon.enabled) return; // if icon is enabled, we can skip
            let elID = "rwRollback_" + i; // get the ID for the new icons

            // Establish element with all the info
            finalIconStr += `
            <div id="${elID}" class="icon material-icons">
                <span style="cursor: pointer;
                            font-size:28px;
                            padding-right:5px;
                            color:${icon.color};"
                onclick="window.parent.postMessage('rwRollbackBtn${elID}');">
                    ${icon.icon}
                </span>
            </div>
            <div class="mdl-tooltip" for="${elID}">
                ${icon.name} 
            </div>
            `;

            // Add click event handler
            addMessageHandler("rwRollbackBtn"+ elID, ()=>{
                dialogEngine.closeDialog(); // close dialog
                rw.rollback.clickHandlers[elID](); // send our callback
            });
        });
        
        // Now show dialog - we don't need a special one
        rw.ui.confirmDialog(`
        <div style="width:410px;text-align:center;height:66px;overflow:auto;margin:auto;"> <!-- outer container for icons -->
            ${finalIconStr}
        </div>
        `, "CLOSE", ()=>dialogEngine.closeDialog(),
        "", ()=>{}, 25, true); // true here removes extra linebreaks
    },

    "getRollbackrevID" : ()=>{ // Get the revision ID of what we want to rollback
        let isNLatest = $("#mw-diff-ntitle1").text().includes("Latest revision");
        let isOLatest = $("#mw-diff-otitle1").text().includes("Latest revision"); 
        if (isNLatest) {
            // Return the revID of the edit on the right
            return $('#mw-diff-ntitle1 > strong > a').attr('href').split('&')[1].split('=')[1];
        } else if (isOLatest) {
            return $('#mw-diff-otitle1 > strong > a').attr('href').split('&')[1].split('=')[1];
        } else {
            // BUG!
            rw.ui.confirmDialog("A very weird error occured. (rollback getRollbackRevID failed via final else!)",
            "REPORT BUG", ()=>rw.ui.sendFeedback("rollback getRollbackRevID failed via final else! related URL: "+ window.location.href) ,
            "", ()=>{}, 0);
        }
    },

    "preview" : () => { // Redirect to the preview of the rollback in a new tab (compare page)
        rw.ui.loadDialog.show("Loading preview...");
        // Check if latest, else redirect
        rw.info.isLatestRevision(mw.config.get("wgRelevantPageName"), rw.rollback.getRollbackrevID(), un=>{
            // Fetch latest revision not by user
            rw.info.latestRevisionNotByUser(mw.config.get("wgRelevantPageName"), un, (content, summary, rID) => {
                // Got it! Now open preview dialog
               
                // Add handler for when page loaded
                let url = rw.wikiIndex + "?title="+ mw.config.get("wgRelevantPageName") +"&diff="+ rID +"&oldid="+ mw.util.getParamValue("diff") +"&diffmode=source#rollbackPreview";
                redirect(url); // goto in current tab
            });
        });
    },

    "apply" : (reason, callback, defaultWarnIndex)=> { // if callback set, no UW prompt will be shown, but a callback instead
        
        // Now do
        // bug fix rev10, get revid from html
        // added rev13 if has rollback perms and set to use in settings, use that - prompt first time
        
        // Show progress bar
        $("#rwCurrentRevRollbackBtns").hide();
        $("#rwRollbackInProgress").show();

        // Set progress status to buffer 25
        rw.rollback.progressBar(0);

        rw.info.isLatestRevision(mw.config.get("wgRelevantPageName"), rw.rollback.getRollbackrevID(), (un, crID)=>{
            // Set progress bar status
            // Set handlers for each method
            let pseudoRollbackCallback = ()=>{ // pseudoRollback 
                // Set progress
                rw.rollback.progressBar(25);
                // Fetch latest revision not by user
                rw.info.latestRevisionNotByUser(mw.config.get("wgRelevantPageName"), un, (content, summary, rID, pID) => {
                    rw.rollback.progressBar(70, 70);
                    // Verify that pID is NOT the thing rev we want to rollback, else it's been overwritten
                	if (pID == rw.rollback.getRollbackrevID()) {
                		// looks like that there is a newer revision! redirect to it.
                		rw.info.isLatestRevision(mw.config.get("wgRelevantPageName"), 0, ()=>{});
                		return; // stop here.
                    }
                    
                    // Got it! Now set page content to summary
                    // Push UNDO using CSRF token
                    $.post(rw.wikiAPI, {
                        "action": "edit",
                        "format": "json",
                        "token" : mw.user.tokens.get("csrfToken"),
                        "title" : mw.config.get("wgRelevantPageName"),
                        "summary" : summary + ": " + reason + " [[w:en:WP:RW|(RW "+ rw.version +")]]", // summary sign here
                        "undo": crID, // current
                        "undoafter": rID, // restore version
                        "tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
                    }).done(dt => {
                        // We done. Check for errors, then callback appropriately
                        if (!dt.edit) {
                            // Error occured or other issue
                            console.error(dt);
                            // Show rollback icons again (todo)
                            $("#rwCurrentRevRollbackBtns").show();
                            $("#rwRollbackInProgress").hide();

                            rw.visuals.toast.show("Sorry, there was an error, likely an edit conflict. Your rollback has not been applied.");
                        } else {
                            // Success!
                            
                            // Hide progressbar (todo)
                            rw.rollback.progressBar(100);


                            // Wait a bit (100ms) to stop loadDialog glitch
                            setTimeout(()=>{
                                // If callback set, call it and exit, else continue
                                if (callback != null) {callback(); return;}

                                // Now show the done icons
                                rw.rollback.showRollbackDoneOps(un, defaultWarnIndex);
                            }, 100); // done!
                        }
                    });
                });
            };
            
            let rollbackCallback = ()=>{ // using rollback API
                rw.rollback.progressBar(70, 70); // progress
                // PUSH ROLLBACK
                $.post(rw.wikiAPI, {
                        "action": "rollback",
                        "format": "json",
                        "token" : rw.info.rollbackToken,
                        "title" : mw.config.get("wgRelevantPageName"),
                        "summary" : "Rollback edit(s) by [[Special:Contributions/"+ un +"|"+ un +"]] ([[User_talk:"+ un +"|talk]]): " + reason + " [[w:en:WP:RW|(RW "+ rw.version +")]]", // summary sign here
                        "user": un, // rollback user
                        "tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
                    }).done(dt => {
                        // THESE CALLBACKS ARE NO INTERCHANGABLE!
                        // We done. Check for errors, then callback appropriately
                        if (!dt.rollback) {
                            // Error occured or other issue
                            console.error(dt);
                            // Show rollback icons again
                            $("#rwCurrentRevRollbackBtns").show();
                            $("#rwRollbackInProgress").hide();
                            rw.visuals.toast.show("Sorry, there was an error, likely an edit conflict. Your rollback has not been applied.");
                        } else {
                            // Success!
                            
                            rw.rollback.progressBar(100); // progress

                            // Wait a bit (100ms) to stop loadDialog glitch
                            setTimeout(()=>{
                                // If callback set, call it and exit, else continue
                                if (callback != null) {callback(); return;}

                                // Now show the done icons
                                rw.rollback.showRollbackDoneOps(un, defaultWarnIndex);
                            }, 100); // done!
                        }
                    });
            };

            // Check config for rollback perms
            rw.info.featureRestrictPermissionLevel("rollbacker", ()=>{
                // Check if config is set or not
                if (rw.config.rollbackMethod == null) {
                    rw.ui.confirmDialog(`
                    You have rollback permissions!
                    Would you like to use the faster rollback API in future or continue using a rollback-like setting?
                    You can change this in your preferences at any time.`,
                    "USE ROLLBACK", ()=>{
                        dialogEngine.closeDialog();
                        rw.config.rollbackMethod = "rollback";
                        rw.info.writeConfig(true, ()=>rollbackCallback()); // save config and callback
                    },
                    "KEEP USING ROLLBACK-LIKE",()=>{
                        dialogEngine.closeDialog();
                        rw.config.rollbackMethod = "pseudoRollback";
                        rw.info.writeConfig(true, ()=>pseudoRollbackCallback()); // save config and callback
                    },45);
                } else {
                    // Config set, complete callback - remember, this is feature restricted so we won't get here without RB perms
                    if (rw.config.rollbackMethod == "rollback") { // Rollback selected
                        rollbackCallback(); // Do rollback
                    } else {
                        pseudoRollbackCallback(); // rollback-like
                    }
                }
            }, ()=>pseudoRollbackCallback()); // if no perms follow pseudo rollback
        });
    },

    "restore" : (revID, reason) => {
        // Restore revision by ID
        rw.ui.loadDialog.show("Restoring...");
        // Ask API for latest revision
        $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles="+ encodeURIComponent(mw.config.get("wgRelevantPageName")) +"&rvslots=*&rvprop=ids%7Cuser&formatversion=2&format=json", r=>{
            // We got the response
            let crID = r.query.pages[0].revisions[0].revid;
            // Ask API for the restore revision
            $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&rvprop=user&rvstartid="+ revID +"&rvendid="+ revID +"&titles="+ encodeURI(mw.config.get("wgRelevantPageName")) +"&formatversion=2&rvslots=*&format=json", r=>{
                let revUsr = r.query.pages[0].revisions[0].user; // get user
                let summary = "Restoring revision "+ revID + " by " + revUsr; // gen our summary
                // Now we've got that, we just need to submit. the undo
                $.post(rw.wikiAPI, {
                        "action": "edit",
                        "format": "json",
                        "token" : mw.user.tokens.get("csrfToken"),
                        "title" : mw.config.get("wgRelevantPageName"),
                        "summary" : summary + (reason != null ? ": " + reason : "") + " [[w:en:WP:RW|(RW "+ rw.version +")]]", // summary sign here
                        "undo": crID, // current
                        "undoafter": revID, // restore version
                        "tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
                    }).done(dt => {
                        // Request done. Check for errors, then go to the latest revision
                        if (!dt.edit) {
                            // Error occured or other issue
                            console.error(dt);
                            rw.ui.loadDialog.close();
                            rw.visuals.toast.show("Sorry, there was an error, likely an edit conflict. This edit has not been restored.");
                        } else {
                            rw.info.isLatestRevision(mw.config.get('wgRelevantPageName'), 0, ()=>{}); // we done, go to the latest revision
                        }
                    });
            });
        });
    },

    "promptRollbackReason" : reason=> {
        rw.info.isLatestRevision(mw.config.get("wgRelevantPageName"), rw.rollback.getRollbackrevID(),un=>{ // validate is latest
            // Show dialog then rollback
            // Add submit handler

            addMessageHandler("reason`*", rs=>rw.rollback.apply(rs.split("`")[1])); // When reason recieved, submit rollback

            // CREATE DIALOG
            // MDL FULLY SUPPORTED HERE (container). 
            dialogEngine.create(mdlContainers.generateContainer(`
            <!-- ROLLBACK REASON DIALOG -->
<form id="newMsgForm" onsubmit="pushRollback();" action="#">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" name="rollbackReason" id="rollbackReason" value="`+ reason +`">
        <label class="mdl-textfield__label" for="rollbackReason">Rollback Reason</label>
        <div class="mdl-tooltip" for="rollbackReason">
            Enter a reason for this rollback
        </div>
    </div>
</form>
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="pushRollback();">
        Rollback
    </button>
</span>

<script>
    function pushRollback() {
        var data = $('#newMsgForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data
        
        let reason = data.rollbackReason;
        // Submit it
        window.parent.postMessage('reason\\\`' + reason); // Push upstairs
        window.parent.postMessage("closeDialog"); // We done here.
        return false; // prevent redirect
    }

    document.getElementById("rollbackReason").focus(); // focus on text box for quick rollback
</script>
            `, 500, 120)).showModal(); // 500x120 dialog, see rollbackReason.html for code
        });
    },

    "promptRestoreReason" : revID=> {
        // Prompt for reason to restore. very sim to rollback reason
        let reason = ""; // Needed for rollback reason page - do not remove

        // Add submit handler
        addMessageHandler("reason`*", rs=>rw.rollback.restore(revID, rs.split("`")[1])); // When reason recieved, submit rollback

        // CREATE DIALOG
        // MDL FULLY SUPPORTED HERE (container). 
        dialogEngine.create(mdlContainers.generateContainer(`
        <!-- ROLLBACK REASON DIALOG -->
<form id="newMsgForm" onsubmit="pushRollback();" action="#">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" name="rollbackReason" id="rollbackReason" value="`+ reason +`">
        <label class="mdl-textfield__label" for="rollbackReason">Rollback Reason</label>
        <div class="mdl-tooltip" for="rollbackReason">
            Enter a reason for this rollback
        </div>
    </div>
</form>
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="pushRollback();">
        Rollback
    </button>
</span>

<script>
    function pushRollback() {
        var data = $('#newMsgForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data
        
        let reason = data.rollbackReason;
        // Submit it
        window.parent.postMessage('reason\\\`' + reason); // Push upstairs
        window.parent.postMessage("closeDialog"); // We done here.
        return false; // prevent redirect
    }

    document.getElementById("rollbackReason").focus(); // focus on text box for quick rollback
</script>
        `, 500, 120)).showModal(); // 500x120 dialog, see rollbackReason.html for code
    },

    "welcomeRevUsr" :() => {
        // Send welcome to user who made most recent revision
        rw.visuals.toast.show("Please wait...", false, false, 1000);
        rw.info.isLatestRevision(mw.config.get("wgRelevantPageName"), rw.rollback.getRollbackrevID(), un=>{
            // We got the username, send the welcome
            rw.quickTemplate.openSelectPack(un);
        });
    },


    // CONTRIBS PAGE

    "contribsPageIcons" : ()=>{ // Adds rollback/restore links
        
        // For each (current) tag
        $("span.mw-uctop").each((i, el)=>{
            // Add rollback options (${i} inserts i at that point to ensure it is a unique ID)
            $(el).html(`current 
            <span id="rw-currentRev${i}" style="cursor:default"> <!-- Wrapper -->
                <span style="font-family:Roboto;font-weight:400;"> &nbsp; <!-- Styling container -->
                    <!-- Links -->
                    <a style="color:green;cursor:pointer;" id="rw-currentRevPrev${i}" onclick="rw.rollback.contribsPageRollbackPreview(${i});">prev</a> &nbsp;
                    <a style="color:red;cursor:pointer;" id="rw-currentRevRvv${i}" onclick="rw.rollback.contribsPageRollbackVandal(${i});">rvv</a> &nbsp;
                    <a style="color:blue;cursor:pointer;" id="rw-currentRevRb${i}" onclick="rw.rollback.contribsPageRollback(${i});">rb</a>

                    <!-- Tooltips -->
                    <div class="mdl-tooltip" data-mdl-for="rw-currentRevPrev${i}">
                        Preview Rollback
                    </div>
                    <div class="mdl-tooltip" data-mdl-for="rw-currentRevRvv${i}">
                        Quick rollback Vandalism
                    </div>
                    <div class="mdl-tooltip" data-mdl-for="rw-currentRevRb${i}">
                        Rollback
                    </div>
                </span>
            </span>
            `);
        });

        // Now register tooltips
        setTimeout(()=>{
            // Register all tooltips after 50ms (just some processing time)
            for (let item of document.getElementsByClassName("mdl-tooltip")) {
                rw.visuals.register(item); 
            } 
        },100);
    },

    "contribsPageRollbackPreview" : i=>{
        // Get revision ID
        let revID = $("#rw-currentRev"+ i).closest("li").attr("data-mw-revid");
        let pageName =  $("#rw-currentRev"+ i).closest("li").find("a.mw-changeslist-date").attr("title");
        console.log(revID);
        console.log(pageName);
        rw.ui.loadDialog.show("Loading preview...");
        // Now verify is still latest
        rw.info.isLatestRevision(pageName, revID, un=>{
            // Is latest revision! Let's continue
            // Fetch latest revision not by user
            rw.info.latestRevisionNotByUser(pageName, un, (content, summary, rID) => {
                // Assemble URL
                let url = rw.wikiIndex + "?title="+ pageName +"&diff="+ rID +"&oldid="+ revID +"&diffmode=source#rollbackPreview";
                redirect(url, true); // open URL in new tab
                rw.ui.loadDialog.close(); // close load dialog
            });
        }, ()=>{
            rw.ui.loadDialog.close(); // close load dialog
            // Isn't the latest revision, set note to match
            $("#rw-currentRev"+ i).html(
                `<span style="font-family:Roboto;color:red;">No longer the latest revision.</span>`
            );
        });
    },

    "contribsPageRollbackVandal" : i=>{
        // Get revision ID
        let revID = $("#rw-currentRev"+ i).closest("li").attr("data-mw-revid");
        let pageName =  $("#rw-currentRev"+ i).closest("li").find("a.mw-changeslist-date").attr("title");
        console.log(revID);
        console.log(pageName);
        
        $("#rw-currentRev"+ i).html(
            `<span style="font-family:Roboto;color:green;">reverting...</span>`
        );
        
        // Now verify is still latest
        rw.info.isLatestRevision(pageName, revID, un=>{
            // Is latest revision! Let's continue
            
            // Overwrite function and values used on diff pages as we aren't on a diff page
            rw.rollback.getRollbackrevID = ()=>{return revID;}; 
            mw.config.values.wgRelevantPageName = pageName;
            rw.rollback.apply("vandalism (from contribs page)", ()=>{ // apply the rollback
                // Rollback complete!
                $("#rw-currentRev"+ i).html(
                    `<span style="font-family:Roboto;color:green;">reverted!</span>`
                );
            }); 
        }, ()=>{
            // Isn't the latest revision, set note to match
            $("#rw-currentRev"+ i).html(
                `<span style="font-family:Roboto;color:red;">No longer the latest revision.</span>`
            );
        });
    },

    "contribsPageRollback" : i=>{
        // First, prompt for reason
        let reason = ""; // Needed for rollback reason page - do not remove

        // Add submit handler
        addMessageHandler("reason`*", rs=>{ // On submit
            let rollbackReason = rs.split("`")[1];
            // Get revision ID
            let revID = $("#rw-currentRev"+ i).closest("li").attr("data-mw-revid");
            let pageName =  $("#rw-currentRev"+ i).closest("li").find("a.mw-changeslist-date").attr("title");
            console.log(revID);
            console.log(pageName);
            
            $("#rw-currentRev"+ i).html(
                `<span style="font-family:Roboto;color:green;">reverting...</span>`
            );
            
            // Now verify is still latest
            rw.info.isLatestRevision(pageName, revID, un=>{
                // Is latest revision! Let's continue
                
                // Overwrite function and values used on diff pages as we aren't on a diff page
                rw.rollback.getRollbackrevID = ()=>{return revID;}; 
                mw.config.values.wgRelevantPageName = pageName;
                rw.rollback.apply(reason + " (from contribs page)", ()=>{ // apply the rollback
                    // Rollback complete!
                    $("#rw-currentRev"+ i).html(
                        `<span style="font-family:Roboto;color:green;">reverted!</span>`
                    );
                }); 
            }, ()=>{
                // Isn't the latest revision, set note to match
                $("#rw-currentRev"+ i).html(
                    `<span style="font-family:Roboto;color:red;">No longer the latest revision.</span>`
                );
            });
        });

        // CREATE DIALOG
        // MDL FULLY SUPPORTED HERE (container). 
        dialogEngine.create(mdlContainers.generateContainer(`
        <!-- ROLLBACK REASON DIALOG -->
<form id="newMsgForm" onsubmit="pushRollback();" action="#">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" name="rollbackReason" id="rollbackReason" value="`+ reason +`">
        <label class="mdl-textfield__label" for="rollbackReason">Rollback Reason</label>
        <div class="mdl-tooltip" for="rollbackReason">
            Enter a reason for this rollback
        </div>
    </div>
</form>
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="pushRollback();">
        Rollback
    </button>
</span>

<script>
    function pushRollback() {
        var data = $('#newMsgForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data
        
        let reason = data.rollbackReason;
        // Submit it
        window.parent.postMessage('reason\\\`' + reason); // Push upstairs
        window.parent.postMessage("closeDialog"); // We done here.
        return false; // prevent redirect
    }

    document.getElementById("rollbackReason").focus(); // focus on text box for quick rollback
</script>
        `, 500, 120)).showModal(); // 500x120 dialog, see rollbackReason.html for code   
    },

    "progressBar" : (progress, buffer) => {
        // Only if set and existing (bug)
        if ($("#rwRollbackInProgressBar").length < 1) return;
        
        // Update the progress bar
        $("#rwRollbackInProgressBar")[0].MaterialProgress.setProgress(progress);
        $("#rwRollbackInProgressBar")[0].MaterialProgress.setBuffer(buffer);
    },

    "showRollbackDoneOps" : (un, warnIndex) => {
        // Add click handlers 
        $("#RWRBDONEmrevPg").click(()=>rw.info.isLatestRevision(mw.config.get('wgRelevantPageName'), 0, ()=>{})); // go to latest revision
        $("#RWRBDONEnewUsrMsg").click(()=>rw.ui.newMsg(un)); // send message
        $("#RWRBDONEwelcomeUsr").click(()=>rw.quickTemplate.openSelectPack(un)); // quick template
        $("#RWRBDONEwarnUsr").click(()=>rw.ui.beginWarn(false, un, mw.config.get("wgRelevantPageName"), null, null, null, (warnIndex != null ? warnIndex : null))); // new notice
        $("#RWRBDONEreportUsr").click(()=>rw.ui.adminReportSelector(un)); // report to admin

        // Now perform default (if set)
        if ((rw.config.rwRollbackDoneOption != null) || (rw.config.rwRollbackDoneOption != "none")) $(`#${rw.config.rwRollbackDoneOption}`).click();
        
        // Hides other icons and shows the rollback done options and also checks for defaults, also adds click handlers
        $("#rwRollbackInProgress").fadeOut(()=>{ // fade out - looks smoother
            $("#rwRollbackDoneIcons").fadeIn(); //show our icons
        }); 
    }
};

// Most UI elements
// See also dialog.js (dialogEngine) and mdlContainer.js (mdlContainer)
rw.ui = {

    "revisionBrowser" : url=> {
        // Show new container for revision reviewing
        dialogEngine.create(mdlContainers.generateContainer(`
        <div id="close" class="icon material-icons" style="float:right;">
            <span style="cursor: pointer; padding-right:15px;" onclick="window.parent.postMessage('closeDialog');">
                clear
            </span>
        </div>
        <div class="mdl-tooltip" for="close">
            Close
        </div>
         <iframesrc="`+ url +`" frameborder="0" style="height:95%;"></iframe>
        `, window.innerWidth-70, window.innerHeight-50)).showModal();
    },

    "beginWarn" : (ignoreWarnings, un, pg, customCallback, callback, hideUserInfo, autoSelectReasonIndex)=> { // if customCallback = false, callback(templatestr) (rev12) autoSelectReasonIndex(rev13) for quick rollbacks for vandalism ext..
        // Give user a warning (show dialog)
        
        let autoLevelSelectEnable = (!hideUserInfo) && (rw.config.rwautoLevelSelectDisable != "disable"); // If autolevelselect enabled (always disabled on hideUserInfo options)

        if ((rw.info.targetUsername(un) == rw.info.getUsername()) && !ignoreWarnings) {
            // Usernames are the same, show dialog
            rw.ui.confirmDialog("Whoops! You cannot warn yourself here. If you'd like to test, use a sandbox.", "OKAY", ()=>dialogEngine.closeDialog(), "", ()=>{}, 0);
            return; // DO NOT continue.
        }

        // Let's continue

        // Assemble rule listbox
        let finalListBox = "<span>";
        let currentHeading = "";
        rw.rules.forEach((rule, i) => {
            // Check if category is different to current heading first
            if (rule.catagory != currentHeading) {
                // Now generate a new heading and section for search to hide
                finalListBox += `</span> <!-- close prior category -->
                <span class="rwNoticeCatagory"> <!-- used for search -->
                <div class="rwNoticeCatagoryHead" style="
                    text-align: center;
                    font-family: Roboto;
                    font-weight: 300;
                    width: 100%;
                    cursor: pointer;
                ">${rule.catagory}</div>`;

                // A new heading is needed
                currentHeading = rule.catagory; // set to ours for detection
            }

            // Add appropriate list format per config
            if (rw.config.rwNoticeListByTemplateName != "enable") {
                // Standard listing by rule description
                let style = "";
                if (rule.name.length > 62) {
                    // Too long to fit
                    style="font-size:14px";
                }
                finalListBox += `<li
                class="mdl-menu__item"
                data-val="`+ i +`"
                onmousedown="refreshLevels(`+i+`);"
                style="`+style +`">
                    ${rule.name} <!-- ${rule.template} (comment for search) -->
                </li>`; // add dataselected if = autoSelectReasonIndex & autoselect is enabled
            } else {
                // List by template name
                let style = "";
                if (rule.name.length > 62) {
                    // Too long to fit
                    style="font-size:14px"; // style here applies to span that will show on hover
                }
                finalListBox += `<li
                class="mdl-menu__item"
                data-val="`+ i +`"
                id="rwTemplateSelect${i}"
                onmousedown="refreshLevels(`+i+`);">
                    ${rule.template} <!-- ${rule.name} (comment for search) -->
                </li>
                <!-- Add script to change to reason on mouseover -->
                <script>$("#rwTemplateSelect${i}").mouseenter(()=>{
                    // Mouse has entered the box
                    $("#rwTemplateSelect${i}").html(\`<span style="${style}">${rule.name}</span>\`); // set to rule name
                });
                $("#rwTemplateSelect${i}").mouseleave(()=>{
                    // Mouse has entered the box
                    $("#rwTemplateSelect${i}").html(\`${rule.template} <!-- ${rule.name} (comment for search) -->\`); // set to default
                });
                </script>
                `; 
            }
        });
        finalListBox += `</span>`; // close final catagory

        // Setup preview handling
        addMessageHandler("generatePreview`*", m=>{
            rw.info.parseWikitext(m.split("`")[1], parsed=>{ // Split to Wikitext and send over to the API to be handled
                dialogEngine.dialog.getElementsByTagName("iframe")[0].contentWindow.postMessage({
                    "action": "parseWikiTxt",
                    "result": parsed}, '*'); // push to container for handling in dialog and add https:// to stop image breaking
            });
        });

        // Add toast handler
        addMessageHandler("pushToast`*", m=>rw.visuals.toast.show(m.split('`')[1],false,false, 5000));

        // Add admin report handler
        addMessageHandler("adminR", ()=>rw.ui.adminReportSelector(un));

        // Add recent page handelr
        addMessageHandler("openRecentPageSelector", ()=>rw.ui.recentlyVisitedSelector.showDialog(p=>{
            // Send page back to container
            dialogEngine.dialog.getElementsByTagName("iframe")[0].contentWindow.postMessage({
                "action": "recentPage",
                "result": p.replace(/_/g, ' ')}, '*');
        }));

        // Add submit handler

        addMessageHandler("applyNotice`*", eD=> {
            // i.e applyNotice`user`wikitext`summary
            // TODO: maybe b64 encode?
            let _eD = eD.split("`"); // params
            let user = _eD[1];
            let wikiTxt = _eD[2];
            let rule = _eD[3];
            let template = _eD[4].split("|")[0];
            let warningLevel = "N/A";

            if ((customCallback == null) || (customCallback == false)) { // if not set
                // Map warning level
                (['1', '2', '3', '4', '4im']).forEach(e=>{
                    if (template.includes(e)) warningLevel = e; // if includes this level, add
                });

                console.log({user, wikiTxt, rule, template, warningLevel}); // debug

                // MAKE EDIT - summary with warning info
                let summary = `${
                    ({  
                        "N/A" : "Notice:",
                        "1" : "Note:",
                        "2" : "Caution:",
                        "3" : "Warning:",
                        "4" : "Final Warning:",
                        "4im": "ONLY Warning:"
                    })[warningLevel]
                } ${rule}`;

                // MAKE EDIT
                rw.info.addWikiTextToUserPage(user, wikiTxt, true, summary);
            } else {
                // Send callback
                callback(wikiTxt);
            }
        });

        // Check most recent warning level

        rw.info.lastWarningLevel(rw.info.targetUsername(un), (w, usrPgMonth, userPg)=>{
            let lastWarning = [ // Return HTML for last warning level.
                // NO PAST WARNING
                `
                <span class="material-icons" id="PastWarning" style="cursor:help;position: relative;top: 5px;padding-left: 10px;color:green;">thumb_up</span>
                <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning">
                    <span style="font-size:x-small;">
                    No notices this month.
                    </span>
                </div>
                `,

                // NOTICE
                `
                <span class="material-icons" id="PastWarning" style="cursor:help;position: relative;top: 5px;padding-left: 10px;color:blue;">info</span>
                <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning">
                    <span style="font-size:x-small;">
                    Has been given a Level 1 notice this month.
                    </span>
                </div>
                `,
                // CAUTION
                `
                <span class="material-icons" id="PastWarning" style="cursor:help;position: relative;top: 5px;padding-left: 10px;color:orange;">announcement</span>
                <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning">
                    <span style="font-size:x-small;">
                    Has been given a Level 2 caution this month.
                    </span>
                </div>
                `,
                // Warning- in red. RedWarn, get it? This is the peak of programming humour.
                `
                <span class="material-icons" id="PastWarning" style="cursor:help;position: relative;top: 5px;padding-left: 10px; color:red;">report_problem</span>
                <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning">
                    <span style="font-size:x-small;">
                    Has been given a Level 3 warning this month.
                    </span>
                </div>
                `,

                // Final/Only Warning (dark red)
                `
                <span class="material-icons" id="PastWarning" style="cursor:pointer;position: relative;top: 5px;padding-left: 10px;color:#a20000;" onclick="window.parent.postMessage('adminR');">report</span>
                <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning">
                    <span style="font-size:x-small;">
                    Has been given a Level 4 Final or ONLY warning.<br/>
                    Click here to report to admins for vandalism. Review user page first.
                    </span>
                </div>
                `
            ][w];

            // CREATE DIALOG
            // MDL FULLY SUPPORTED HERE (container). 
            dialogEngine.create(mdlContainers.generateContainer(`
                <!-- INCLUDED BY COMPILER -->

    <!-- Style needed to prevent huge headings -->
<style>
    #previewUsrPg h2{
        font-size:25px
    }

    #previewUsrPg .mw-editsection {
        display: none; /* Hide edit links */
    }

    #previewUsrPg .toc {
        /* Hide table of contents */
        display: none;
    }
</style>
<div id="noticeFmContainer">
    <h2 style="font-weight: 200;">New Notice</h2>



    <!-- FORM -->
    <form id="newNoticeForm">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:75%;"> <!-- 75% for account standing -->
        <input class="mdl-textfield__input" type="text" id="trgtUsrVisualBox" value="`+ rw.info.targetUsername(un) +`" readonly>
        <label class="mdl-textfield__label" for="trgtUsrVisualBox">Target</label>
        <div class="mdl-tooltip" for="trgtUsrVisualBox">
            To target a different user, please visit their userpage, or right-click a link to their userpage.
        </div>
    </div>
    <span style="display:none;">`+ (hideUserInfo ? "" : "</span>") + `<!-- hide if hide requested-->
    <!-- Last warning note -->
    `+ lastWarning +`

    <!-- Preview userpage notices this month btn -->
    <span class="material-icons" id="prevUsrPgMonth" style="cursor:pointer;position: relative;top: 5px;padding-left: 10px;" onclick="showThisMonthsUsrMsgs();">assignment_late</span>
    <div class="mdl-tooltip mdl-tooltip--large" for="prevUsrPgMonth">
        <span style="font-size:x-small;">
            See notices for this month
        </span>
    </div>

    <!-- Preview userpage btn -->
    <span class="material-icons" id="prevUsrPg" style="cursor:pointer;position: relative;top: 5px;padding-left: 10px;" onclick="showUsrPg();">assignment_ind</span>
    <div class="mdl-tooltip mdl-tooltip--large" for="prevUsrPg">
        <span style="font-size:x-small;">
            Preview Userpage
        </span>
    </div>
    `+ (hideUserInfo ? "</span>" : "") + ` <!-- end span if hidden -->
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select" style="width:100%" id="reasonsBox">
        <input type="text" value="" class="mdl-textfield__input" id="template" style="font-size:14px;" autocomplete="off">
        <input type="hidden" value="" name="template">
        <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
        <label for="template" class="mdl-textfield__label">${(rw.config.rwNoticeListByTemplateName != "enable") ? `Reason` : `Template`}</label> <!-- show reason or template based on config-->
        <ul for="template" class="mdl-menu mdl-menu--bottom-left mdl-js-menu" style="overflow-y: scroll;height: 300px">
            `+ finalListBox +`
        </ul>
    </div>

    <!-- Select which level of warning -->
    <span style="padding-right: 30;">Notice Level: </span>

    <span id="warningRadioButtons">
    <!-- LEVEL 1 -->
    <label id="l1Lbl" class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="level1" style="padding-right: 10;">
        <input type="radio" id="level1" class="mdl-radio__button" name="warnLevel" value="1" `+ (!autoLevelSelectEnable || (w == 0) ? `checked` : ``) + `> <!-- Check if no notices recieved or if autolevel select is off -->
        <span class="mdl-radio__label">
        <span class="material-icons">info</span>
        </span>
    </label>
    <div class="mdl-tooltip mdl-tooltip--large" for="l1Lbl">
        Notice<br />
        <span style="font-size:x-small;">
        Level 1<br />
        Assumes Good Faith</span>
    </div>

    <!-- Level 2 -->
    <label id="l2Lbl" class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="level2" style="padding-right: 10;"> 
        <input type="radio" id="level2" class="mdl-radio__button" name="warnLevel" value="2" `+ (autoLevelSelectEnable && (w == 1) ? `checked` : ``) + `><!-- Check if level one -->
        <span class="mdl-radio__label">
            <span class="material-icons">announcement</span>
        </span>
    </label>
    <div class="mdl-tooltip mdl-tooltip--large" for="l2Lbl">
        Caution<br />
        <span style="font-size:x-small;">
        Level 2<br />
        No Faith Assumption.</span>
    </div>

    <!-- Level 3 -->
    <label id="l3Lbl" class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="level3" style="padding-right: 10;">
        <input type="radio" id="level3" class="mdl-radio__button" name="warnLevel" value="3" `+ (autoLevelSelectEnable && (w == 2) ? `checked` : ``) + `>
        <span class="mdl-radio__label"><span class="material-icons">report_problem</span></span>
    </label>
    <div class="mdl-tooltip mdl-tooltip--large" for="l3Lbl">
        Warning<br />
        <span style="font-size:x-small;">
        Level 3<br />
        Assumes bad faith, cease and desist.</span>
    </div>


    <!-- Level 4 -->
    <label id="l4Lbl" class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="level4" style="padding-right: 10;">
        <input type="radio" id="level4" class="mdl-radio__button" name="warnLevel" value="4" `+ (autoLevelSelectEnable && (w > 2) ? `checked` : ``) + `>
        <span class="mdl-radio__label"><span class="material-icons">report</span></span>
    </label>
    <div class="mdl-tooltip mdl-tooltip--large" for="l4Lbl">
        Final Warning<br />
        <span style="font-size:x-small;">
        Level 4<br />
        Bad faith, last warning.</span>
    </div>


    <!-- Level 4im -->
    <label id="l4imLbl" class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="level4im" style="padding-right: 10;">
        <input type="radio" id="level4im" class="mdl-radio__button" name="warnLevel" value="4im">
        <span class="mdl-radio__label"><span class="material-icons">new_releases</span></span>
    </label>
    <div class="mdl-tooltip mdl-tooltip--large" for="l4imLbl">
        ONLY Warning<br />
        <span style="font-size:x-small;">
        Level 4im<br />
        Excessive and continuous disruption.</span>
    </div>

    <!-- NO Level 4 (and explaination)-->
    <label id="l4noLbl" class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="level4no" style="padding-right: 10; display:none;">
        <input type="radio" id="level4no" class="mdl-radio__button" name="warnLevel" value="" disabled>
        <span class="mdl-radio__label"><span class="material-icons" style="cursor: help;">report_off</span></span>
    </label>
    <div class="mdl-tooltip mdl-tooltip--large" for="l4noLbl">
        No final warning.<br />
        <span style="font-size:x-small;">
        A final warning cannot be issued under this reason. To issue a level 4 or level 4im warning, choose the "Generic Warning" option.</span>
    </div>

    <!-- end of radio buttons -->
    </span>

    <!-- SINGLE NOTICE ONLY -->
    <span id="singleNoticeOnly" style="cursor: help;display: none;">

        <span id="sNoticeTt"><strong>Reminder</strong></span>
        <div class="mdl-tooltip mdl-tooltip--large" for="sNoticeTt">
            Reminder<br />
            <span style="font-size:x-small;">
            Single Notice<br />
            Serves to remind other editors about minor mistakes
            </span>
        </div>
    </span>
    <!-- END SINGLE NOTICE -->

    <!-- SINGLE WARNING ONLY -->
    <span id="singleWarnOnly" style="cursor:help;display: none;">

        <span id="sWarnTt"><strong>Policy Violation Warning</strong></span>
        <div class="mdl-tooltip mdl-tooltip--large" for="sWarnTt">
            Policy Violation Warning<br />
            <span style="font-size:x-small;">
            Single Warning<br />
            Serves to advise editors of policy breaches that, if repeated, are likely to result in a block.
            </span>
        </div>
    </span>
    <!-- END SINGLE WARNING -->

    <span id="ordInfo"> <!-- ordinary info -->
        <!-- Related pages -->
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:92.4%">
            <input class="mdl-textfield__input" name="relatedPage" type="text" id="relatedPage" value="`+ rw.info.getRelatedPage(pg).replace(/_/g, ' ') +`">
            <label class="mdl-textfield__label" for="relatedPage">Related Page</label>
            <div class="mdl-tooltip" for="relatedPage">
                Optionally, enter the page that this notice relates to.
            </div>
        </div>

        <!-- Select from recents button -->
        <span class="material-icons" id="selectPgFromRecents" style="cursor:pointer;position: relative;top: 5px;padding-left: 10px;" onclick="window.parent.postMessage('openRecentPageSelector');">event_note
        </span>
        <div class="mdl-tooltip mdl-tooltip--large" for="selectPgFromRecents">
            <span style="font-size:x-small;">
                Select from recently visited pages
            </span>
        </div>

        <!-- Additional info box -->
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
            <input class="mdl-textfield__input" name="extraInfo" type="text" id="extraInfo" value="">
            <label class="mdl-textfield__label" for="extraInfo">Additional info</label>
            <div class="mdl-tooltip" for="extraInfo">
                Optionally, add additional info that will be appended to the end of the notice.
            </div>
        </div>
    </span>


    <span id="specialInfo" style="display: none;">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
            <input class="mdl-textfield__input" name="specialInfo" type="text" id="specialInfo" value="">
            <label class="mdl-textfield__label" for="specialInfo">Special Information</label>
            <div class="mdl-tooltip mdl-tooltip--large" for="specialInfo" id="specialInfoTt">
                Placeholder :)
            </div>
        </div>
    </span>

    <!-- END FORM -->
    </form>


    <span id="previewContainer">
        <!-- EDIT BUTTON -->

        <span id="editBtn" class="material-icons" style="font-size: 16px;padding-bottom: 3px;float: right;padding-right: 5px;cursor: pointer;" onclick="$('#previewContainer').hide();$('#editorContainer').show();">
            create
        </span>

        <div id="preview" style="height: 150px; overflow-y: auto; width:100%;"> <!-- do not use max-height as this moves the buttons and makes it hard for muscle memory-->
            
        </div> <!-- Used to show preview-->
    </span>

    <span id="editorContainer" style="display:none;">
        <span id="previewBtn" class="material-icons" style="font-size: 16px;padding-bottom: 3px;float: right;padding-right: 5px;cursor: pointer;" onclick="$('#previewContainer').show();$('#editorContainer').hide();grabPreview(true);">
            visibility
        </span>
        <div id="editor">
            <textarea id="wikiTxt" style="height: 150px; max-height: 150px; overflow-y: auto; width:100%;"></textarea>
        </div> <!-- Used to edit Wikitext -->
    </span>

    <!-- SUBMIT BUTTONS --> <br/>
    <span style="float:left;color:red;" id="errorString">
        
    </span>
    <span style="float:right;">
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
            CANCEL
        </button>
        <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="submitEdit();">
            `+ (customCallback ? customCallback : `SEND NOTICE`) + ` <!-- use custom button if requested -->
        </button>
    </span>
</div>

<!-- Userpage month preview -->
<div id="usrPgPrevMth" style="display: none;">
    <span class="material-icons" id="prevUsrPg" style="cursor:pointer;position: relative;top: 5px;padding-bottom: 10px;" onclick="returnTonoticeForm();">arrow_back</span>
    <div class="mdl-tooltip mdl-tooltip--large" for="prevUsrPg">
        <span style="font-size:x-small;">
            Back to Notice Editor
        </span>
    </div>

    <div id="previewUsrPgMth" style="height: 95%; overflow:auto;">
        <i>Generating preview...</i>
        <div class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
        <pre id="uMloadingPre" style="white-space: pre-wrap;">`+ usrPgMonth +`</pre>
    </div>
    
</div>

<!-- Userpage preview -->
<div id="usrPgPrev" style="display: none;">
    <span class="material-icons" id="prevUsrPg" style="cursor:pointer;position: relative;top: 5px;padding-bottom: 10px;" onclick="returnTonoticeForm();">arrow_back</span>
    <div class="mdl-tooltip mdl-tooltip--large" for="prevUsrPg">
        <span style="font-size:x-small;">
            Back to Notice Editor
        </span>
    </div>
    <div id="previewUsrPg" style="height: 95%; overflow:auto;">
        <i>Generating preview...</i>
        <div class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
        <pre id="uloadingPre" style="white-space: pre-wrap;">`+ userPg +`</pre>
    </div>
</div>

<script>
    function showThisMonthsUsrMsgs() {
        $("#noticeFmContainer").hide();
        $("#usrPgPrev").hide();
        $("#usrPgPrevMth").show();
        // Generate preview if needed (i.e. loading pre still there)
        if ($("#uMloadingPre").length > 0) {
            let wikiTxt = $("#uMloadingPre").text();
            window.parent.postMessage('generatePreview\\\`'+ wikiTxt, '*');
        }
    }

    function showUsrPg() {
        $("#noticeFmContainer").hide();
        $("#usrPgPrev").show();
        $("#usrPgPrevMth").hide();
        // Generate preview if needed (i.e. loading pre still there)
        if ($("#uloadingPre").length > 0) {
            let wikiTxt = $("#uloadingPre").text();
            window.parent.postMessage('generatePreview\\\`'+ wikiTxt, '*');
        }
    }

    function returnTonoticeForm() {
        $("#noticeFmContainer").show();
        $("#usrPgPrevMth").hide();
        $("#usrPgPrev").hide();
    }

        // Handle incoming data
    window.onmessage = function(e){
        if (e.data.action == 'parseWikiTxt') {
            if ($("#usrPgPrevMth:visible").length > 0) {
                // user page month preview
                $("#previewUsrPgMth").html(e.data.result); // set content
                return; // exit
            } else if ($("#usrPgPrev:visible").length > 0) {
                // User page preview
                $("#previewUsrPg").html(e.data.result); // set content
                return; // exit
            }

            // Normal preview
            $("#preview").html(e.data.result); // Set preview to content
        } else if (e.data.action == 'recentPage') {
            // On recent page selected
            $("#relatedPage").val(e.data.result);
        }
    };

    // Search reasons
    // Very basic but it works 
    $("input#template").keydown(e=>{
        if (e.key == "Enter") {
            $($(".mdl-menu__item:visible")[0]).click(); // invoke click on first visible to select
            refreshLevels($($(".mdl-menu__item:visible")[0]).attr("data-val")); // refresh preview
            return; // exit
        }

        // Else, continue normal search
        let toSearch = document.getElementById("template").value.toLowerCase();
        $(".mdl-menu__item").each((x,y)=>{
            if ($(y).html().toLowerCase().includes(toSearch)) {
                $(y).show();
            } else {
                $(y).hide();
            }
        });

            // Clear out headers with nothing under
            $("span.rwNoticeCatagory").each((i, el)=>{
                if ($(el).find("li.mdl-menu__item:visible").length == 0) {
                    $(el).find(".rwNoticeCatagoryHead").hide();
                } else {
                    $(el).find(".rwNoticeCatagoryHead").show();
                }
            });
    });



    var grabPreview = fromCustomTxt=> {
        // Generate preview
        // Wikitext grab
        if (fromCustomTxt) {
            // Edited using Wikitext editor
            var wikiTxt = document.getElementById("wikiTxt").value;
            if (!wikiTxt.includes("${rw.sign()}")) {
                // Not signed, warn
                pushToast("Don't forget to sign your notice!");
            }
            window.parent.postMessage('generatePreview\\\`'+ wikiTxt, '*');
        } else {
            if ($('#editorContainer:visible').length > 0) {
                // Editor is open, we don't want to overwrite by accident.
                pushToast("Warning: This will overwrite your changes. Switch back to preview to confirm.");
                return;
            }
            // Get preview as usual
            getTemplateName(name=>{
            var wikiTxt = "{{subst:"+ name +"}} " + "${rw.sign()}";
            // Check if this user is an IP, if so, add the advice template to the end
            if (`+ (rw.info.isUserAnon(rw.info.targetUsername(un)) ? "true" : "false") +` == true) {
                wikiTxt += "`+ rw.sharedIPadvice() +`";
            }
            document.getElementById("wikiTxt").value = wikiTxt; // set edit box
            window.parent.postMessage('generatePreview\\\`'+ wikiTxt, '*');
            }); 
        } 
    }

    var rules = `+ JSON.stringify(rw.rules) +`; // get rules from host
    var refreshLevels = i=> {
       if (rules[i].warningLevels.includes(0)) {
           // Single notice
           $("#warningRadioButtons").hide();
           $("#singleNoticeOnly").show();
           $("#singleWarnOnly").hide();
       } else if (rules[i].warningLevels.includes(6)) {
           // Single warning
           $("#warningRadioButtons").hide();
           $("#singleNoticeOnly").hide();
           $("#singleWarnOnly").show();
       } else {
           // Normal warning
           $("#warningRadioButtons").show();
           $("#singleNoticeOnly").hide();
           $("#singleWarnOnly").hide();

           if (!rules[i].warningLevels.includes(1)) {
            // No l1 warning
            $("#l1Lbl").hide();
           } else {
            $("#l1Lbl").show();
           }

           if (!rules[i].warningLevels.includes(2)) {
            // No l2 warning
            $("#l2Lbl").hide();
           } else {
            $("#l2Lbl").show();
           }
           if (!rules[i].warningLevels.includes(3)) {
            // No l3 warning
            $("#l3Lbl").hide();
           } else {
            $("#l3Lbl").show();
           }

           // LEVEL 4
           if (!rules[i].warningLevels.includes(4)) {
            // No final warning
            $("#l4Lbl").hide();
            $("#l4noLbl").show();
           } else {
            $("#l4Lbl").show();
            $("#l4noLbl").hide();
           }
           if (!rules[i].warningLevels.includes(5)) {
            // No ONLY warning
            $("#l4imLbl").hide();
           } else {
            $("#l4imLbl").show();
           }
       }

       if (rules[i].note != null) {
           // A disclaimer toast needs to be shown
           pushToast(rules[i].note);
       }

       let noneStandard = {
                'uw-agf-sock': 'Optional username of other account (without User:) ',
                'uw-bite': "Username of 'bitten' user (without User:) ",
                'uw-socksuspect': 'Username of sock master, if known (without User:) ',
                'uw-username': 'Username violates policy because... ',
                'uw-aiv': 'Optional username that was reported (without User:) '
        }; // These all take a different thing and only have 1 input

        if (noneStandard[rules[i].template] != null) {
            // Requires special input
            $("#specialInfo").show();
            $("#ordInfo").hide();
            $("#specialInfoTt").html(noneStandard[rules[i].template]); // Set tool tip text
        } else {
            // Doesn't require
            $("#specialInfo").hide();
            $("#ordInfo").show();
        }
    }

    function pushToast(text) {window.parent.postMessage('pushToast\\\`' + text);} // Push toast to host

    var getTemplateName = callback=> { // CALLBACK IS ONLY CALLED IF SUCCESSFUL
        let currentTemplate = "";
        let currentLevel = "";
        var data = $('#newNoticeForm').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
            }, {}); // form data

        // LEVEL
        if ($("input:radio:visible:checked").length == 0) { // If no visble radio buttons checked
            if ($("#singleNoticeOnly:visible").length > 0 || $("#singleWarnOnly:visible").length > 0) {
                // No warning level needed, leaving for readability
            } else {
                // No radio button pressed, not a single warning/notice
                $("#errorString").text("Please select a warning level.");
                return;
            }
        } else {
            // Radio button
            currentLevel = data.warnLevel; // Set to selected radiobutton value
        }

        // TEMPLATE
        if (data.template == "") {
            // No reason selected
            $("#errorString").text("Select a reason.");
            return;
        }
        // All good
        $("#errorString").text("");
        currentTemplate = rules[data.template].template; // assemble
        if ($("#specialInfo:visible").length > 0) {
            callback(currentTemplate + currentLevel + "|" + data.specialInfo); // callback w data for special
        } else {
            callback(currentTemplate + currentLevel + "|" + $("#relatedPage").val() + "|" + "'' "+ data.extraInfo +"''"); // callback, extra info italics
        }
    };

    function submitEdit() {
        // Add notice to page
        getTemplateName(r=>{ // acts as validation
            // SEND IT
            var data = $('#newNoticeForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data

            var wikiTxt = document.getElementById("wikiTxt").value;
            if (!wikiTxt.includes("${rw.sign()}")) {
                // Not signed, warn
                $("#errorString").text("Please sign your notice.");
                return; // Do not continue
            }
            // Format: applyNotice,target,wikitxt,warnlevel|rulename
            window.parent.postMessage(('applyNotice\\\`' + document.getElementById("trgtUsrVisualBox").value + '\\\`' + wikiTxt + '\\\`' + rules[data.template].name + '\\\`' + r)); // Push upstairs and commit
            window.parent.postMessage("closeDialog"); // We done here. Top will refresh or reshow if error occurs.
        });
    }


    // Check for change in form data
    // then 500ms since last change, update preview
    var oldData = "";
    var updatePreviewTOut;
    setInterval(()=>{
        var data = $('#newNoticeForm').serializeArray().reduce((obj, item) => {
            obj[item.name] = item.value;
            return obj;
            }, {}); // form data
        if (JSON.stringify(data) === oldData) {
            // No change
        } else {
            oldData = JSON.stringify(data); // set
            $("#submitBtn").hide(); // hide until template refresh
            // Change. Set timeout for 500ms
            try {
                clearTimeout(updatePreviewTOut); // clear timeout so it resets after last change
            } catch (e) {}
            updatePreviewTOut = setTimeout(()=>{
                grabPreview();
                $("#submitBtn").show();
            }, 500); // show previews after 500ms since last change
        }
       
    }, 100);

    // If autoselect enabled and autoselect index set, apply to that index
    `+ ((autoLevelSelectEnable) && (autoSelectReasonIndex != null) ? `
        // Activate click event for this index after 250ms
        setTimeout(()=>{
            $("#reasonsBox > input:visible").click();
            setTimeout(()=>{
                $("li.mdl-menu__item[data-val='${autoSelectReasonIndex}']").click();
            },250);
        },250);
    ` : "") +`
</script>
            `, 500, 630)).showModal(); // 500x630 dialog, see warnUserDialog.html for code
        });
            
    }, // end beginWarn

    "newMsg" : (un, noRedirect, buttonTxt, callback)=>{
        // New message dialog
        // Setup preview handling
        addMessageHandler("generatePreview`*", m=>{
            rw.info.parseWikitext(m.split("`")[1], parsed=>{ // Split to Wikitext and send over to the API to be handled
                dialogEngine.dialog.getElementsByTagName("iframe")[0].contentWindow.postMessage({
                    "action": "parseWikiTxt",
                    "result": parsed}, '*'); // push to container for handling in dialog and add https:// to stop image breaking
            });
        });

        // Add toast handler
        addMessageHandler("pushToast`*", m=>rw.visuals.toast.show(m.split('`')[1],false,false,15000));

        // Add submit handler

        addMessageHandler("applyNotice`*", eD=> {
            // i.e applyNotice`user`wikitext`summary
            // TODO: maybe b64 encode?
            let _eD = eD.split("`"); // params
            let user = _eD[1];
            let wikiTxt = _eD[2];
            let summary = _eD[3];
            if (noRedirect) { // If no redirect, callback
                callback(wikiTxt);
            } else {
                // MAKE EDIT
                rw.info.addWikiTextToUserPage(user, wikiTxt, false, summary); // This requires title.
            }
        });

        // CREATE DIALOG
        // MDL FULLY SUPPORTED HERE (container). 
        dialogEngine.create(mdlContainers.generateContainer(`
        <!-- Style for title preview -->
<style>
    h2 {
        font-size: 20px;
        line-height: 0px;
    }
    .mw-editsection {
        display: none;
    }
</style>
<h2 style="font-weight: 200;font-size:45px;line-height: 48px;">New Talk Page Message</h2>
<form id="newMsgForm">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" id="trgtUsrVisualBox" value="`+ rw.info.targetUsername(un) +`" readonly>
        <label class="mdl-textfield__label" for="trgtUsrVisualBox">Target</label>
        <div class="mdl-tooltip" for="trgtUsrVisualBox">
            To target a different user, please visit their userpage.
        </div>
    </div>
<span id="previewContainer" style="display:none;">
    <!-- EDIT BUTTON -->

    <span id="editBtn" class="material-icons" style="font-size: 16px;padding-bottom: 3px;float: right;padding-right: 5px;cursor: pointer;" onclick="$('#previewContainer').hide();$('#editorContainer').show();">
        create
    </span>

    <div id="preview" style="height: 150px; overflow-y: auto; width:100%;"> <!-- do not use max-height as this moves the buttons and makes it hard for muscle memory-->
        
    </div> <!-- Used to show preview-->
</span>

<span id="editorContainer">
    <span id="previewBtn" class="material-icons" style="font-size: 16px;padding-bottom: 3px;float: right;padding-right: 5px;cursor: pointer;" onclick="$('#previewContainer').show();$('#editorContainer').hide();grabPreview();">
        visibility
    </span>
    <div id="editor">
        <textarea id="wikiTxt" name="wikiTxt" style="height: 150px; max-height: 150px; overflow-y: auto; width:100%;">
== Your Message Title ==
Your message here. ${rw.sign()}
        </textarea>
    </div> <!-- Used to edit Wikitext -->
</span>
</form>

<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="sendMessage();">
        `+ (buttonTxt == null ? "SEND MESSAGE" : buttonTxt) +` <!-- if custom asked for, give custom button txt, else -->
    </button>
</span>

<script>
        // Handle incoming data
    window.onmessage = function(e){
        if (e.data.action == 'parseWikiTxt') {
            $("#preview").html(e.data.result); // Set preview to content
        }
    };

    function pushToast(text) {window.parent.postMessage('pushToast\\\`' + text);} // Push toast to host

    function grabPreview() {
        var wikiTxt = document.getElementById("wikiTxt").value;
        if (!wikiTxt.includes("${rw.sign()}")) {
            // Not signed, warn
            pushToast("Don't forget to sign your message!");
        }
        window.parent.postMessage('generatePreview\\\`'+ wikiTxt, '*');
    }

    function sendMessage() {
        // Send it!
        var data = $('#newMsgForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data

        var wikiTxt = data.wikiTxt;
        if (!wikiTxt.includes("${rw.sign()}")) {
            // Not signed, warn
            pushToast("WARNING: You haven't signed your message with '${rw.sign()}'");
        }
        window.parent.postMessage('applyNotice\\\`' + document.getElementById("trgtUsrVisualBox").value + '\\\`' + wikiTxt + '\\\`' + "New message"); // Push upstairs and commit
        window.parent.postMessage("closeDialog"); // We done here. Top will refresh or reshow if error occurs.
    }
</script>
        `, 500, 390)).showModal(); // 500x390 dialog, see newMsg.html for code
    },

    "registerContextMenu" : () => { // Register context menus for right-click actions
        // More docs at https://swisnl.github.io/jQuery-contextMenu/demo/trigger-custom.html

        // USER TALK ACTIONS - check if not disabled then continue
        if (rw.config.rwDisableRightClickUser != "disable") $(()=>{
            // REV15 - only trigger on shift+right-click unless if set in settings - If config is set to "Opt2", to open on right-click set in preferences, set below in trigger
            if (rw.config.rwDisableRightClickUser != "Opt2") {
                $('a[href*="/wiki/User_talk:"], a[href*="/wiki/User:"], a[href*="/wiki/Special:Contributions/"]').on('contextmenu', e=>{
                
                    // if shift key not down, don't show the context menu. 
                    if (!e.shiftKey) return; 
                    e.preventDefault();
                    $(e.currentTarget).contextMenu();
                });
            }
            
            $.contextMenu({
                trigger: (rw.config.rwDisableRightClickUser == "Opt2" ? undefined : 'none'), // if set in options, activate as usual
                selector: 'a[href*="/wiki/User_talk:"], a[href*="/wiki/User:"], a[href*="/wiki/Special:Contributions/"]', // Select all appropriate user links
                callback: (act, info)=>{
                    // CALLBACK
                    let hrefOfSelection = $(info.$trigger[0]).attr("href"); // href of userpage or contribs
                    let targetUsername = "";
                    if (hrefOfSelection.includes("/wiki/User_talk:") || hrefOfSelection.includes("/wiki/User:")) {
                        // This is easy because w should just be ablt to spit at last :
                        // We run a regex (rev8 ipv6 fix)
                        /*
                            Find "User_talk"
                            OR "User"
                            Then ":"
                            Or "/"
                            Anything but "/"
                            OR line break
                        */
                        let matches = (hrefOfSelection + "\n").match(/(?:(?:(?:User_talk))|(?:(?:User)(?:\:))|(?:(?:\/)(?:[^\/]*)(?:(?:\n)|(?:\r\n))))/g);
                        // result /User_talk:user, so we removed everything up to the first colon
                        let unURL = matches[0];
                        targetUsername = unURL.replace(unURL.match(/(?:[^\:]*)(?:\:)/g)[0], ""); // Regex first group of colon and remove
                    } else {
                        // Contribs link, go split at last slash
                        targetUsername = (a=>{return a[a.length - 1]})(hrefOfSelection.split("/"));
                    }
                    
                    // Do the action for each action now.
                    ({
                        "usrPg" : un=>redirect(rw.wikiBase+"/wiki/User:"+ un, true),  // Open user page in new tab

                        "tlkPg" : un=>redirect(rw.wikiBase+"/wiki/User_talk:"+ un, true),  // Open talk page in new tab

                        "contribs" : un=>redirect(rw.wikiBase+"/wiki/Special:Contributions/"+ un, true),  // Redirect to contribs page in new tab

                        "accInfo" : un=>redirect(rw.wikiBase+"/wiki/Special:CentralAuth?target="+ un, true),  // Redirect to Special:CentralAuth page in new tab

                        "sendMsg" : un=>rw.ui.newMsg(un), // show new msg dialog

                        "quickWel" : un=>rw.quickTemplate.openSelectPack(un), // Submit Quick Template

                        "newNotice" : un=>rw.ui.beginWarn(false, un), // show new warning dialog

                        "adminReport" : un=>rw.ui.adminReportSelector(un),

                        "usrPronouns": un=>{ // Show a tost with this users prefered pronouns
                            rw.info.getUserPronouns(un, p=>{
                                rw.visuals.toast.show(un + "'s pronouns are "+ p, false, false, 3000);
                            });
                        },

                        "usrEditCount": un=>{ // Show a tost with this users prefered pronouns
                            rw.info.getUserEditCount(un, count=>{
                                if (count == null) count = "an unknown number of"; // stop undefined message 
                                rw.visuals.toast.show(un + " has made "+ count + " edits.", false, false, 3000);
                            });
                        },

                        "usrStanding": un=>{
                            // Show toast with last warning level
                            rw.info.lastWarningLevel(un, level=>{
                                rw.visuals.toast.show(un + " has recieved "+ [
                                    "no warnings",
                                    "a level 1 notice",
                                    "a level 2 caution",
                                    "a level 3 warning",
                                    "a level 4 final or ONLY warning"
                                ][level] + " this month.", false, false, 4000);
                            });
                        },

                        "filterLog": un=>redirect("https://en.wikipedia.org/w/index.php?title=Special:AbuseLog&wpSearchUser="+ un, true),  // Redirect to filter log page in new tab

                        "blockLog": un=>redirect("https://en.wikipedia.org/w/index.php?title=Special:Log/block&page=User:"+ un, true),  // Redirect to block log page in new tab

                        "allLog": un=>redirect("https://en.wikipedia.org/wiki/Special:Log/"+ un, true)  // Redirect to filter log page in new tab

                    })[act](targetUsername.trim());
                    
                },
                items: { // TODO: add extra options like logs ext. ext.
                    "usrPg": {name: "User Page"},
                    "tlkPg": {name: "Talk Page"},
                    "aAsubmenu": {
                        "name": "Quick Actions", 
                        "items": {
                            "sendMsg": {name: "New Message"},
                            "newNotice": {name: "New Notice"},
                            "quickWel": {name: "Quick Template"},
                            "adminReport": {name: "Report to Admin"}
                        }
                    },
                    "aIsubmenu": {
                        "name": "Account info", 
                        "items": {
                            "contribs": {name: "Contributions"},
                            "accInfo": {name: "Central Auth"},
                            "usrPronouns": {"name": "Pronouns"},
                            "usrEditCount": {"name": "Edit Count"},
                            "usrStanding": {"name": "Highest Warning"},
                            "filterLog" : {name: "Edit Filter Log"},
                            "blockLog" : {name: "Block Log"},
                            "allLog" : {name: "All Logs"}
                        }
                    }  
                }
            });
        }); // END USER ACTIONS CONTEXT MENU

        // TODO: add more, like Quick Template options ext.. and right-click on article link to begin rollback ext.


    }, // end context menus


    "requestSpeedyDelete" : (pg)=>{
        // Open Speedy Deletion dialog for first selection, i.e I'm requesting the speedy deletion of..
        // Programming this is proving to be very boring.
        // Add toast handler
        addMessageHandler("pushToast`*", m=>rw.visuals.toast.show(m.split('`')[1],false,false,15000));

        addMessageHandler("csdR`*", rs=>{
            // Reason recieved.
            let reason = eval(rs.split("`")[1]);
            let reasonTitle = reason.title;
            let additionalInfoReq = reason.input != ""; // if special info needed
            let additionalInfo = "";
            if (additionalInfoReq) {
                if (rs.split("`")[2] == "undefined") {
                    // No reason specified
                    additionalInfo = "Not specified.";
                } else {
                    additionalInfo = rs.split("`")[2]; // set to the additional info
                }
            }
            console.log(`Deleting under: `+ reasonTitle +`
            `+ reason.input + additionalInfo + ` (redwarn)
            `);
        }); 

        let finalStr = ``;
        for (const key in speedyDeleteReasons) {
            speedyDeleteReasons[key].forEach((e,i)=>{
                let style = "";
                if ((key + e.title).length > 62) {
                    // Too long to fit
                    style="font-size:10px;";
                }
                finalStr += `<li class="mdl-menu__item" data-val='speedyDeleteReasons["`+ key + `"][`+ i +`]' onmousedown="refreshLevels('speedyDeleteReasons[\\\'`+ key + `\\\'][`+ i +`]');" style="`+ style +`">`+ key + e.title +`</li>`;;
            });
        }
        // CREATE DIALOG
        // MDL FULLY SUPPORTED HERE (container). 
        dialogEngine.create(mdlContainers.generateContainer(`
        <!-- SPEEDY DELETION DIALOG -->

<h2 style="font-weight: 200;font-size:45px;line-height: 48px;">Request Speedy Deletion</h2>
<div class="cntContainer" style="height:350px; overflow:auto;">
    <form id="newMsgForm" onsubmit="pushRollback();" action="#">
        <!-- GENERAL REASONS ONLY UNDER ANY PAGE -->
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select" style="width:100%">
            <input type="text" value="" class="mdl-textfield__input" id="reason" style="font-size:14px;" onkeypress="searchReasons();" autocomplete="off">
            <input type="hidden" value="" name="reason">
            <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
            <label for="template" class="mdl-textfield__label">I'm requesting the speedy deletion of...</label>
            <ul for="template" class="mdl-menu mdl-menu--bottom-left mdl-js-menu" style="overflow-y: scroll;height: 250px">
                `+ finalStr +`
            </ul>
        </div>
        <p id="desP">Please select a valid reason.</p>
        <div id="textBcontainer" style="display:none;">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
                <input class="mdl-textfield__input" type="text" id="customInput" name="customInput">
                <label class="mdl-textfield__label" for="customInput" id="customInputLabel">Custom Reason</label>
                <div class="mdl-tooltip" for="customInput" id="customInputTt">
                    Enter this info correctly
                </div>
            </div>
        </div>
    </form>
    <span style="
        color: red;
        font-size: small;
    ">
    Before nominating a page for speedy deletion, consider whether it could be improved, reduced to a stub, merged or redirected elsewhere,
        reverted to a better previous revision, or handled in <a href="https://en.wikipedia.org/wiki/Wikipedia:Deletion_policy#Alternatives_to_deletion" target="_blank">some other way</a>. A page
        is eligible for speedy deletion only if all of its revisions are also eligible.<br /><br />
    <b>Are you sure a speedy deletion request is the best option and the data you have entered is correct?</b>
        </span><br />
    <span style="float:right;">
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
            CANCEL
        </button>
        <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="pushRollback();">
            YES, PROPOSE SPEEDY DELETION
        </button>
    </span>
</div>

<script>
    function pushRollback() {
        var data = $('#newMsgForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data
        // Submit it
        console.log(data);
        window.parent.postMessage("csdR\\\`"+data.reason + '\\\`' + data.customInput); // Push upstairs
        window.parent.postMessage("closeDialog"); // We done here.
        
    }
    // Search reasons
    // Very basic but it works TODO: work on, including selecting best match on ENTER
    function searchReasons() {
        let toSearch = document.getElementById("reason").value.toLowerCase();
        $(".mdl-menu__item").each((x,y)=>{
            if (y.innerText.toLowerCase().includes(toSearch)) {
                $(y).show();
            } else {
                $(y).hide();
            }
        });
    }

    var refreshLevels = i=>{
        // Show the correct description and textbox
        let speedyDeleteReasons = `+ JSON.stringify(speedyDeleteReasons) +`;
        let reason = eval(i);
        console.log(reason);
        // Info box
        $("#desP").html('<span class="material-icons" style="float: left;padding-right: 5px; cursor:default;">info</span>' + reason.helpText);
        

        if (reason.input != "") {
            // Requires a custom input, show
            $("#customInputLabel").text(reason.input);
            $("#textBcontainer").show(); // Make the textbox visible
            try {
                if (reason.inputTooltip.length > 0) {
                // Tool tip too
                $("#customInputTt").show();
                $("#customInputTt").text(reason.inputTooltip);
                } else {
                    // No tooltip
                    $("#customInputTt").hide();
                }
            } catch (error) {
                // No tooltip
                $("#customInputTt").hide();
            }
        } else {
            $("#textBcontainer").hide();
        }
       
    }
</script>
        `, 500, 450)).showModal(); // 500x300 dialog, see speedyDeletionp1.html for code
    },

    "openPreferences" : () => { // Open Preferences page
        // Add toast handler
        addMessageHandler("pushToast`*", m=>rw.visuals.toast.show(m.split('`')[1],false,false,15000));

        addMessageHandler("config`*", rs=>{ // On config change
            // New config recieved
            let config = JSON.parse(atob(rs.split("`")[1])); // b64 encoded json string
            //Write to our config
            for (const key in config) {
                if (config.hasOwnProperty(key)) {
                    const element = config[key];
                    rw.config[key] = element; // add or change value
                }
            }

            // Push change
            rw.info.writeConfig();
        }); 

        addMessageHandler("resetConfig", rs=>{
            // Reset config recieved, set config back to default
            rw.info.getConfig(()=>{}, true); // TRUE HERE MEANS RESET TO DEAULT
        });

        // Add install quick template handler
        addMessageHandler("installQTP", ()=>{
            // Show warning and confirm
            rw.ui.confirmDialog(`
            <b>WARNING:</b> Only install packs from users you trust. Installing a quick template pack gives the installer full access to your account to write to RedWarn's config files.
            <br/><br/>
            To install, click "install from pack code" and paste the code into the browser dialog that appears.
            `, "Install from pack code", ()=>{
                // Time to install
                importScript(rw.quickTemplate.packCodeToPageName(prompt("Please enter the pack code, then click OK to install:"))); // using mediawiki importscript which does it from pagename
            },
            "CANCEL", ()=>dialogEngine.closeDialog(), 98);
        });

        // Add new QTPack handler
        addMessageHandler("newQTP", ()=>rw.quickTemplate.newPack());

        // Add load new theme handler
        addMessageHandler("newThemeDialog", ()=>rw.ui.loadDialog.show("Changing theme..."));
        addMessageHandler("loadDialogClose", ()=>rw.ui.loadDialog.close());

        // Lock scrolling
        dialogEngine.freezeScrolling();

        // Open preferences page with no padding, full screen
        dialogEngine.create(mdlContainers.generateContainer(`
        <!-- PREFERENCES PAGE -->
<!-- MATERIAL ICONS ARRAY-->
<script>var materialIcons = ["3d_rotation","accessibility","accessibility_new","accessible","accessible_forward","account_balance","account_balance_wallet","account_box","account_circle","add_shopping_cart","alarm","alarm_add","alarm_off","alarm_on","all_inbox","all_out","android","announcement","arrow_right_alt","aspect_ratio","assessment","assignment","assignment_ind","assignment_late","assignment_return","assignment_returned","assignment_turned_in","autorenew","backup","book","bookmark","bookmark_border","bookmarks","bug_report","build","cached","calendar_today","calendar_view_day","camera_enhance","cancel_schedule_send","card_giftcard","card_membership","card_travel","change_history","check_circle","check_circle_outline","chrome_reader_mode","class","code","commute","compare_arrows","contact_support","contactless","copyright","credit_card","dashboard","date_range","delete","delete_forever","delete_outline","description","dns","done","done_all","done_outline","donut_large","donut_small","drag_indicator","eco","eject","euro_symbol","event","event_seat","exit_to_app","explore","explore_off","extension","face","favorite","favorite_border","feedback","find_in_page","find_replace","fingerprint","flight_land","flight_takeoff","flip_to_back","flip_to_front","g_translate","gavel","get_app","gif","grade","group_work","help","help_outline","highlight_off","history","home","horizontal_split","hourglass_empty","hourglass_full","http","https","important_devices","info","input","invert_colors","label","label_important","label_off","language","launch","line_style","line_weight","list","lock","lock_open","loyalty","markunread_mailbox","maximize","minimize","note_add","offline_bolt","offline_pin","opacity","open_in_browser","open_in_new","open_with","pageview","pan_tool","payment","perm_camera_mic","perm_contact_calendar","perm_data_setting","perm_device_information","perm_identity","perm_media","perm_phone_msg","perm_scan_wifi","pets","picture_in_picture","picture_in_picture_alt","play_for_work","polymer","power_settings_new","pregnant_woman","print","query_builder","question_answer","receipt","record_voice_over","redeem","remove_shopping_cart","reorder","report_problem","restore","restore_from_trash","restore_page","room","rounded_corner","rowing","schedule","search","settings","settings_applications","settings_backup_restore","settings_bluetooth","settings_brightness","settings_cell","settings_ethernet","settings_input_antenna","settings_input_component","settings_input_composite","settings_input_hdmi","settings_input_svideo","settings_overscan","settings_phone","settings_power","settings_remote","settings_voice","shop","shop_two","shopping_basket","shopping_cart","speaker_notes","speaker_notes_off","spellcheck","stars","store","subject","supervised_user_circle","supervisor_account","swap_horiz","swap_horizontal_circle","swap_vert","swap_vertical_circle","sync_alt","system_update_alt","tab","tab_unselected","text_rotate_up","text_rotate_vertical","text_rotation_angledown","text_rotation_angleup","text_rotation_down","text_rotation_none","theaters","thumb_down","thumb_up","thumbs_up_down","timeline","toc","today","toll","touch_app","track_changes","translate","trending_down","trending_flat","trending_up","turned_in","turned_in_not","update","verified_user","vertical_split","view_agenda","view_array","view_carousel","view_column","view_day","view_headline","view_list","view_module","view_quilt","view_stream","view_week","visibility","visibility_off","voice_over_off","watch_later","work","work_off","work_outline","youtube_searched_for","zoom_in","zoom_out","add_alert","error","error_outline","notification_important","warning","4k","add_to_queue","airplay","album","art_track","av_timer","branding_watermark","call_to_action","closed_caption","control_camera","equalizer","explicit","fast_forward","fast_rewind","featured_play_list","featured_video","fiber_dvr","fiber_manual_record","fiber_new","fiber_pin","fiber_smart_record","forward_10","forward_30","forward_5","games","hd","hearing","high_quality","library_add","library_add_check","library_books","library_music","loop","mic","mic_none","mic_off","missed_video_call","movie","music_video","new_releases","not_interested","note","pause","pause_circle_filled","pause_circle_outline","play_arrow","play_circle_filled","play_circle_outline","playlist_add","playlist_add_check","playlist_play","queue","queue_music","queue_play_next","radio","recent_actors","remove_from_queue","repeat","repeat_one","replay","replay_10","replay_30","replay_5","shuffle","skip_next","skip_previous","slow_motion_video","snooze","sort_by_alpha","speed","stop","subscriptions","subtitles","surround_sound","video_call","video_label","video_library","videocam","videocam_off","volume_down","volume_mute","volume_off","volume_up","web","web_asset","add_ic_call","alternate_email","business","call","call_end","call_made","call_merge","call_missed","call_missed_outgoing","call_received","call_split","cancel_presentation","chat","chat_bubble","chat_bubble_outline","clear_all","comment","contact_mail","contact_phone","contacts","desktop_access_disabled","dialer_sip","dialpad","domain_disabled","duo","email","forum","import_contacts","import_export","invert_colors_off","list_alt","live_help","location_off","location_on","mail_outline","message","mobile_screen_share","no_sim","pause_presentation","person_add_disabled","phone","phone_disabled","phone_enabled","phonelink_erase","phonelink_lock","phonelink_ring","phonelink_setup","portable_wifi_off","present_to_all","print_disabled","ring_volume","rss_feed","screen_share","sentiment_satisfied_alt","speaker_phone","stay_current_landscape","stay_current_portrait","stay_primary_landscape","stay_primary_portrait","stop_screen_share","swap_calls","textsms","unsubscribe","voicemail","vpn_key","add","add_box","add_circle","add_circle_outline","amp_stories","archive","backspace","ballot","block","clear","create","delete_sweep","drafts","dynamic_feed","file_copy","filter_list","flag","font_download","forward","gesture","how_to_reg","how_to_vote","inbox","link","link_off","low_priority","mail","markunread","move_to_inbox","next_week","outlined_flag","policy","redo","remove","remove_circle","remove_circle_outline","reply","reply_all","report","report_off","save","save_alt","select_all","send","sort","square_foot","text_format","unarchive","undo","waves","weekend","where_to_vote","access_alarm","access_alarms","access_time","add_alarm","add_to_home_screen","airplanemode_active","airplanemode_inactive","battery_alert","battery_charging_full","battery_full","battery_std","battery_unknown","bluetooth","bluetooth_connected","bluetooth_disabled","bluetooth_searching","brightness_auto","brightness_high","brightness_low","brightness_medium","data_usage","developer_mode","devices","dvr","gps_fixed","gps_not_fixed","gps_off","graphic_eq","location_disabled","location_searching","mobile_friendly","mobile_off","nfc","screen_lock_landscape","screen_lock_portrait","screen_lock_rotation","screen_rotation","sd_storage","settings_system_daydream","signal_cellular_4_bar","signal_cellular_alt","signal_cellular_connected_no_internet_4_bar","signal_cellular_no_sim","signal_cellular_null","signal_cellular_off","signal_wifi_4_bar","signal_wifi_4_bar_lock","signal_wifi_off","storage","usb","wallpaper","widgets","wifi_lock","wifi_tethering","add_comment","attach_file","attach_money","bar_chart","border_all","border_bottom","border_clear","border_horizontal","border_inner","border_left","border_outer","border_right","border_style","border_top","border_vertical","bubble_chart","drag_handle","format_align_center","format_align_justify","format_align_left","format_align_right","format_bold","format_clear","format_color_reset","format_indent_decrease","format_indent_increase","format_italic","format_line_spacing","format_list_bulleted","format_list_numbered","format_list_numbered_rtl","format_paint","format_quote","format_shapes","format_size","format_strikethrough","format_textdirection_l_to_r","format_textdirection_r_to_l","format_underlined","functions","height","highlight","insert_chart","insert_chart_outlined","insert_comment","insert_drive_file","insert_emoticon","insert_invitation","insert_link","insert_photo","linear_scale","merge_type","mode_comment","monetization_on","money_off","multiline_chart","notes","pie_chart","post_add","publish","scatter_plot","score","short_text","show_chart","space_bar","strikethrough_s","table_chart","text_fields","title","vertical_align_bottom","vertical_align_center","vertical_align_top","wrap_text","attachment","cloud","cloud_circle","cloud_done","cloud_download","cloud_off","cloud_queue","cloud_upload","create_new_folder","folder","folder_open","folder_shared","cast","cast_connected","computer","desktop_mac","desktop_windows","developer_board","device_hub","device_unknown","devices_other","dock","gamepad","headset","headset_mic","keyboard","keyboard_arrow_down","keyboard_arrow_left","keyboard_arrow_right","keyboard_arrow_up","keyboard_backspace","keyboard_capslock","keyboard_hide","keyboard_return","keyboard_tab","keyboard_voice","laptop","laptop_chromebook","laptop_mac","laptop_windows","memory","mouse","phone_android","phone_iphone","phonelink","phonelink_off","power_input","router","scanner","security","sim_card","smartphone","speaker","speaker_group","tablet","tablet_android","tablet_mac","toys","tv","videogame_asset","watch","add_a_photo","add_photo_alternate","add_to_photos","adjust","assistant","assistant_photo","audiotrack","blur_circular","blur_linear","blur_off","blur_on","brightness_1","brightness_2","brightness_3","brightness_4","brightness_5","brightness_6","brightness_7","broken_image","brush","burst_mode","camera","camera_alt","camera_front","camera_rear","camera_roll","center_focus_strong","center_focus_weak","collections","collections_bookmark","color_lens","colorize","compare","control_point","control_point_duplicate","crop","crop_16_9","crop_3_2","crop_5_4","crop_7_5","crop_din","crop_free","crop_landscape","crop_original","crop_portrait","crop_rotate","crop_square","dehaze","details","edit","euro","exposure","exposure_neg_1","exposure_neg_2","exposure_plus_1","exposure_plus_2","exposure_zero","filter","filter_1","filter_2","filter_3","filter_4","filter_5","filter_6","filter_7","filter_8","filter_9","filter_9_plus","filter_b_and_w","filter_center_focus","filter_drama","filter_frames","filter_hdr","filter_none","filter_tilt_shift","filter_vintage","flare","flash_auto","flash_off","flash_on","flip","flip_camera_android","flip_camera_ios","gradient","grain","grid_off","grid_on","hdr_off","hdr_on","hdr_strong","hdr_weak","healing","image","image_aspect_ratio","image_search","iso","landscape","leak_add","leak_remove","lens","linked_camera","looks","looks_3","looks_4","looks_5","looks_6","looks_one","looks_two","loupe","monochrome_photos","movie_creation","movie_filter","music_note","music_off","nature","nature_people","navigate_before","navigate_next","palette","panorama","panorama_fish_eye","panorama_horizontal","panorama_vertical","panorama_wide_angle","photo","photo_album","photo_camera","photo_filter","photo_library","photo_size_select_actual","photo_size_select_large","photo_size_select_small","picture_as_pdf","portrait","remove_red_eye","rotate_90_degrees_ccw","rotate_left","rotate_right","shutter_speed","slideshow","straighten","style","switch_camera","switch_video","tag_faces","texture","timelapse","timer","timer_10","timer_3","timer_off","tonality","transform","tune","view_comfy","view_compact","vignette","wb_auto","wb_cloudy","wb_incandescent","wb_iridescent","wb_sunny","360","add_location","atm","beenhere","category","compass_calibration","departure_board","directions","directions_bike","directions_boat","directions_bus","directions_car","directions_railway","directions_run","directions_subway","directions_transit","directions_walk","edit_attributes","edit_location","ev_station","fastfood","flight","hotel","layers","layers_clear","local_activity","local_airport","local_atm","local_bar","local_cafe","local_car_wash","local_convenience_store","local_dining","local_drink","local_florist","local_gas_station","local_grocery_store","local_hospital","local_hotel","local_laundry_service","local_library","local_mall","local_movies","local_offer","local_parking","local_pharmacy","local_phone","local_pizza","local_play","local_post_office","local_printshop","local_see","local_shipping","local_taxi","map","menu_book","money","museum","my_location","navigation","near_me","not_listed_location","person_pin","person_pin_circle","pin_drop","place","rate_review","restaurant","restaurant_menu","satellite","store_mall_directory","streetview","subway","terrain","traffic","train","tram","transfer_within_a_station","transit_enterexit","trip_origin","two_wheeler","zoom_out_map","apps","arrow_back","arrow_back_ios","arrow_downward","arrow_drop_down","arrow_drop_down_circle","arrow_drop_up","arrow_forward","arrow_forward_ios","arrow_left","arrow_right","arrow_upward","cancel","check","chevron_left","chevron_right","close","double_arrow","expand_less","expand_more","first_page","fullscreen","fullscreen_exit","home_work","last_page","menu","menu_open","more_horiz","more_vert","refresh","subdirectory_arrow_left","subdirectory_arrow_right","unfold_less","unfold_more","account_tree","adb","airline_seat_flat","airline_seat_flat_angled","airline_seat_individual_suite","airline_seat_legroom_extra","airline_seat_legroom_normal","airline_seat_legroom_reduced","airline_seat_recline_extra","airline_seat_recline_normal","bluetooth_audio","confirmation_number","disc_full","drive_eta","enhanced_encryption","event_available","event_busy","event_note","folder_special","live_tv","mms","more","network_check","network_locked","no_encryption","ondemand_video","personal_video","phone_bluetooth_speaker","phone_callback","phone_forwarded","phone_in_talk","phone_locked","phone_missed","phone_paused","power","power_off","priority_high","sd_card","sms","sms_failed","sync","sync_disabled","sync_problem","system_update","tap_and_play","time_to_leave","tv_off","vibration","voice_chat","vpn_lock","wc","wifi","wifi_off","ac_unit","airport_shuttle","all_inclusive","apartment","bathtub","beach_access","business_center","casino","child_care","child_friendly","fitness_center","free_breakfast","golf_course","hot_tub","house","kitchen","meeting_room","no_meeting_room","pool","room_service","rv_hookup","smoke_free","smoking_rooms","spa","storefront","cake","deck","domain","emoji_emotions","emoji_events","emoji_flags","emoji_food_beverage","emoji_nature","emoji_objects","emoji_people","emoji_symbols","emoji_transportation","fireplace","group","group_add","king_bed","location_city","mood","mood_bad","nights_stay","notifications","notifications_active","notifications_none","notifications_off","notifications_paused","outdoor_grill","pages","party_mode","people","people_alt","people_outline","person","person_add","person_outline","plus_one","poll","public","school","sentiment_dissatisfied","sentiment_satisfied","sentiment_very_dissatisfied","sentiment_very_satisfied","share","single_bed","sports","sports_baseball","sports_basketball","sports_cricket","sports_esports","sports_football","sports_golf","sports_handball","sports_hockey","sports_kabaddi","sports_mma","sports_motorsports","sports_rugby","sports_soccer","sports_tennis","sports_volleyball","thumb_down_alt","thumb_up_alt","whatshot","check_box","check_box_outline_blank","indeterminate_check_box","radio_button_checked","radio_button_unchecked","star","star_border","star_half","star_outline","toggle_off","toggle_on"];
// On settings load name: function handler
var onSettingsLoad = {};
</script>
<!-- END MATERIAL ICONS ARRAY-->
<!-- SORTABLE JS-->
<script src="https://redwarn.toolforge.org/cdn/js/sortable.js"></script>
<script src="https://redwarn.toolforge.org/cdn/js/jquery-sortable.js"></script>

<!-- CONTEXT MENUS -->
<link rel="stylesheet" href="https://redwarn.toolforge.org/cdn/css/jqueryContextMenu.css">
<script src="https://redwarn.toolforge.org/cdn/js/jquery-contextmenu.js"></script>
<script src="https://redwarn.toolforge.org/cdn/js/jquery-ui-position.js"></script>

<!--some stuff-->


<!-- COLOR PICKER -->
<!-- One of the following themes -->
<link rel="stylesheet" href="https://redwarn.toolforge.org/cdn/css/pickr.css"/> <!-- 'classic' theme -->

<!-- Modern or es5 bundle -->
<script src="https://redwarn.toolforge.org/cdn/js/pickr.js"></script>

<!-- PAGE CONTENT --> 
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title" style="width: calc(100% - 60px);">`+ rw.logoHTML +` Preferences</span>
      <div id="apply" class="icon material-icons" style="float:right;">
        <span style="cursor: pointer; padding-right:15px;" onclick="saveConfig();">
            save
        </span>
        </div>
        <div class="mdl-tooltip" for="apply">
            Apply Changes
        </div>

        <div id="close" class="icon material-icons" style="float:right;">
        <span style="cursor: pointer; padding-right:15px;" onclick="window.parent.postMessage('closeDialog');">
            clear
        </span>
        </div>
        <div class="mdl-tooltip" for="close">
            Don't apply changes and Close
        </div>
    </div>
  </header>
  <main class="mdl-layout__content" style="padding-left: 5%;">
    <form id="config">
        <!-- DASHBOARD -->
        <div class="page-content" style="padding-top:10px;">
            <div style="width:25%;float:right;"> <!-- RIGHT SIDE -->

                <!-- About card -->
                <div class="mdl-card mdl-shadow--2dp" style="width: 320px;height: 255px;">
                    <div class="mdl-card__title mdl-card--expand" style="color:white;background-color: crimson;">
                        <h2 class="mdl-card__title-text">${rw.logoHTML} ${rw.version}</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        ${rw.versionSummary}
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://en.wikipedia.org/wiki/Wikipedia:RedWarn/bugsquasher#RedWarn_${rw.version}_summary" target="_blank">
                            READ MORE
                        </a>
                    </div>
                </div>
                <br/><br/>
                <!-- Join Discord -->
                <div class="mdl-card mdl-shadow--2dp" style="width: 320px;height: 255px;">
                    <div class="mdl-card__title mdl-card--expand" style="color:white;background-color: #7289DA;">
                        <h2 class="mdl-card__title-text">Discord</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        Want to join in development discussions as they happen, get fast feedback and talk to other RedWarn users?
                        Join the RedWarn project's Discord server! Accessable from any web browser, or via Discord's desktop and mobile apps.
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://discord.gg/2zNrVa9" target="_blank">
                            JOIN
                        </a>
                    </div>
                </div>
                <br/><br/>
                <!-- Install quick template -->
                <div class="mdl-card mdl-shadow--2dp" style="width: 320px;height: 255px;">
                    <div class="mdl-card__title mdl-card--expand" style="color:white;background-color: #a00498;">
                        <h2 class="mdl-card__title-text">Quick Template</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        Quick Templates can allow you to mitigate the extensive time taken to make repetitive user talk messages. To install a pack, click the button below.
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--accent mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('installQTP');">
                            INSTALL QUICK TEMPLATE PACK
                        </a>
                        <a class="mdl-button mdl-button--primary mdl-js-button mdl-js-ripple-effect" href="https://en.wikipedia.org/wiki/Wikipedia:RedWarn/help/Quick_Template/templates" target="_blank">
                            GET PACKS
                        </a>
                        <a class="mdl-button mdl-button--primary mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('newQTP');">
                            CREATE NEW PACK
                        </a>
                    </div>
                </div>
            </div>

            <div style="width:70%;float: left;"> <!-- Left side main preferences -->
                <div class="mdl-card mdl-shadow--2dp" style="width:100%">
                    <div class="mdl-card__title" style="color: #fff;
                    height: 176px;
                    background: url('https://upload.wikimedia.org/wikipedia/commons/d/d3/Golden_Gate_Bridge_at_sunset_1.jpg') center / cover;">
                        <h2 class="mdl-card__title-text">Appearance</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <!-- Main preferences space -->
                        <!-- APPEARANCE TAB -->
                        <span style="font-size: 18px;">UI Colour Scheme</span><br/>
                        <div style="height:5px"></div> <!-- SPACER -->
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
                            <input type="radio" id="option-1" class="mdl-radio__button" name="colTheme" value="blue-indigo" checked  onchange="updateColourTheme();">
                            <span class="mdl-radio__label">WikiBlue (default)</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
                            <input type="radio" id="option-2" class="mdl-radio__button" name="colTheme" value="amber-yellow" onchange="updateColourTheme();">
                            <span class="mdl-radio__label">Sunshine</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-3">
                            <input type="radio" id="option-3" class="mdl-radio__button" name="colTheme" value="purple-deep_purple" onchange="updateColourTheme();">
                            <span class="mdl-radio__label">Purple Power</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-4">
                            <input type="radio" id="option-4" class="mdl-radio__button" name="colTheme" value="blue_grey-red" onchange="updateColourTheme();">
                            <span class="mdl-radio__label">Red and Dull</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-5">
                            <input type="radio" id="option-5" class="mdl-radio__button" name="colTheme" value="brown-light_green" onchange="updateColourTheme();">
                            <span class="mdl-radio__label">Forrest</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-6">
                            <input type="radio" id="option-6" class="mdl-radio__button" name="colTheme" value="orange-deep_orange" onchange="updateColourTheme();">
                            <span class="mdl-radio__label">Orange Juice</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-7">
                            <input type="radio" id="option-7" class="mdl-radio__button" name="colTheme" value="pink-red" onchange="updateColourTheme();">
                            <span class="mdl-radio__label">Candy Floss</span>
                        </label>
                        &nbsp;
                        <br><br>
                        <!-- Icon locations -->
                        <span style="font-size: 18px;padding-bottom: 20px; cursor:help;">Location of tool icons</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="pgIcoDef">
                            <input type="radio" id="pgIcoDef" class="mdl-radio__button" name="pgIconsLocation" value="default" checked>
                            <span class="mdl-radio__label">After Page Icons (default)</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="pgIcoSide">
                            <input type="radio" id="pgIcoSide" class="mdl-radio__button" name="pgIconsLocation" value="sidebar">
                            <span class="mdl-radio__label">Sidebar</span>
                        </label>
                        <br><br>
                        <!-- Dialog animations -->
                        <span style="font-size: 18px;padding-bottom: 20px; cursor:help;">Dialog Animations</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="dialogAniDefault">
                            <input type="radio" id="dialogAniDefault" class="mdl-radio__button" name="dialogAnimation" value="default" checked>
                            <span class="mdl-radio__label">Default</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="dialogAniNone">
                            <input type="radio" id="dialogAniNone" class="mdl-radio__button" name="dialogAnimation" value="none">
                            <span class="mdl-radio__label">Instant</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="dialogAniSpinny">
                            <input type="radio" id="dialogAniSpinny" class="mdl-radio__button" name="dialogAnimation" value="spinny">
                            <span class="mdl-radio__label">Spinny</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="dialogAniMega">
                            <input type="radio" id="dialogAniMega" class="mdl-radio__button" name="dialogAnimation" value="mega">
                            <span class="mdl-radio__label">Mega</span>
                        </label>
                        <br><br>
                        <!-- ROLLBACK ICONS -->
                        <h5>Rollback icons</h5>
                        <i>Click and drag icons to reorder them, or drag an icon to or from the tray to add or remove them. Items in the tray are accessable via the "More Options" button. Right-click an icon to change its colour or icon.</i>
                        <!-- Icon List -->
                        <ul id="rwRollbackIconsSort" style="text-align: center;width:100%;min-height: 35px;">
                        ${(()=>{ // (tags for IDE formatting only) <script> 
                                // Now we generate for each icon (config should've loaded and put these in order by now)
                                let returnStr = "";
                                rw.rollback.icons.forEach((icon,i)=>{
                                    let elID = "rollbackIcon-"+ (icon.originalIndex == null ? i : icon.originalIndex); // get index from original if already set, else use i (basically only use i on a fresh config)
                                    // Top row, so only add currently enabled icons
                                    if (icon.enabled) returnStr += `
                                    <li id="${elID}" class="icon material-icons">
                                        <span style="cursor: pointer;
                                                    font-size:28px;
                                                    padding-right:5px;
                                                    color:${icon.color};">
                                            ${icon.icon}
                                        </span>
                                    </li>
                                    <div class="mdl-tooltip mdl-tooltip--large" for="${elID}">
                                        ${icon.name} 
                                    </div>
                                    `;
                                });
                                
                                return returnStr; // </script> (tags for IDE formatting only)
                            })()}
                        </ul>

                        <!-- Disabled Icon list -->
                        <ul id="rwRollbackIconsSortDisabled" style="text-align: center;width:100%;min-height: 35px;background: #e8e4e4;">
                            ${(()=>{ // (tags for IDE formatting only) <script> 
                                // Now we generate for each icon (config should've loaded and put these in order by now)
                                let returnStr = "";
                                rw.rollback.icons.forEach((icon,i)=>{
                                    let elID = "rollbackIcon-"+ (icon.originalIndex == null ? i : icon.originalIndex); // get index from original if already set, else use i
                                    // bottom row, so only add disabled icons
                                    if (!icon.enabled) returnStr += `
                                    <li id="${elID}" class="icon material-icons">
                                        <span style="cursor: pointer;
                                                    font-size:28px;
                                                    padding-right:5px;
                                                    color:${icon.color};">
                                            ${icon.icon}
                                        </span>
                                    </li>
                                    <div class="mdl-tooltip mdl-tooltip--large" for="${elID}">
                                        ${icon.name} 
                                    </div>
                                    `;
                                });
                                
                                return returnStr; // </script> (tags for IDE formatting only)
                            })()} 
                        </ul>
                        <!-- END ROLLBACK ICON SETTINGS -->


                        <!-- END MAIN APPEARANCE SECTION -->
                        <hr>
                        <h4>Patrol Appearance</h4>

                        <!-- ADDITION COL -->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" id="ptraddCol">Colour of additions:</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <div class="mdl-tooltip mdl-tooltip--large" for="ptraddCol">
                            The background colour for changes that increase the size of a page.
                        </div>
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="ptraddcolGreen">
                            <input type="radio" id="ptraddcolGreen" class="mdl-radio__button" name="ptrAddCol" value="0,255,0" checked>
                            <span class="mdl-radio__label">Green (default)</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="ptraddcolRed">
                            <input type="radio" id="ptraddcolRed" class="mdl-radio__button" name="ptrAddCol" value="255,0,0">
                            <span class="mdl-radio__label">Red</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="ptraddcolBlue">
                            <input type="radio" id="ptraddcolBlue" class="mdl-radio__button" name="ptrAddCol" value="0,195,255">
                            <span class="mdl-radio__label">Blue</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="ptraddcolYellow">
                            <input type="radio" id="ptraddcolYellow" class="mdl-radio__button" name="ptrAddCol" value="255,255,0">
                            <span class="mdl-radio__label">Yellow</span>
                        </label> <br><br>

                        <!-- RM COL -->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" id="ptrrmCol">Colour of removals:</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <div class="mdl-tooltip mdl-tooltip--large" for="ptrrmCol">
                            The background colour for changes that decrease the size of a page.
                        </div>
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="ptrrmcolGreen">
                            <input type="radio" id="ptrrmcolGreen" class="mdl-radio__button" name="ptrRmCol" value="0,255,0">
                            <span class="mdl-radio__label">Green</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="ptrrmcolRed">
                            <input type="radio" id="ptrrmcolRed" class="mdl-radio__button" name="ptrRmCol" value="255,0,0" checked>
                            <span class="mdl-radio__label">Red (default)</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="ptrrmcolBlue">
                            <input type="radio" id="ptrrmcolBlue" class="mdl-radio__button" name="ptrRmCol" value="0,195,255">
                            <span class="mdl-radio__label">Blue</span>
                        </label>
                        &nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="ptrrmcolYellow">
                            <input type="radio" id="ptrrmcolYellow" class="mdl-radio__button" name="ptrRmCol" value="255,255,0">
                            <span class="mdl-radio__label">Yellow</span>
                        </label>
                        
                        <!-- END APPEARANCE TAB-->
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="saveConfig()">
                            SAVE CHANGES
                        </a>
                    </div>
                </div> <!-- END APPEARANCE CARD -->
                <br/><br/>

                <!-- BEHAVIOUR CARD -->
                <div class="mdl-card mdl-shadow--2dp" style="width:100%">
                    <div class="mdl-card__title" style="color: #fff;
                    height: 176px;
                    background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Wilkin_River_close_to_its_confluence_with_Makarora_River%2C_New_Zealand.jpg/1280px-Wilkin_River_close_to_its_confluence_with_Makarora_River%2C_New_Zealand.jpg') center / cover;">
                        <h2 class="mdl-card__title-text">Behaviour</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <!-- BEHAVIOUR SETTINGS -->
                        <h5>Control Features</h5>
                        <!-- User right click menu rwDisableRightClickUser disable enable-->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" >User right-click menu</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwDisableRightClickUserEnable">
                            <input type="radio" id="rwDisableRightClickUserEnable" class="mdl-radio__button" name="rwDisableRightClickUser" value="enable" checked>
                            <span class="mdl-radio__label">Enable on Shift+Right-click</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwDisableRightClickUserOpt2">
                            <input type="radio" id="rwDisableRightClickUserOpt2" class="mdl-radio__button" name="rwDisableRightClickUser" value="Opt2">
                            <span class="mdl-radio__label">Enable on right-click</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwDisableRightClickUser">
                            <input type="radio" id="rwDisableRightClickUser" class="mdl-radio__button" name="rwDisableRightClickUser" value="disable">
                            <span class="mdl-radio__label">Disable</span>
                        </label>
                        <br /><br />

                        <!-- New Notice Autoselect -->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" >New Notice auto-select level</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwautoLevelSelectDisableEnable">
                            <input type="radio" id="rwautoLevelSelectDisableEnable" class="mdl-radio__button" name="rwautoLevelSelectDisable" value="enable" checked>
                            <span class="mdl-radio__label">Enable</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwautoLevelSelectDisable">
                            <input type="radio" id="rwautoLevelSelectDisable" class="mdl-radio__button" name="rwautoLevelSelectDisable" value="disable">
                            <span class="mdl-radio__label">Disable</span>
                        </label>
                        <br /><br />

                        <!-- On rollback complete default -->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" >On rollback completion</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwRollbackDoneOptionNothing">
                            <input type="radio" id="rwRollbackDoneOptionNothing" class="mdl-radio__button" name="rwRollbackDoneOption" value="none" checked>
                            <span class="mdl-radio__label">Do nothing (default)</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwRollbackDoneOptionSendMsg">
                            <input type="radio" id="rwRollbackDoneOptionSendMsg" class="mdl-radio__button" name="rwRollbackDoneOption" value="RWRBDONEnewUsrMsg">
                            <span class="mdl-radio__label">Send message</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwRollbackDoneOptionQuickTemplate">
                            <input type="radio" id="rwRollbackDoneOptionQuickTemplate" class="mdl-radio__button" name="rwRollbackDoneOption" value="RWRBDONEwelcomeUsr">
                            <span class="mdl-radio__label">Quick Template</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwRollbackDoneOptionNewNotice">
                            <input type="radio" id="rwRollbackDoneOptionNewNotice" class="mdl-radio__button" name="rwRollbackDoneOption" value="RWRBDONEwarnUsr">
                            <span class="mdl-radio__label">New notice</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwRollbackDoneOptionLatestRev">
                            <input type="radio" id="rwRollbackDoneOptionLatestRev" class="mdl-radio__button" name="rwRollbackDoneOption" value="RWRBDONEmrevPg">
                            <span class="mdl-radio__label">Load latest revision</span>
                        </label>
                        &nbsp;&nbsp;
                        <br /><br />

                        <!-- Latest Revision Actions -->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" >When loading the latest revision...</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwLatestRevisionOptionEnable">
                            <input type="radio" id="rwLatestRevisionOptionEnable" class="mdl-radio__button" name="rwLatestRevisionOption" value="stayintab" checked>
                            <span class="mdl-radio__label">Stay in this tab</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwLatestRevisionOption">
                            <input type="radio" id="rwLatestRevisionOption" class="mdl-radio__button" name="rwLatestRevisionOption" value="newtab">
                            <span class="mdl-radio__label">Open in a new tab</span>
                        </label>
                        <br /><br />

                        <!-- New Notice Template Text or Template Name rwNoticeListByTemplateName -->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" >List notices with...</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwNoticeListByTemplateNameDisable">
                            <input type="radio" id="rwNoticeListByTemplateNameDisable" class="mdl-radio__button" name="rwNoticeListByTemplateName" value="disable" checked>
                            <span class="mdl-radio__label">Template descriptions (i.e. Vandalism)</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwNoticeListByTemplateName">
                            <input type="radio" id="rwNoticeListByTemplateName" class="mdl-radio__button" name="rwNoticeListByTemplateName" value="enable">
                            <span class="mdl-radio__label">Template name (i.e. uw-vandalism)</span>
                        </label>
                        <br /><br />

                        <!-- Rollback like or rollback -->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" >Rollback Method</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwRBOpt-rollbackLike">
                            <input type="radio" id="rwRBOpt-rollbackLike" class="mdl-radio__button" name="rollbackMethod" value="rollbackLike" checked>
                            <span class="mdl-radio__label">Rollback-Like</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwRBOpt-rollback">
                            <input type="radio" id="rwRBOpt-rollback" class="mdl-radio__button" name="rollbackMethod" value="rollback">
                            <span class="mdl-radio__label">Rollback (requires permissions)</span>
                        </label>
                        <br /><br />
                        <!-- Review Features -->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" >Pending Changes Review Features</span><br/><div style="height:5px"></div> <!-- SPACER -->
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwDisablePendingChangesEnable">
                            <input type="radio" id="rwDisablePendingChangesEnable" class="mdl-radio__button" name="rwDisablePendingChanges" value="enable" checked>
                            <span class="mdl-radio__label">Enable RedWarn</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwDisablePendingChanges">
                            <input type="radio" id="rwDisablePendingChanges" class="mdl-radio__button" name="rwDisablePendingChanges" value="disable">
                            <span class="mdl-radio__label">Disable RedWarn</span>
                        </label>
                        <br /><br />
                        <!-- Review Auto Accept -->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" >Page Review: Auto Submit Accept</span> - Automatically accepts revision after five seconds.<br />
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwDisableReviewAutoAcceptEnable">
                            <input type="radio" id="rwDisableReviewAutoAcceptEnable" class="mdl-radio__button" name="rwDisableReviewAutoAccept" value="enable" checked>
                            <span class="mdl-radio__label">Enable</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwDisableReviewAutoAccept">
                            <input type="radio" id="rwDisableReviewAutoAccept" class="mdl-radio__button" name="rwDisableReviewAutoAccept" value="disable">
                            <span class="mdl-radio__label">Disable</span>
                        </label>
                        <br /><br />
                        <!-- Review Auto Revert -->
                        <span style="font-size: 18px;padding-bottom: 20px;cursor:help;" >Page Review: Auto Submit Revert</span> - Automatically submits revert after five seconds.<br />
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwEnableReviewAutoRevertEnable">
                            <input type="radio" id="rwEnableReviewAutoRevertEnable" class="mdl-radio__button" name="rwEnableReviewAutoRevert" value="enable">
                            <span class="mdl-radio__label">Enable</span>
                        </label>
                        &nbsp;&nbsp;
                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="rwEnableReviewAutoRevert">
                            <input type="radio" id="rwEnableReviewAutoRevert" class="mdl-radio__button" name="rwEnableReviewAutoRevert" value="disable" checked>
                            <span class="mdl-radio__label">Disable</span>
                        </label>

                        <br /><br />
                        <!-- END BEHAVIOUR SETTINGS -->
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="saveConfig()">
                            SAVE CHANGES
                        </a>
                    </div>
                </div> <!-- END BEHAVIOUR CARD -->
                <br/><br/>
                <div class="mdl-card mdl-shadow--2dp" style="width:100%"> <!-- ABOUT CARD -->
                    <div class="mdl-card__title" style="color: #fff;
                    height: 176px;
                    background: url('https://upload.wikimedia.org/wikipedia/commons/b/b6/Reflected_sunset.jpg') center / cover;">
                        <h2 class="mdl-card__title-text">${rw.logoHTML} ${rw.version}</h2>
                    </div>
                    <div class="mdl-card__supporting-text"> <!-- ABOUT CONTENT -->
                        <!-- ABOUT TAB -->
                        <h5>The user-<span id="hahaFunnyJoke">friendly</span> counter-vandalism tool.</h5>
                        <!-- Impliment very original and not outdated haha jokes -->
                        <script>$("#hahaFunnyJoke").on("click", ()=> {if (confirm("You are about to open an external link to YouTube.com - continue?")) Object.assign(document.createElement('a'), { target: '_blank', href: "https://www.youtube.com/watch?v=psuRGfAaju4"}).click();});</script>
                        <h6>Build info</h6>
                        <pre>${rw.buildInfo}</pre>
                        <h6>Image attribution</h6>
                        <a href="https://commons.wikimedia.org/wiki/File:Golden_Gate_Bridge_at_sunset_1.jpg" target="_blank">File:Golden Gate Bridge at sunset 1.jpg</a><br/>
                        <a href="https://commons.wikimedia.org/wiki/File:Reflected_sunset.jpg" target="_blank">File:Reflected_sunset.jpg</a><br/>
                        <a href="https://commons.wikimedia.org/wiki/File:Wilkin_River_close_to_its_confluence_with_Makarora_River,_New_Zealand.jpg" target="_blank">File:Wilkin River close to its confluence with Makarora River, New Zealand.jpg</a><br/>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-js-button mdl-js-ripple-effect" style="color:red" onclick="window.parent.postMessage('resetConfig');">
                            RESET REDWARN
                        </a>
                    </div>
                </div>
                <br/><br/>
            </div>
        </div>
            
        </div>
    </form>
  </main>
</div>

<!-- MATERIAL ICON CHOICE DIALOG -->
<dialog class="mdl-dialog" id="iconChoiceDialog">
    <h4 class="mdl-dialog__title" style="font-weight: 200;padding-bottom: 15px;">Select Icon</h4>
    <div id="dialogSelContainer" style="height:300px; overflow:auto;">
    </div>
    <div class="mdl-dialog__actions">
      <button type="button" class="mdl-button close">Cancel</button>
    </div>
</dialog>
<script src="https://redwarn.toolforge.org/cdn/js/select2.js"></script>
<script>
    // CORE THINGS



    var config = `+ JSON.stringify(rw.config) +`;
    function saveConfig() {
        var data = $('form').serializeArray().reduce((obj, item) => {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data
        // Now we process the icons
        let iconModifyArray = []; // array for our changes

        // For each enabled icon
        $("#rwRollbackIconsSort > li").each((i, el)=>{ 
            let iconIndex = parseInt($(el).attr("id").split("-")[1]);
            iconModifyArray.push({
                "index" : iconIndex, // original icon index 
                "shift" : i, // where to move to
                "modify" : { // obj of params to change
                    "enabled": true, // set as enabled
                    "color" : $(el).find("span").css("color"), // get color
                    "icon" : $(el).find("span").text().trim() // get icon from inner span text
                }
            });
        });

        // For each disabled icon
        $("#rwRollbackIconsSortDisabled > li").each((i, el)=>{ 
            let iconIndex = parseInt($(el).attr("id").split("-")[1]);
            iconModifyArray.push({
                "index" : iconIndex, // original icon index 
                "shift" : $("#rwRollbackIconsSort > li").length + i, // where to move to (for disbaled + the number of total enabled)
                "modify" : { // obj of params to change
                    "enabled": false, // set as disabled
                    "color" : $(el).find("span").css("color"), // get color
                    "icon" : $(el).find("span").text().trim() // get icon from inner span text
                }
            });
        });

        // Now add to config
        data.rwRollbackIcons = iconModifyArray;
        console.log(data);
        // Done! Submit
        window.parent.postMessage("config\\\`"+ btoa(JSON.stringify(data))); // send to the big boss
    }

    function loadFromConfig() {
        $.each(config, (key, value) => {  
            var ctrl = $('[name='+key+']');
            // Check for onsettings load
            if (onSettingsLoad[key]) onSettingsLoad[key](value); // Call handler if it exists

            // Set the values
                switch(ctrl.prop("type")) { 
                    case "radio": case "checkbox":   
                        ctrl.each(function() {
                            if($(this).attr('value') == value) $(this).attr("checked",value);
                        });   
                        break;  
                    default:
                        ctrl.val(value); 
                }  
        });  
    }

    loadFromConfig();

    // END CORE THINGS

    // Icon Dialog

    function showIconSelector(callback) { // Open icon selector - callback(icon)
        // Render all the icons
        $("#dialogSelContainer").html(""); // clear icons

        materialIcons.forEach(icon=>{ // For each icon
            $("#dialogSelContainer").append('<span class="material-icons" id="ico_'+ icon +'" style="padding-right:5px;padding-bottom:5px;cursor:pointer;font-size:42px;">'+ icon + '</span>'); // add the icon
            $("#dialogSelContainer").append('<div class="mdl-tooltip" data-mdl-for="ico_'+ icon +'">'+ icon + '</div>'); // add the tooltip

            // Add click handler
            $('#ico_'+ icon).on("click", ()=>{
                document.querySelector('#iconChoiceDialog').close(); // close dialog
                callback(icon); // callback
            });
        });

        // Now register all icons
        for (let item of document.getElementsByClassName("mdl-tooltip")) {
            componentHandler.upgradeElement(item); 
        }

        // Show dialog
        let dialog = document.querySelector('#iconChoiceDialog');
        if (! dialog.showModal) { // firefox polyfill compatibility
            dialogPolyfill.registerDialog(dialog);
        }
        
        dialog.showModal();

        dialog.querySelector('.close').addEventListener('click', function() {
            dialog.close();
        });

        // END ICON DIALOG
    }

    // Sortable for rollback icons
    $('#rwRollbackIconsSort').sortable({
        group: 'shared', // set both lists to same group
        animation: 150
    });
    $('#rwRollbackIconsSortDisabled').sortable({
        group: 'shared', // set both lists to same group
        animation: 150
    });

    // jQuery context menus for icons
    $(() => {
        $.contextMenu({
            selector: 'li[id^="rollbackIcon-"]', 
            callback: (key, options) => {
                // If editcolor
                if (key.startsWith("editColor-")) {
                    $(options["$trigger"][0]).find("span").css("color", key.split("-")[1]); // Set color
                    return false; // we done (return false so user can see change with menu still open)
                }
                // Send callback for non-edit color changes
                ({
                    "editIcon" : element=>{
                        // Edit icon
                        showIconSelector(icon=>{ // Open icon selector
                            $(element).find("span").text(icon); // swap out the icon. normal code does the rest.
                        });
                    }
                })[key](options["$trigger"][0]); // pass in trigger element
            },
            items: {
                "editIcon": {name: "Change Icon"},
                "editColor": {
                    "name": "Edit Color", 
                    "items": {
                        "editColor-crimson": {name: "Crimson"},
                        "editColor-red": {name: "Red"},
                        "editColor-DarkOrange": {name: "Dark Orange"},
                        "editColor-Orange": {name: "Orange"},
                        "editColor-Gold": {name: "Yellow"},
                        "editColor-DarkMagenta": {name: "Dark Magenta"},
                        "editColor-Magenta": {name: "Magenta"},
                        "editColor-HotPink": {name: "Pink"},
                        "editColor-DarkBlue": {name: "Dark Blue"},
                        "editColor-Blue": {name: "Blue"},
                        "editColor-Teal": {name: "Teal"},
                        "editColor-Cyan": {name: "Cyan"},
                        "editColor-DodgerBlue": {name: "Dodger Blue"},
                        "editColor-Green": {name: "Green"},
                        "editColor-LawnGreen": {name: "Lawn Green"},
                        "editColor-LightGreen": {name: "Light Green"},
                        "editColor-Lavender": {name: "Lavender"},
                        "editColor-LightGray": {name: "Light Gray"},
                        "editColor-LightSlateGrey": {name: "Light Slate Grey"},
                        "editColor-Grey": {name: "Grey"},
                        "editColor-Black": {name: "Black"}
                    }
                },
            }
        });   
    });

    // Colour theme preview
    function updateColourTheme() {
        // Show loading dialog
        window.parent.postMessage('newThemeDialog');
        // Add stylesheet for this version
        setTimeout(()=>$('head').append('<link rel="stylesheet" type="text/css" onload="window.parent.postMessage(\\\'loadDialogClose\\\');" href="https://redwarn.toolforge.org/cdn/css/material.' + $("input[name=colTheme]:checked").val() + '.min.css">'), 500);
    }
</script>
        `, window.innerWidth, window.innerHeight, true), true).showModal(); // TRUE HERE MEANS NO PADDING.
    },

    "openAdminReport" : (un)=> { // Open admin report dialog
        // Add toast handler
        addMessageHandler("pushToast`*", m=>rw.visuals.toast.show(m.split('`')[1],false,false,2500));

        // On report
        addMessageHandler("report`*", m=>{
            let reportContent = m.split('`')[1]; // report content
            let target = m.split('`')[2]; // target username
            let targetIsIP = rw.info.isUserAnon(target); // is the target an IP? (2 different types of reports)
            console.log("reporting "+ target + ": "+ reportContent);
            console.log("is ip? "+ (targetIsIP ? "yes" : "no"));
            rw.visuals.toast.show("Reporting "+ target +"...", false, false, 2000); // show toast
            // Submit the report. MUST REPLACE WITH REAL AIV WHEN DONE AND WITH SANDBOX IN DEV!    
            //let aivPage = "User:Ed6767/sandbox"; // dev
            let aivPage = "Wikipedia:Administrator_intervention_against_vandalism"; // PRODUCTION! 

            $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles="+aivPage+"&rvslots=*&rvprop=content&formatversion=2&format=json", latestR=>{
                // Grab text from latest revision of AIV page
                // Check if exists
                let revisionWikitext =  latestR.query.pages[0].revisions[0].slots.main.content; // Set wikitext
                if (revisionWikitext.toLowerCase().includes(target.toLowerCase())) {// If report is already there
                    rw.visuals.toast.show("This user has already been reported.", false, false, 5000); // show already reported toast
                    return; // Exit
                }

                // Let's continue
                // We don't need to do anything special. Just shove our report at the bottom of the page, although, may be advisiable to change this if ARV format changes
                let textToAdd = "*" + (targetIsIP ? "{{IPvandal|" : "{{vandal|") + target + "}} " + reportContent; // DANGER! WIKITEXT (here is fine. be careful w changes.) - if target IP give correct template, else normal
                let finalTxt = revisionWikitext + "\n\n" + textToAdd; // compile final string
                // Now we just submit
                $.post(rw.wikiAPI, {
                    "action": "edit",
                    "format": "json",
                    "token" : mw.user.tokens.get("csrfToken"),
                    "title" : aivPage,
                    "summary" : `Reporting [[Special:Contributions/${target}|${target}]] [[w:en:WP:RW|(RW ${rw.version})]]`, // summary sign here
                    "text": finalTxt,
                    "tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
                }).done(dt => {
                    // We done. Check for errors, then callback appropriately
                    if (!dt.edit) {
                        // Error occured or other issue
                        console.error(dt);
                        dialogEngine.dialog.showModal(); // reshow dialog
                        rw.visuals.toast.show("Sorry, there was an error, likely an edit conflict. Try reporting again."); // That's it
                    } else {
                        // Success! No need to do anything else.
                        rw.visuals.toast.show("User reported.", false, false, 5000); // we done
                    }
                });
            });
        }); // END ON REPORT EVENT

        // Check matching user
        if (rw.info.targetUsername(un) == rw.info.getUsername()) {
            // Usernames are the same, give toast.
            rw.visuals.toast.show("You can not report yourself, nor can you test this feature except in a genuine case.", false, false, 7500);
            return; // DO NOT continue.
        }


        // See adminReport.html for code
        dialogEngine.create(mdlContainers.generateContainer(`
        <h2 style="font-weight: 200;font-size:45px;line-height: 48px;">Report to AIV</h2>
<span>Please note: This form currently supports <b>vandalism reports</b> only. For now, use Twinkle to report sockpuppetry and edit warring that isn't related to vandalism.</span>
<form id="reportForm">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" id="trgtUsrVisualBox" value="`+ rw.info.targetUsername(un).replace(/_/g, ' ') +`" name="target" readonly>
        <label class="mdl-textfield__label" for="trgtUsrVisualBox">Target</label>
        <div class="mdl-tooltip" for="trgtUsrVisualBox">
            To target a different user, please visit their userpage.
        </div>
    </div>

    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select" style="width: 100%;">
        <input type="text" value="" class="mdl-textfield__input" id="reasonInput" name="reason" readonly> <!-- USE REASON TO GET THE DATA, NOT REASON INPUT.-->
        <input type="hidden" value="" name="reasonInput"> <!-- THIS WILL ALWAYS BE BLANK.-->
        <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
        <label for="reasonInput" class="mdl-textfield__label">Reason</label>
        <ul for="reasonInput" class="mdl-menu mdl-menu--bottom-left mdl-js-menu" style="height: 100px; overflow:auto;">
            <li class="mdl-menu__item" data-val="">Vandalism after final warning</li>
            <li class="mdl-menu__item" data-val="">Vandalism within 1 day of being unblocked</li>
            <li class="mdl-menu__item" data-val="">Evidently a vandalism-only account</li>
            <li class="mdl-menu__item" data-val="">Account is a promotion-only account</li>
            <li class="mdl-menu__item" data-val="">Account is evidently a spambot or a compromised account</li>
            <li class="mdl-menu__item" data-val="">Other (please enter in comment)</li> <!-- Must detect and RM this -->
        </ul>
    </div>

    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" id="commentBox" name="comment">
        <label class="mdl-textfield__label" for="commentBox">Comment</label>
        <div class="mdl-tooltip" for="commentBox">
            Enter additional info you'd like to attach to this report.
        </div>
    </div>

</form>

<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="sendReport();">
        REPORT
    </button>
</span>

<script>
    function pushToast(text) {window.parent.postMessage('pushToast\\\`' + text);} // Push toast to host

    function sendReport() {
        // Submit report
        var data = $('#reportForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data
        
        if (data.reason == "") {pushToast("Select a reason."); return;} // If no reason selected, push toast and EXIT.

        let fullReason = "";
        if (data.reason == "Other (please enter in comment)") { // If other is chosen
            if (data.comment == "") {pushToast("Enter your reason."); return;}
            if (data.comment.length < 5) {pushToast("Your reason is not long enough"); return;} // If no comment, or comment is not long enough (5+ chars) push toast and EXIT.
            fullReason = data.comment; // else continue and set the reason to the comment
        } else {
            // Append the reason and comment if there is one
            fullReason = data.reason + (data.comment == "" ? "" : " - "+ data.comment); // If data comment empty don't add anything otherwise make it Reason - Comment
        }
        fullReason += " ${rw.sign()}"; // Add sig to the end (w space)
        // Push this upstairs
        window.parent.postMessage('report\\\`'+ fullReason + '\\\`' + data.target, '*'); // Report with full reason
        window.parent.postMessage('closeDialog', '*'); // Close. We will be reopened on error.
    }
</script>

        `, 500, 410)).showModal();
    },

    "loadDialog" : {
        // Loading dialog
        "hasInit" : false, 
        "init" : text=> {
            if (!rw.ui.loadDialog.hasInit) { // Only continue if we haven't already appended our container div
                $("body").append(`
                <div id="rwUILoad">
                </div>
                `);
            }
            $("#rwUILoad").html(`
            <dialog class="mdl-dialog" id="rwUILoadDialog">
                ` + mdlContainers.generateContainer(`<!-- Loading dialog -->
<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div> <!-- Loading spinner (matches theme too!) -->
<span style="padding-left: 20px;
position: absolute;
padding-top: 7px;
font-size: 16px;
font-family: Roboto;">`+ text +`</span> <!-- Text -->
<script>
    window.onmessage = e=>{ // On any message we just set the text, not much logic here
        $("span").text(e.data);
    };
</script>`, 300, 30) +`
            </dialog>
            `); // Create dialog with content from loadingSpinner.html

            rw.ui.loadDialog.dialog = document.querySelector('#rwUILoadDialog'); // set dialog var

            // Firefox issue fix
            if (! rw.ui.loadDialog.dialog.showModal) {
                dialogPolyfill.registerDialog(rw.ui.loadDialog.dialog);
            }

            rw.ui.loadDialog.hasInit = true;
        },

        "show" : text=> { // Init and create a new loading dialog
            rw.ui.loadDialog.init(text); // init
            rw.ui.loadDialog.setText(text); // set our text
            // Show dialog
            rw.ui.loadDialog.dialog.showModal();
            // We done
        },

        "setText" : text=> $("#rwUILoadDialog > iframe")[0].contentWindow.postMessage(text, '*'), // Set text of loading by just sending the message to the container

        "close": ()=>{ // Close the dialog and animate
            $("#rwUILoadDialog")
            .addClass("closeAnimate")
            .on("webkitAnimationEnd", ()=>{
                // Animation finished
                rw.ui.loadDialog.dialog.close();
            });
        } 
    },

    "confirmDialog": (content, pBtnTxt, pBtnClick, sBtnTxt, sBtnClick, extraHeight, noExtraLines) => { // noExtraLines removes the <br/> tags
        // Confirm dialog (yes, no, ext...)
        addMessageHandler("sBtn", sBtnClick);
        addMessageHandler("pBtn", pBtnClick);
        dialogEngine.create(mdlContainers.generateContainer(`
        ${content}
${(noExtraLines === true ? "" : "<br /><br />")} <!-- Add extra linebreaks only if noExtraLines is false -->
<span style="float:right;">
    `+ (sBtnTxt.length > 0 ? (`<button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('sBtn', '*');">
        `+ sBtnTxt +`
    </button>`) : ``) + ` <!-- Only show second button if defined -->
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.parent.postMessage('pBtn', '*');">
        ${pBtnTxt}
    </button>
</span>
        `, 500, 80 + extraHeight)).showModal();
    },

    "sendFeedback" : extraInfo=> {
        // Open feedback dialog, basically same as newmsg
        // Setup preview handling
        addMessageHandler("generatePreview`*", m=>{
            rw.info.parseWikitext(m.split("`")[1], parsed=>{ // Split to Wikitext and send over to the API to be handled
                dialogEngine.dialog.getElementsByTagName("iframe")[0].contentWindow.postMessage({
                    "action": "parseWikiTxt",
                    "result": parsed}, '*'); // push to container for handling in dialog and add https:// to stop image breaking
            });
        });

        // Add toast handler
        addMessageHandler("pushToast`*", m=>rw.visuals.toast.show(m.split('`')[1],false,false,15000));

        // Add submit handler

        addMessageHandler("applyNotice`*", eD=> {
            // i.e applyNotice`user`wikitext`summary
            // TODO: maybe b64 encode?
            let _eD = eD.split("`"); // params
            let user = _eD[1];
            let wikiTxt = _eD[2];
            let summary = _eD[3];
            // MAKE EDIT
            rw.info.addWikiTextToUserPage(user, wikiTxt, true, summary); // Save under date
        });

        // CREATE DIALOG
        // MDL FULLY SUPPORTED HERE (container). 
        dialogEngine.create(mdlContainers.generateContainer(`
        <!-- Style for title preview -->
<style>
    h2 {
        font-size: 20px;
        line-height: 0px;
    }
    .mw-editsection {
        display: none;
    }
</style>
<h2 style="font-weight: 200;font-size:45px;line-height: 48px;">Feedback & Support</h2>
<p>Found a bug in RedWarn, want to send general feedback, or just need help? Use this form. Your feedback is greatly appreciated!</p>
<form id="newMsgForm">
<input type="hidden" id="trgtUsrVisualBox" value="Ed6767/redwarn/bugsquasher" readonly>
<span id="previewContainer" style="display:none;">
    <!-- EDIT BUTTON -->

    <span id="editBtn" class="material-icons" style="font-size: 16px;padding-bottom: 3px;float: right;padding-right: 5px;cursor: pointer;" onclick="$('#previewContainer').hide();$('#editorContainer').show();">
        create
    </span>

    <div id="preview" style="height: 150px; overflow-y: auto; width:100%;"> <!-- do not use max-height as this moves the buttons and makes it hard for muscle memory-->
        
    </div> <!-- Used to show preview-->
</span>

<span id="editorContainer">
    <span id="previewBtn" class="material-icons" style="font-size: 16px;padding-bottom: 3px;float: right;padding-right: 5px;cursor: pointer;" onclick="$('#previewContainer').show();$('#editorContainer').hide();grabPreview();">
        visibility
    </span>
    <div id="editor">
        <textarea id="wikiTxt" name="wikiTxt" style="height: 150px; max-height: 150px; overflow-y: auto; width:100%;">
=== Your Subject ===
Your message here. ${rw.sign()}
`+(extraInfo != null ? extraInfo : "")+`</textarea>
    </div> <!-- Used to edit Wikitext -->
</span>
</form>

<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="sendMessage();">
        SEND FEEDBACK
    </button>
</span>

<script>
        // Handle incoming data
    window.onmessage = function(e){
        if (e.data.action == 'parseWikiTxt') {
            $("#preview").html(e.data.result); // Set preview to content
        }
    };

    function pushToast(text) {window.parent.postMessage('pushToast\\\`' + text);} // Push toast to host

    function grabPreview() {
        var wikiTxt = document.getElementById("wikiTxt").value;
        if (!wikiTxt.includes("${rw.sign()}")) {
            // Not signed, warn
            pushToast("Don't forget to sign your message!");
        }
        window.parent.postMessage('generatePreview\\\`'+ wikiTxt, '*');
    }

    function sendMessage() {
        // Send it!
        var data = $('#newMsgForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data

        var wikiTxt = data.wikiTxt;
        if (!wikiTxt.includes("${rw.sign()}")) {
            // Not signed, warn
            pushToast("Sign your message with '${rw.sign()}'");
            return; // Do not continue
        }
        window.parent.postMessage('applyNotice\\\`' + document.getElementById("trgtUsrVisualBox").value + '\\\`' + wikiTxt + '\\\`' + "new topic"); // Push upstairs and commit
        window.parent.postMessage("closeDialog"); // We done here. Top will refresh or reshow if error occurs.
    }
</script>
        `, 500, 390)).showModal(); // 500x390 dialog, see sendFeedback.html for code
    },

    "recentlyVisitedSelector" : { // Used to select recently visited page from a dropdown dialog
        "dialog" : null,
        "init" : content=>{
            if ($("#rwRecentVistedSelectContainer").length < 1) {
                // container hasn't already been init
                $("body").append(`
                <div id="rwRecentVistedSelectContainer">
                </div>
                `);
            }
            // let's continue
            $("#rwRecentVistedSelectContainer").html(`
            <dialog class="mdl-dialog" id="rwUILoadDialog">
                ` + content +`
            </dialog>
            `); // Create dialog with content from loadingSpinner.html

            rw.ui.recentlyVisitedSelector.dialog = document.querySelector('#rwUILoadDialog'); // set dialog var

            // Firefox issue fix
            if (! rw.ui.recentlyVisitedSelector.dialog.showModal) {
                dialogPolyfill.registerDialog(rw.ui.recentlyVisitedSelector.dialog);
            }
        },

        "showDialog" : callback=>{ // Show dialog and callback(selected article)
            // Assemble revent visits listbox
            let recentlyVisited = JSON.parse(window.localStorage.rwRecentlyVisited);

             // Check if empty, if so, show dialog and exit
             if ((recentlyVisited == null) || (recentlyVisited.length < 1)) {
                rw.ui.confirmDialog("There are no recent pages to show.", "OKAY", ()=>dialogEngine.closeDialog(), "", ()=>{}, 0);
                return; //exit, don't callback as not complete
            }

            // Let's continue
            let finalRVList = "";
            recentlyVisited.forEach((page, i) => {
                finalRVList += `
                <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="spI${i}">
                    <input type="radio" id="spI${i}" class="mdl-radio__button" name="selectedPageIndex" value="${i}">
                    <span class="mdl-radio__label">${page.replace(/_/g, ' ')}</span>
                </label>
                <hr />
                `;
            });
            
            // Add close handler
            addMessageHandler("closeRecentPageDialog", ()=>rw.ui.recentlyVisitedSelector.close());

            // Add continue handler
            addMessageHandler("RecentPageDialogSel`*", m=>{
                let selectedI = m.split("`")[1];
                callback(recentlyVisited[selectedI]); // send callback
            });
            
            // Now show dialog
            rw.ui.recentlyVisitedSelector.init(mdlContainers.generateContainer(`
            <h2 style="font-weight: 200;">Select Recent Page</h2>

<div style="height:365px;overflow:auto;">
    <!-- Insert list -->
    ${finalRVList}
</div>

<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeRecentPageDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="selectPage();">
        SELECT THIS PAGE
    </button>
</span>

<script>
    function selectPage() {
        // Make sure something is checked and continue
        if ($("input:checked").val() != null) {
            window.parent.postMessage('RecentPageDialogSel\`'+ $("input:checked").val(), '*'); // push selected index upstairs
            window.parent.postMessage('closeRecentPageDialog', '*'); // close, we done
        }
    }
</script>
            `, 420, 500)); // 420 hahahaha
            rw.ui.recentlyVisitedSelector.dialog.showModal();
        },

        "close" : () => {
            // Close dialog
            $(rw.ui.recentlyVisitedSelector.dialog)
            .addClass("closeAnimate")
            .on("webkitAnimationEnd", ()=>{
                // Animation finished
                rw.ui.recentlyVisitedSelector.dialog.close();
            });
        }
    },

    "adminReportSelector" : un=> { // DON'T FORGET TO USE un ATTR!
        un = rw.info.targetUsername(un); // get target
        // Handle events
        addMessageHandler("openAIV", ()=>rw.ui.openAdminReport(un)); // AIV report
        addMessageHandler("openUAA", ()=>rw.ui.beginUAAReport(un)); // UAA report

        // Open the admin report selector dialog
        dialogEngine.create(mdlContainers.generateContainer(`
            <h2 style="font-weight: 200;font-size:45px;line-height: 48px;">Select report venue:</h2>
<div style="height:330px;">
    <!-- AIV -->
    <button id="AIV" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary" style="width:100%" onclick="window.parent.postMessage('openAIV', '*');">
        Administrator intervention against vandalism
    </button>
    <!-- Tooltip -->
    <div class="mdl-tooltip mdl-tooltip--large" for="AIV">
        For reports about active, obvious, and persistent vandals and spammers
    </div>
    <br/>
    <!-- UAA -->
    <button id="UAA" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary" style="width:100%" onclick="window.parent.postMessage('openUAA', '*');">
        Usernames for administrator attention
    </button>
    <!-- Tooltip -->
    <div class="mdl-tooltip mdl-tooltip--large" for="UAA">
        Reports of usernames that are blatant and serious violations of the username policy requiring an immediate block.
    </div>
    <br/>
</div>

<span style="font-size: small;font-style: italic;">More report methods are currently in development. If you can't find a report venue that fits your situation (i.e. SPIs, edit warring, ext.), please continue to use Twinkle.</span>
<br/>
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
</span>
        `, 600, 500)).showModal();
    },

    "beginUAAReport" : un=> { // Report to UAA

        // Check if IP - if so, exit
        if (rw.info.isUserAnon(un)) {
            rw.ui.confirmDialog("As IPs don't have usernames, you can't report them to UAA.", "OKAY", ()=>dialogEngine.closeDialog() , "", ()=>{}, 0);
            return; // stop
        }

        // Add toast handler
        addMessageHandler("pushToast`*", m=>rw.visuals.toast.show(m.split('`')[1],false,false,2500));

        // On report
        addMessageHandler("UAA`*", m=>{
            let reportContent = m.split('`')[1]; // report content
            let target = m.split('`')[2]; // target username
            console.log("reporting "+ target + ": "+ reportContent);
            rw.visuals.toast.show("Reporting "+ target +"...", false, false, 2000); // show toast
            // Submit the report. MUST REPLACE WITH REAL AIV WHEN DONE AND WITH SANDBOX IN DEV!    
            let uaaPage = "Wikipedia:Usernames_for_administrator_attention"; // PRODUCTION: Wikipedia:Usernames_for_administrator_attention

            $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles="+uaaPage+"&rvslots=*&rvprop=content&formatversion=2&format=json", latestR=>{
                // Grab text from latest revision of AIV page
                // Check if exists
                let revisionWikitext =  latestR.query.pages[0].revisions[0].slots.main.content; // Set wikitext
                if (revisionWikitext.toLowerCase().includes(target.toLowerCase())) {// If report is already there
                    rw.visuals.toast.show("This user has already been reported.", false, false, 5000); // show already reported toast
                    return; // Exit
                }

                // Let's continue
                // We don't need to do anything special. Just shove our report at the bottom of the page, although, may be advisiable to change this if ARV format changes
                let textToAdd = "*" + "{{user-uaa|1=" + target + "}} &ndash; " + reportContent; // DANGER! WIKITEXT (here is fine. be careful w changes.) - if target IP give correct template, else normal
                let finalTxt = revisionWikitext + "\n\n" + textToAdd; // compile final string
                // Now we just submit
                $.post(rw.wikiAPI, {
                    "action": "edit",
                    "format": "json",
                    "token" : mw.user.tokens.get("csrfToken"),
                    "title" : uaaPage,
                    "summary" : `Reporting [[Special:Contributions/${target}|${target}]] [[w:en:WP:RW|(RW ${rw.version})]]`, // summary sign here
                    "text": finalTxt,
                    "tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
                }).done(dt => {
                    // We done. Check for errors, then callback appropriately
                    if (!dt.edit) {
                        // Error occured or other issue
                        console.error(dt);
                        dialogEngine.dialog.showModal(); // reshow dialog
                        rw.visuals.toast.show("Sorry, there was an error, likely an edit conflict. Try reporting again."); // That's it
                    } else {
                        // Success! No need to do anything else.
                        rw.visuals.toast.show("User reported.", false, false, 5000); // we done
                    }
                });
            });
        }); // END ON REPORT EVENT

        // Check matching user
        if (rw.info.targetUsername(un) == rw.info.getUsername()) {
            // Usernames are the same, give toast.
            rw.visuals.toast.show("You can not report yourself, nor can you test this feature except in a genuine case.", false, false, 7500);
            return; // DO NOT continue.
        }


        // See uaaReport.html for code
        dialogEngine.create(mdlContainers.generateContainer(`
        <h2 style="font-weight: 200;font-size:45px;line-height: 48px;">Report to UAA</h2>
<span>Please note: This form currently supports <b>username reports</b> only. Please be well aware of the username policy before reporting.</span>
<form id="reportForm">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" id="trgtUsrVisualBox" value="`+ rw.info.targetUsername(un).replace(/_/g, ' ') +`" name="target" readonly>
        <label class="mdl-textfield__label" for="trgtUsrVisualBox">Target</label>
        <div class="mdl-tooltip" for="trgtUsrVisualBox">
            To target a different user, please visit their userpage.
        </div>
    </div>

    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select" style="width: 100%;">
        <input type="text" value="" class="mdl-textfield__input" id="reasonInput" name="reason" readonly> <!-- USE REASON TO GET THE DATA, NOT REASON INPUT.-->
        <input type="hidden" value="" name="reasonInput"> <!-- THIS WILL ALWAYS BE BLANK.-->
        <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
        <label for="reasonInput" class="mdl-textfield__label">Reason</label>
        <ul for="reasonInput" class="mdl-menu mdl-menu--bottom-left mdl-js-menu" style="height: 100px; overflow:auto;">
            <li class="mdl-menu__item" data-val="">Misleading username</li>
            <li class="mdl-menu__item" data-val="">Promotional username</li>
            <li class="mdl-menu__item" data-val="">Username that implies shared use</li>
            <li class="mdl-menu__item" data-val="">Offensive username</li>
            <li class="mdl-menu__item" data-val="">Disruptive username</li>
            <li class="mdl-menu__item" data-val="">Other (please enter in comment)</li> <!-- Must detect and RM this -->
        </ul>
    </div>

    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" id="commentBox" name="comment">
        <label class="mdl-textfield__label" for="commentBox">Comment</label>
        <div class="mdl-tooltip" for="commentBox">
            Enter additional info you'd like to attach to this report.
        </div>
    </div>

</form>

<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="sendReport();">
        REPORT
    </button>
</span>

<script>
    function pushToast(text) {window.parent.postMessage('pushToast\\\`' + text);} // Push toast to host

    function sendReport() {
        // Submit report
        var data = $('#reportForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data
        
        if (data.reason == "") {pushToast("Select a reason."); return;} // If no reason selected, push toast and EXIT.

        let fullReason = "";
        if (data.reason == "Other (please enter in comment)") { // If other is chosen
            if (data.comment == "") {pushToast("Enter your reason."); return;}
            if (data.comment.length < 5) {pushToast("Your reason is not long enough"); return;} // If no comment, or comment is not long enough (5+ chars) push toast and EXIT.
            fullReason = data.comment; // else continue and set the reason to the comment
        } else {
            // Append the reason and comment if there is one
            fullReason = "Violation of the username as a " + data.reason.toLowerCase() + (data.comment == "" ? "" : ". "+ data.comment); // If data comment empty don't add anything otherwise make it Reason - Comment
        }
        fullReason += " ${rw.sign()}"; // Add sig to the end (w space)
        // Push this upstairs
        window.parent.postMessage('UAA\\\`'+ fullReason + '\\\`' + data.target, '*'); // Report with full reason
        window.parent.postMessage('closeDialog', '*'); // Close. We will be reopened on error.
    }
</script>

        `, 500, 410)).showModal();
    }
}
// Find which editor added something to a page (i.e find when this section first occurs in an edit)
rw.whodunnit = {
    "revs" : [],
    "i": 0,
    "html": "",
    "mouseHighlighter" : () => {
        rw.ui.loadDialog.show("Loading...");
        // Get HTML page content (i.e straight from the parser, so not touched)
        $.getJSON(rw.wikiAPI + "?action=parse&page="+ encodeURIComponent(mw.config.get("wgRelevantPageName")) +"&prop=text&format=json&formatversion=2", r=>{
            $("#mw-content-text").html(r.parse.text); // set content    
            rw.ui.loadDialog.close(); // Close load dialog
            
            // Setup UI
            $("#firstHeading").append(" (Inspector)");
            // Show toast
            rw.visuals.toast.show(`
            Select a highlighted element by clicking it.
            Then, RedWarn will determine when this change was made and which user changed it.
            Push ESC to cancel.`, false, false, 20000000);
            // Add escape handler
            $(document).keyup(function(e) {
                if (e.key === "Escape") { 
                    // refresh the page to exit
                    window.location.reload();
                }
            });
            // Highlights the element the mouse is touching
            $(".mw-parser-output").unbind("mousemove"); // Clear old handlers
            $(".mw-parser-output")[0].style.cursor = "cursor:pointer;"; // Set cursor to pointer
            $(".mw-parser-output").mousemove(e=>{ // On mouse move
                let x = e.pageX - window.pageXOffset;
                let y = e.pageY - window.pageYOffset;
                // Get all current selected and rm 
                $('*[RWWhoDunnitselected="this"]').each((i, el) => {
                    el.style.background = "";
                    $(el).attr("RWWhoDunnitselected", ""); // rm selected
                    $(el).unbind("click"); // unbind onclick
                    $(el).click(function(e) {
                        e.preventDefault();
                    }); // stop links from opening and buttons from submitting, etc.
                });
                let arr = document.elementsFromPoint(x, y);
                // Only continue if more than five elements (works for normal page)
                if (arr.length > 5) {
                    let sel = arr[0];
                    sel.style.background = "#09b4da7d"; // Select lowest and apply hilight
                    $(sel).attr("RWWhoDunnitselected", "this"); // Set element tag
                    $(sel).click(e=>{
                        // On click, select this.
                        $(".mw-parser-output").unbind("mousemove"); 
                        let locateHTML = sel.outerHTML.replace(` rwwhodunnitselected="this" style="background: rgba(9, 180, 218, 0.49);"`, ""); // rm our gubbins
                        rw.whodunnit.locate(locateHTML); // Locate it
                    });
                } 
            });
        });
        
    },

    "locate" : htmlIn=> { // Locate first instance of this html 
        // Show loading dialog
        rw.ui.loadDialog.show("Investigating...");
        rw.whodunnit.html = htmlIn.replace(/[^\w\s!?]/g, ""); // Replace most and just leave as a char only string
        
        let name = mw.config.get("wgRelevantPageName"); 
        $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles="+ encodeURIComponent(name) +"&rvlimit=500&rvprop=ids%7Cuser%7Ctimestamp&format=json", r=>{
            
            let cronologicalRevs = r.query.pages[Object.keys(r.query.pages)[0]].revisions;
            // Process to put in time order based on timestamps
            cronologicalRevs.sort((a,b)=>{
                return new Date(b.timestamp) - new Date(a.timestamp);
            });

            rw.whodunnit.revs = cronologicalRevs;
            rw.whodunnit.i = 0;
            rw.whodunnit.processNext(); // start
        });
        
    },

    "processNext" : ()=> {
        // Process the next rev
        let rev = rw.whodunnit.revs[rw.whodunnit.i]; // set rev local
        let revID = rev.revid;
        let html = rw.whodunnit.html;
        // Update loading box
        rw.ui.loadDialog.setText("Investigating rev. "+ revID +"...");

        $.getJSON(rw.wikiAPI + "?action=parse&format=json&oldid="+ revID, r=>{ // Get revision content
            if (!r.parse.text["*"].replace(/[^\w\s!?]/g, "").includes(html)) {
                if (rw.whodunnit.i == 0) {
                    // We can't process this element
                    window.location.hash = "#investigateIncomp";
                    window.location.reload(); // reload page
                } else {
                    rw.ui.loadDialog.setText("Loading diff...");
                    let cprID = rw.whodunnit.revs[rw.whodunnit.i-1].revid;
                    let cpprID = rw.whodunnit.revs[rw.whodunnit.i-1].parentid;
                    redirect(rw.wikiIndex + "?diff="+ cprID +"&oldid="+ cpprID +"&diffmode=source"); // go
                    // we done
                }
            } else {
                // Let's continue
                //Finish by incrementing i by one and calling process next again
                rw.whodunnit.i += 1;
                if (rw.whodunnit.i > (rw.whodunnit.revs.length - 1)) {
                    // We reached the end
                    // Likely not here.
                    window.location.hash = "#investigateFail";
                    window.location.reload(); // reload page
                } else {
                    rw.whodunnit.processNext(); // We can continue
                }
            }
        });
    }
};
rw.PendingChangesReview = {
    "reviewPage" : ()=> {
        // Check config if disabled
        if (rw.config.rwDisablePendingChanges == "disable") return; // if disabled, exit
        
        // Pending changes buttons and warning (ONLY on review pages) 
        if (($("#mw-fr-reviewform").length > 0) && !($("#mw-fr-reviewformlegend").text().includes("Re-review"))) {
            rw.info.featureRestrictPermissionLevel("reviewer", ()=>{ // Restrict to pending changes reviewers
                // Add to accept header
                $('.flaggedrevs_reviewform').prepend(`
                <div style="text-align:center;width:100%;">
                    <div id="rReviewAccept" class="icon material-icons">
                        <span style="cursor: pointer; color:green;font-size:56px;">
                            done
                        </span>
                    </div>
                    <div class="mdl-tooltip mdl-tooltip--large" for="rReviewAccept">
                        Accept these changes
                    </div>
                    <div id="rReviewDeny" class="icon material-icons"><span style="cursor: pointer; padding-left:20px; color:red;font-size:56px;">
                            close
                        </span>
                    </div>
                    <div class="mdl-tooltip mdl-tooltip--large" for="rReviewDeny">
                        Revert changes
                    </div>
                </span>
                <br>
                `);
                // Hide original review box
                $(".fr-rating-controls").hide();
                // Handlers
                // ON ACCEPT
                let acceptHandler = ()=>{
                    // When accept button clicked.
                    rw.PendingChangesReview.confirmLatestRev(()=>{
                        rw.PendingChangesReview.getPendingChangesUsers((usr, count, users, userCount)=>{

                            // SUBMIT HANDLER, SCROLL DOWN FOR DIALOG
                            addMessageHandler("reason`*", reasonIn=> {
                                let comment = reasonIn.split("`")[1]; // params
                                // Time to submit 302 success, 200 FAIL
                                rw.ui.loadDialog.show("Accepting...");
                                $.ajax({
                                    url  : 'https://en.wikipedia.org/w/index.php?title=Special:RevisionReview&action=submit',
                                    type : 'post',
                                    data : {
                                        "action": "approve",
                                        "title": "Special:RevisionReview",
                                        "wpApprove" : 1,
                                        "target" : mw.config.get("wgRelevantPageName"),
                                        "wpEditToken" : mw.user.tokens.get("csrfToken"),
                                        "refid" : $("#mw-fr-input-refid").attr("value"),
                                        "oldid" : $("#mw-fr-input-oldid").attr("value"),
                                        "changetime" : $("#mw-fr-input-changetime").attr("value"),
                                        "userreviewing" : $("#mw-fr-input-reviewing").attr("value"),
                                        "templateParams": "",
                                        "imageParams": "",
                                        "fileVersion": "",
                                        "validatedParams": $('input[name ="validatedParams"]').attr("value"),
                                        "wpReason" : comment + " ([[w:en:Wikipedia:RedWarn|RedWarn "+ rw.version + "]])",
                                        "wpSubmit": "Accept revision"
                                }}).done((r, sT, x)=>{ // TODO: ADD AUTOWARNING, DETECT CHANGE AND OTHER
                                    rw.ui.loadDialog.close();
                                    // Review response (this gens a new dom thing then we get the content text and error in first p), get response of 302 or 200 with below else error
                                    //<b>Revision of <a href="/wiki/Joel_Osteen" title="Joel Osteen">Joel Osteen</a> flagged. (<a class="external text" href="https://en.wikipedia.org/w/index.php?title=Special:ReviewedVersions&amp;page=Joel_Osteen">view reviewed versions</a>)</b>
                                    if (x.status == 200){
                                        // We done :)
                                        let parser = new DOMParser();
                                        let el = parser.parseFromString(r, 'text/html');
                                        let resultStr = el.getElementById("mw-content-text").getElementsByTagName("p")[0].innerText;
                                        if (resultStr.includes("Revision of") && resultStr.includes("flagged")) {
                                            // Success!
                                            // Reload the page with tags
                                            rw.ui.loadDialog.show("Reloading...");
                                            window.location.hash = "#rwPendingAccept";
                                            window.location.reload();
                                        } else {
                                            // Probably error
                                            rw.visuals.toast.show("Sorry, an error occured and your review has not been submitted.", false, false, 5000);
                                        }
                                    } else {
                                        // Error
                                        rw.visuals.toast.show("Sorry, an error occured and your review has not been submitted.", false, false, 5000);
                                    }
                                    
                                });
                            });
                            
                            // SHOW DIALOG
                            let reviewAction = "Accept "+ count +" Revision"+ ((count > 1) ? "s" : ""); // i.e accept 1 revision / accept 2 revisions
                            let reviewCaption = `
                            <strong>You are about to accept `+ count +` edit`+ ((count > 1) ? "s" : "") + ` by `+ userCount +` user`+ ((userCount > 1) ? "s" : "") + `</strong>
                            <br/><br/>
                            Enter an optional comment, then confirm your review by clicking 'Submit Review' or by pressing ENTER.`;
                            let autoAccept = rw.config.rwDisableReviewAutoAccept != "disable" ? "true" : "false";
                            dialogEngine.create(mdlContainers.generateContainer(`
                            <!-- REVIEW REASON DIALOG -->
<script>var closed = false;</script>
<h2 style="font-weight: 200;font-size:45px;line-height: 48px;">`+ reviewAction +`</h2>
<p>`+ reviewCaption +`</p><br/>
<form id="newMsgForm" onsubmit="pushReview();" action="#">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" name="reviewReason" id="reviewReason" value="">
        <label class="mdl-textfield__label" for="reviewReason">Comment</label>
    </div>
</form>
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="closed=true;clearInterval(autoAcceptTimerCount);window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="pushReview();">
        SUBMIT REVIEW
    </button>
</span>

<script>
    function pushReview() {
        var data = $('#newMsgForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data
        
        let reason = data.reviewReason;
        
        // Submit it
        window.parent.postMessage('reason\\\`' + reason); // Push upstairs
        window.parent.postMessage("closeDialog"); // We done here.
        return false; // prevent redirect

    }

    document.getElementById("reviewReason").focus(); // focus on text box for quick rollback

    // Auto accept in 5 seconds
    var autoAcceptTimerTick;
    var autoAcceptTimerCount = 0;
    var autoAcceptStop = false; // used to not show another and cause ux issues if stopped
    if (` + autoAccept + `) {
        $("#submitBtn").text("AUTO SUBMIT ("+ (5 - autoAcceptTimerCount) +")");
        autoAcceptTimerTick = setInterval(()=> {
            autoAcceptTimerCount += 1; // up by one
            if (!autoAcceptStop) $("#submitBtn").text("AUTO SUBMIT ("+ (5 - autoAcceptTimerCount) +")");
            if ((autoAcceptTimerCount == 5) && (!closed)) {
                // Time's up, clear timer and submit
                clearInterval(autoAcceptTimerCount);
                autoAcceptStop = true;
                pushReview(); // send it
            }
        }, 1000); // Every second

        // Cancel on key press or click
        (_=>{$(document).keydown(_);$(document).click(_);})(()=>{
            clearInterval(autoAcceptTimerCount);
            $("#submitBtn").text("SUBMIT REVIEW");
            autoAcceptStop = true;
        });
    }
</script>
                            `, 500, 350)).showModal();
                        });
                    });
                };
                $("#rReviewAccept").click(acceptHandler);
                // END ACCEPT

                // ON DENY

                let denyHandler = ()=>{
                    // When DENY button clicked.
                    rw.PendingChangesReview.confirmLatestRev(()=>{
                        rw.PendingChangesReview.getPendingChangesUsers((usr, count, users, userCount)=>{
                            
                            addMessageHandler("reason`*", reasonIn=> { // ON REASON RECIEVED
                                // Generate revert string
                                let revertString = "Reverting "+ count +" pending edit"+ ((count > 1) ? "s" : "") + " by ";
                                // Build list of users (feeding in object keys)
                                revertString += (a=>{
                                    a.forEach((v,i)=>{ // Wrap contribs link around usernammes
                                        a[i] = "[[Special:Contributions/"+ v + "|"+ v +"]]";
                                    });
                                    // Build x, y and z list
                                    a.length == 1 ? a[0] : [ a.slice(0, a.length - 1).join(", "), a[a.length - 1] ].join(" and ");
                                    return a;
                                })(Object.keys(users));
                                revertString += " to last accepted version by [[Special:Contributions/"+ usr +"|"+ usr +"]]";

                                let comment = reasonIn.split("`")[1]; // params
                                rw.ui.loadDialog.show("Reverting...");
                                $.ajax({
                                    url  : 'https://en.wikipedia.org/w/index.php?title=Special:RevisionReview&action=submit',
                                    type : 'post',
                                    data : { // send request (reversed from form)
                                    "action": "reject",
                                    "title": "Special:RevisionReview",
                                    "wpReject" : 1,
                                    "wpRejectConfirm" : 1,
                                    "target" : mw.config.get("wgRelevantPageName"),
                                    "wpEditToken" : mw.user.tokens.get("csrfToken"),
                                    "refid" : $("#mw-fr-input-refid").attr("value"),
                                    "oldid" : $("#mw-fr-input-oldid").attr("value"),
                                    "changetime" : $("#mw-fr-input-changetime").attr("value"),
                                    "userreviewing" : $("#mw-fr-input-reviewing").attr("value"),
                                    "templateParams": "",
                                    "imageParams": "",
                                    "fileVersion": "",
                                    "validatedParams": $('input[name ="validatedParams"]').attr("value"),
                                    "wpReason" : revertString+ (comment.length > 0 ? ": "+ comment : "") + " ([[w:en:Wikipedia:RedWarn|RedWarn "+ rw.version + "]])",
                                    "wpSubmit": "Revert these changes"
                                }}).done((r,sT,x)=>{
                                    // Cannot reject these changes because someone already accepted some (or all) of the edits.
                                    rw.ui.loadDialog.close();
                                    let successHandler = ()=>{
                                        // On success
                                        rw.multiAct.open(users); // open MAT
                                    };
                                    if (x.status == 302) {
                                        // Redirect, so success!
                                        dialogEngine.closeDialog();
                                        successHandler();
                                    } else {
                                        // Oops, likely error (DENY ONLY)
                                        let parser = new DOMParser();
                                        let el = parser.parseFromString(r, 'text/html');
                                        let resultStr = el.getElementById("mw-content-text").getElementsByTagName("p")[0].innerHTML;
                                        if (resultStr.includes("Cannot reject these changes because someone already accepted some (or all) of the edits")) {
                                            // Show the issue 
                                            rw.PendingChangesReview.confirmLatestRev(()=>successHandler(), true); // true here note a different wording
                                        } else if (r.toLowerCase().includes("internal error")) {
                                            rw.visuals.toast.show("Sorry, an error occured and your review has not been submitted");
                                        } else {
                                            // Likely success
                                            successHandler();
                                        }

                                    }
                                });
                            });

                            let reviewAction = "Revert "+ count +" Revision"+ ((count > 1) ? "s" : "");
                            let reviewCaption = `
                            <strong>You are about to revert `+ count +` edit`+ ((count > 1) ? "s" : "") + ` by `+ userCount +` user`+ ((userCount > 1) ? "s" : "") + `</strong>
                            <br/><br/>
                            If you are not reverting vandalism, please enter a summary for the revert.
                            Confirm your review by clicking 'Submit Review' or by pressing ENTER.
                            `;
                            let autoAccept = rw.config.rwEnableReviewAutoRevert == "enable" ? "true" : "false";
                            dialogEngine.create(mdlContainers.generateContainer(`
                            <!-- REVIEW REASON DIALOG -->
<script>var closed = false;</script>
<h2 style="font-weight: 200;font-size:45px;line-height: 48px;">`+ reviewAction +`</h2>
<p>`+ reviewCaption +`</p><br/>
<form id="newMsgForm" onsubmit="pushReview();" action="#">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" name="reviewReason" id="reviewReason" value="">
        <label class="mdl-textfield__label" for="reviewReason">Comment</label>
    </div>
</form>
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="closed=true;clearInterval(autoAcceptTimerCount);window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="pushReview();">
        SUBMIT REVIEW
    </button>
</span>

<script>
    function pushReview() {
        var data = $('#newMsgForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data
        
        let reason = data.reviewReason;
        
        // Submit it
        window.parent.postMessage('reason\\\`' + reason); // Push upstairs
        window.parent.postMessage("closeDialog"); // We done here.
        return false; // prevent redirect

    }

    document.getElementById("reviewReason").focus(); // focus on text box for quick rollback

    // Auto accept in 5 seconds
    var autoAcceptTimerTick;
    var autoAcceptTimerCount = 0;
    var autoAcceptStop = false; // used to not show another and cause ux issues if stopped
    if (` + autoAccept + `) {
        $("#submitBtn").text("AUTO SUBMIT ("+ (5 - autoAcceptTimerCount) +")");
        autoAcceptTimerTick = setInterval(()=> {
            autoAcceptTimerCount += 1; // up by one
            if (!autoAcceptStop) $("#submitBtn").text("AUTO SUBMIT ("+ (5 - autoAcceptTimerCount) +")");
            if ((autoAcceptTimerCount == 5) && (!closed)) {
                // Time's up, clear timer and submit
                clearInterval(autoAcceptTimerCount);
                autoAcceptStop = true;
                pushReview(); // send it
            }
        }, 1000); // Every second

        // Cancel on key press or click
        (_=>{$(document).keydown(_);$(document).click(_);})(()=>{
            clearInterval(autoAcceptTimerCount);
            $("#submitBtn").text("SUBMIT REVIEW");
            autoAcceptStop = true;
        });
    }
</script>
                            `, 500, 350)).showModal();
                        });
                    });
                };

                $("#rReviewDeny").click(denyHandler);

                // END DENY
            }, ()=>{});
        } else if (($("#mw-fr-reviewform").length > 0) && ($("#mw-fr-reviewformlegend").text().includes("Re-review"))) {
            // Re-review page, all here is just unaccept
            // Add to accept header
            $('.flaggedrevs_reviewform').prepend(`
            <div style="text-align:center;width:100%;">
                <div id="rReviewUnAccept" class="icon material-icons"><span style="cursor: pointer; padding-left:20px; color:red;font-size:56px;">
                        close
                    </span>
                </div>
                <div class="mdl-tooltip mdl-tooltip--large" for="rReviewUnAccept">
                Unaccept changes
                </div>
            </span>
            <br>
            `);
            // Hide original review box
            $(".fr-rating-controls").hide();
            // Handlers
            $("#rReviewUnAccept").click(()=>{
                addMessageHandler("reason`*", reasonIn=> { // ON REASON RECIEVED 
                    // Dumbest one of all, just send, reload and hope for the best
                    let comment = reasonIn.split("`")[1];
                    rw.ui.loadDialog.show("Unaccepting...");
                    $.post("https://en.wikipedia.org/w/index.php?title=Special:RevisionReview&action=submit", {
                        "action": "submit",
                        "title": "Special:RevisionReview",
                        "wpUnapprove" : 1,
                        "target" : mw.config.get("wgRelevantPageName"),
                        "wpEditToken" : mw.user.tokens.get("csrfToken"),
                        "refid" : $("#mw-fr-input-refid").attr("value"),
                        "oldid" : $("#mw-fr-input-oldid").attr("value"),
                        "changetime" : $("#mw-fr-input-changetime").attr("value"),
                        "userreviewing" : $("#mw-fr-input-reviewing").attr("value"),
                        "templateParams": "",
                        "imageParams": "",
                        "fileVersion": "",
                        "validatedParams": $('input[name ="validatedParams"]').attr("value"),
                        "wpReason" : "Unapproving"+ (comment.length > 0 ? ": "+ comment : "") + " ([[w:en:Wikipedia:RedWarn|RedWarn "+ rw.version + "]])",
                        "wpSubmit": "Unaccept revision"
                    }).done(r=>{
                        window.location.hash = "#rwReviewUnaccept";
                        window.location.reload();
                    });
                });

                let reviewAction = "Unaccept Revision";
                let reviewCaption = `
                <strong>You are about to unaccept this revision.</strong>
                <br/><br/>
                If you are not reverting vandalism, please enter a summary for the revert.
                Confirm your review by clicking 'Submit Review' or by pressing ENTER.
                `;
                let autoAccept = rw.config.rwEnableReviewAutoRevert == "enable" ? "true" : "false";
                dialogEngine.create(mdlContainers.generateContainer(`
                <!-- REVIEW REASON DIALOG -->
<script>var closed = false;</script>
<h2 style="font-weight: 200;font-size:45px;line-height: 48px;">`+ reviewAction +`</h2>
<p>`+ reviewCaption +`</p><br/>
<form id="newMsgForm" onsubmit="pushReview();" action="#">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" name="reviewReason" id="reviewReason" value="">
        <label class="mdl-textfield__label" for="reviewReason">Comment</label>
    </div>
</form>
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="closed=true;clearInterval(autoAcceptTimerCount);window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="pushReview();">
        SUBMIT REVIEW
    </button>
</span>

<script>
    function pushReview() {
        var data = $('#newMsgForm').serializeArray().reduce(function(obj, item) {
                obj[item.name] = item.value;
                return obj;
                }, {}); // form data
        
        let reason = data.reviewReason;
        
        // Submit it
        window.parent.postMessage('reason\\\`' + reason); // Push upstairs
        window.parent.postMessage("closeDialog"); // We done here.
        return false; // prevent redirect

    }

    document.getElementById("reviewReason").focus(); // focus on text box for quick rollback

    // Auto accept in 5 seconds
    var autoAcceptTimerTick;
    var autoAcceptTimerCount = 0;
    var autoAcceptStop = false; // used to not show another and cause ux issues if stopped
    if (` + autoAccept + `) {
        $("#submitBtn").text("AUTO SUBMIT ("+ (5 - autoAcceptTimerCount) +")");
        autoAcceptTimerTick = setInterval(()=> {
            autoAcceptTimerCount += 1; // up by one
            if (!autoAcceptStop) $("#submitBtn").text("AUTO SUBMIT ("+ (5 - autoAcceptTimerCount) +")");
            if ((autoAcceptTimerCount == 5) && (!closed)) {
                // Time's up, clear timer and submit
                clearInterval(autoAcceptTimerCount);
                autoAcceptStop = true;
                pushReview(); // send it
            }
        }, 1000); // Every second

        // Cancel on key press or click
        (_=>{$(document).keydown(_);$(document).click(_);})(()=>{
            clearInterval(autoAcceptTimerCount);
            $("#submitBtn").text("SUBMIT REVIEW");
            autoAcceptStop = true;
        });
    }
</script>
                `, 500, 350)).showModal();

            });
        }
    }, // end init
    "confirmLatestRev" : (callback, isFailedRevert)=> { // Verify that this confirm is the latest revision
        $.getJSON("https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles="+ encodeURIComponent(mw.config.get("wgRelevantPageName")) +"&rvslots=*&rvprop=ids%7Cuser%7Ccomment&formatversion=2&format=json", r=>{
            // We got the response
            let latestRId = r.query.pages[0].revisions[0].revid;
            let parentRId = r.query.pages[0].revisions[0].parentid;
            let latestUsername = r.query.pages[0].revisions[0].user;
            let latestComment = r.query.pages[0].revisions[0].comment;
            // Get restore ID from right side review
            if ($('#mw-diff-ntitle1 > strong > a').attr('href').split('&')[1].split('=')[1] == latestRId) {callback();} else { // If latest revision send callback else show dialog
                rw.ui.confirmDialog(`
                <span>
                    <strong>`+ (!isFailedRevert ? `This is not the latest revision and may have been reverted by another reviewer.` :
                    `This edit could not be reverted as another editor has reverted it.`)
                    +`</strong> Would you like to review the latest revision`+ (isFailedRevert ? " or continue to the multiple action screen anyway" : "") +`?
                </span>
                <hr/>
                <span style="font-size:small;font-style: italic;height:340px;overflow:auto;">
                    Latest revision by `+ latestUsername +`: `+ latestComment +`
                </span>
                `,
                "GO TO LATEST REVISION", ()=>{
                    dialogEngine.closeDialog();
                    rw.ui.loadDialog.show("Redirecting...");
                    // Redirect to latest version
                    redirect("https://en.wikipedia.org/w/index.php?title="+ encodeURIComponent(mw.config.get("wgRelevantPageName")) +"&diff="+ latestRId +"&oldid="+ parentRId +"&diffmode=source#redirectLatestRevision");
                },
                "CONTINUE ANYWAY", ()=>{
                    dialogEngine.closeDialog();
                    callback();
                }, isFailedRevert? 135 : 115); // continue anyway: close and callback
            }
        });
    },

    "getPendingChangesUsers" : callback=> { // CALLBACK(last accepted usr, count, obj, userCount)
        // Get all revisions between last accepted and this one
        $.getJSON("https://en.wikipedia.org/w/api.php?action=query&prop=revisions&format=json&titles="+
                    mw.config.get("wgRelevantPageName")+"&rvprop=ids%7Cuser%7Ccomment&rvstartid="+
                    $("#mw-fr-input-oldid").attr("value")+"&rvendid="+$("#mw-fr-input-refid").attr("value"),
        r=>{
            // Done
            let revs = Object.values(r.query.pages)[0].revisions
            let lastAcceptedUser = revs.pop().user; // Remove & Return Last item as is the last accepted - Remove last user as not pending
            let userObj = {};
            let editCount = 0;
            let userCount = 0;
            revs.forEach(rev=>{ // For each revision
                let user = rev.user;
                // Summary - revID: summary (click revid to open diff in new tab)
                let summary = "<a target='_blank' href='https://en.wikipedia.org/w/index.php?title="+ encodeURIComponent(mw.config.get("wgRelevantPageName"))
                                +"&diff="+ rev.revid +"&oldid="+ rev.parentid +"&diffmode=source'>"+ rev.revid +"</a>: " + rev.comment; 
            
                // If user not in userObj, add
                if (!(user in userObj)) {
                    userObj[user] = {
                        "edits" : 0,
                        "summaries": []
                    };
                    userCount += 1;
                };

                // Now add our info
                userObj[user].edits += 1;
                userObj[user].summaries.push(summary);
                editCount += 1;
            });
            // We're done. Callback
            callback(lastAcceptedUser, editCount, userObj, userCount);
        });
    }
}
rw.multiAct = { // Multi action screen
    "initHistoryPage" : ()=> {
        // If on history page, add button to mass warn between edits
        if(window.location.href.includes("w/index.php?title=") && window.location.href.includes("&action=history")) {
            // On history page, add button
            $(".mw-history-compareselectedversions").append(`
            <button class="mw-ui-button rwMAThist">Use the Multiple Action Tool between selected revisions</button>
            `);
            // Result handler
            let userObj = {};
            let editCount = 0;
            let userCount = 0;
            let resultHandler = r=>{
                // Done
                console.log(r);
                let revs = Object.values(r.query.pages)[0].revisions
                revs.forEach(rev=>{ // For each revision
                    let user = rev.user;
                    // Summary - revID: summary (click revid to open diff in new tab)
                    let summary = "<a target='_blank' href='https://en.wikipedia.org/w/index.php?title="+ encodeURIComponent(mw.config.get("wgRelevantPageName"))
                                    +"&diff="+ rev.revid +"&oldid="+ rev.parentid +"&diffmode=source'>"+ rev.revid +"</a>: " +
                                    ((rev.comment != null && rev.comment.length > 0) ? rev.comment : "<i>No summary provided</i>"); 
                
                    // If user not in userObj, add
                    if (!(user in userObj)) {
                        userObj[user] = {
                            "edits" : 0,
                            "summaries": []
                        };
                        userCount += 1;
                    };

                    // Now add our info
                    userObj[user].edits += 1;
                    userObj[user].summaries.push(summary);
                    editCount += 1;
                });
                // Check if continue
                if (r.continue != null) {
                    // Still more to do, so resubmit
                    let latestID = $('#mw-history-compare').find('input[name="diff"]:checked').val(); 
                    let oldestID = $('#mw-history-compare').find('input[name="oldid"]:checked').val(); 
                    $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&format=json&titles="+
                        mw.config.get("wgRelevantPageName")+"&rvprop=ids%7Cuser%7Ccomment&rvstartid="+
                        latestID+"&rvendid="+oldestID + "&rvcontinue="+ r.continue.rvcontinue,
                    resultHandler); // continueee
                } else {
                    // We're done.
                    rw.ui.loadDialog.close(); // close load dialog
                    rw.multiAct.open(userObj); // open with userobj
                    userObj = {}; // clear to prevent 1 edit... 2 edits.. 3 edits ext.
                }
            }

            $(".rwMAThist").click(e=>{ // On click handler - don't use ID as there are two buttons
                e.preventDefault(); // stop the default redirect
                rw.ui.loadDialog.show("Please wait..."); // Show loading dialog
                // Load all revisions between oldid and diff - remember we are checking between this range
                let latestID = $('#mw-history-compare').find('input[name="diff"]:checked').val(); 
                let oldestID = $('#mw-history-compare').find('input[name="oldid"]:checked').val(); 
                // Get all revisions 
                $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&format=json&titles="+
                    mw.config.get("wgRelevantPageName")+"&rvprop=ids%7Cuser%7Ccomment&rvstartid="+
                    latestID+"&rvendid="+oldestID,
                resultHandler);
            });
        }
    },

    "open" : userObj=>{ // userobj format or just {}
        // To prevent a new user from mass spamming loads of users, extendedconfirmed only
        rw.info.featureRestrictPermissionLevel("extendedconfirmed", ()=>{
            // Generate list
            let listHTML = ``;
            for (const usr in userObj) {
                if (userObj.hasOwnProperty(usr)) {
                    if (usr.toLowerCase().includes("bot")) continue; // skip bots
                    if (usr.toLowerCase() == "undefined" || usr == null) continue; // don't do undefined, bug
                    const userInfo = userObj[usr];
                    // Append table row
                    listHTML += `
                    <tr>
                        <td class="mdl-data-table__cell--non-numeric">`+ usr +`</td>
                        <td>
                        <a href="#" onclick="window.parent.postMessage(\`summaries `+ usr +`\`);"><strong>` + userInfo.edits + ` edit` + (userInfo.edits > 1 ? "s" : "") +`</strong></a><br/>
                        </td>
                        <td id="editCount-`+usr+`">-
                        <script>
                            // Adds handler for this edit count
                            addMessageHandler("editCount-`+ usr +`\`*", e=>{
                                $(document.getElementById("editCount-`+usr+`")).text(e.split("\`")[1]);
                            });
                        </script>
                        </td> <!-- user edit count, loaded on page -->
                        <!-- Highest notice -->
                        <td id="PWcontainer-`+usr+`">
                        <span class="material-icons" id="PastWarning-`+usr+`" style="cursor:help;position: relative;top: 5px;padding-left: 10px;color:black;">help</span>
                        <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning-`+usr+`">
                            <span style="font-size:x-small;">
                                Level is unknown or loading
                            </span>
                        </div>
                        <script>
                            // Adds handler for this past level
                            addMessageHandler("PastWarning-`+ usr +`\`*", e=>{
                                $(document.getElementById("PWcontainer-`+usr+`")).html(e.split("\`")[1]);

                                // Now set onclick for the icon
                                $(document.getElementById("PastWarning-`+ usr +`")).click(()=>window.parent.postMessage(\`RWMAviewUserPg\\\``+ usr +`\`)); // push request upstairs on click
                                
                                // Now register all tooltips (fine if comp. handler undefined bc others will handle)
                                for (let item of document.getElementsByClassName("mdl-tooltip")) {
                                    componentHandler.upgradeElement(item); 
                                }

                                // Update progressbar from object keys
                                setProgress(`+ Object.keys(userObj).indexOf(usr) +`, `+ (Object.keys(userObj).length - 1) +`);
                            });
                        </script>
                        </td>
                        <td>-</td> <!-- text to add -->
                        <td>-</td> <!-- under date -->
                        </tr>
                    </tr>
                    `;
                    // Add event handler for edit click
                    addMessageHandler("summaries "+ usr, ()=>{
                        let revList = ``;
                        userInfo.summaries.forEach(el=>{
                            revList += el + "<hr/>";
                        });
                        rw.ui.confirmDialog(`
                        <h2 style="font-weight: 200;font-size:45px;line-height: 48px;">Related Changes</h2>
                        <div style="height:400px;overflow:auto;">
                        `+ revList +
                        `</div>`,
                        "CLOSE", ()=>dialogEngine.closeDialog(),
                        "", ()=>{}, 500);
                    });


                    // Add event handler for notice dialog
                    addMessageHandler("RWMATnewNotice", ()=>{
                        rw.ui.beginWarn(true, "(RedWarn MAT)", mw.config.get("wgRelevantPageName"), "APPLY TO CHECKED", r=>{
                            // Now push to iframe
                            rw.multiAct.dialog.getElementsByTagName("iframe")[0].contentWindow.postMessage(
                                "applyToChecked`" + btoa(r) +
                                "`Yes`New Notice"
                                , '*');
                        }, true); // Show new notice dialog, true at end hides user info
                    });

                    // Event Handler for new msg
                    addMessageHandler("RWMATnewMsg", ()=>{
                        rw.ui.newMsg("(RedWarn MAT)", true, "APPLY TO CHECKED", r=>{ // new talk page message dialog
                            // Now push to iframe
                            rw.multiAct.dialog.getElementsByTagName("iframe")[0].contentWindow.postMessage(
                                "applyToChecked`" + btoa(r) +
                                "`No`New Message"
                                , '*');
                        });
                    });

                    // TODO: event handler for quick template

                    // Event handler for Commit Changes Confirmation Dialog
                    addMessageHandler("RWMATcommitSelectedConfirm`*", cI=>{
                        let userCount = cI.split("`")[1];
                        // Show confirm dialog
                        rw.ui.confirmDialog(`
                        Are you sure you want to complete actions for <b>`+ userCount + ` user` + (userCount > 1 ? "s" : "") +`</b>?`,
                        "CONFIRM", ()=>{
                            dialogEngine.closeDialog(); // close dialog
                            rw.ui.loadDialog.show("Editing talk pages..."); // loading dialog
                            rw.multiAct.dialog.getElementsByTagName("iframe")[0].contentWindow.postMessage(
                                "confirmSelected", '*'); // Set the wheels in motion
                        },
                        "CANCEL", ()=>{
                            dialogEngine.closeDialog(); // close dialog on cancel
                        }
                        ,0);
                    });

                    // Now where the business happens
                    let actionsToTake = []; // array of objects

                    // Assemble array handler
                    addMessageHandler("RWMATToAdd`*", cI=>{
                        actionsToTake.push({
                            "user" : cI.split("`")[3],
                            "underDate" : cI.split("`")[2] == "true",
                            "wikiTxt" : atob(cI.split("`")[1])
                        });
                    });

                    // Actuall edit handler
                    addMessageHandler("RWMATfinishedandcommit", ()=>{
                        // Assemble commit handler
                        let editHandler = i=>{
                            let action = actionsToTake[i];
                            // Time to make the actual contrib
                            rw.info.addWikiTextToUserPage(action.user, action.wikiTxt, action.underDate, "Complete [[WP:REDWARN/MAT|MAT]] action", false, false, ()=>{
                                // Check we can continue
                                if (i == actionsToTake.length - 1) {
                                    // We done
                                    rw.ui.loadDialog.close();

                                    // Notify of completion
                                    rw.ui.confirmDialog(`
                                    Actions complete!`,
                                    "CLOSE", ()=>{
                                        dialogEngine.closeDialog(); // close dialog
                                    },
                                    "", ()=>{},0);
                                } else {
                                    // Continue
                                    editHandler(i+1);
                                }
                            });
                        };
                        
                        editHandler(0); // start it all
                    });
                }
            }

            // Open screen - do not use dialogEngine as other dialogs use this - allow for overlay
            // Generate container
            let content = mdlContainers.generateContainer(`
            <!-- Multiple Action PAGE -->
<script>
  var messageHandlers = {};
  window.onmessage = e=>{
    if (messageHandlers[e.data]){messageHandlers[e.data]();} // Excecute handler if exact
    else { // We find ones that contain
        for (const evnt in messageHandlers) {
            if ((evnt.substr(evnt.length - 1) == "*") && e.data.includes(evnt.substr(0, evnt.length - 2))) { // and includes w * chopped off
                messageHandlers[evnt](e.data);
                return;
            } // if contains and ends with wildcard then we do it
        }
    }
  };
  function addMessageHandler(msg, callback) { // calling more than once will just overwrite
    Object.assign(messageHandlers, ((a,b)=>{let _ = {}; _[a]=b; return _;})(msg, callback)); // function ab returns a good formatted obj
  }
</script>
<!-- PAGE CONTENT -->
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title" style="width: calc(100% - 60px);">` + rw.logoHTML + ` Multiple Action Tool</span>
        <!-- HELP -->
        <div id="helpMe" class="icon material-icons" style="float:right;">
          <span style="cursor: pointer; padding-right:15px;" onclick='Object.assign(document.createElement("a"), { target: "_blank", href: "https://en.wikipedia.org/wiki/User:Ed6767/redwarn/help/Multiple_Action_Tool"}).click();'>
              help
          </span>
        </div>
        <div class="mdl-tooltip" for="helpMe">
            Help!
        </div>

        <!-- CLOSE -->
        <div id="close" class="icon material-icons" style="float:right;">
        <span style="cursor: pointer; padding-right:15px;" onclick="window.parent.postMessage('closeDialogMA');">
            clear
        </span>
        </div>
        <div class="mdl-tooltip" for="close">
            Close
        </div>
    </div>
  </header>
  <main class="mdl-layout__content" style="padding-left: 5%;padding-right: 5%;">
    <!-- CONTROLS - TODO ADD HELP TOOLTIPS -->
    <div class="mdl-card mdl-shadow--4dp" style="width:100%">
      <!-- LOADING -->
      <div class="mdl-card__supporting-text" id="mainLoadCard" style="text-align:center; width:97.5%">
        <h2 id="loadTitle">Loading user info...</h2><br/>
        <!-- progress bar -->
        <div id="p1" class="mdl-progress mdl-js-progress" style="width:100%"></div><br />
        <i id="loadingSupportText"></i>
      </div>
      <!-- END LOADING -->

      <!-- -->
      <div class="mdl-card__supporting-text" id="mainFilterControlCard" style="display:none;">
        <h5>Toggle Select: &nbsp; &nbsp;
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="toggleCheck('unregistered', true);">
            UNREGISTERED / UNKNOWN
          </button>
          &nbsp;
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="toggleCheck(10);">
            &lt; 10 edits
          </button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="toggleCheck(50);">
            &lt; 50 edits
          </button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="toggleCheck(250);">
            &lt; 250 edits
          </button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="toggleCheck(500);">
            &lt; 500 edits
          </button>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="toggleCheck('experienced', true);">
            EXPERIENCED
          </button>
          <!-- REV13 - add filter based on standing -->
        </h5>
        <h5>Set Text from: &nbsp; &nbsp;
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="if (boxChecked()) window.parent.postMessage('RWMATnewNotice');">
            New Notice
          </button>
          &nbsp;
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="if (boxChecked()) window.parent.postMessage('RWMATnewMsg');">
            New Message
          </button>
          <!--
          &nbsp;
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
            Quick Template
          </button>-->
        </h5>
        <h5>Actions: &nbsp; &nbsp;
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onclick="removeSelected();">
            Remove Selected
          </button>
          &nbsp;
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="if (boxChecked()) commitSelected();">
            Commit Selected
          </button>
        </h5>
      </div>
    </div>
    <br/><br/>
    <!-- TABLE -->
    <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" style="width:100%">
      <thead>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">User</th>
          <th>Related Contributions</th>
          <th>Total Edit Count</th>
          <th>Standing</th>
          <th>Text to add</th>
          <th>Under date?</th>
        </tr>
      </thead>
      <tbody>
        `+ listHTML +`
      </tbody>
    </table>

    <!-- TOAST CONTAINER -->
    <div id="rw-toast" class="mdl-js-snackbar mdl-snackbar">
      <div class="mdl-snackbar__text"></div>
      <button class="mdl-snackbar__action" type="button"></button>
    </div>
  </main>
<script>
  // Set show toast function once load finished
  var pushToast;
  window.onload = () => {
    'use strict';
    window['counter'] = 0;
    var toast = document.querySelector('#rw-toast');
    componentHandler.upgradeElement(toast); // register comp

    // create function
    pushToast = (text, buttonTxt, btnClick, tOut) => {
        'use strict';
        if (buttonTxt) {
            // Show with action and button
            toast.MaterialSnackbar.showSnackbar({message: text, actionHandler: btnClick, actionText: buttonTxt, timeout: tOut}); 
        } else {
            // Show just message
            toast.MaterialSnackbar.showSnackbar({message: text, timeout: tOut});
        }
    };

    // Register all tolltips
    for (let item of document.getElementsByClassName("mdl-tooltip")) {
      componentHandler.upgradeElement(item); 
    }
  };

  // Progress bar
  var setProgress = (val, max)=>{if (val == max) {$("#mainLoadCard").hide(); $("#mainFilterControlCard").show();}}; // placeholder function, main defined once progress bar registered
  
  document.querySelector('#p1').addEventListener('mdl-componentupgraded', ()=>{
    setProgress = (val, max) => {
      // Calc percent done and set
      document.querySelector('#p1').MaterialProgress.setProgress((100 * val) / max); // set progress bar
      $("#loadingSupportText").text("User "+ (val + 1) + " of " + (max+1) + " ("+ Math.round((100 * val) / max) + "%)"); // set support text
      if (val == max) {
        // Max reached, show main filter
        $("#mainLoadCard").hide(); $("#mainFilterControlCard").show();
      }
    };
  });

  // Main
  var userActions = {}; // useractions: wikitext, underdate

  // Add checkbox handlers
  setInterval(checkUpdate, 100); // refresh every 100ms
  function checkUpdate() {
    // Update checked boxes
    let checkedBoxes = $("tbody > tr > td:visible > label > input:checked");
    $(".mdl-layout-title").html('`+ rw.logoHTML +` Multiple Action Tool'+
    (checkedBoxes.length > 0 ?
      " (" + checkedBoxes.length + " user" + (checkedBoxes.length > 1 ? "s": "") + " selected)"
      : "")); 
  }

  // Toggle check boxes toggleCheck(type or max top, is type?)
  function toggleCheck(filter, isType) {
    // For each in table rows
    $("tbody > tr").each((i, el)=>{
      let editCount = $($(el).find("td:visible")[3]).text().replace(",", ""); // 4th collumn (checkbox counts as one too!)
      if ((filter == "unregistered") && (isNaN(editCount))) { // Unregistered / Unknown
        $(el).find("td:visible > label > input:checkbox").click(); // invoke click to toggle
      } else if ((filter == "experienced") && (editCount > 499)) { // experienced
        $(el).find("td:visible > label > input:checkbox").click(); // invoke click to toggle
      } else if ((!isType) && editCount < filter) { // normal filter
        $(el).find("td:visible > label > input:checkbox").click(); // invoke click to toggle
      }
    });
  }

  function removeSelected() {
    // Hide all selected elements 
    $("tbody > tr").each((i, el)=>{
      if ($(el).find("td:visible > label > input:checkbox:checked").length > 0) {
        // remove element as checked
        $(el).find("td:visible > label > input:checkbox").click(); // click to uncheck
        $(el).fadeOut(); // hide
      }
    });
  }

  function boxChecked() { // Return if any checkbox is checked or not
    let bc = $("tbody > tr > td:visible > label > input:checked").length > 0;
    if (!bc) {
      // Push toast
      pushToast("Please select a user.");
    }
    return bc;
  } 

  // SET TEXT UNDER DATE HANDLER
  addMessageHandler("applyToChecked\`*", cI=>{ // apply to checked b64 txt, underDate (Yes/No), source (i.e New Notice)
    let textToAdd = atob(cI.split("\`")[1]);
    let underDate = cI.split("\`")[2];
    let source = cI.split("\`")[3];
    $("tbody > tr").each((i, el)=>{ // for each row
      if ($(el).find("td:visible > label > input:checkbox:checked").length > 0) { // if checked
        $($(el).find("td:visible")[5]).text(source); // 6th collumn (on click open preview)
        $($(el).find("td:visible")[6]).text(underDate); // 7th
        // Apply to object based on username (2nd)
        userActions[$($(el).find("td:visible")[1]).text()] = {
          "toAdd" : textToAdd,
          "underDate": (underDate.toLowerCase() == "yes")
        };
      }
    });
  });

  // COMMIT SELECTED - i.e actually do
  function commitSelected() {
    // Ensure action has been set for all checked
    let notAllFilled = false;
    $("tbody > tr").each((i, el)=>{ // for each row
      if ($(el).find("td:visible > label > input:checkbox:checked").length > 0) { // if checked
         notAllFilled = ($($(el).find("td:visible")[5]).text() == "-") //If 6th col has blank symb, stop and notif
      }
    });

    if (notAllFilled) {
      // Not all filled, warn and exit
      pushToast("Please set an action for the selected users.");
      return; //exit
    } // else continue
    
    // Show confirm dialog
    window.parent.postMessage('RWMATcommitSelectedConfirm\`'+ $("tbody > tr > td:visible > label > input:checked").length); // push request for confirm to top

    // When confirmed
    addMessageHandler("confirmSelected", ()=>{
      // load dialog is already showing, so interaction impossible in normal use
      // Now for each
      $("tbody > tr").each((i, el)=>{ // for each row
        if ($(el).find("td:visible > label > input:checkbox:checked").length > 0) { // if checked
          let username = $($(el).find("td:visible")[1]).text(); // get username
          let userAct = userActions[username]; // set action
          let userIsIp = (username.match(/([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(\d{1,3}\.){3}\d{1,3}/g) != null); // regex match all IPS
          // Time to commit
          let finalWikiTxt = userAct.toAdd;
          if (userAct.underDate && userIsIp) {
            // Add shared IP advice for under date
            finalWikiTxt += "`+rw.sharedIPadvice()+`";
          }

          // Finally, push upstairs to be done.
          window.parent.postMessage('RWMATToAdd\`'+ btoa(finalWikiTxt) + '\`'+ userAct.underDate + '\`'+ username);
          // Done - Now remove original
          $(el).find("td:visible > label > input:checkbox").click(); // click to uncheck
          $(el).fadeOut(); // hide
        }
      });
      // We done
      window.parent.postMessage('RWMATfinishedandcommit'); // start the commits back upstairs
    });
  }
</script>
</div>
            `, document.body.offsetWidth, document.body.offsetHeight);
            // Dialog gubbins
            // Init if needed
            if ($("#MAdialogContainer").length < 1) {
                // Need to init
                $("body").prepend(`
                    <div id="MAdialogContainer">
                    </div>
                `);
                // Add close event
                addMessageHandler("closeDialogMA", ()=>{rw.multiAct.dialog.close();}); // closing
            }
            
            $("#MAdialogContainer").html(`
            <dialog class="mdl-dialog" id="rwMAdialog">
                `+ content +`
            </dialog>
            `);


            rw.multiAct.dialog = document.querySelector('#rwMAdialog'); // set dialog

            $("#rwMAdialog").attr("style", "padding:inherit;"); // set no padding
            // Firefox issue fix
            if (! rw.multiAct.dialog.showModal) {
                dialogPolyfill.registerDialog(rw.multiAct.dialog);
            }

            rw.multiAct.dialog.showModal(); // Show dialog

            // Now load all the edit counts and last warning levels
            let usernames = Object.keys(userObj);
            let userPages = {};

            // Add userpage preview handler
            addMessageHandler("RWMAviewUserPg`*", cI=>{
                let userPgWikiTxt = userPages[cI.split("`")[1]]; // get wikitext from obj
                // Parse wikitext (show loading dialog first)
                rw.ui.loadDialog.show("Parsing userpage...");
                rw.info.parseWikitext(userPgWikiTxt, parsed=>{ // Request
                    rw.ui.loadDialog.close(); // close load dialog
                    // Show preview dialog
                    rw.ui.confirmDialog(`
                        <style>
                            h2 {
                                font-size: 20px;
                                line-height: 0px;
                            }
                            .mw-editsection {
                                display: none;
                            }
                        </style>

                        <div style="height:500px;overflow:auto;">
                            `+parsed+`
                        </div>
                    `,
                    "CLOSE", ()=>dialogEngine.closeDialog(),
                    "", ()=>{}, 500);
                });
            });

            // Last Warn level and userpg handler (done as essentially foreach, called from editcount)
            let lastWarnLevelHandler = (i, callback) => { // LAST WARNING
                let un = usernames[i];
                rw.info.lastWarningLevel(rw.info.targetUsername(un), (w, usrPgMonth, userPg)=>{
                    let lastWarning = [ // Return HTML for last warning level.
                        // NO PAST WARNING
                        `
                        <span class="material-icons" id="PastWarning-`+un+`" style="cursor:pointer;position: relative;top: 5px;padding-left: 10px;color:green;">thumb_up</span>
                        <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning-`+un+`">
                            <span style="font-size:x-small;">
                            No notices this month.
                            </span>
                        </div>
                        `,
        
                        // NOTICE
                        `
                        <span class="material-icons" id="PastWarning-`+un+`" style="cursor:pointer;position: relative;top: 5px;padding-left: 10px;color:blue;">info</span>
                        <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning-`+un+`">
                            <span style="font-size:x-small;">
                            Has been given a Level 1 notice<br/>this month.
                            </span>
                        </div>
                        `,
                        // CAUTION
                        `
                        <span class="material-icons" id="PastWarning-`+un+`" style="cursor:pointer;position: relative;top: 5px;padding-left: 10px;color:orange;" >announcement</span>
                        <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning-`+un+`">
                            <span style="font-size:x-small;">
                            Has been given a Level 2 caution<br/>this month.
                            </span>
                        </div>
                        `,
                        // Warning- in red. RedWarn, get it? This is the peak of programming humour.
                        /// Haha, whoops? This joke has turned up twice. Who'd ever think they'd see reused code?
                        `
                        <span class="material-icons" id="PastWarning-`+un+`" style="cursor:pointer;position: relative;top: 5px;padding-left: 10px; color:red;" >report_problem</span>
                        <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning-`+un+`">
                            <span style="font-size:x-small;">
                            Has been given a Level 3 warning<br/>this month.
                            </span>
                        </div>
                        `,
        
                        // Final/Only Warning (dark red)
                        `
                        <span class="material-icons" id="PastWarning-`+un+`" style="cursor:pointer;position: relative;top: 5px;padding-left: 10px;color:#a20000;" >report</span>
                        <div class="mdl-tooltip mdl-tooltip--large" for="PastWarning-`+un+`">
                            <span style="font-size:x-small;">
                            Has been given a Level 4 Final<br/>or ONLY warning.
                            </span>
                        </div>
                        `
                    ][w];

                    // Set userpage var for preview
                    userPages[un] = userPg;

                    // Now push to iframe
                    rw.multiAct.dialog.getElementsByTagName("iframe")[0].contentWindow.postMessage("PastWarning-"+ un + "`" + lastWarning, '*');
                    callback(); // Send callback
                });
            };

            let editCounterHandler = (i, isRetry)=>{ // EDIT COUNT
                if (rw.info.isUserAnon(usernames[i])){ // skip edits by anon IPs as they will not return, just set lastwarnlevel
                    lastWarnLevelHandler(i, ()=>{
                        editCounterHandler(i + 1);
                    });
                    return;
                } 
                rw.info.getUserEditCount(usernames[i], cI=>{
                    // Push to iframe
                    // Set c to blank space if edit count undefined or edit count with number sorted if is
                    let c = cI == null ? "-" : cI.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // regex adds commas to number to make more readable
                    rw.multiAct.dialog.getElementsByTagName("iframe")[0].contentWindow.postMessage("editCount-"+ usernames[i] + "`" + c, '*');
                    
                    // Make sure there wasn't an issue, if so redo, and if redo fails just continue
                    if ((cI == null) && !isRetry) {
                        editCounterHandler(i, true); // do it again with retry flag
                        return;
                    }
                    // Now last warning handler
                    lastWarnLevelHandler(i, ()=>{
                        // Make sure there is a next
                        if (i != usernames.length - 1) {
                            editCounterHandler(i + 1); // do it again with next user
                        } // else we done!
                    });
                });
            };

            editCounterHandler(0); // call and begin load

        }, ()=>{
            // When no perms
            rw.ui.confirmDialog(`
            Sorry, but to prevent misuse you have to be an extended confirmed user to use the multiple action tool. Check back later!
            `,
            "OKAY", ()=>dialogEngine.closeDialog(),
            "", ()=>{}, 23);
        });
    }
};
rw.quickTemplate = { // Quick template UI and loader

    "packStore" : [],

    "packs" : ()=>{ // Get packs from config and default and merge to packstore
        if (rw.quickTemplate.packStore.length > 0) return rw.quickTemplate.packStore; // return if already set

        if (rw.config.templatePacks == null) { // if templates not set
            rw.config.templatePacks = []; // set to empty
            rw.info.writeConfig(true, ()=>{}); // update config page
        }
        rw.quickTemplate.packStore = rw.quickTemplate.packStore.concat(rw.config.templatePacks);
        return rw.quickTemplate.packStore; // return
    },

    "packCodeToPageName" : packCode=>{ // Convert a pack code to it's real page name
        return "User:" + packCode.split("/")[0] + "/RedWarn_QuickTemplate_packInstall_" + packCode.split("/")[1] + ".js";
    },


    "openSelectPack" : un=>{
        // Assemble buttons for each pack
        let finalBtnStr = "";
        rw.quickTemplate.packs().forEach((pack, i) => {
            if (pack.name == null) return; // skip "undefined by undefined"
            finalBtnStr += `
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" style="width:85%" onclick="window.parent.postMessage('selectPack\``+i+`', '*');">
                `+ pack.name +` by `+ pack.createdBy +`
            </button>
            <!-- EDIT BUTTON -->
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect" style="width:5%" onclick="window.parent.postMessage('editPack\``+i+`', '*');">
                <i class="material-icons">create</i>
            </button>
            <br/><br/>
            `;
        });

        // Add toast handler
        addMessageHandler("pushToast`*", m=>rw.visuals.toast.show(m.split('`')[1],false,false,4000));
        // Add new pack handler
        addMessageHandler("qTnewPack", ()=>rw.quickTemplate.newPack());

        // Show pack selection dialog
        dialogEngine.create(mdlContainers.generateContainer(`
        <h2 style="font-weight: 200;font-size:45px;line-height: 48px;">Select Template Pack</h2>
<div style="height: 400px;overflow:auto;">
    <!-- Pack buttons go here -->
    ` + finalBtnStr + `
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" style="width:100%" onclick="Object.assign(document.createElement('a'), { target: '_blank', href: 'https://en.wikipedia.org/wiki/WP:REDWARN/QTPACKS'}).click();">
        HELP / GET MORE TEMPLATE PACKS
    </button>
    <br /><br />
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" style="width:100%" onclick="window.parent.postMessage('closeDialog', '*');window.parent.postMessage('qTnewPack', '*');">
        CREATE NEW TEMPLATE PACK
    </button>
</div>

<!-- CLOSE BUTTON -->
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
</span>
        `, 500, 530)).showModal();

        // Pack Selected Handler
        addMessageHandler("selectPack`*", cI=>{
            dialogEngine.closeDialog();

            let i = parseInt(cI.split("`")[1]); // get index from call
            rw.quickTemplate.selectTemplate(un, i); // open select template screen
        });

        // Pack edit handler
        addMessageHandler("editPack`*", cI=>{
            dialogEngine.closeDialog();

            let i = parseInt(cI.split("`")[1]); // get index from call
            rw.quickTemplate.selectTemplate(un, i, true); // open select template screen, true denotes edit
        });
    },

    "selectTemplate" : (un, i, editMode) => {
        if (editMode) un = "(edit mode)";
        let selectedPack = rw.quickTemplate.packs()[i];

        let finalSelectStr = "<hr />"; // final select string
        selectedPack.templates.forEach((template,i)=>{
            finalSelectStr += `
            <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="template-`+ i +`">
                <input type="radio" id="template-`+ i +`" class="mdl-radio__button" name="options" value="`+ i +`">
                <span class="mdl-radio__label">`+ template.title +`</span>
            </label><br>
            <i>`+ template.about +`</i>
            <hr />
            `;
        });

        // Add edit mode handlers
        if (editMode) {
            addMessageHandler("qTdeletePack", ()=>{
                // Confirm
                rw.ui.confirmDialog(`
                Are you sure you want to delete this pack?<br />
                <b>Note:</b> This will only delete the pack from your account. If it is published, this won't unpublish it.
                `,
                    "YES, DELETE.", ()=>{
                        dialogEngine.closeDialog(); // close prompt
                        rw.ui.loadDialog.show("Deleting...");
                        // Now remove at index
                        rw.config.templatePacks.splice(i, 1);
                        // Now refresh and save config
                        rw.info.writeConfig(); // save config, will also refresh
                    },
                    "CANCEL", ()=>{
                        // On cancel just recall
                        dialogEngine.closeDialog();
                        rw.quickTemplate.selectTemplate(un, i, editMode); // reshow, then done!
                    }, 45
                );
            });

            // Handle edit and new

            addMessageHandler("qTNew`*", cI=>{ //create new template
                dialogEngine.closeDialog();

                // Set up vars
                let nTitle = cI.split("`")[1];
                let nAbout = cI.split("`")[2];
                
                // Add to our template array
                rw.config.templatePacks[i].templates.push({
                    "title": nTitle,
                    "about": nAbout,
                    "content": "<!-- Enter your content here! This box fully supports wikitext. Once done, you can check that your template works and looks as expected by clicking the test button. -->"
                });
                // Clear and reload config
                rw.ui.loadDialog.show("Creating...");
                rw.info.writeConfig(true, ()=>{ // save config
                    rw.ui.loadDialog.close();
                    rw.quickTemplate.packStore = []; // clear out packs
                    
                    // Refresh selected pack
                    selectedPack = rw.quickTemplate.packs()[i];
                    // Open editor
                    rw.quickTemplate.editTemplate(i, selectedPack.templates.length - 1); // w pack index and template index
                }); 
            });

            addMessageHandler("qTEdit`*", cI=>{
                // Open editor
                rw.quickTemplate.editTemplate(i, cI.split("`")[1]); // w pack index and template index
            });

            // Publish
            addMessageHandler("qTPublish", ()=>{
                if (selectedPack.packCode == null) { // Pack isn't published
                    rw.ui.confirmDialog("This pack isn't published. If you'd like to let other editors use your pack, click 'Publish Now'",
                    "PUBLISH NOW", ()=>{
                        // Publish new template
                        dialogEngine.closeDialog(); // close dialog
                        rw.quickTemplate.publish(selectedPack, true, i); // true here denotes is new
                    },
                    "CANCEL", ()=>dialogEngine.closeDialog(), 18);

                } else {
                    // Pack is published
                    rw.ui.confirmDialog("This pack is published. If you'd like to update your pack for other editors, click 'Update Now'",
                    "UPDATE NOW", ()=>{
                        // Publish new template
                        dialogEngine.closeDialog(); // close dialog
                        rw.quickTemplate.publish(selectedPack); // just normal update
                    },
                    "CANCEL", ()=>dialogEngine.closeDialog(), 18);
                }
            });
        }
        // END edit mode handlers

        // Now we need to assemble the select screen
        // Show template selection dialog
        dialogEngine.create(mdlContainers.generateContainer(`
        <h2 style="font-weight: 200;font-size:45px;line-height: 48px;">`+selectedPack.name+`</h2>
<div style="height: 390px;overflow:auto;">
    <!-- Template radio selectors go here -->
    ` + finalSelectStr + `
    <!-- EDIT MODE BUTTONS -->
    <!-- DON'T REMOVE THIS LINE! `+ (editMode ? `-->
    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="template-NEW">
    <input type="radio" id="template-NEW" class="mdl-radio__button" name="options" value="NEW" onchange="
        if ($( 'input:checked' ).val() == 'NEW') {$('#createNewContainer').show();} else {$('#createNewContainer').hide();}
    "> <!-- Toggle vis on change -->
        <span class="mdl-radio__label">Create New Template</span>
    </label>
    <div id="createNewContainer" style="display:none;"><br>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 100%;">
            <input class="mdl-textfield__input" type="text" id="createNewTitle">
            <label class="mdl-textfield__label" for="createNewTitle">Title</label>
        </div><br />
        <div class="mdl-textfield mdl-js-textfield" style="width: 100%;">
            <textarea class="mdl-textfield__input" type="text" rows= "3" id="createNewAbout"></textarea>
            <label class="mdl-textfield__label" for="createNewAbout">Description</label>
        </div>
        <br />
        <i>Click "edit" to create and begin editing your template.</i>
    </div>
    <hr />
    <!-- Publish button (only if pack by us)-->
    <!-- Don't remove this line! `+ ((selectedPack.createdBy == mw.config.get("wgUserName")) ? ` -->
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" style="width:100%;" onclick="window.parent.postMessage('qTPublish', '*');">
        MANAGE PUBLISHING
    </button>
    <br /><br />
    <!-- DON'T REMOVE THIS LINE ` : ``) + ` -->

    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" style="width:100%;background-color:red;" onclick="window.parent.postMessage('qTdeletePack', '*');">
        DELETE THIS PACK
    </button>
    
    <!-- DON'T REMOVE THIS LINE! ` : "") + ` -->
    <!-- END EDIT MODE BUTTONS -->
</div>

<!-- CLOSE BUTTON -->
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="handleNext();">
        ${(editMode ? "EDIT" : "CONTINUE")}
    </button>
</span>
<script>
    // Used to handle next
    function handleNext() {
        if ($( "input:checked" ).length > 0) { // only continue if selection
            if ($( "input:checked" ).val() == "NEW") {
                // Create new (qTNew Title Description)
                if ($( "#createNewTitle" ).val().length > 2) { // if long enough
                    window.parent.postMessage('qTNew\`'+ $( "#createNewTitle" ).val() + '\`' + $( "#createNewAbout" ).val(), '*');
                }
            } else { // Else continue as normal (qTEdit in edit mode, qTNext normal)
                window.parent.postMessage('qT`+ (editMode ? "Edit": "Next") +`\`'+ $( "input:checked" ).val(), '*');
            }
        }
    }
</script>
        `, 500, 530)).showModal();

        // Continue Handler (not called in edit mode)
        addMessageHandler("qTNext`*", cI2=>{
            let i2 = parseInt(cI2.split("`")[1]); // i from above frame
            rw.quickTemplate.applyTemplate(selectedPack, i2, un); // open apply template screen
        });
    },

    "applyTemplate" : (selectedPack, i2, unI) => {
        let selectedTemplate = selectedPack.templates[i2];
        let contentStr = selectedTemplate.content;
        let un = rw.info.targetUsername(unI);
        let addUnderDate = contentStr.includes("##RW UNDERDATE##");
        // Now we need to assemble inputs for this template


        // Add dialog handlers for preview
        addMessageHandler("generatePreview`*", m=>{
            rw.info.parseWikitext(m.split("`")[1], parsed=>{ // Split to Wikitext and send over to the API to be handled
                dialogEngine.dialog.getElementsByTagName("iframe")[0].contentWindow.postMessage({
                    "action": "parseWikiTxt",
                    "result": parsed}, '*'); // push to container for handling in dialog and add https:// to stop image breaking
            });
        });

        // Add handlers for submit
        addMessageHandler("qtDone`*", eD=> {
            let wikiTxtToAdd = atob(eD.split("`")[1]); // params
            
            // MAKE EDIT
            rw.info.addWikiTextToUserPage(rw.info.targetUsername(un), wikiTxtToAdd, addUnderDate, "[[w:en:Wikipedia:RedWarn/QTPACKS|" + selectedPack.name + " - " + selectedTemplate.title + "]]");
        });

        // Now generate text input code - SYNTAX {{RWTEXT|Label|ID}}
        let finalAdditionalInputs = ``;
        // NORMAL TEXT INPUT
        (m=>{
            if (m != null) { // to stop errors
                m.forEach(match=>{ // for each match to regex
                    let v = match.split("|"); // split at pipe for varibles
                    let label = v[1]; // strip label
                    let id = v[2].split("}")[0]; // strip ID
                    // Now add our textbox
                    finalAdditionalInputs += `
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
                        <input class="mdl-textfield__input rwCustomTextInput" type="text" id="${btoa(match)}"> <!-- ID is b64 of what needs to be replaced -->
                        <label class="mdl-textfield__label" for="${btoa(match)}">${label}</label>
                    </div>
                    `;
                });
            }
        })(selectedTemplate.content.match(/{{RWTEXT\|[^}}]*\|[^{{]*}}/g)); // regex here for above function
        
        // Finally, show final submit dialog
        dialogEngine.create(mdlContainers.generateContainer(`
        <!-- Style for title preview -->
<style>
    h2 {
        font-size: 20px;
        line-height: 0px;
    }
    .mw-editsection {
        display: none;
    }
</style>
<h2 style="font-weight: 200;font-size:45px;line-height: 48px;">`+selectedPack.name+`</h2>
<h5>`+selectedTemplate.title+`</h5>
<i>`+ selectedTemplate.about +`</i>
<div style="height: 340px;overflow:auto;">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
        <input class="mdl-textfield__input" type="text" id="trgtUsrVisualBox" value="`+ rw.info.targetUsername(un) +`" readonly>
        <label class="mdl-textfield__label" for="trgtUsrVisualBox">Target</label>
        <div class="mdl-tooltip" for="trgtUsrVisualBox">
            To target a different user, please visit their userpage.
        </div>
    </div>
    <!-- Custom inputs here -->
    ${finalAdditionalInputs}

    <!-- Finally, preview -->
    <span id="previewContainer">
        <!-- EDIT BUTTON -->
    
        <span id="editBtn" class="material-icons" style="font-size: 16px;padding-bottom: 3px;float: right;padding-right: 5px;cursor: pointer;" onclick="$('#previewContainer').hide();$('#editorContainer').show();">
            create
        </span>
    
        <div id="preview" style="height: 220px; overflow-y: auto; width:100%;"> <!-- do not use max-height as this moves the buttons and makes it hard for muscle memory-->
            
        </div> <!-- Used to show preview-->
    </span>
    
    <span id="editorContainer" style="display:none;">
        <span id="previewBtn" class="material-icons" style="font-size: 16px;padding-bottom: 3px;float: right;padding-right: 5px;cursor: pointer;" onclick="$('#previewContainer').show();$('#editorContainer').hide();grabPreview();">
            visibility
        </span>
        <div id="editor">
            <textarea id="wikiTxt" name="wikiTxt" style="height: 220px; max-height: 220px; overflow-y: auto; width:100%;">`+ contentStr +`</textarea>
        </div> <!-- Used to edit Wikitext -->
    </span>
    </form>
</div>

<!-- CLOSE BUTTON -->
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="handleSubmit();">
        SUBMIT
    </button>
</span>
<script>
    // Previews
    window.onmessage = function(e){
        if (e.data.action == 'parseWikiTxt') {
            $("#preview").html(e.data.result); // Set preview to content
        }
    };

    function pushToast(text) {window.parent.postMessage('pushToast\\\`' + text);} // Push toast to host

    function grabPreview() {
        let wikiTxt = document.getElementById("wikiTxt").value;
        window.parent.postMessage('generatePreview\\\`'+ wikiTxt, '*');
    }

    // Used to handle submit
    function handleSubmit() {
        let wikiTxt = document.getElementById("wikiTxt").value;
        window.parent.postMessage('qtDone\\\`' + btoa(wikiTxt)); // Push upstairs and commit
        window.parent.postMessage("closeDialog"); // We done here. Top will refresh or reshow if error occurs.
    }

    // Once loaded call load preview
    grabPreview();
    
    // Generate preview on change
    var previewTO;
    function refreshPreview() {
        clearTimeout(previewTO); // cancel TO
        let originalText = atob("`+ btoa(selectedTemplate.content) +`");
        // Now replace for each input
        
        $(".rwCustomTextInput").each((i, el)=>{
            console.log(originalText);
            console.log(atob($(el).attr("id")));
            originalText = originalText.replace(atob($(el).attr("id")), $(el).val()); // replace case with inputted text
        });

        // Now set the text input
        $("#wikiTxt").val(originalText);

        
        grabPreview(); // now load preview

    }

    // Add event handler for inputboxes
    $(".rwCustomTextInput").change(()=>refreshPreview());
    
</script>
        `, 500, 550)).showModal();
    },

    "newPack" : ()=> {
        // Creates a new pack and saves to config
        // Add toast handler
        addMessageHandler("pushToast`*", m=>rw.visuals.toast.show(m.split('`')[1],false,false,4000));

        addMessageHandler("qTcreateNew`*", cI=>{
            // Handle calls the create new pack
            let packName = cI.split("`")[1];
            rw.config.templatePacks.push(
                {
                    "name" : packName,
                    "createdBy": rw.info.getUsername(),
                    "templates" : []
                }
            ); // add to config
            rw.ui.loadDialog.show("Creating...");
            rw.info.writeConfig(true, ()=>{ // save config
                rw.ui.loadDialog.close();
                rw.quickTemplate.packStore = []; // clear out packs

                // Refresh packs and open selection screen in edit mode
                rw.quickTemplate.selectTemplate("",rw.quickTemplate.packs().length - 1, true); // true here distingishes edit mode
            });
            
        });

        // Finally, show the dialog
        dialogEngine.create(mdlContainers.generateContainer(`
            <h2 style="font-weight: 200;font-size:45px;line-height: 48px;">Create Template Pack</h2>
<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%">
    <input class="mdl-textfield__input" type="text" id="templatePackName" maxlength="15">
    <label class="mdl-textfield__label" for="templatePackName">Template Pack Name</label>
</div>
<!-- CLOSE AND CREATE BUTTONS -->
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="createPack();">
        CREATE
    </button>
</span>

<script>
    function pushToast(text) {window.parent.postMessage('pushToast\\\`' + text);} // Push toast to host

    function createPack() {
        // Submit pack
        let packName = $("#templatePackName").val();
        // Check length is between 4-15 chars
        if (packName.length > 15 || packName.length < 4) {
            pushToast("Please ensure your template name is between four and fifteen characters long.");
            return; // stop
        }
        // Now we can send to top
        window.parent.postMessage('qTcreateNew\`'+ packName, '*');
        window.parent.postMessage('closeDialog', '*'); // close, we're done
    }
</script>
        `, 500, 200)).showModal();
    },

    "editTemplate" : (selectedPackI, selectedTemplateI)=>{
        // Used to edit template
        let selectedPack = rw.quickTemplate.packs()[selectedPackI];
        let selectedTemplate = selectedPack.templates[selectedTemplateI];
        let saveHandler = (b64data, callback)=>{ // Save Data handler
            // Set vars
            let title = atob(b64data.split("`")[1]);
            let about = atob(b64data.split("`")[2]);
            let content = atob(b64data.split("`")[3]);
            rw.config.templatePacks[selectedPackI].templates[selectedTemplateI] = {
                "title": title,
                "about": about,
                "content": content
            };
            // Clear and reload config
            rw.ui.loadDialog.show("Saving...");
            rw.info.writeConfig(true, ()=>{ // save config
                rw.ui.loadDialog.close();
                rw.quickTemplate.packStore = []; // clear out packs
                
                // Refresh selected pack
                selectedPack = rw.quickTemplate.packs()[selectedPackI];
                
                // Refresh selected template
                selectedTemplate = selectedPack.templates[selectedTemplateI];

                if (callback != null) callback(); // send callback if set
            }); 
        };

        // Save changes handler
        addMessageHandler("qTSave`*", cI=>{
            saveHandler(cI);
        });

        // Close Editor Handler
        addMessageHandler("qTClose`*", cI=>{
            saveHandler(cI, ()=>dialogEngine.closeDialog());
        });

        // Test Handler
        addMessageHandler("qTTest`*", cI=>{
            saveHandler(cI, ()=> {
                // Open normal apply window with sandbox target
                rw.quickTemplate.applyTemplate(selectedPack, selectedTemplateI, "Sandbox for user warnings");
            });
        });

        // Finally, open the edit template dialog
        dialogEngine.create(mdlContainers.generateContainer(`
            <h2 style="font-weight: 200;font-size:45px;line-height: 48px;">`+selectedPack.name+`</h2>
<div style="height:400px;overflow:auto;">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 100%;">
        <input class="mdl-textfield__input" type="text" id="title"> <script>$("#title").val(atob("`+ btoa(selectedTemplate.title) +`"));</script> <!-- Script to set due to quote issues-->
        <label class="mdl-textfield__label" for="title">Title</label>
    </div><br />
    <div class="mdl-textfield mdl-js-textfield" style="width: 100%;">
        <textarea class="mdl-textfield__input" type="text" rows= "3" id="about">`+ selectedTemplate.about +`</textarea>
        <label class="mdl-textfield__label" for="about">Description</label>
    </div>

    <h5>Edit source</h5>
    <i>Create your template below. For more help, see the <a href="https://en.wikipedia.org/wiki/WP:REDWARN/QTPACKS" target="_blank">help page.</a></i>
    <div class="mdl-textfield mdl-js-textfield" style="width: 100%;">
        <textarea class="mdl-textfield__input" type="text" rows="5" id="content" style="font-family: monospace;">`+ selectedTemplate.content +`</textarea>
        <label class="mdl-textfield__label" for="content">Content</label>
    </div>
</div>
<!-- CLOSE AND CREATE BUTTONS -->
<span style="float:right;">
    <button id="exitBtn" class="mdl-button mdl-js-button mdl-js-ripple-effect">
        EXIT
    </button>
    &nbsp;
    <button id="testBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
        TEST
    </button>
    &nbsp;
    <button id="saveBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
        SAVE CHANGES
    </button>
</span>

<script>
    // Add handlers
    $("#exitBtn").click(()=>{
        window.parent.postMessage('qTClose\`'+ btoa($("#title").val()) + "\`" + btoa($("#about").val()) + "\`" + btoa($("#content").val()), '*');
    });

    $("#testBtn").click(()=>{
        // Test changes
        window.parent.postMessage('qTTest\`'+ btoa($("#title").val()) + "\`" + btoa($("#about").val()) + "\`" + btoa($("#content").val()), '*');
    });

    $("#saveBtn").click(()=>{
        // Save changes here
        window.parent.postMessage('qTSave\`'+ btoa($("#title").val()) + "\`" + btoa($("#about").val()) + "\`" + btoa($("#content").val()), '*');
    });
</script>
        `, 500, 550)).showModal();
    },

    "publish" : (selectedPack, isNew, selectedPackI)=> { // makes a listing on the WP:REDWARN/QTPACKS page if isnew is set to true
        // Publish new pack
        rw.ui.loadDialog.show("Publishing...");
 
        let packCode = selectedPack.packCode; // get packcode from selected pack
        if (packCode == null) packCode = rw.info.getUsername() + "/" + rw.makeID(10); // Generate a new pack code if not already published

        let packPage = rw.quickTemplate.packCodeToPageName(packCode); // get page to write script to

        // Now, generate script that installs this pack
        let packInstallScript = `
/* <nowiki>
+------------------------------------+
|  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  |
|  Generated automatically.          |
|  DO NOT EDIT THIS FILE OR ADD TO   |
|  YOUR COMMON.JS FILE. DOING SO     |
|  WILL CAUSE SERIOUS ISSUES.        |
+------------------------------------+

Install script (c) Ed. E (User:Ed6767) - license: https://gitlab.com/redwarn/redwarn-web
*/
rw.ui.loadDialog.show("Installing...");
let packSource = JSON.parse(atob("${btoa(JSON.stringify(selectedPack))}")); // Load source from currentpack
rw.config.templatePacks.push(packSource); // Push into config
rw.info.writeConfig(true, ()=>{ // save config
    rw.ui.loadDialog.close();
    rw.quickTemplate.packStore = []; // clear out packs
    
    // Show success dialog
    rw.ui.confirmDialog(
    "Pack installed!",
    "RELOAD PAGE", ()=>window.location.reload(),
    "", ()=>{}, 0);
}); 
// </nowiki>
        `;

        // Script generated, let's continue
        //Commit to script page
        $.post(rw.wikiAPI, {
            "action": "edit",
            "format": "json",
            "token" : mw.user.tokens.get("csrfToken"),
            "title" : packPage,
            "summary" : "Publish Autogenerated QTPack Install [[w:en:Wikipedia:RedWarn|(RedWarn "+ rw.version +")]]", // summary sign here
            "text": packInstallScript,
            "tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
        }).done(dt => {
            // We done. Check for errors, then callback appropriately
            if (!dt.edit) {
                // Error occured or other issue
                console.error(dt);
                rw.ui.loadDialog.close();
                rw.visuals.toast.show("Sorry, there was an error. See the console for more info. Your pack has not been published.");
            } else {
                // Success! 
                if (!isNew) { // if not a new pack, show update done screen and exit
                    rw.loadDialog.close();
                    rw.ui.confirmDialog("Pack updated successfully!", "DONE", ()=>dialogEngine.closeDialog() , "", ()=>{}, 0);
                    return;
                } 
                
                // CONINUES ONLY IF NEW
                // Now make change to config in our preferences re new change
                rw.config.templatePacks[selectedPackI].packCode = packCode; // add packcode to template config
                rw.info.writeConfig(true, ()=>{ // save config
                    rw.quickTemplate.packStore = []; // clear out packs
                    // Now add to QTPacks page
                    $.post(rw.wikiAPI, {
                        "action": "edit",
                        "format": "json",
                        "token" : mw.user.tokens.get("csrfToken"),
                        "title" : "Wikipedia:RedWarn/help/Quick_Template/templates",
                        "summary" : "Publish new pack [[w:en:Wikipedia:RedWarn|(RedWarn "+ rw.version +")]]", // summary sign here
                        "appendtext": // Add our section wikitxt here
                        `
=== ${selectedPack.name} - by ${selectedPack.createdBy} ===
''No additional info provided - pack owner, please edit this section and add additional info here or your pack may be removed.''
==== Pack Code ====
<code>${packCode}</code>` ,
"tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
                    }).done(dt2 => {
                        if (!dt.edit) {
                            // Error occured or other issue
                            console.error(dt);
                            rw.ui.loadDialog.close();
                            rw.visuals.toast.show("Sorry, there was an error. See the console for more info. Your pack has not been published to the QTPack page, maybe add manually.");
                        } else {
                            // Done! Load QTPack page
                            redirect("https://en.wikipedia.org/wiki/WP:REDWARN/QTPACKS"); // No rw.wikiBase due to lack of page there
                        }
                    });
                }); 
            }
        });
    }
};
rw.pageProtect = { // Used for [[WP:RFPP]]
    "rfppPage" : "Wikipedia:Requests_for_page_protection", // !!! FOR PRODUCTION USE Wikipedia:Requests_for_page_protection ELSE USE User:Ed6767/sandbox/rwTests/rpp !!!
    // THIS MODULE IS NOW LIVE!!!

    // Define protection levels
    "editProtectionLevels" : { //edit protection - SET IN ORDER AS DISTINGUISHES BETWEEN UPGRADE AND DOWNGRADE
        "unprotected" : { // unprotected
            "title" : "Page is not edit protected",
            "name" : "no protection",
            "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Semi-protection-unlocked.svg/320px-Semi-protection-unlocked.svg.png"
        },

        "pendingChanges" : {
            // Edits only
            "title" : "Page is pending changes protected",
            "name" : "pending changes protection",
            "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Pending-protection-shackle.svg/240px-Pending-protection-shackle.svg.png"
        },

        "autoconfirmed" : {
            "title" : "Page is semi-protected",
            "name" : "semi-protection",
            "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Semi-protection-shackle.svg/240px-Semi-protection-shackle.svg.png"
        },

        "extendedconfirmed" : {
            "title" : "Page is extended protected",
            "name" : "extended protection",
            "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Extended-protection-shackle.svg/240px-Extended-protection-shackle.svg.png"
        },

        "templateeditor" : { // template protection
            "title" : "Page is template protected",
            "name" : "template protection",
            "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Template-protection-shackle.svg/240px-Template-protection-shackle.svg.png"
        },

        "sysop" : {
            "title" : "Page is fully protected",
            "name" : "full protection",
            "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Full-protection-shackle.svg/240px-Full-protection-shackle.svg.png"
        },

        "cascading" : {
            // Cascading protection
            "title" : "Page is cascade protected",
            "name" : "cascade protection",
            "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Cascade-protection-shackle.svg/240px-Cascade-protection-shackle.svg.png"
        }
    },

// for move protection add smallprint: move protection limit: x

    "getCurrentPageProtection" : callback=>{ // Callback {edit: level, move:level}
        // Request protection level from mediawiki
        $.getJSON(rw.wikiAPI + "?action=query&format=json&prop=info%7Cflagged&inprop=protection&titles="+ encodeURIComponent(mw.config.get("wgRelevantPageName")), r=>{
            let pageInfo = r.query.pages[Object.keys(r.query.pages)[0]];

            let editProtection = "unprotected";
            let moveProtection = "unprotected";

            pageInfo.protection.forEach(protection => {
                if ((editProtection == "unprotected") && (protection.type == "edit")) editProtection = protection.level; // set edit protection level
                if ((moveProtection == "unprotected") && (protection.type == "move")) moveProtection = protection.level; // set move protection level
                if ((protection.cascade != null) && (protection.type == "edit")) editProtection = "cascading"; // cascading edit protection
            });

            // Detect pending changes protection
            if (pageInfo.flagged != null) {
                if (pageInfo.flagged.protection_level != null) editProtection = "pendingChanges";
            }

            callback({"edit": editProtection, "move": moveProtection}); // done, send callback
        });
    },
    
    "open" : ()=>{ // Open page protection dialog for this page
        // Get current page protection level
        rw.pageProtect.getCurrentPageProtection(protection=>{
            let protectionInfo = rw.pageProtect.editProtectionLevels[protection.edit];

            // Create the list of levels
            let finLevelListStr = ``;
            for (let levelKey in rw.pageProtect.editProtectionLevels) {
                if (rw.pageProtect.editProtectionLevels.hasOwnProperty(levelKey)) {
                    let level = rw.pageProtect.editProtectionLevels[levelKey];
                    finLevelListStr += `
                    <!-- Add image -->
                    <img src="${level.image}" style="height: 24px;padding-right:10px;" />

                    <!-- Radiobutton -->
                    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="${levelKey}" id="${levelKey}_outer">
                        <input type="radio" id="${levelKey}" class="mdl-radio__button" name="options" value="1" ${(levelKey == protection.edit) ? `disabled style="cursor:help"` : ``}> <!-- Disable if our current -->
                        <span class="mdl-radio__label">${level.name.charAt(0).toUpperCase() + level.name.slice(1)}</span> <!-- Capitalise first letter -->
                    </label>
                    <!-- Add tooltip if disabled -->
                    ${(levelKey == protection.edit) ? `
                    <div class="mdl-tooltip mdl-tooltip--large" for="${levelKey}_outer">
                        This is the current protection level.
                    </div>
                    ` : ``} <!-- END TOOLTIP -->
                    <hr />
                    `;
                }
            }

            // Add event handlers

            // Add toast handler
            addMessageHandler("pushToast`*", m=>rw.visuals.toast.show(m.split('`')[1],false,false,2500));

            // SUBMIT HANDLER
            addMessageHandler("submitRFPP`*", m=>{
                // Get info from string in
                let requestLevel = m.split("`")[1];
                let requestProtect = rw.pageProtect.editProtectionLevels[requestLevel];
                let changeCoreReason = m.split("`")[2];
                let changeExtraInfo = m.split("`")[3];
                let requestDuration = m.split("`")[4];
                let requestType = "";
                // Distingush whether or not this is an upgrade or download request
                if (Object.keys(rw.pageProtect.editProtectionLevels).indexOf(requestLevel) > Object.keys(rw.pageProtect.editProtectionLevels).indexOf(protection.edit)) {
                    // Is upgrade request
                    requestType = "upgrade";
                } else {
                    requestType = "downgrade";
                }
                
                // Let's submit - show load dialog
                rw.ui.loadDialog.show("Submitting request...");

                // TIME TO EDIT :)

                // generate heading to add under for upgrade or downgrade
                let headingToInsertUnder = "== "+ (requestType == "upgrade" ? "Current requests for increase in protection level" : "Current requests for reduction in protection level") +" ==";
                
                // Assemble text to add per page template
                let text = `=== [[:${mw.config.get("wgRelevantPageName").replace(/_/g, ' ')}]] ===
* {{pagelinks|${mw.config.get("wgRelevantPageName").replace(/_/g, ' ')}}}
'''${(requestProtect.name == "no protection" ? "Unprotection" : requestDuration + " " + requestProtect.name)}:''' ${(changeCoreReason == "Other rationale" ? "" : changeCoreReason + `. `)}${changeExtraInfo} `+ rw.sign();

                // New req current page.
                $.getJSON(rw.wikiAPI + "?action=query&prop=revisions&titles="+ encodeURIComponent(rw.pageProtect.rfppPage) +"&rvslots=*&rvprop=content&formatversion=2&format=json", latestR=>{
                    // Grab text from latest revision of talk page
                    // Check if exists
                    let revisionWikitext = "";
                    if (!latestR.query.pages[0].missing) { // If page isn't missing, i.e exists
                        revisionWikitext = latestR.query.pages[0].revisions[0].slots.main.content;
                    } else {
                        // Bug!
                        rw.ui.loadDialog.text("ERR: RFPP page nonexist!");return; // send basic and EXIT as unlikely to be seen expect by dev
                    }
                    let wikiTxtLines = revisionWikitext.split("\n");
                    let finalTxt = "";

                    // Check if page already reported
                    if (revisionWikitext.includes(mw.config.get("wgRelevantPageName").replace(/_/g, ' '))) {
                        // Don't continue and show toast
                        rw.ui.loadDialog.close();
                        rw.visuals.toast.show("It looks like an RFPP request already exists for this page.", false, false, 5000);
                        return;
                    }

                    // Now submit under heading
                    // Locate where the current section is and add ours
                    let locationOfLastLine = wikiTxtLines.indexOf(headingToInsertUnder) + 1; // in case of date heading w nothing under it
                    for (let i = wikiTxtLines.indexOf(headingToInsertUnder) + 1; i < wikiTxtLines.length; i++) {
                        if (wikiTxtLines[i].startsWith("== ")) { 
                            // New section
                            locationOfLastLine = i - 1; // the line above is therefore the last
                            console.log("exiting loop: " +wikiTxtLines[locationOfLastLine]);
                            break; // exit the loop
                        } else if (i == wikiTxtLines.length - 1) {
                            // End of page, let's break and set location of last line.
                            locationOfLastLine = i;
                            break; // exit loop
                        }
                    }
                    
                    if (locationOfLastLine == wikiTxtLines.length - 1) {
                        // To prevent to end notices squishing against eachother
                        // Same as without, but we just include the date string at bottom of page
                        wikiTxtLines.push(["\n" + text]);
                    } else {
                        wikiTxtLines.splice(locationOfLastLine, 0, ["\n" + text]); // Add notice to array at correct position. Note the "" at the start is for a newline to seperate from prev content
                    }

                    // Process final string
                    wikiTxtLines.forEach(ln => finalTxt = finalTxt + ln + "\n"); // Remap to lines
                    console.log(finalTxt);

                    // Push edit using CSRF token
                    $.post(rw.wikiAPI, {
                        "action": "edit",
                        "format": "json",
                        "token" : mw.user.tokens.get("csrfToken"),
                        "title" : rw.pageProtect.rfppPage,
                        "summary" : `Requesting protection change for [[${mw.config.get("wgRelevantPageName").replace(/_/g, ' ')}]] [[w:en:WP:RW|(RW ${rw.version})]]`, // summary sign here
                        "text": finalTxt,
                        "tags" : ((rw.wikiID == "enwiki") ? "RedWarn" : null) // Only add tags if on english wikipedia
                    }).done(dt => {
                        // We done. Check for errors, then callback appropriately
                        if (!dt.edit) {
                            // Error occured or other issue
                            console.error(dt);
                            rw.ui.loadDialog.close();
                            rw.visuals.toast.show("Sorry, there was an error. See the console for more info. Your RFPP has not been sent.");
                            // Reshow dialog
                            dialogEngine.dialog.showModal();
                        } else {
                            // Success! 
                            rw.ui.loadDialog.close();
                            rw.visuals.toast.show("RFPP requested.");
                        }
                    });
                    
                    
                });
            });

            // Open dialog
            dialogEngine.create(mdlContainers.generateContainer(`
            <!-- Style for title preview -->
<h2 style="font-weight: 200;font-size:45px;line-height: 48px;">Manage Page Protection</h2>
<span style="
font-size: 32px;
font-weight: 200;
font-family: Roboto;
">${protectionInfo.title}</span>
<h4>Request a level</h4>
<div style="display: flex; height:400px;">
    <!-- WRAPPER-->

    <!-- LEFT SIDE SELECT LEVEL -->
    <div style="flex: 0 0 45%;padding-right: 10px;">
        <span id="radioContainer">
            ${finLevelListStr} <!-- Add fin level string for radiobuttons-->
        </span>
    </div>

    <!-- RIGHT SIDE EXTRA INFO -->
    <div style="flex:1;">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select">
            <input type="text" value="" class="mdl-textfield__input" id="reasonRequestSelector" readonly>
            <input type="hidden" value="" name="reasonRequestSelector">
            <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
            <label for="reasonRequestSelector" class="mdl-textfield__label">Reason</label>
            <ul for="reasonRequestSelector" class="mdl-menu mdl-menu--bottom-left mdl-js-menu" style="height:300px; overflow:auto;">
                <li class="mdl-menu__item">Persistent Vandalism</li>
                <li class="mdl-menu__item">Persistent Disruptive Editing</li>
                <li class="mdl-menu__item">Content Dispute/Edit Warring</li>
                <li class="mdl-menu__item">BLP Policy Violations</li>
                <li class="mdl-menu__item">Sockpuppetry</li>
                <li class="mdl-menu__item">User Talk Of Blocked User</li>
                <li class="mdl-menu__item">Highly Visible Template</li>
                <li class="mdl-menu__item">Arbitration Enforcement</li>
                <li class="mdl-menu__item" id="RWRFPPotherRationale">Other rationale</li>
            </ul>
        </div>

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="extraInfoTxtBox">
            <label class="mdl-textfield__label" for="extraInfoTxtBox">Additional Info</label>
        </div>
        <br/>
        <span>
            <span style="
            padding-right: 10px;
            font-weight: 500;
            font-family: Roboto;
            ">Protection duration:</span>
            <!-- Temporary protection -->
            <label id="tempTimeLbl" class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="tempTime" style="padding-right: 10;">
                <input type="radio" id="tempTime" class="mdl-radio__button" name="timeLvl" value="Temporary" checked>
                <span class="mdl-radio__label"><span class="material-icons">timer</span></span>
            </label>
            <div class="mdl-tooltip mdl-tooltip--large" for="tempTimeLbl">
                Temporary
            </div>

            <!-- Indefinite protection -->
            <label id="indefTimeLbl" class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="indefTime" style="padding-right: 10;">
                <input type="radio" id="indefTime" class="mdl-radio__button" name="timeLvl" value="Indefinite">
                <span class="mdl-radio__label"><span class="material-icons">all_inclusive</span></span>
            </label>
            <div class="mdl-tooltip mdl-tooltip--large" for="indefTimeLbl">
                Indefinite
            </div>
        </span>
        <!-- Disclaimer text -->
        <p style="color: #737373;font-family: Roboto;font-size: small;padding-top:10px;">
            You should not consider requesting page protection as a method for continuing an argument from elsewhere nor as a venue for starting a
            new discussion regarding article content. If a request contains excessive argument, appears to be intended to resolve a content dispute,
            includes personal attacks or uncivil comments, or has any other unrelated discussion, it will be removed and no action will be taken.
        </p>
    </div>

</div>

<!-- BUTTONS -->
<span style="float:right;">
    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onclick="window.parent.postMessage('closeDialog', '*');">
        CANCEL
    </button>
    <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="submitRequest();">
        SUBMIT REQUEST
    </button>
</span>

<script>
        // Handle incoming data
    window.onmessage = function(e){
        if (e.data.action == 'parseWikiTxt') {
            $("#preview").html(e.data.result); // Set preview to content
        }
    };

    function pushToast(text) {window.parent.postMessage('pushToast\\\`' + text);} // Push toast to host

    function submitRequest() {
        // Send our request back to the top, after making sure everything is ok
        if ($("#radioContainer").find("input:checked").length > 0) { // Ensure a value is checked
            let requestLevel = $("#radioContainer").find("input:checked").attr("id"); // get checked ID
            let changeCoreReason = $("#reasonRequestSelector").val(); // get core reason for change
            let changeExtraInfo = $("#extraInfoTxtBox").val(); // ger extra info
            let requestDuration = (($("#indefTime:checked").length > 0) ? "Indefinite" : "Temporary"); // indef protection

            if (!changeCoreReason) {pushToast("Please select a reason");return;} // if no core reason, toast and EXIT.

            // let's continue and push upstairs
            window.parent.postMessage('submitRFPP\`' + requestLevel + '\`' + changeCoreReason + '\`' + changeExtraInfo + '\`' + requestDuration);

            // We done here - let's close
            window.parent.postMessage('closeDialog', '*');
        } else {
            // No level checked
            pushToast("Please select a protection level.");
        }
    }
    // Egg
    $("#RWRFPPotherRationale").keydown(e=>{if ("R"==e.key && confirm("You are about to open an external link to YouTube.com - continue?"))Object.assign(document.createElement("a"),{target:"_blank",href:"https://www.youtube.com/watch?v=wmYT79tPvLg"}).click()});
</script>
            `, 600, 630)).showModal();
        });
    }
};
$( document ).ready( function () {
	// Initialize RedWarn once the page is loaded.
	try {
		initRW();
	} catch (err) {
		mw.notify("Sorry, an error occured while loading RedWarn.");
		console.error(err);
	}
});
// </nowiki>
