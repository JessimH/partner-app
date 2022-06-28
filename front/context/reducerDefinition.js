const reducersDefinition = [
    {
        type: 'userAuth',
        isPersistent: true,
        initialState: null,
    },
    {
        type: 'currentUser',
        isPersistent: true,
        initialState: null,
    },
    {
        type: 'openFirstTime',
        isPersistent: true,
        initialState: false,
    },
];

export default reducersDefinition;