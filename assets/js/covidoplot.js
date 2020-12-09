$(document).ready(function(){

    $(".choice img").after(`
    <nav class="choice-switch btn-group" role="group">
      <button type="button" class="btn btn-primary active">alles</button>
      <button type="button" class="btn btn-primary">zoom</button>
    </nav>
    `);

    $(".choice-switch .btn").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

});
