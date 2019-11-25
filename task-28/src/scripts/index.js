'use strict';

import $ from 'jquery';
import '../css/style.css';
import Chat from "./Chat";

const talk = new Chat({
    onMessage: addLog,
})

const $log = $('#log');
const $input = $('#message');
const name = 'Vitalii';

$('#btn-send').on('click', sendMessage);

function addLog({type,name,message}) {
    $log.append(
        `<div class="${type}">${name}: ${message}</div>`
    );
}

function sendMessage() {
    const message = $input.val();
    talk.message(name, message)
}

talk.onOpen(name);