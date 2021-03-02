function up()
{
    const num = document.getElementById("number");
    num.value = parseInt(num.value) + 1;
}

function down()
{
    const num = document.getElementById("number");
    num.value = parseInt(num.value) - 1;
}