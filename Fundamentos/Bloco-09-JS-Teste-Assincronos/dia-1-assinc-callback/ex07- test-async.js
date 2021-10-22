const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
        // console.log(callback);
    }, 500);
};

// const frase = (string) => {
//     return console.log(string);
// }

// uppercase('ihhaaa',frase);

it('Verifica a função uppercase', (done) => {
    uppercase('teste', (str) => {
        try {
            expect(str).toBe('TESTE');
            done();
        } catch (error) {
            done(error);
        }
    })
});

