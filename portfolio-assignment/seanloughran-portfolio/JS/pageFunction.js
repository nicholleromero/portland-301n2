(function(module) {

  var projectView = {};

  //Functionality for home and about me tabs.
  projectView.tabNavigation = function() {
    $('nav').on('click','li', function(){
      $('.tab-content').hide();
      $('body').find('[id="'+$(this).attr('data-content')+'"]').show();
    });

    $('nav .tab:first').click();
  };

  //Functionality for show more/show less links on description.
  projectView.showMoreDescription = function() {
    $('.project_description *:nth-of-type(n+2)').hide();

    $('#projects').on('click', '.read-more', function(e) {
      e.preventDefault();
      $(this).parent().find('p:nth-of-type(n+2)').fadeToggle();

      var html = $('.read-more').html();
      console.log(html);

      if (html == 'Read More') {
        $('.read-more').html('Read Less');
        console.log('Works');
      } else {
        $('.read-more').html('Read More');
      }
    });

  };


  projectView.initPrimaryPage = function(){
    //Goes through project Array and appends them to the 'main' element
    Project.all.forEach(function(a){
      $('main').append(a.addProject(a));
    });

    projectView.tabNavigation();
    projectView.showMoreDescription();
  };

  module.projectView = projectView;
})(window);
