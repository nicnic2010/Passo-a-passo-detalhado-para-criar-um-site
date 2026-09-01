/* =========================
   QUIZ
========================= */


const respostas =
    document.querySelectorAll(
        ".resposta"
    );


const resultado =
    document.querySelector(
        "#resultado"
    );


respostas.forEach(
    function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const resposta =
                    botao.dataset.resposta;


                if (
                    resposta === "certa"
                ) {

                    resultado.textContent =
                        "🎉 Correto! O style.css é responsável pela aparência do site.";

                    resultado.style.color =
                        "green";

                } else {

                    resultado.textContent =
                        "❌ Ainda não. Tente novamente!";

                    resultado.style.color =
                        "#b32b5a";

                }

            }
        );

    }
);


/* =========================
   CHECKLIST
========================= */


const checks =
    document.querySelectorAll(
        ".check"
    );


checks.forEach(
    function (check) {

        check.addEventListener(
            "change",
            function () {

                if (
                    check.checked
                ) {

                    check.parentElement.style.background =
                        "#e4f8e8";

                } else {

                    check.parentElement.style.background =
                        "white";

                }

            }
        );

    }
);
