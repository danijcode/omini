
import validadores from '../utils/validate';
test("CPF Valido.", () => {
  expect(validadores.validaCPF('05269792087')).toBe(true);
});

test("CPF invalido.", () => {
    expect(validadores.validaCPF('0000000000')).toBe(false);
});
test("Quantidade de caracteres permitida.", () => {
    expect(validadores.validaTamanhoNome('Daniel Santos Souza')).toBe(true);
});

test("Quantidade de caracteres não permitida.", () => {
    expect(validadores.validaTamanhoNome('Daniel Santos Souza Souza Souza Souza')).toBe(false);
});
