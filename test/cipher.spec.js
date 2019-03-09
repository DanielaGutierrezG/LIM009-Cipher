describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33), "HIJKLMNOPQRSTUVWXYZABCDEFG") ;
    });

    it('debería retornar "NCDQTCVQTKC" para "LABORATORIA" con offset 2', () => {
    assert.equal(cipher.encode("LABORATORIA",2), "NCDQTCVQTKC") ;
});

    it('debería retornar "MYNOKB" para "CODEAR" con offset 10', () => {
    assert.equal(cipher.encode("CODEAR",10), "MYNOKB") ;
});
});

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "LABORATORIA" para "NCDQTCVQTKC" con offset 2', () => {
    assert.equal(cipher.decode("NCDQTCVQTKC",2), "LABORATORIA");
});

    it('debería retornar "CODEAR" para "MYNOKB" con offset 10', () => {
    assert.equal(cipher.decode("MYNOKB",10), "CODEAR");
});
});
});