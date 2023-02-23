const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteBiIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler,
    },
    {
        method : 'GET',
        path : '/notes/{id}',
        handler : getNoteByIdHandler,
    },
    {
        method : 'GET',
        path : '/notes',
        handler : getAllNotesHandler,
    },
    {
        method : 'PUT',
        path : '/notes/{id}',
        handler : editNoteBiIdHandler,
    },
    {
        method : 'DELETE',
        path : '/notes/{id}',
        handler : deleteNoteByIdHandler,
    },
];

module.exports = routes;